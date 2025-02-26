import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface ProjectData {
    title: string;
    description: string;
    date: string;
    url?: string;
    repository?: string;
    published: boolean;
    content: string;
    slug: string;
    discontinued?: boolean;
    image?: string;
    techBadges?: string[];
}

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function getProjectFromSlug(slug: string): Promise<ProjectData> {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        ...(data as Omit<ProjectData, 'content' | 'slug'>),
        slug,
        content,
        discontinued: data.title.toLowerCase().includes('discontinued'),
        image: data.image || getFirstImageFromContent(content),
    };
}

function getFirstImageFromContent(content: string): string | undefined {
    const match = content.match(/!\[.*?\]\((.*?)\)/);
    return match ? match[1] : undefined;
} 