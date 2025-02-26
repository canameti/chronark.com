import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "your-smtp-host", // e.g., "smtp.gmail.com"
    port: 587,
    secure: false,
    auth: {
        user: "contact@canameti.de",
        pass: process.env.EMAIL_PASSWORD
    },
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, message, package: selectedPackage } = body;

        const mailOptions = {
            from: 'contact@canameti.de',
            to: 'contact@canameti.de',
            subject: `New Website Inquiry - ${selectedPackage || 'General'}`,
            text: `
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Selected Package: ${selectedPackage || 'Not specified'}

Message:
${message}
            `,
            html: `
<h2>New Website Inquiry</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company || 'Not provided'}</p>
<p><strong>Selected Package:</strong> ${selectedPackage || 'Not specified'}</p>
<h3>Message:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
} 