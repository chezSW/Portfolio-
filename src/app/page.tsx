import Link from "next/link";
import { ContactCta } from "@/components/contact-cta";
import { ProjectCard } from "@/components/project-card";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <section className="home-hero shell">
        <div className="home-hero__copy">
          <p className="eyebrow">Mechanical engineering portfolio</p>
          <h1>Hi, I’m Chase.</h1>
          <p className="home-hero__lead">
            I design, analyze, and build the mechanical hardware around electronics—from thermal paths and enclosures to fixtures and finished parts.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" href="/projects">View projects</Link>
            <Link className="button" href="/resume">View resume</Link>
          </div>
        </div>
        <div className="home-hero__aside">
          <p className="eyebrow">A little about me</p>
          <p>I like taking a messy set of constraints and turning it into hardware that can actually be built.</p>
          <ul>
            <li>Space electronics intern</li>
            <li>Mechanical + thermal focus</li>
            <li>Ten years in FIRST Robotics</li>
          </ul>
          <p className="home-hero__personality">Also known to make carefully questionable modifications to desktop PCs.</p>
        </div>
      </section>

      <section className="featured-work shell">
        <div className="section-heading section-heading--split">
          <div><p className="eyebrow">Selected work</p><h2>Projects</h2></div>
          <p>Quick to scan here. Detailed once you open a case study.</p>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link className="button section-button" href="/projects">Explore all projects <span aria-hidden="true">→</span></Link>
      </section>

      <section className="home-experience shell">
        <div className="section-heading section-heading--split">
          <div><p className="eyebrow">Where I’ve worked</p><h2>Experience</h2></div>
          <Link className="text-link" href="/experience">Full experience →</Link>
        </div>
        <div className="home-experience__list">
          {experience.map((item) => (
            <article key={`${item.organization}-${item.date}`}>
              <div><span>{item.date}</span><span>{item.location}</span></div>
              <div><h3>{item.organization}</h3><p>{item.role}</p></div>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tools-snapshot shell" aria-labelledby="tools-title">
        <div>
          <p className="eyebrow">What I work with</p>
          <h2 id="tools-title">Tools & capabilities</h2>
        </div>
        <p>SolidWorks · ANSYS Mechanical · Fusion 360 CAM · CNC milling · GD&T · FDM/SLA · Electronics packaging · Rapid prototyping</p>
        <Link className="text-link" href="/resume">Technical overview →</Link>
      </section>

      <ContactCta />
    </>
  );
}
