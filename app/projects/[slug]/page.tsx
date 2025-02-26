import { getProjectFromSlug } from '@/lib/projects';
import { compileMDX } from 'next-mdx-remote/rsc';
import ClientPage from "./client-page";

export default async function ProjectPage({ 
    params 
}: { 
    params: { slug: string } 
}) {
    const project = await getProjectFromSlug(params.slug);
    const { content } = await compileMDX({
        source: project.content,
        options: { parseFrontmatter: true }
    });

    return <ClientPage project={project} content={content} />;
}
