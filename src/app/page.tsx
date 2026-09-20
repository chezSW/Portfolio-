import Image from "next/image";
import Link from "next/link";
import { DraggableToolRail } from "@/components/draggable-tool-rail";
import { siteConfig } from "@/config/site";
import { education } from "@/content/education";

const homeEmail = "chase.norvell1@gmail.com";

const experience = [
  {
    id: "power-device",
    date: "Jun 2025 — Aug 2026",
    role: "Mechanical Engineering Intern",
    organization: "Power Device Corporation",
    logo: "/images/experience/power-device-corporation.png",
    logoAlt: "Power Device Corporation logo",
    contributions: [
      "Worked in a small aerospace-electronics team on radiation-hardened and space-qualified hardware, from early R&D models and next-generation computing concepts through production-ready assemblies.",
      "Moved between mechanical design, electronics packaging, SolidWorks, GD&T/manufacturing drawings, ANSYS thermal analysis, tolerance/interface decisions, and Python automation to solve real packaging and thermal problems.",
      "Worked closely with the production floor, designing fixtures, 3D printing parts, using CAM and CNC machining, checking fit on hardware, and working directly with technicians to streamline production efficiency.",
    ],
    href: "/projects/power-device-corporation",
  },
  {
    id: "mesa-fsd",
    date: "Mar 2026 — Present",
    role: "Electronics Packaging Lead",
    organization: "San Diego Mesa Community College Full Self Driving Club",
    logo: "/images/experience/mesa-fsd.png",
    logoAlt: "Mesa Full Self Driving Club logo",
    contributions: [
      "Leading the electronics packaging for an autonomous kart, including the enclosure, mounting, sealing, wire routing, and serviceability of the vehicle’s electrical and autonomy hardware.",
      "The role sits between mechanical, electrical, and autonomy work, requiring coordination across systems to ensure everything fits together and remains easy to build, test, and troubleshoot.",
      "The project is still actively developing, with the team placing Top 5 nationally among 12 universities at Purdue University’s Autonomous Karting Series in May 2026.",
    ],
    href: "/projects/autonomous-kart-packaging",
  },
  {
    id: "team-spyder",
    date: "2023 — 2024",
    role: "Mechanical Designer",
    organization: "FRC 1622 · Team Spyder",
    logo: "/images/experience/team-spyder.png",
    logoAlt: "FRC Team 1622 Team Spyder logo",
    contributions: [
      "Designed and integrated removable bumper-mounting hardware for the competition robot.",
      "Contributed to STEM outreach and advocacy, including work that led to a Certificate of Recognition from San Diego County Supervisor Joel Anderson.",
      "Supported a season that included regional finalist appearances, judged awards, and FIRST Championship participation in 2024.",
    ],
    href: "/projects/first-robotics",
  },
  {
    id: "roboctopi",
    date: "2023 — 2024",
    role: "Mechanical Designer",
    organization: "FTC 14496 · Roboctopi",
    logo: "/images/experience/roboctopi.png",
    logoAlt: "FTC Team 14496 Roboctopi logo",
    contributions: [
      "Designed and delivered the V1 intake and delivery system, claw/end effector, linear-slide string routing, and wiring guide, with the hardware integrated onto the competition robot.",
      "Worked through CAD, CDR’s, prototyping, fabrication, and subsystem handoff in a team using CNC machining, laser cutting, FDM printing, silicone molding.",
      "Contributed to mechanical design and outreach on a team that won the San Diego Regional Inspire Award, qualified for the FIRST Championship, earned the Championship Think Award, and set a world-record score of 416.",
    ],
    href: "/projects/first-robotics",
  },
  {
    id: "green-griffins",
    date: "2014 — 2023",
    role: "Mechanical Designer & Team Lead",
    organization: "FIRST Robotics · FTC 10092 Green.Griffins",
    logo: "/images/experience/green-griffins.png",
    logoAlt: "FTC Team 10092 Green Griffins logo",
    contributions: [
      "Progressed from hands-on fabrication and machining into CAD, mechanical design, prototyping, testing, and full robot integration.",
      "Led a roughly 15-person team across mechanical, programming, electronics, and outreach while coordinating priorities, deadlines, training, design reviews, and system integration.",
      "Helped build a more structured engineering process around design matrices, rapid prototypes, CAD, CDR’s, testing, and iteration instead of jumping straight into final designs.",
      "Helped lead 36 outreach events totaling 390+ team volunteer hours and reaching an estimated 2,500+ people through STEM events, technical training, team support, and advocacy.",
    ],
    href: "/projects/first-robotics",
  },
];

const toolGroups = [
  "GD&T",
  "Tolerance Stack-Ups",
  "Engineering Drawings",
  "DFM/DFA",
  "SolidWorks",
  "ANSYS Mechanical",
  "Fusion 360",
  "Onshape",
  "Autodesk Inventor",
  "CNC Machining",
  "Fusion 360 CAM",
  "FDM + SLA",
  "Fixture Design",
  "making things go kabloom (for science!)",
  "Python",
  "Root Cause Analysis",
  "FEA",
  "Mechanism Design",
  "Thermal Analysis",
];

const featuredWork = [
  {
    slug: "power-device-corporation",
    title: "Power Device Corporation",
    subtitle: "Mechanical Engineering Intern",
    summary: "Worked on aerospace electronics including computing hardware, power supplies, chassis assemblies, and production fixtures, from CAD and thermal analysis through manufacturing and production support.",
    image: "/images/professional/power-device/full-card-render.png",
    imageAlt: "Rendered Power Device Corporation aerospace electronics assembly",
    tags: ["Mechanical Design", "Thermal Analysis", "GD&T", "FEA", "Fixture Design", "CNC Machining", "Python Automation"],
  },
  {
    slug: "first-robotics",
    title: "FIRST Robotics",
    summary: "Ten years of hands-on robotics, progressing from fabrication into CAD, mechanism design, system integration, and leadership of a 15-person team.",
    image: "/images/first/green-robot-featured.jpg",
    imageAlt: "Green Griffins competition robot",
    tags: ["Fusion 360", "Onshape", "Autodesk Inventor", "CNC", "FDM / SLA", "silicone molding", "Team Leadership", "Technical Communication", "Cross-Functional Coordination", "Problem Solving"],
  },
  {
    slug: "autonomous-kart-packaging",
    title: "San Diego Mesa Community College Full Self Driving Club",
    summary: "Designed and integrated 6 custom electronics mounts and a serviceable electronics enclosure for an autonomous kart, contributing to a Top 5 national finish among 12 universities. With more to come!",
    image: "/images/kart/autonomous-kart.jpg",
    imageAlt: "San Diego Mesa autonomous kart",
    imageClassName: "reference-project-card__image--kart",
    tags: ["Fusion 360", "FDM Printing", "Electronics Packaging", "System Integration", "Cross-Functional Collaboration"],
  },
];

const homepageCoursework = [
  "Properties of Materials",
  "Statics",
  "Python Programming",
  "Computer Aided Design",
  "Engineering Physics",
  "Circuits",
];

const galleryImages = [
  {
    src: "/images/kart/electronics/distribution-stack-side.jpg",
    alt: "Side view of the autonomous kart electronics distribution stack in a green printed mount",
    caption: "The board stack in its printed support frame—compact, accessible, and finally becoming real hardware.",
    className: "reference-gallery__item--portrait",
  },
  {
    src: "/images/kart/electronics/custom-distribution-boards.jpg",
    alt: "Stack of electronics distribution boards with yellow connectors and red fuses",
    caption: "A lot of connectors, a lot of current, and a lot less chaos once everything had a place.",
    className: "reference-gallery__item--portrait",
  },
  {
    src: "/images/kart/electronics/installed-electronics-bay.jpg",
    alt: "Electronics distribution boards and custom mounts installed in the autonomous kart bay",
    caption: "The electronics bay during integration: fit checks, cable routing, and service access all at once.",
    className: "reference-gallery__item--portrait",
  },
  {
    src: "/images/kart/electronics/kart-electronics-overview.jpg",
    alt: "Top view of the autonomous kart chassis with its electronics enclosure and wiring",
    caption: "The kart underneath it all—mechanical, electrical, and autonomy systems sharing the same few square feet.",
    className: "reference-gallery__item--wide",
  },
];

function FeaturedProject({ project, lead = false }: { project: (typeof featuredWork)[number]; lead?: boolean }) {
  return (
    <article className={`reference-project-card${lead ? " reference-project-card--lead" : ""}`}>
      <Link className="reference-project-card__visual" href={`/projects/${project.slug}`} aria-label={`Read ${project.title}`}>
        <Image className={project.imageClassName} src={project.image} alt={project.imageAlt} fill sizes={lead ? "(max-width: 760px) 100vw, 1100px" : "(max-width: 760px) 100vw, 550px"} />
      </Link>
      <div className="reference-project-card__body">
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        {project.subtitle ? <small className="reference-project-card__subtitle">{project.subtitle}</small> : null}
        <p>{project.summary}</p>
        <div className="reference-project-card__skills" aria-label="Skills">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
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
          <h1>Hi, I’m <span>Chase</span></h1>
          <p>I’m a mechanical engineering student.<br />Get ready to blow some stuff up (and learn from it!!)</p>
          <div className="reference-actions">
            <Link className="reference-button" href="/resume"><span aria-hidden="true">↓</span> View resume</Link>
            {siteConfig.linkedIn ? <a className="reference-icon-button" href={siteConfig.linkedIn} aria-label="LinkedIn">in</a> : null}
            <a className="reference-icon-button" href={`mailto:${homeEmail}`} aria-label="Email">@</a>
          </div>
        </div>
        <figure className="reference-hero__portrait">
          <Image src="/images/about/chase-norvell-scout.jpg" alt="Chase Norvell outdoors in a Scout uniform" fill priority sizes="(max-width: 760px) 100vw, 42vw" />
        </figure>
      </section>

      <section className="reference-tools" aria-label="Skills and tools">
        <p>Skills &amp; Tools</p>
        <DraggableToolRail items={toolGroups} />
      </section>

      <section className="reference-section reference-about shell" id="about">
        <div className="reference-about__copy">
          <p className="reference-about__eyebrow">About Me</p>
          <h2>I like building things that have to work outside the CAD model.</h2>
          <p>
            I got into engineering through FIRST Robotics, where the fastest way to learn was usually to build something,
            test it, figure out what actually went wrong, and try again. That habit stuck. Now I work across mechanical
            design, manufacturing, thermal analysis, electronics packaging, and whatever else the hardware needs that day.
          </p>
          <p>
            The part I enjoy most is where systems overlap: when a bracket changes a wire route, a thermal path changes a
            chassis, or a clean CAD assembly meets the very real question of how somebody is supposed to put it together.
            I care about the details, but I also like keeping engineering curious, practical, and a little fun. If something
            goes kabloom, the next question is what we learned from it.
          </p>
          <Link className="reference-about__link" href="/about">A little more about me <span aria-hidden="true">→</span></Link>
        </div>
        <figure className="reference-about__portrait">
          <Image src="/images/about/chase-norvell.jpg" alt="Chase Norvell" fill sizes="(max-width: 760px) 100vw, 38vw" />
        </figure>
      </section>

      <section className="reference-section shell" id="experience">
        <header className="reference-section__heading">
          <p>Work &amp; Experience</p>
          <h2>Engineering Experience</h2>
        </header>
        <nav className="reference-experience-logos" aria-label="Jump to an experience">
          {experience.map((item) => (
            <a key={item.id} href={`#experience-${item.id}`} aria-label={`Jump to ${item.organization}`}>
              <Image src={item.logo} alt={item.logoAlt} fill sizes="180px" />
            </a>
          ))}
        </nav>
        <ol className="reference-experience">
          {experience.map((item) => (
            <li key={item.id} id={`experience-${item.id}`}>
              <time>{item.date}</time>
              <span className="reference-experience__axis" aria-hidden="true" />
              <article>
                <header>
                  <span className="reference-experience__logo"><Image src={item.logo} alt="" fill sizes="56px" /></span>
                  <span><h3>{item.role}</h3><strong>{item.organization}</strong></span>
                </header>
                <ul>{item.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
                <Link className="reference-button reference-button--secondary" href={item.href}>Read more <span aria-hidden="true">→</span></Link>
              </article>
            </li>
          ))}
        </ol>
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

      <section className="reference-section reference-gallery shell" id="gallery">
        <header className="reference-section__heading reference-gallery__heading">
          <p>Gallery</p>
          <h2>they say pictures speak a thousand words, lets see if thats true!</h2>
          <span>A few frames from the part of engineering that happens after the screen: fitting, wiring, building, and making the whole system cooperate.</span>
        </header>
        <div className="reference-gallery__grid">
          {galleryImages.map((item) => (
            <figure className={`reference-gallery__item ${item.className}`} key={item.src}>
              <div><Image src={item.src} alt={item.alt} fill sizes={item.className.includes("wide") ? "(max-width: 760px) 100vw, 1200px" : "(max-width: 760px) 100vw, 390px"} /></div>
              <figcaption>{item.caption}</figcaption>
            </figure>
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
            <div className="reference-coursework">{homepageCoursework.map((course) => <span key={course}>{course}</span>)}</div>
          </article>
        </div>
      </section>

      <section className="reference-contact shell" id="contact">
        <p>Connect</p>
        <h2>Get in Touch</h2>
        <span>Got a cool project, some engineering advice, or just wanna talk engineering? Feel free to reach out, I’m always down to chat!</span>
        <div className="reference-actions">
          <a className="reference-button" href={`mailto:${homeEmail}`}>{homeEmail}</a>
          {siteConfig.linkedIn ? <a className="reference-button reference-button--secondary" href={siteConfig.linkedIn}>LinkedIn <span aria-hidden="true">↗</span></a> : null}
        </div>
      </section>
    </div>
  );
}
