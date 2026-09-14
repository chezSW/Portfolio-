import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import type { ProjectMedia, ProjectVideo } from "@/content/projects/types";

function ProjectEvidence({ media, video }: { media: ProjectMedia[]; video?: ProjectVideo }) {
  const images = media.filter((item) => item.public);
  const publicVideo = video?.public ? video : undefined;
  if (!images.length && !publicVideo) return null;

  return (
    <div className={`simple-project-images ${images.length + (publicVideo ? 1 : 0) > 1 ? "simple-project-images--pair" : ""}`}>
      {images.map((item) => (
        <figure key={item.src}>
          <div className={`simple-project-image simple-project-image--${item.aspect ?? "wide"}`}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 760px" />
          </div>
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      ))}
      {publicVideo ? (
        <figure>
          <div className="simple-project-video">
            <video
              src={publicVideo.src}
              poster={publicVideo.poster}
              aria-label={publicVideo.label}
              controls
              muted
              playsInline
              preload="metadata"
            />
          </div>
          <figcaption>{publicVideo.caption}</figcaption>
        </figure>
      ) : null}
    </div>
  );
}

export function ProjectCaseStudy({ project, nextProject }: { project: Project; nextProject?: Project }) {
  const leadMedia = project.media.find((item) => item.public);
  const professional = project.categories.includes("Professional");

  return (
    <article className="simple-project-page shell">
      <header className="simple-project-hero">
        <Link className="simple-back" href="/projects">← Projects</Link>
        <p className="simple-label">{project.categories[0]} · {project.date}</p>
        <h1>{project.title}</h1>
        <p className="simple-project-hero__subtitle">{project.subtitle}</p>
        <p className="simple-project-hero__summary">{project.summary}</p>
        <dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Organization</dt><dd>{project.organization}</dd></div><div><dt>Focus</dt><dd>{project.focus}</dd></div></dl>
      </header>

      {leadMedia ? (
        <figure className="simple-project-lead"><div><Image src={leadMedia.src} alt={leadMedia.alt} fill loading="eager" sizes="(max-width: 760px) 100vw, 1080px" /></div>{leadMedia.caption ? <figcaption>{leadMedia.caption}</figcaption> : null}</figure>
      ) : (
        <div className="simple-private-lead"><span>{project.system}</span><small>{professional ? "Professional imagery held private pending approval" : "Project image pending"}</small></div>
      )}

      <div className="simple-project-sections">
        {project.sections.map((section) => (
          <section className={`simple-project-section simple-project-section--${section.layout ?? "text"}`} key={section.title}>
            <div className="simple-project-section__text">
              {section.eyebrow ? <p className="simple-label">{section.eyebrow}</p> : null}
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets?.length ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
              {section.note ? <aside>{section.note}</aside> : null}
            </div>
            {section.media || section.video ? <ProjectEvidence media={section.media ?? []} video={section.video} /> : null}
          </section>
        ))}
      </div>

      <p className="simple-tools"><strong>Tools:</strong> {project.tools.join(" · ")}</p>
      <nav className="simple-project-nav"><Link href="/projects">← All projects</Link>{nextProject ? <Link href={`/projects/${nextProject.slug}`}>Next: {nextProject.title} →</Link> : null}</nav>
    </article>
  );
}
