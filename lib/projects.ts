import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function getProjectFromSlug(slug: string) {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        ...data,
        slug,
        content,
        discontinued: data.title.toLowerCase().includes('discontinued'),
        image: data.image || getFirstImageFromContent(content),
    };
}

function getFirstImageFromContent(content: string) {
    const match = content.match(/!\[.*?\]\((.*?)\)/);
    return match ? match[1] : null;
} 