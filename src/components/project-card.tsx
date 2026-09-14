import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export type ProjectCardVariant = "wide" | "standard" | "portrait" | "compact";

export function ProjectCard({
  project,
  variant = "standard",
  priority = false,
  showSummary = false,
}: {
  project: Project;
  variant?: ProjectCardVariant;
  priority?: boolean;
  showSummary?: boolean;
}) {
  const leadMedia = project.media.find((item) => item.public);

  return (
    <article className={`project-entry project-entry--${variant}`}>
      <Link className="project-entry__visual-link" href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
        {leadMedia ? (
          <div className="project-entry__image">
            <Image
              src={leadMedia.src}
              alt=""
              fill
              priority={priority}
              sizes={variant === "wide" ? "(max-width: 860px) 100vw, 80vw" : "(max-width: 860px) 100vw, 50vw"}
            />
          </div>
        ) : (
          <div className={`project-entry__placeholder project-entry__placeholder--${project.visual}`}>
            <span>Professional work</span>
            <small>Source media held private</small>
          </div>
        )}
      </Link>
      <div className="project-entry__body">
        <span className="project-entry__date">{project.categories[0]} · {project.date}</span>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        {showSummary ? <p>{project.summary}</p> : null}
        <Link className="project-entry__arrow" href={`/projects/${project.slug}`} aria-label={`Read ${project.title}`}>
          ↗
        </Link>
      </div>
    </article>
  );
}
