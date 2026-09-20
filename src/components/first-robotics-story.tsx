import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type VisualProps = {
  src: string;
  alt: string;
  caption: string;
  contain?: boolean;
  priority?: boolean;
  className?: string;
};

function Visual({ src, alt, caption, contain = false, priority = false, className = "" }: VisualProps) {
  return (
    <figure className={`case-visual${contain ? " case-visual--contain" : ""}${className ? ` ${className}` : ""}`}>
      <div>
        <Image src={src} alt={alt} fill loading={priority ? "eager" : "lazy"} sizes="(max-width: 760px) 100vw, 980px" />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function ProjectVideo({ src, poster, caption }: { src: string; poster: string; caption: string }) {
  return (
    <figure className="first-story__video">
      <div>
        <video controls preload="metadata" playsInline poster={poster}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

const process = ["Challenge", "Brainstorm", "Design matrix", "Prototype", "CAD", "Review", "Build", "Test", "Iterate"];

function FirstRoboticsStory() {
  return (
    <div className="first-story">
      <section className="first-story__section first-story__learning" id="learning-by-building">
        <div className="first-story__copy">
          <p className="first-story__eyebrow">01 · Learning by Building</p>
          <h2>Learning how the whole robot fits together</h2>
          <p>I began with assembly, fabrication, machining, maintenance, and troubleshooting, then gradually moved into CAD and complete mechanisms. Those early robots taught me that no mechanism is isolated: structure, wiring, weight, packaging, software, and every other subsystem are all competing for the same machine.</p>
        </div>
        <Visual
          src="/images/first/archive/python-2017.jpg"
          alt="Python, an early Green Griffins FTC robot"
          caption="Python · one of the early robots where I learned assembly, fabrication, and system-level troubleshooting."
        />
      </section>

      <section className="first-story__section first-story__build" id="design-build-break-repeat">
        <div className="first-story__copy">
          <p className="first-story__eyebrow">02 · Design, Build, Break, Repeat</p>
          <h2>Competition testing started driving the design</h2>
          <p>On Tonk, the first scoring system worked in isolation but struggled in the full robot: it lacked reach, moved slowly, consumed too much space, and interfered with the drivetrain. I replaced it with a compact rotating turret built around a geared drive, shaft-supported structure, waterjet bracket, and printed hub. The redesign roughly tripled scoring throughput—from about 4–6 pieces to 16–18 over comparable periods of play.</p>
          <p>The next season, as Team Lead for roughly 15 students, I helped turn that habit into a repeatable team process. I was still pushing technical direction and mechanical integration, but I was also making sure ideas were challenged, reviewed, and improved by the rest of the team.</p>
        </div>

        <div className="first-story__tonk-grid">
          <Visual src="/images/first/archive/tonk-robot.jpg" alt="Tonk FTC robot after the scoring-system redesign" caption="Tonk · the first scoring architecture worked, but competition exposed its system-level limits." />
          <Visual src="/images/first/archive/tonk-turret-detail.jpg" alt="Close view of Tonk's compact turret scoring mechanism" caption="The turret redesign reduced drivetrain interference and roughly tripled scoring throughput." />
        </div>

        <article className="first-story__centerpiece">
          <div className="first-story__centerpiece-heading">
            <p className="first-story__eyebrow">PowerPlay · V1 “Giraffe”</p>
            <h3>Robot in 30 Hours</h3>
            <p>When the game was released, we translated it into requirements immediately. I personally designed the drivetrain, linear slides, and rubber-band intake; the team fabricated and integrated the rest. Roughly 30 hours later, the robot could perform most of the major game tasks with an initial scoring cycle of about 14 seconds.</p>
          </div>
          <Visual
            src="/images/first/story/powerplay-giraffe-30-hour-robot.jpg"
            alt="The PowerPlay Robot in 30 Hours prototype with tall linear slides and rubber-band intake"
            caption="Giraffe · a functional drivetrain, slide, and intake architecture built in roughly 30 hours."
          />
          <div className="first-story__facts" aria-label="Robot in 30 Hours facts">
            <div><strong>30 hr</strong><span>Game release to functional robot</span></div>
            <div><strong>3 systems</strong><span>Drivetrain, slides, and intake I designed</span></div>
            <div><strong>~14 s</strong><span>Initial team scoring cycle</span></div>
          </div>
        </article>

        <div className="first-story__copy first-story__data-copy">
          <h3>The robot was data, not the final answer.</h3>
          <p>Giraffe gave us real answers about speed, reach, packaging, handoffs, and reliability. We carried those lessons into Oreo and then Mantis, using quick prototypes, design matrices, CAD, engineering reviews, competition testing, and iteration instead of treating the first working concept as finished.</p>
        </div>

        <div className="first-story__process" aria-label="PowerPlay design process">
          {process.map((step, index) => <span key={step}><b>{String(index + 1).padStart(2, "0")}</b>{step}</span>)}
        </div>

        <div className="first-story__process-gallery">
          <Visual src="/images/first/story/powerplay-tradeoff-board.jpg" alt="Whiteboard comparing drivetrain concepts and constraints" caption="Tradeoffs first · requirements and packaging shaped the architecture." />
          <Visual src="/images/first/story/powerplay-drivebase-cad.jpg" alt="PowerPlay robot drivetrain CAD on a monitor" caption="CAD · subsystems were checked together before committing to hardware." contain />
          <Visual src="/images/first/story/powerplay-slide-intake-prototype.jpg" alt="Physical linear-slide and intake prototype" caption="Prototype · fast physical builds revealed geometry and handoff problems." />
        </div>

        <div className="first-story__cycle-story" aria-label="Team scoring-cycle progression">
          <div><span>V1 · Giraffe</span><strong>14 sec</strong><p>Fast build, slow intake</p></div>
          <i aria-hidden="true">→</i>
          <div><span>V2 · Oreo</span><strong>8 sec</strong><p>Refined architecture</p></div>
          <i aria-hidden="true">→</i>
          <div><span>V2.5 · Mantis</span><strong>2 sec</strong><p>Integrated handoff and automation</p></div>
        </div>
        <p className="first-story__attribution">These are team-level cycle times from robots I helped lead and integrate—not three robots I designed alone.</p>

        <ProjectVideo
          src="/videos/first/powerplay-mantis-cycle.mp4"
          poster="/images/first/story/powerplay-mantis-video-poster.jpg"
          caption="Testing Mantis · the later team iteration turned lessons from the 30-hour robot into a much faster scoring system."
        />
      </section>

      <section className="first-story__section" id="larger-system">
        <div className="first-story__copy">
          <p className="first-story__eyebrow">03 · Designing as Part of a Larger System</p>
          <h2>Making my subsystem work with everybody else’s</h2>
          <p>Roboctopi and Team Spyder put me inside larger, more specialized teams. The challenge was no longer only whether my mechanism worked; it was whether it fit the team’s structure, wiring, manufacturing process, maintenance access, software assumptions, and competition workflow.</p>
        </div>

        <div className="first-story__system-grid">
          <article>
            <Visual src="/images/first/story/roboctopi-system-integration.jpg" alt="Roboctopi FTC robot during wiring and subsystem integration" caption="Roboctopi · subsystem integration made interfaces impossible to ignore." />
            <div>
              <p className="first-story__eyebrow">FTC 14496 · Roboctopi</p>
              <h3>Designing the first interface</h3>
              <p>I developed the V1 intake and delivery concept, claw/end effector, initial linear-slide string routing, and a wiring guide in Fusion 360. Around that work, I learned from a team using CNC machining, laser cutting, FDM printing, silicone molding, and tightly controlled fabrication.</p>
            </div>
          </article>
          <article>
            <Visual src="/images/first/story/team-spyder-robot.jpg" alt="Team Spyder FRC robot at the scoring structure" caption="Team Spyder · a larger FRC system with strict structural and service constraints." />
            <div>
              <p className="first-story__eyebrow">FRC 1622 · Team Spyder</p>
              <h3>Designing for repeated use</h3>
              <p>My removable bumper hardware was a smaller mechanism with a very real interface problem: it had to attach structurally, remain accessible, survive repeated installation, fit the frame, and satisfy competition constraints without slowing down pit work.</p>
            </div>
          </article>
        </div>

        <div className="first-story__integration-gallery">
          <Visual src="/images/first/archive/roboctopi-v1-intake.jpg" alt="Fusion 360 view of the Roboctopi V1 claw intake" caption="V1 claw and delivery concept · useful first geometry that the team could evaluate and evolve." contain />
          <Visual src="/images/first/story/roboctopi-intake-prototype.jpg" alt="Wooden Roboctopi intake prototype with compliant wheels" caption="Prototype hardware · geometry, compliance, and manufacturability tested together." />
          <Visual src="/images/first/story/team-spyder-field.jpg" alt="Team Spyder FRC robot operating on the competition field" caption="Competition use · every interface has to remain serviceable under time pressure." />
        </div>

        <ProjectVideo
          src="/videos/first/roboctopi-backdrop-cycle.mp4"
          poster="/images/first/story/roboctopi-video-poster.jpg"
          caption="Roboctopi integration test · intake, lift, end effector, wiring, control, and field geometry acting as one system."
        />
      </section>

      <section className="first-story__section first-story__takeaway" id="what-first-taught-me">
        <div className="first-story__copy">
          <p className="first-story__eyebrow">04 · What FIRST Actually Taught Me</p>
          <h2>What I Took Away</h2>
          <p>Over ten years, FIRST took me from basic fabrication into CAD, mechanism ownership, rapid prototyping, testing, system integration, and eventually technical leadership. More importantly, it taught me that none of those skills matter in isolation. A mechanism still has to fit the structure, leave room for wiring, work with the software, survive competition, and be serviceable by the rest of the team.</p>
          <p>The engineering habit that followed me into everything after FIRST is simple: build something, test it, figure out what actually went wrong, change it, and try again. That feedback loop shaped how I approached later robotics work, my internship at Power Device Corporation, and the electronics packaging I now do for Mesa FSD.</p>
          <p>FIRST was where I learned that the first working answer is usually just useful data. The real design comes from paying attention to what the hardware is telling you and being willing to make the next version better.</p>
        </div>
      </section>
    </div>
  );
}

export function FirstRoboticsDisclosure({ project }: { project: Project }) {
  return (
    <details className="first-disclosure">
      <summary>
        <div className="first-disclosure__image"><Image src="/images/first/story/powerplay-mantis-hero.jpg" alt="Green Griffins PowerPlay robot" fill loading="lazy" sizes="(max-width: 760px) 100vw, 46vw" /></div>
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
    <article className="first-case first-story-page shell">
      <header className="first-story-page__hero">
        <Link className="simple-back" href="/projects"><span aria-hidden="true">←</span> All projects</Link>
        <div className="first-story-page__hero-grid">
          <div className="first-story-page__hero-copy">
            <p className="first-story__eyebrow">2014–2024 · FLL, FTC &amp; FRC</p>
            <h1>FIRST Robotics</h1>
            <p>FIRST was my first long-running engineering laboratory: ten years of building robots, learning why they failed, and taking on more of the design every season.</p>
            <p>I progressed from fabrication and troubleshooting into CAD, mechanism ownership, rapid prototyping, system integration, and technical leadership—always learning that the best design is the one that works with the rest of the robot.</p>
          </div>
          <Visual
            src="/images/first/story/powerplay-mantis-hero.jpg"
            alt="Green Griffins PowerPlay robot with its horizontal intake fully extended"
            caption="Mantis · the clearest expression of a design process built through repeated testing and iteration."
            priority
          />
        </div>
      </header>

      <FirstRoboticsStory />

      <nav className="simple-project-nav" aria-label="Project navigation">
        <Link href="/projects">All projects</Link>
        {nextProject ? <Link href={`/projects/${nextProject.slug}`}>Next project <span aria-hidden="true">→</span></Link> : null}
      </nav>
    </article>
  );
}
