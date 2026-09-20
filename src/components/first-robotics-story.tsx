import Image from "next/image";
import Link from "next/link";
import { ExpandableImage } from "@/components/expandable-image";
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
        <ExpandableImage src={src} alt={alt} priority={priority} sizes="(max-width: 760px) 100vw, 980px" />
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
      <section className="first-story__section first-story__glance" id="decade-at-a-glance">
        <h2>A Decade at a Glance</h2>
        <div className="first-story__decade" aria-label="FIRST Robotics progression from 2014 onward">
          <div><strong>2014</strong><span>FLL</span></div><i aria-hidden="true">↓</i>
          <div><strong>2017</strong><span>FTC / Mechanical</span></div><i aria-hidden="true">↓</i>
          <div><strong>2020</strong><span>First CAD Mechanism</span></div><i aria-hidden="true">↓</i>
          <div><strong>2021</strong><span>Primary Mechanical Designer</span></div><i aria-hidden="true">↓</i>
          <div><strong>2022</strong><span>Team Lead</span></div><i aria-hidden="true">↓</i>
          <div><strong>2023–24</strong><span>FTC + FRC</span></div><i aria-hidden="true">↓</i>
          <div><strong>Next</strong><span>Mechanical Engineering / Aerospace</span></div>
        </div>
      </section>

      <section className="first-story__section" id="the-beginning">
        <div className="first-story__copy">
          <h2>The Beginning — 2014–2020</h2>
          <p>I started in FLL and moved into FTC, where my early work was mainly assembly, fabrication, machining, maintenance, and troubleshooting. Those years taught me how mechanisms were put together and how the robot’s structure, wiring, software, and individual subsystems affected one another. Once I understood how the machines worked, I wanted to start designing the mechanisms myself.</p>
        </div>
        <div className="first-story__early-grid">
          <Visual src="/images/first/archive/python-2017.jpg" alt="Python, an early Green Griffins FTC robot" caption="Python · learning assembly, fabrication, and system-level troubleshooting." />
          <Visual src="/images/first/archive/nightwing-2018.jpg" alt="Nightwing FTC competition robot" caption="Nightwing · taking on more mechanical fabrication and maintenance." />
          <Visual src="/images/first/archive/yoshi-2019.jpg" alt="Yoshi FTC competition robot" caption="Yoshi · understanding mechanisms well enough to begin designing them." />
        </div>
      </section>

      <section className="first-story__section" id="onion">
        <div className="first-story__story-row">
          <Visual src="/images/first/archive/onion-2020.jpg" alt="Onion FTC robot with its flywheel shooter" caption="Onion · the first major mechanism I carried from CAD and calculation into working hardware." />
          <div className="first-story__copy">
            <h2>My First Real Design — Onion, 2020–21</h2>
            <p><span className="first-story__micro">Context</span>Onion needed a shooter that could launch game pieces consistently while fitting the robot’s available geometry. It became my first major CAD mechanism and the point where I moved from helping build other people’s designs to owning a technical problem myself.</p>
            <p><span className="first-story__micro">My work</span>I developed and compared single- and double-flywheel concepts, built physical versions, and used 3D printing to change the geometry quickly as we learned from testing.</p>
            <p><span className="first-story__micro">Engineering</span>The work included real shooter testing and a projectile-path calculation around an initial 35-degree launch angle. The notebook work gave the prototypes a starting point, while the hardware showed where the launch geometry and packaging needed to change.</p>
            <p><span className="first-story__micro">Result</span>The final decision came from using the calculations and tests together, then revising the geometry instead of treating the first CAD concept as the answer. That problem–test–redesign loop became the pattern I used on every robot after it.</p>
          </div>
        </div>
      </section>

      <section className="first-story__section" id="tonk">
        <div className="first-story__copy">
          <h2>Taking Ownership of the Robot — Tonk, 2021–22</h2>
          <p>By the next season I was designing essentially all of the robot’s mechanical systems aside from the documented exception. Tonk was where mechanism design turned into system ownership: packaging, reach, speed, interference, and center of gravity all mattered at the same time.</p>
        </div>
        <div className="first-story__tonk-progression">
          <article className="first-story__story-row">
            <div className="first-story__copy">
              <p className="first-story__micro">V1</p>
              <h3>A full scoring architecture</h3>
              <p>The first version used a linear-slide architecture with the motors positioned around the available structure. It worked as a mechanism, but the complete robot exposed problems that the isolated design did not.</p>
            </div>
            <Visual src="/images/first/archive/tonk-robot.jpg" alt="Tonk FTC robot with its first scoring architecture" caption="V1 · the robot that made the system-level constraints visible." />
          </article>
          <article className="first-story__story-row first-story__story-row--reverse">
            <div className="first-story__copy">
              <p className="first-story__micro">What failed</p>
              <h3>Competition made the weaknesses measurable</h3>
              <p>The mechanism lacked reach, moved too slowly, occupied too much space, interfered with the drivetrain, and carried mass in the wrong places. Those failures changed the redesign priorities: compact packaging, faster motion, cleaner drivetrain clearance, and a lower center of gravity.</p>
              <p className="first-story__micro">V2</p>
              <p>I replaced the first system with a compact rotating turret built around a 60:1 motor, a 90-degree gearbox, a 10-tooth to 48-tooth sprocket reduction, a custom waterjet-cut aluminum bracket, and printed hub and mechanism parts. The architecture put the actuation where it fit and removed the worst interference.</p>
              <p className="first-story__micro">Result</p>
              <p>Over comparable periods of play, scoring increased from roughly 4–6 game pieces to 16–18. More important, the redesign showed me how to turn a competition failure into specific mechanical requirements for the next version.</p>
            </div>
            <Visual src="/images/first/archive/tonk-turret-detail.jpg" alt="Close view of Tonk's compact turret scoring mechanism" caption="V2 · a smaller geared turret designed around reach, speed, packaging, and drivetrain clearance." />
          </article>
        </div>
      </section>

      <section className="first-story__section" id="powerplay">
        <div className="first-story__copy">
          <h2>From Designer to Team Lead — PowerPlay, 2022–23</h2>
          <p>As Team Lead for roughly 15 students, my technical problem changed. I was still designing and integrating hardware, but I also had to make the whole engineering process better: turn the game into requirements, challenge concepts, get prototypes built, coordinate CAD, run reviews, and make sure testing produced decisions the team could act on.</p>
        </div>

        <div className="first-story__cycle-story" aria-label="Team scoring-cycle progression">
          <div><span>Giraffe</span><strong>~14 sec</strong><p>Fast build, slow intake</p></div><i aria-hidden="true">→</i>
          <div><span>Oreo</span><strong>~8 sec</strong><p>Refined architecture</p></div><i aria-hidden="true">→</i>
          <div><span>Mantis</span><strong>~2 sec</strong><p>Integrated handoff and automation</p></div>
        </div>
        <p className="first-story__attribution">These are documented team-level cycle times from robots I helped lead and integrate—not three robots I designed alone.</p>

        <div className="first-story__story-row first-story__story-row--powerplay">
          <Visual src="/images/first/story/powerplay-giraffe-30-hour-robot.jpg" alt="The PowerPlay Giraffe robot with tall linear slides and rubber-band intake" caption="Giraffe · a drivetrain, slide, and intake architecture built in roughly 30 hours after game release." />
          <div className="first-story__copy">
            <p className="first-story__micro">My work</p>
            <p>I personally designed Giraffe’s drivetrain, linear slides, and rubber-band intake. The team fabricated and integrated the rest, creating a functional robot that could perform most major game tasks roughly 30 hours after release.</p>
            <p className="first-story__micro">Engineering leadership</p>
            <p>I led the development process through a design matrix, prototypes, CAD, calculations, design reviews, fabrication, tests, and iteration. The final robot used a mecanum drivetrain, packaged three-wheel odometry, used CAD center-of-gravity estimates, and evolved to spring-loaded odometry after testing. The scoring path depended on a horizontal linear-slide handoff, several printed claw geometries, four-point contact, and servo torque and speed evaluation. Mechanical decisions also changed around programming requirements instead of treating software as a separate system.</p>
          </div>
        </div>

        <div className="first-story__process" aria-label="PowerPlay design process">
          {process.map((step) => <span key={step}>{step}</span>)}
        </div>
        <div className="first-story__process-gallery">
          <Visual src="/images/first/story/powerplay-tradeoff-board.jpg" alt="Whiteboard comparing drivetrain concepts and constraints" caption="Tradeoffs · requirements and packaging shaped the architecture." />
          <Visual src="/images/first/story/powerplay-drivebase-cad.jpg" alt="PowerPlay robot drivetrain CAD on a monitor" caption="CAD · subsystems were checked together before committing to hardware." contain />
          <Visual src="/images/first/story/powerplay-slide-intake-prototype.jpg" alt="Physical linear-slide and intake prototype" caption="Prototype · fast physical builds revealed geometry and handoff problems." />
        </div>
        <ProjectVideo src="/videos/first/powerplay-mantis-cycle.mp4" poster="/images/first/story/powerplay-mantis-video-poster.jpg" caption="Mantis testing · lessons from the earlier robots became a much faster team scoring system." />
      </section>

      <section className="first-story__section" id="roboctopi">
        <div className="first-story__story-row">
          <Visual src="/images/first/story/roboctopi-system-integration.jpg" alt="Roboctopi FTC robot during wiring and subsystem integration" caption="Roboctopi · designing one subsystem inside a mature, specialized robot." />
          <div className="first-story__copy">
            <h2>Designing Within a Larger Engineering Team — Roboctopi, 2023–24</h2>
            <p>At Roboctopi, I was no longer responsible for huge portions of the robot. I developed the V1 intake and delivery system, V1 scoring claw, early intake iterations, a wiring guide, and integration work in Fusion 360.</p>
            <p>The engineering challenge was making that subsystem fit a more mature system: respecting envelope constraints, defining interfaces, preserving wiring clearance, aligning the handoff geometry, and keeping the parts manufacturable. It taught me how to own a smaller technical scope without losing sight of the complete machine.</p>
          </div>
        </div>
        <div className="first-story__integration-gallery first-story__integration-gallery--two">
          <Visual src="/images/first/archive/roboctopi-v1-intake.jpg" alt="Fusion 360 view of the Roboctopi V1 claw intake" caption="V1 claw and delivery geometry developed in the shared assembly." contain />
          <Visual src="/images/first/story/roboctopi-intake-prototype.jpg" alt="Wooden Roboctopi intake prototype with compliant wheels" caption="Prototype hardware used to evaluate geometry, compliance, and manufacturability." />
        </div>
      </section>

      <section className="first-story__section" id="team-spyder">
        <div className="first-story__story-row first-story__story-row--reverse">
          <div className="first-story__copy">
            <h2>Scaling Up — FRC Team Spyder, 2023–24</h2>
            <p>On Team Spyder, I focused on removable bumper mounting hardware instead of describing the entire FRC robot as my work. The problem was compact but real: the mount had to connect to a much larger structure, survive repeated installation, remain accessible, fit the frame, meet competition constraints, and avoid slowing down service in the pit.</p>
            <p>The result was a focused exercise in constraints, interface design, fabrication, integration, and serviceability—and a chance to apply the same mechanism-design habits at FRC scale.</p>
          </div>
          <Visual src="/images/first/story/team-spyder-robot.jpg" alt="Team Spyder FRC robot at the scoring structure" caption="Rhythm · a larger FRC platform where the bumper interface had to stay structural and serviceable." />
        </div>
      </section>

      <section className="first-story__section first-story__takeaway" id="where-it-led">
        <div className="first-story__copy"><h2>Where It Led</h2></div>
        <div className="first-story__destination" aria-label="Progression from FIRST Robotics to aerospace hardware">
          <Visual src="/images/first/archive/onion-2020.jpg" alt="Early FIRST Robotics CAD-driven robot" caption="FIRST Robotics" />
          <div aria-hidden="true">→</div>
          <Visual src="/images/professional/power-device/pdc-story/hpsc-first-card-handheld.png" alt="HPSC aerospace engineering card during fit checking" caption="Aerospace hardware" />
        </div>
        <div className="first-story__copy first-story__closing-copy">
          <p>FIRST led directly into mechanical engineering and the hardware work I wanted to do next. The same cycle keeps showing up: CAD, calculations, prototypes, manufacturing, testing, failure, and redesign. The systems changed from competition robots to space electronics, but the way I learn from real hardware did not.</p>
          <Link className="reference-button" href="/projects/power-device-corporation">View my work at Power Device Corporation <span aria-hidden="true">→</span></Link>
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
        <div className="first-disclosure__copy"><time>{project.date}</time><h2>{project.title}</h2><p>{project.summary}</p><span className="first-disclosure__action"><span aria-hidden="true">+</span> View project</span></div>
      </summary>
      <div className="first-disclosure__body"><FirstRoboticsStory /><Link className="first-disclosure__permalink" href={`/projects/${project.slug}`}>Open dedicated project page →</Link></div>
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
            <p>Ten years of learning how robots are built, designing my first mechanism, owning complete mechanical systems, leading an engineering process, and learning how my work fits into larger teams.</p>
          </div>
          <Visual src="/images/first/story/powerplay-mantis-hero.jpg" alt="Green Griffins PowerPlay robot with its horizontal intake fully extended" caption="Mantis · the result of a design process shaped by repeated testing and iteration." priority />
        </div>
      </header>
      <FirstRoboticsStory />
      <nav className="simple-project-nav" aria-label="Project navigation"><Link href="/projects">All projects</Link>{nextProject ? <Link href={`/projects/${nextProject.slug}`}>Next project <span aria-hidden="true">→</span></Link> : null}</nav>
    </article>
  );
}
