import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { ContactCta } from "./contact-cta";
import { ImageGallery } from "./image-gallery";
import { ProjectVisual } from "./project-visual";
import { ThermalComparison } from "./thermal-comparison";
import { ToolTags } from "./tool-tags";

export function ProjectCaseStudy({ project, nextProject }: { project: Project; nextProject?: Project }) {
  const leadMedia = project.media.find((item) => item.public);

  return (
    <>
      <article className="case-study">
        <div className="case-hero shell">
          <div className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/projects">Projects</Link><span aria-hidden="true">/</span><span>{project.title}</span>
          </div>
          <div className="case-hero__grid">
            <div className="case-hero__copy">
              <p className="eyebrow">{project.categories.join(" / ")}</p>
              <h1>{project.title}</h1>
              <p className="case-hero__subtitle">{project.subtitle}</p>
              <p className="case-hero__summary">{project.summary}</p>
              <ToolTags items={project.tools} />
            </div>
            {leadMedia ? (
              <figure className="case-hero__image">
                <Image src={leadMedia.src} alt={leadMedia.alt} fill priority sizes="(max-width: 1080px) 100vw, 50vw" />
                {leadMedia.caption ? <figcaption>{leadMedia.caption}</figcaption> : null}
              </figure>
            ) : (
              <ProjectVisual visual={project.visual} label={project.system} />
            )}
          </div>
          <dl className="case-meta">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Focus</dt><dd>{project.focus}</dd></div>
            <div><dt>System</dt><dd>{project.system}</dd></div>
            <div><dt>Status</dt><dd>{project.status}</dd></div>
            {project.keyResult ? <div className="case-meta__result"><dt>Key result</dt><dd>{project.keyResult}</dd></div> : null}
          </dl>
          {project.categories.includes("Professional") ? (
            <p className="nda-note"><span aria-hidden="true">●</span> Selected work shown using NDA-compliant imagery and descriptions.</p>
          ) : null}
        </div>

        {project.metrics?.length ? (
          <section className="metrics shell" aria-label="Project metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                {metric.detail ? <p>{metric.detail}</p> : null}
              </div>
            ))}
          </section>
        ) : null}

        <ImageGallery media={project.media} />

        {project.thermalComparison ? <ThermalComparison comparison={project.thermalComparison} /> : null}

        {project.process?.length ? (
          <section className="process-section shell" aria-labelledby="process-title">
            <div className="section-heading">
              <p className="eyebrow">Working sequence</p>
              <h2 id="process-title">Engineering process</h2>
            </div>
            <ol className="process-rail">
              {project.process.map((step, index) => (
                <li key={step}><span>{(index + 1).toString().padStart(2, "0")}</span>{step}</li>
              ))}
            </ol>
          </section>
        ) : null}

        <div className="case-sections shell">
          {project.sections.map((section) => (
            <section key={section.title} className="case-section">
              <div>
                {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
                <h2>{section.title}</h2>
              </div>
              <div className="case-section__body">
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets?.length ? (
                  <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                ) : null}
                {section.note ? <aside>{section.note}</aside> : null}
              </div>
            </section>
          ))}
        </div>

        <nav className="case-nav shell" aria-label="Project navigation">
          <Link href="/projects">← All projects</Link>
          {nextProject ? <Link href={`/projects/${nextProject.slug}`}>Next: {nextProject.title} →</Link> : null}
        </nav>
      </article>
      <ContactCta />
    </>
  );
}
