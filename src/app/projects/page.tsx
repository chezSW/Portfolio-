import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FirstRoboticsDisclosure } from "@/components/first-robotics-story";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected mechanical design, thermal analysis, manufacturing, and robotics work by Chase Norvell.",
  alternates: { canonical: "/projects" },
};

function ProjectCard({
  project,
  label,
  featured = false,
}: {
  project: (typeof projects)[number];
  label: string;
  featured?: boolean;
}) {
  const image = project.media.find((item) => item.public);
  return (
    <article className={`project-index-card${featured ? " project-index-card--featured" : ""}`}>
      {image ? (
        <Link className="project-index-card__image" href={`/projects/${project.slug}`} aria-label={`Read ${project.title}`}>
          <Image src={image.src} alt={image.alt} fill loading={featured ? "eager" : "lazy"} sizes={featured ? "(max-width: 760px) 100vw, 80vw" : "(max-width: 760px) 100vw, 50vw"} />
        </Link>
      ) : null}
      <div className="project-index-card__meta">
        <span>{label}</span>
        <time>{project.date}</time>
      </div>
      <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
      <p className="project-index-card__summary">{project.summary}</p>
    </article>
  );
}

export default function ProjectsPage() {
  const powerDevice = projects.find((project) => project.slug === "power-device-corporation")!;
  const firstRobotics = projects.find((project) => project.slug === "first-robotics")!;
  const mesaFsd = projects.find((project) => project.slug === "autonomous-kart-packaging")!;
  const eagleScout = projects.find((project) => project.slug === "rolling-library-bookshelf")!;
  const lockingMecanum = projects.find((project) => project.slug === "locking-mecanum-wheel")!;

  return (
    <div className="project-index shell">
      <header className="project-index__intro">
        <p className="resume-kicker">Mechanical Engineering Portfolio</p>
        <h1>Selected work</h1>
        <span>The clearest examples of how I work through interfaces, analysis, iteration, drawings, and real hardware.</span>
      </header>

      <section aria-labelledby="professional-title">
        <div className="project-index__section-heading"><p>01</p><h2 id="professional-title">Professional experience</h2></div>
        <div className="project-index__category-grid project-index__category-grid--spotlight">
          <ProjectCard project={powerDevice} label="Mechanical engineering internship" featured />
        </div>
      </section>

      <section aria-labelledby="robotics-title">
        <div className="project-index__section-heading"><p>02</p><h2 id="robotics-title">Robotics leadership</h2></div>
        <div className="project-index__category-grid">
          <FirstRoboticsDisclosure project={firstRobotics} />
        </div>
      </section>

      <section aria-labelledby="design-title">
        <div className="project-index__section-heading"><p>03</p><h2 id="design-title">Vehicle systems &amp; independent design</h2></div>
        <div className="project-index__category-grid project-index__category-grid--pair">
          <ProjectCard project={mesaFsd} label="Mesa FSD · Student engineering" />
          <ProjectCard project={lockingMecanum} label="Independent mechanism concept" />
        </div>
      </section>

      <section aria-labelledby="service-title">
        <div className="project-index__section-heading"><p>04</p><h2 id="service-title">Service &amp; leadership</h2></div>
        <div className="project-index__category-grid project-index__category-grid--single">
          <ProjectCard project={eagleScout} label="Eagle Scout service project" />
        </div>
      </section>

      <p className="project-index__disclosure">Professional work shown with permission. Proprietary details, source files, and identifying information have been omitted or simplified.</p>
    </div>
  );
}
