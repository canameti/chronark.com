import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { unstable_cache } from 'next/cache';

const redis = Redis.fromEnv();

// Cache the view counts for 1 hour
const getProjectViews = unstable_cache(
  async () => {
    try {
      const views = await redis.mget<number[]>(
        ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
      );
      return views ?? new Array(allProjects.length).fill(0);
    } catch (error) {
      console.error('Failed to fetch Redis views:', error);
      return new Array(allProjects.length).fill(0);
    }
  },
  ['project-views'],
  {
    revalidate: 3600, // Cache for 1 hour
    tags: ['project-views']
  }
);

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = await getProjectViews();
  
  const viewsRecord = views.reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "thecafeteria")!;
  const top2 = allProjects.find((project) => project.slug === "decisiontools")!;
  // const top4 = allProjects.find((project) => project.slug === "thecafeteria")!;
  const top3 = allProjects.find((project) => project.slug === "storyline")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== top3.slug &&
        project.slug !== top2.slug &&
        project.slug !== featured.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="text-center mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Projects i currently working on or projects i worked for.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          { <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={viewsRecord[project.slug] ?? 0} />
              </Card>
            ))}
          </div>}
          { <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={viewsRecord[project.slug] ?? 0} />
              </Card>
            ))}
          </div>}
          { <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[featured].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={viewsRecord[project.slug] ?? 0} />
              </Card>
            ))}
          </div>}
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="px-6 pt-32 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-0">
          <div className="text-center mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Partner
            </h2>
            <p className="mt-4 text-zinc-400">
              Partnerships and collaborations that contribute to my projects and goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
