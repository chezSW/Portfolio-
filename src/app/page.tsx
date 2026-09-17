import Image from "next/image";
import Link from "next/link";
import { DraggableToolRail } from "@/components/draggable-tool-rail";
import { siteConfig } from "@/config/site";
import { education } from "@/content/education";
import { projects } from "@/content/projects";

const featuredSlugs = [
  "power-device-corporation",
  "first-robotics",
  "autonomous-kart-packaging",
  "locking-mecanum-wheel",
];

const featuredWork = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined);

const experience = [
  {
    date: "Jun 2025 — Aug 2026",
    role: "Mechanical Engineering Intern",
    organization: "Power Device Corporation",
    detail: "Designed and analyzed mechanical packaging, heat-transfer hardware, drawings, and more than 20 production-fixture configurations for aerospace electronics.",
    href: "/projects/power-device-corporation",
  },
  {
    date: "Mar 2026 — Present",
    role: "Electronics Packaging Lead",
    organization: "Mesa FSD",
    detail: "Leading enclosure, mounting, sealing, serviceability, and wire-routing work for the electrical and autonomy hardware on an autonomous kart.",
    href: "/projects/autonomous-kart-packaging",
  },
  {
    date: "2014 — 2024",
    role: "Mechanical Designer & Team Lead",
    organization: "FIRST Robotics",
    detail: "Progressed from FLL and hands-on fabrication to complete mechanisms, CAD ownership, cross-functional leadership, and FRC integration.",
    href: "/projects/first-robotics",
  },
];

const toolGroups = [
  "SolidWorks",
  "ANSYS Mechanical",
  "Fusion 360",
  "GD&T",
  "CNC Machining",
  "FDM + SLA",
  "Python",
  "Robotics",
];

function FeaturedProject({ project, lead = false }: { project: (typeof projects)[number]; lead?: boolean }) {
  const image = project.media.find((item) => item.public);
  return (
    <article className={`reference-project-card${lead ? " reference-project-card--lead" : ""}`}>
      <Link className="reference-project-card__visual" href={`/projects/${project.slug}`} aria-label={`Read ${project.title}`}>
        {image ? <Image src={image.src} alt={image.alt} fill sizes={lead ? "(max-width: 760px) 100vw, 1100px" : "(max-width: 760px) 100vw, 550px"} /> : null}
      </Link>
      <div className="reference-project-card__body">
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <div className="reference-project-card__skills" aria-label="Skills">
          {project.tools.slice(0, 5).map((tool) => <span key={tool}>{tool}</span>)}
        </div>
        <Link className="reference-button reference-button--secondary" href={`/projects/${project.slug}`}>Read more <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="reference-home">
      <section className="reference-hero shell" id="home">
        <div className="reference-hero__copy">
          <h1>Mechanical design,<br />made <span>real.</span></h1>
          <p>I’m Chase Norvell—a mechanical engineering student in San Diego. I work across electronics packaging, thermal analysis, manufacturing, and robotics, with a focus on designs that have to be built, assembled, and used.</p>
          <p className="reference-location"><span aria-hidden="true">⌖</span> San Diego, California, USA</p>
          <div className="reference-actions">
            <Link className="reference-button" href="/resume"><span aria-hidden="true">↓</span> View resume</Link>
            {siteConfig.linkedIn ? <a className="reference-icon-button" href={siteConfig.linkedIn} aria-label="LinkedIn">in</a> : null}
            {siteConfig.email ? <a className="reference-icon-button" href={`mailto:${siteConfig.email}`} aria-label="Email">@</a> : null}
          </div>
        </div>
        <figure className="reference-hero__portrait">
          <Image src="/images/about/chase-norvell.jpg" alt="Chase Norvell" fill priority sizes="(max-width: 760px) 100vw, 42vw" />
        </figure>
      </section>

      <section className="reference-tools" aria-label="Tools and technologies">
        <p>Tools &amp; Technologies</p>
        <DraggableToolRail items={toolGroups} />
      </section>

      <section className="reference-section shell" id="projects">
        <header className="reference-section__heading">
          <p>Projects</p>
          <h2>Featured Work</h2>
          <span>Mechanical systems, aerospace hardware, autonomous vehicles, and robots—designed with the full build process in mind.</span>
        </header>
        <div className="reference-project-grid">
          {featuredWork.map((project, index) => <FeaturedProject key={project.slug} project={project} lead={index === 0} />)}
        </div>
        <Link className="reference-archive-link" href="/projects">Browse the full archive <span aria-hidden="true">→</span></Link>
      </section>

      <section className="reference-section shell" id="experience">
        <header className="reference-section__heading">
          <p>Work &amp; Experience</p>
          <h2>Engineering Experience</h2>
        </header>
        <div className="reference-experience">
          {experience.map((item) => (
            <article key={item.organization}>
              <time>{item.date}</time>
              <div>
                <h3>{item.role}</h3>
                <strong>{item.organization}</strong>
                <p>{item.detail}</p>
                <Link href={item.href}>Read more <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reference-section shell" id="education">
        <header className="reference-section__heading">
          <p>Academic Background</p>
          <h2>Education &amp; Honors</h2>
        </header>
        <div className="reference-education">
          <div className="reference-recognition">
            <p>Recognition</p>
            <div><strong>{education.distinction}</strong><span>Academic recognition</span></div>
            <div><strong>{education.gpa}</strong><span>Current GPA</span></div>
          </div>
          <article>
            <span>Mechanical Engineering · {education.date}</span>
            <h3>{education.school}</h3>
            <p>{education.location}</p>
            <div className="reference-coursework">{education.coursework.map((course) => <span key={course}>{course}</span>)}</div>
          </article>
        </div>
      </section>

      <section className="reference-contact shell" id="contact">
        <p>Connect</p>
        <h2>Get in Touch</h2>
        <span>I’m interested in mechanical design, thermal engineering, electronics packaging, manufacturing, aerospace, and robotics opportunities.</span>
        <div className="reference-actions">
          {siteConfig.email ? <a className="reference-button" href={`mailto:${siteConfig.email}`}>Email me</a> : null}
          {siteConfig.linkedIn ? <a className="reference-button reference-button--secondary" href={siteConfig.linkedIn}>LinkedIn <span aria-hidden="true">↗</span></a> : null}
        </div>
      </section>
    </div>
  );
}
