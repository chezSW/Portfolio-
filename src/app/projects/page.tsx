import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Mechanical design, thermal analysis, manufacturing, aerospace hardware, and robotics work by Chase Norvell.",
  alternates: { canonical: "/projects" },
};

function ArchiveCard({ project, lead = false }: { project: (typeof projects)[number]; lead?: boolean }) {
  const image = project.media.find((item) => item.public);
  return (
    <article className={`reference-project-card${lead ? " reference-project-card--lead" : ""}`}>
      <Link className="reference-project-card__visual" href={`/projects/${project.slug}`} aria-label={`Read ${project.title}`}>
        {image ? <Image src={image.src} alt={image.alt} fill loading={lead ? "eager" : "lazy"} sizes={lead ? "(max-width: 760px) 100vw, 1100px" : "(max-width: 760px) 100vw, 550px"} /> : null}
      </Link>
      <div className="reference-project-card__body">
        <span className="reference-project-card__date">{project.date}</span>
        <h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2>
        <p>{project.summary}</p>
        <small>Skills</small>
        <div className="reference-project-card__skills">
          {project.tools.slice(0, 6).map((tool) => <span key={tool}>{tool}</span>)}
        </div>
        <Link className="reference-button reference-button--secondary" href={`/projects/${project.slug}`}>Learn more <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="reference-archive shell">
      <header className="reference-archive__intro">
        <p>Portfolio</p>
        <h1>All Projects</h1>
        <span>Here’s a focused archive of the hardware, analysis, manufacturing, and robotics work I’ve contributed to.</span>
      </header>
      <div className="reference-project-grid reference-project-grid--archive">
        {projects.map((project, index) => <ArchiveCard key={project.slug} project={project} lead={index === 0} />)}
      </div>
      <p className="reference-disclosure">Professional work is shown with permission. Proprietary details, source files, and identifying information have been omitted or simplified.</p>
    </div>
  );
}
