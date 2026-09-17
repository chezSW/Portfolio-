import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

const timeline = [
  ["2014–2016", "FLL", "Programming, teamwork, and technical presentations"],
  ["2017–2019", "FTC mechanical", "Fabrication, assembly, machining, and robot maintenance"],
  ["2020–2022", "FTC design", "CAD, a first complete mechanism, and the Tonk redesign"],
  ["2022–2023", "Team 10092 lead", "A 15-person team and three major robot iterations"],
  ["2023–2024", "FTC 14496", "V1 intake work, CAD collaboration, and outreach"],
  ["2023–2024", "FRC 1622", "Removable bumper hardware and STEM advocacy"],
];

const skills = [
  ["Mechanical design", "Mechanisms, drivetrains, packaging, gear ratios, torque, linkages, linear slides, and end effectors"],
  ["CAD", "Fusion 360, Onshape, full robot assemblies, component design, and design reviews"],
  ["Manufacturing", "FDM printing, CNC machining, waterjet and laser-cut parts, hand fabrication, and rapid prototypes"],
  ["Engineering process", "Design matrices, proof-of-concept builds, calculations, failure analysis, testing, and system integration"],
  ["Leadership", "Team lead coordination, scheduling, peer training, technical communication, and design review presentations"],
];

function RoboticsImage({ src, alt, caption, contain = false, eager = false }: { src: string; alt: string; caption: string; contain?: boolean; eager?: boolean }) {
  return (
    <figure className={`first-story__image${contain ? " first-story__image--contain" : ""}`}>
      <div><Image src={src} alt={alt} fill loading={eager ? "eager" : "lazy"} sizes="(max-width: 760px) 100vw, 920px" /></div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function FirstRoboticsStory() {
  return (
    <div className="first-story">
      <section className="first-story__overview">
        <div>
          <p className="first-story__eyebrow">Project overview</p>
          <h2>My first long-term engineering laboratory</h2>
          <p>FIRST Robotics is where I learned how much I enjoy building things. I started in FIRST LEGO League, moved into FTC and FRC, and gradually took on CAD, mechanism design, machining, design reviews, subsystem ownership, and team leadership.</p>
          <p>The process that stayed with me is simple: build something, test it, understand why it failed, change it, and try again.</p>
        </div>
        <dl className="first-story__facts">
          <div><dt>Student experience</dt><dd>2014–2024</dd></div>
          <div><dt>Programs</dt><dd>FLL · FTC · FRC</dd></div>
          <div><dt>Progression</dt><dd>FLL member → Mechanical member → Designer → Team Lead</dd></div>
          <div><dt>Core work</dt><dd>CAD · Prototyping · Fabrication · Integration</dd></div>
        </dl>
      </section>

      <section className="first-story__timeline" aria-labelledby="first-timeline-title">
        <header><p className="first-story__eyebrow">Progression</p><h2 id="first-timeline-title">A decade in one view</h2></header>
        <ol>{timeline.map(([years, role, detail]) => <li key={`${years}-${role}`}><time>{years}</time><strong>{role}</strong><span>{detail}</span></li>)}</ol>
      </section>

      <section className="first-story__chapter">
        <header className="first-story__chapter-heading"><p className="first-story__eyebrow">01 · Foundations · 2014–2019</p><h2>Learning how robots actually go together</h2></header>
        <div className="first-story__split">
          <div className="first-story__copy">
            <p>FLL introduced me to block programming, teamwork, presentations, and solving a problem as a group. When I moved into FTC, I was mainly a mechanical team member learning basic fabrication, assembly, machining, maintenance, and troubleshooting.</p>
            <p>I was not the primary designer of these early robots. They were where I learned to see a robot as a set of mechanical systems that had to share structure, wiring, power, and a limited envelope.</p>
          </div>
          <div className="first-story__early-grid">
            <RoboticsImage src="/images/first/archive/python-2017.jpg" alt="Python, the 2017 to 2018 FTC robot" caption="Python · 2017–2018" />
            <RoboticsImage src="/images/first/archive/nightwing-2018.jpg" alt="Nightwing, the 2018 to 2019 FTC robot climbing on the field" caption="Nightwing · 2018–2019" />
            <RoboticsImage src="/images/first/archive/yoshi-2019.jpg" alt="Yoshi, the 2019 to 2020 FTC robot on the competition field" caption="Yoshi · 2019–2020" />
          </div>
        </div>
      </section>

      <section className="first-story__chapter first-story__chapter--feature">
        <header className="first-story__chapter-heading"><p className="first-story__eyebrow">02 · Becoming a designer · 2020–2022</p><h2>From building parts to redesigning a system</h2></header>
        <div className="first-story__split first-story__split--feature">
          <div className="first-story__copy">
            <p>Around 2020, I moved much more heavily into CAD and created my first complete mechanism: a shooter system. By the 2021–2022 season, I was responsible for nearly all of Tonk’s mechanical systems aside from one endgame mechanism.</p>
            <h3>Redesigning the primary scoring mechanism</h3>
            <p>The original linear-slide and arm system worked, but competition exposed limited reach, bulky packaging, drivetrain interference, and recurring motor-mount problems. I stopped patching it and redesigned the scoring system around a rotating turret.</p>
            <div className="first-story__callout"><span>My contribution</span><p>A 60:1 motor, 90-degree gearbox, shaft-supported turret, 10-tooth to 48-tooth sprocket reduction, custom waterjet bracket, and 3D-printed motor hub.</p></div>
            <p>The redesign roughly tripled scoring throughput during comparable periods of play. More important, it taught me that a mechanism can function and still be the wrong system for the robot.</p>
          </div>
          <div className="first-story__image-stack">
            <RoboticsImage src="/images/first/archive/tonk-robot.jpg" alt="Tonk, the 2021 to 2022 Green Griffins FTC robot" caption="Tonk · the season when I moved into full mechanical-system design." />
            <RoboticsImage src="/images/first/archive/tonk-turret-detail.jpg" alt="Close view of Tonk's turret and scoring mechanism" caption="Turret detail · the compact redesign reduced drivetrain interference." />
          </div>
        </div>
      </section>

      <section className="first-story__chapter">
        <header className="first-story__chapter-heading"><p className="first-story__eyebrow">03 · Team lead · 2022–2023</p><h2>Leading the Green.Griffins through three robot iterations</h2></header>
        <div className="first-story__lead-grid">
          <div className="first-story__copy">
            <p>As Team Lead for FTC 10092, I coordinated a roughly 15-person group across mechanical, programming, outreach, business, and media. I still worked heavily on mechanical integration, but my job expanded to meeting priorities, deadlines, design reviews, and helping newer students with CAD and fabrication.</p>
            <p>We also changed our process. Instead of immediately committing to CAD, we used quick cardboard, foam, shop-material, and printed prototypes to earn the right to build a concept.</p>
          </div>
          <ol className="first-story__process" aria-label="Green Griffins engineering process">
            {['Challenge', 'Brainstorm', 'Design matrix', 'Prototype', 'CAD', 'Design review', 'Build', 'Test', 'Iterate'].map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}
          </ol>
        </div>
        <div className="first-story__metrics" aria-label="Team robot iteration results">
          <div><span>V1</span><strong>~14 s</strong><p>30-hour robot scoring cycle</p></div>
          <div><span>V2</span><strong>~8 s</strong><p>Refined architecture</p></div>
          <div><span>V2.5 · Mantis</span><strong>~2 s</strong><p>Team-developed scoring cycle</p></div>
        </div>
        <p className="first-story__attribution">Team development that I helped lead and integrate—not three robots I designed alone.</p>
        <div className="first-story__media-grid">
          <RoboticsImage src="/images/first/archive/green-drivetrain-cad.jpg" alt="CAD model of the Green Griffins Mantis drivetrain" caption="Mantis drivebase CAD · packaging, wire access, battery access, and three odometry wheels." contain />
          <RoboticsImage src="/images/first/archive/green-claw-iterations.jpg" alt="Eight physical and CAD claw iterations from the Green Griffins season" caption="Eight intake and claw versions · each one exposed a different grip, weight, or packaging problem." contain />
          <RoboticsImage src="/images/first/archive/green-griffins-team.jpg" alt="FTC Team 10092 Green Griffins team photo" caption="FTC 10092 Green.Griffins · the cross-functional team I helped lead." />
        </div>
      </section>

      <section className="first-story__chapter first-story__chapter--roboctopi">
        <header className="first-story__chapter-heading"><p className="first-story__eyebrow">04 · A more advanced design environment · 2023–2024</p><h2>Learning from Roboctopi</h2></header>
        <RoboticsImage src="/images/first/archive/roboctopi-cad.jpg" alt="Detailed Fusion 360 CAD rendering of the Roboctopi Centerstage robot" caption="Roboctopi’s Centerstage robot · a CAD-first system developed in a demanding technical environment." contain />
        <div className="first-story__split first-story__split--roboctopi">
          <div className="first-story__copy">
            <p>I intentionally joined FTC 14496 to work around more experienced designers. My documented role was Mechanical — Design Team / Outreach.</p>
            <div className="first-story__callout"><span>My contribution</span><p>I developed the initial intake concepts and V1 claw, created a wiring guide, worked in Fusion 360, collaborated on mechanical design, and then handed the intake forward for continued development.</p></div>
            <p>That handoff mattered. Engineering is not always about owning a subsystem forever; sometimes the best contribution is establishing a useful first concept and transferring it cleanly.</p>
          </div>
          <RoboticsImage src="/images/first/archive/roboctopi-v1-intake.jpg" alt="Roboctopi V1 claw intake CAD model" caption="V1 claw intake · the first version I developed before handing the system to another designer." contain />
        </div>
        <div className="first-story__environment">
          <h3>The team environment</h3>
          <p>The robot was designed almost entirely in Fusion 360 before fabrication. The wider team used motion and stress analysis, gear and torque calculations, CNC milling, laser cutting, FDM printing, silicone molding, urethane injection molding, and tight-tolerance aluminum and Delrin parts.</p>
          <p>Those methods describe the environment I contributed within, not a claim that I personally performed every analysis or designed every component.</p>
        </div>
      </section>

      <section className="first-story__chapter">
        <header className="first-story__chapter-heading"><p className="first-story__eyebrow">05 · Moving into FRC · 2023–2024</p><h2>Mechanical bumper integration for Team Spyder</h2></header>
        <div className="first-story__split">
          <div className="first-story__copy">
            <p>While competing with Roboctopi, I also worked with FRC Team 1622 Team Spyder. My mechanical contribution focused on removable bumper mounting hardware for the competition robot.</p>
            <p>The design had to combine structural mounting, quick removal, competition rules, repeated installation, frame integration, and pit access. My STEM advocacy work also led to a Certificate of Recognition from San Diego County Supervisor Joel Anderson for contributions to STEAM Robotics Observance Day.</p>
            <p className="first-story__attribution">Team results included regional finalist appearances, the FIRST Impact Award, other judged awards, and FIRST Championship participation.</p>
          </div>
          <RoboticsImage src="/images/first/archive/team-spyder-rhythm.jpg" alt="FRC Team 1622 Team Spyder robot Rhythm on the field" caption="Rhythm · FRC Team 1622 Team Spyder, where I contributed removable bumper hardware and STEM advocacy." />
        </div>
      </section>

      <section className="first-story__chapter">
        <header className="first-story__chapter-heading"><p className="first-story__eyebrow">06 · Skills and leadership</p><h2>What FIRST actually taught me</h2></header>
        <dl className="first-story__skills">{skills.map(([name, detail]) => <div key={name}><dt>{name}</dt><dd>{detail}</dd></div>)}</dl>
        <div className="first-story__outreach">
          <div><p className="first-story__eyebrow">Team outreach · 2022–2023</p><strong>36</strong><span>events</span></div>
          <div><p className="first-story__eyebrow">Team total</p><strong>390+</strong><span>volunteer hours</span></div>
          <div><p className="first-story__eyebrow">Estimated reach</p><strong>2,523+</strong><span>people impacted</span></div>
          <p>I helped support CAD and mechanical training, FLL team support, STEM events, engineering speakers, and advocacy. With Roboctopi, I also contributed to outreach efforts that launched seven FLL teams and expanded FIRST access to more than 400 students. These figures describe team efforts; my contribution was events, advocacy, and technical support.</p>
        </div>
      </section>
    </div>
  );
}

export function FirstRoboticsDisclosure({ project }: { project: Project }) {
  return (
    <details className="first-disclosure">
      <summary>
        <div className="first-disclosure__image"><Image src="/images/first/archive/roboctopi-robot.jpg" alt="Roboctopi FTC robot" fill loading="lazy" sizes="(max-width: 760px) 100vw, 46vw" /></div>
        <div className="first-disclosure__copy">
          <time>{project.date}</time>
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
          <span className="first-disclosure__action"><span aria-hidden="true">+</span> View project</span>
        </div>
      </summary>
      <div className="first-disclosure__body">
        <FirstRoboticsStory />
        <Link className="first-disclosure__permalink" href={`/projects/${project.slug}`}>Open dedicated project page →</Link>
      </div>
    </details>
  );
}

export function FirstRoboticsCaseStudy({ nextProject }: { project: Project; nextProject?: Project }) {
  return (
    <article className="first-case shell">
      <header className="first-case__hero">
        <nav className="reference-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/projects">Projects Archive</Link><span>/</span><strong>FIRST Robotics</strong></nav>
        <Link className="simple-back" href="/projects">← Projects</Link>
        <p className="first-story__eyebrow">Mechanical design · Prototyping · Leadership</p>
        <h1>FIRST Robotics</h1>
        <p>From early fabrication to complete mechanisms, subsystem ownership, leadership of a roughly 15-person team, and FRC integration.</p>
        <div className="reference-case-skills"><p>Skills</p>{["Mechanical Design", "Fusion 360", "Fabrication", "Prototyping", "Systems Integration", "Team Leadership"].map((tool) => <span key={tool}>{tool}</span>)}</div>
        <RoboticsImage src="/images/first/archive/roboctopi-robot.jpg" alt="Roboctopi FTC robot" caption="FTC 14496 Roboctopi · one chapter in a ten-year student path spanning FLL, FTC, and FRC." eager />
      </header>
      <FirstRoboticsStory />
      <nav className="simple-project-nav"><Link href="/projects">← All projects</Link>{nextProject ? <Link href={`/projects/${nextProject.slug}`}>Next: {nextProject.title} →</Link> : null}</nav>
    </article>
  );
}
