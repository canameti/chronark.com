import React from 'react';
import { getProjectFromSlug } from '@/lib/projects';
import { Metadata } from 'next';

interface GenerateMetadataProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
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