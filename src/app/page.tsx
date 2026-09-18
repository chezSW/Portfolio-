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
    id: "power-device",
    date: "Jun 2025 — Aug 2026",
    role: "Mechanical Engineering Intern",
    organization: "Power Device Corporation",
    logo: "/images/experience/power-device-corporation.png",
    logoAlt: "Power Device Corporation logo",
    contributions: [
      "Started close to the production floor and delivered more than 20 fixture configurations using SolidWorks, FDM printing, Fusion 360 CAM, CNC machining, and direct technician feedback.",
      "Replaced visual alignment in one clipping process with mechanical location; after two printed iterations and a machined production version, setup dropped from roughly five minutes to under one minute per component.",
      "Developed HPSC mechanical PCB definitions through roughly 12 revisions, coordinating board geometry, mounting, connectors, keep-outs, thermal hardware, and card-level packaging interfaces.",
      "Used steady-state ANSYS trade studies to compare processor placement, DDR4 placement, heat-shunt geometry, conductive paths, heat spreading, and assembly-level component temperatures while the design could still change.",
      "Created build-to drawings and supported machined heat-shunt hardware, physical fit checks, a protective 3D-printed PCB carrier, and a three-card chassis iteration that reduced mass by about 20% while the model showed roughly 2% lower card temperatures.",
      "Wrote a Python utility inside ANSYS Mechanical that mapped bodies to mesh nodes, extracted peak temperatures and node locations to CSV, and created review probes so engineering time could shift from data collection to interpretation.",
    ],
    href: "/projects/power-device-corporation",
  },
  {
    id: "mesa-fsd",
    date: "Mar 2026 — Present",
    role: "Electronics Packaging Lead",
    organization: "Mesa FSD",
    logo: "/images/experience/mesa-fsd.png",
    logoAlt: "Mesa FSD logo",
    contributions: [
      "Leading the enclosure and mounting package for an autonomous kart’s electrical and autonomy hardware, including sealing, connector access, wire routing, inspection, and service access.",
      "Developing CAD concepts while coordinating geometry, electrical interfaces, sensing needs, troubleshooting access, and assembly requirements across mechanical, electrical, and autonomy subteams.",
      "Contributing the electronics-packaging subsystem to a team that placed Top 5 nationally among 12 universities at Purdue University’s Autonomous Karting Series.",
    ],
    href: "/projects/autonomous-kart-packaging",
  },
  {
    id: "team-spyder",
    date: "2023 — 2024",
    role: "Mechanical Contributor",
    organization: "FRC 1622 · Team Spyder",
    logo: "/images/experience/team-spyder.png",
    logoAlt: "FRC Team 1622 Team Spyder logo",
    contributions: [
      "Designed and integrated removable bumper-mounting hardware around structural attachment, fast pit removal, repeated installation, frame interfaces, accessibility, and FRC competition rules.",
      "Worked in parallel with my FTC season, gaining experience with the scale, build practices, and integration demands of an FRC competition robot.",
      "Supported STEM outreach and advocacy that led to a Certificate of Recognition from San Diego County Supervisor Joel Anderson for contributions to STEAM Robotics Observance Day.",
      "Team context: Team Spyder earned regional finalist appearances, the FIRST Impact Award, Judges’ and Imagery awards, an Excellence in Engineering Award, and FIRST Championship participation during the season.",
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
      "Joined Roboctopi intentionally to learn in a more advanced design environment built around CAD-first development, formal reviews, tight tolerances, motion and stress analysis, CNC machining, laser cutting, molding, and additive manufacturing.",
      "Designed the V1 intake-and-delivery concept, initial claw, and a wiring guide in Fusion 360, then documented and handed the intake forward so another designer could continue its development.",
      "Contributed mechanical design collaboration, FLL mentorship, HeForSWE advocacy, and major outreach work that helped launch seven FLL teams and expand FIRST access to more than 400 students in Escondido schools.",
      "Team context: Roboctopi won the San Diego Regional Inspire Award, qualified for the FIRST Championship, earned the Championship Think Award, and set a Centerstage world-record score of 416 during the season.",
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
      "Began in FLL in 2014 with block programming, teamwork, presentations, and collaborative problem solving, then moved into FTC mechanical assembly, fabrication, machining, maintenance, and subsystem troubleshooting from 2017–2019.",
      "Moved into CAD and complete-mechanism design in 2020–2021, then designed nearly all major mechanical systems on the 2021–2022 Tonk robot aside from one endgame mechanism.",
      "Redesigned Tonk’s bulky linear-slide scoring system around a compact turret with a 60:1 motor, 90-degree gearbox, custom waterjet bracket, sprocket reduction, and printed hub—roughly tripling scoring throughput from 4–6 to 16–18 cycles in comparable play.",
      "Became Team Lead of the roughly 15-person Green.Griffins team in 2022–2023, coordinating technical and outreach leads, meeting priorities, deadlines, subsystem integration, CAD and fabrication training, and engineering design reviews.",
      "Helped shift the team from immediately modeling ideas to proof-of-concept prototypes, design matrices, CAD, professional review, build, test, and iteration using cardboard, foam, shop materials, and printed parts.",
      "Helped lead three major robot iterations—from an approximately 14-second scoring cycle to 8 seconds and then roughly 2 seconds on Mantis—while integrating a belted mecanum drivetrain, three-wheel odometry, compact wiring, battery access, and an iterated four-point claw.",
      "Team context: the Green.Griffins completed 36 outreach events, contributed 390+ volunteer hours, reached an estimated 2,523+ people, and earned alliance wins and placements across Think, Inspire, Design, and Control awards.",
    ],
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
