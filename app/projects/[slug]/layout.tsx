import React from 'react';
import { getProjectFromSlug } from '@/lib/projects';

export async function generateMetadata({ params }) {
    const project = await getProjectFromSlug(params.slug);
    return {
        title: `${project.title} | Canameti`,
        description: project.description,
    };
}

export default async function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
} 