import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { PowerDeviceCaseStudy } from "@/components/power-device-case-study";
import { FirstRoboticsCaseStudy } from "@/components/first-robotics-story";
import { siteConfig } from "@/config/site";
import { getProject, projects } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const leadMedia = project.media.find((item) => item.public);
  const images = leadMedia
    ? [{ url: new URL(leadMedia.src, siteConfig.url).toString(), alt: leadMedia.alt }]
    : [];
  const title = `${project.title} | ${siteConfig.name}`;
  const url = new URL(`/projects/${project.slug}`, siteConfig.url).toString();

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description: project.summary,
      url,
      images,
    },
    twitter: {
      card: leadMedia ? "summary_large_image" : "summary",
      title,
      description: project.summary,
      images,
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (project.slug === "power-device-corporation") {
    return <PowerDeviceCaseStudy project={project} nextProject={nextProject} />;
  }

  if (project.slug === "first-robotics") {
    return <FirstRoboticsCaseStudy project={project} nextProject={nextProject} />;
  }

  return <ProjectCaseStudy project={project} nextProject={nextProject} />;
}
