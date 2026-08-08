import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectVisual } from "./project-visual";
import { ToolTags } from "./tool-tags";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const leadMedia = project.media.find((item) => item.public);

  return (
    <article className={`project-card${priority ? " project-card--priority" : ""}`}>
      <Link className="project-card__visual-link" href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
        {leadMedia ? (
          <div className="project-card__image">
            <Image src={leadMedia.src} alt="" fill sizes="(max-width: 860px) 100vw, 50vw" />
          </div>
        ) : (
          <ProjectVisual visual={project.visual} label={project.system} compact />
        )}
      </Link>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.categories[0]}</span>
          <span>{project.date}</span>
        </div>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <ToolTags items={project.tools.slice(0, 2)} />
        <Link className="text-link" href={`/projects/${project.slug}`}>
          View case study <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
