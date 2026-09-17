import Image from "next/image";
import Link from "next/link";

const featuredWork = [
  {
    title: "Internship at Power Device Corporation",
    label: "Mechanical Engineering Intern · Jun 2025 — Aug 2026",
    summary: "More than a year working on aerospace electronics across mechanical design, thermal analysis, automation, drawings, manufacturing, and 20+ production-fixture configurations.",
    href: "/projects/power-device-corporation",
    image: "/images/professional/power-device/full-card-render.png",
    alt: "Rendered HPSC electronics card showing its PCB, structure, connectors, and thermal hardware",
    contain: true,
    lead: true,
  },
  {
    title: "FIRST Robotics",
    label: "Student robotics · 2014 — 2024",
    summary: "A ten-year progression from FLL and mechanical fabrication to complete mechanisms, team leadership, Roboctopi, and FRC integration.",
    href: "/projects/first-robotics",
    image: "/images/first/archive/roboctopi-robot.jpg",
    alt: "Roboctopi FTC competition robot",
  },
  {
    title: "Mesa FSD",
    label: "Electronics Packaging Lead · 2026 — Present",
    summary: "Enclosures, mounts, sealing, wire routing, serviceability, and subsystem integration for an autonomous kart.",
    href: "/projects/autonomous-kart-packaging",
    image: "/images/kart/autonomous-kart.jpg",
    alt: "Mesa FSD autonomous kart chassis with its electronics installed",
  },
  {
    title: "Locking Mecanum Wheel",
    label: "Independent mechanical design · 2023",
    summary: "A servo-actuated concept using CAD and printed components to selectively constrain mecanum rollers for conventional traction.",
    href: "/projects/locking-mecanum-wheel",
    image: "/images/locking-mecanum/wheel-locked.jpg",
    alt: "CAD view of the locking mecanum wheel mechanism",
    contain: true,
  },
];

const experience = [
  {
    company: "Power Device Corporation",
    role: "Mechanical Engineering Intern",
    date: "Jun 2025 — Aug 2026",
    summary: "Mechanical packaging, thermal studies, drawings, production fixtures, and machining support for high-reliability electronics.",
  },
  {
    company: "Mesa Full Self Driving",
    role: "Electronics Packaging Lead",
    date: "Mar 2026 — Present",
    summary: "Student-team packaging work for the electrical and autonomy hardware on an autonomous kart.",
  },
  {
    company: "FIRST",
    role: "Student, Mechanical Designer & Team Lead",
    date: "2014 — 2024",
    summary: "Mechanical design, fabrication, system integration, outreach, and team leadership across FLL, FTC, and FRC.",
  },
];

const capabilities = [
  ["Design", "SolidWorks, Fusion 360, electronics packaging, drawings, GD&T"],
  ["Analysis", "ANSYS Mechanical, steady-state thermal studies, model simplification"],
  ["Build", "Fusion 360 CAM, CNC milling, FDM and SLA printing, fixture work"],
  ["Automation", "Python inside ANSYS Mechanical for repetitive result review"],
];

export default function Home() {
  return (
    <div className="portfolio-home shell">
      <section className="portfolio-hero">
        <div className="portfolio-hero__copy">
          <p className="resume-kicker">Mechanical Engineering Portfolio</p>
          <h1>Chase Norvell</h1>
          <p className="portfolio-hero__statement">
            Mechanical engineering student working across electronics packaging, thermal analysis, drawings, and hardware.
          </p>
          <p className="portfolio-hero__intro">
            I like working at the point where CAD turns into something people have to build, assemble, and use. My recent work has included space-electronics packaging, production fixtures, CNC machining, and robotics mechanisms.
          </p>
          <div className="portfolio-hero__links">
            <Link href="/projects">View projects</Link>
            <Link href="/resume">Resume</Link>
          </div>
        </div>
        <figure className="portfolio-hero__image">
          <Image
            src="/images/professional/power-device/full-card-render.png"
            alt="Rendered HPSC electronics card with the mechanical package and PCB visible"
            fill
            loading="eager"
            sizes="(max-width: 760px) 100vw, 48vw"
          />
          <figcaption>HPSC card-level packaging — professional work shown with permission</figcaption>
        </figure>
      </section>

      <section className="home-section home-work" aria-labelledby="selected-work-title">
        <header className="home-section__heading">
          <div><p className="resume-kicker">Selected work</p><h2 id="selected-work-title">Four projects worth opening</h2></div>
          <Link href="/projects">All projects →</Link>
        </header>
        <div className="home-work-grid">
          {featuredWork.map((project) => (
            <article className={`home-work-card${project.lead ? " home-work-card--lead" : ""}`} key={project.href}>
              <Link className={`home-work-card__image${project.contain ? " home-work-card__image--contain" : ""}`} href={project.href}>
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </Link>
              <p>{project.label}</p>
              <h3><Link href={project.href}>{project.title}</Link></h3>
              <span>{project.summary}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-experience" aria-labelledby="home-experience-title">
        <div className="home-section__heading"><div><p className="resume-kicker">Experience</p><h2 id="home-experience-title">Where I have worked</h2></div></div>
        <div className="home-experience__list">
          {experience.map((item) => (
            <article key={item.company}>
              <div><h3>{item.company}</h3><p>{item.role}</p></div>
              <time>{item.date}</time>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-capabilities" aria-labelledby="capabilities-title">
        <div className="home-section__heading"><div><p className="resume-kicker">Capabilities</p><h2 id="capabilities-title">How I approach hardware</h2></div></div>
        <dl>{capabilities.map(([title, detail]) => <div key={title}><dt>{title}</dt><dd>{detail}</dd></div>)}</dl>
      </section>

      <section className="home-personal">
        <p>Outside school and work, I have spent a lot of time around robots, PCs, and projects that usually end with parts spread across a table. I enjoy the point where a clean model meets a messy physical constraint.</p>
        <div><Link href="/about">More about me →</Link><Link href="/contact">Get in touch →</Link></div>
      </section>
    </div>
  );
}
