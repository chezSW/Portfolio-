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
          <div><strong>Next</strong><span>Mechanical Engineering</span></div>
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
          <Visual src="/images/first/archive/onion-v1-cad.png" alt="CAD model of the Onion V1 FTC robot" caption="Onion V1 · the first complete shooter layout I carried from a design matrix into CAD." contain />
          <div className="first-story__copy">
            <h2>My First Real Design — Onion, 2020–21</h2>
            <p><span className="first-story__micro">Context</span>COVID kept most of our early work in CAD, so the shooter had to start as a controlled comparison instead of a finished mechanism. I used a design matrix to narrow the concepts to single- and double-flywheel layouts, then built around the space the robot actually had.</p>
            <p><span className="first-story__micro">My work</span>The first front-shooting layout did not carry the ring far enough and used the frame poorly. I went back to the drawing board, changed the path so the robot could intake from the front and shoot out the back, and set the initial launch geometry near 35 degrees.</p>
            <p><span className="first-story__micro">Engineering</span>Projectile calculations gave the prototype a starting point. Physical shots decided what stayed. I changed wheel spacing, compression, and printed geometry as the test results came in instead of treating the CAD model as proof that the system worked.</p>
            <p><span className="first-story__micro">Result</span>Onion was the first mechanism where I owned the full loop: compare concepts, model the geometry, build it, measure the miss, and revise the design. It also taught me why simple hardware is valuable: fewer failure points, less weight, and more time to iterate.</p>
          </div>
        </div>
      </section>

      <section className="first-story__section" id="tonk">
        <div className="first-story__copy">
          <h2>Taking Ownership of the Robot — Tonk, 2021–22</h2>
          <p>The next season moved me from one mechanism to the robot as a system. I was responsible for nearly all of the mechanical design, so width, reach, cycle time, barrier clearance, and center of gravity had to be resolved together.</p>
        </div>
        <div className="first-story__tonk-progression">
          <article className="first-story__story-row">
            <div className="first-story__copy">
              <p className="first-story__micro">V1</p>
              <h3>Big Mickey established the architecture</h3>
              <p>The V1 drivebase was 12 inches wide so it could fit between the field barriers. We selected mecanum through a design matrix, placed the motors at the center facing outward, and added rollers where the frame could contact the barrier. The intake rode on a linear slide and rotated about 180 degrees so the robot could reach either hub without a full turn.</p>
              <p>Rubber floppers pulled in one freight at a time, a printed mount carried the intake, and a servo gate held the game piece. The concept worked, but competition exposed the weak points: extrusion caught on the barriers, moving mass was too high, and the complete scoring sequence took too long.</p>
            </div>
            <Visual src="/images/first/archive/tonk-v1-robot.png" alt="Big Mickey, the first version of the 2021–22 FTC robot" caption="V1, Big Mickey · the first complete robot made the packaging and center-of-gravity problems visible." contain />
          </article>
          <article className="first-story__story-row first-story__story-row--reverse">
            <div className="first-story__copy">
              <p className="first-story__micro">What failed</p>
              <h3>Competition made the redesign priorities clear</h3>
              <p>The first mechanism lacked reach, moved too slowly, occupied too much space, and interfered with the drivetrain. The robot could score, but it did not recover cleanly from barrier contact and carried too much mass away from the chassis.</p>
              <p className="first-story__micro">V2</p>
              <p>I replaced the extrusion structure with waterjet-cut aluminum, redistributed the motors to lower the center of gravity, and removed the intake gate. The new turret kept its motors at the base and drove the rotating assembly through belts, which reduced the mass the mechanism had to move. A force-sensitive resistor confirmed when freight reached the intake.</p>
              <p>The compact turret used a 60:1 motor, a 90-degree gearbox, a 10-tooth to 48-tooth sprocket reduction, a printed hub, and a ball-bearing turntable. After a printed intake part weakened around its viewing holes, I increased the infill and revised the openings for the next iteration.</p>
              <p className="first-story__micro">Result</p>
              <p>Over comparable periods of play, scoring increased from roughly 4–6 game pieces to 16–18. The larger lesson was how to convert a match failure into a specific mechanical requirement, then prove the correction on the assembled robot.</p>
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
          <Visual src="/images/first/story/powerplay-giraffe-30-hour-robot.png" alt="The PowerPlay Giraffe robot competing with its tall linear slides and rubber-band intake" caption="Giraffe · the actual Robot in 30 Hours build, with its drivetrain, slides, and intake integrated." />
          <div className="first-story__copy">
            <p className="first-story__micro">My work</p>
            <p>I personally designed Giraffe’s drivetrain, linear slides, and rubber-band intake. The team fabricated and integrated the rest, creating a functional robot that could perform most major game tasks roughly 30 hours after release.</p>
            <p className="first-story__micro">Engineering leadership</p>
            <p>I led the development process through a design matrix, prototypes, CAD, calculations, design reviews, fabrication, tests, and iteration. The final robot used a mecanum drivetrain, packaged three-wheel odometry, used CAD center-of-gravity estimates, and evolved to spring-loaded odometry after testing. The scoring path depended on a horizontal linear-slide handoff, several printed claw geometries, four-point contact, and servo torque and speed evaluation. Mechanical decisions also changed around programming requirements instead of treating software as a separate system.</p>
          </div>
        </div>
        <div className="first-story__video-links" aria-label="Giraffe Robot in 30 Hours videos">
          <a href="https://www.youtube.com/watch?v=8u2IuG8DoAs&t=1s" target="_blank" rel="noreferrer">
            <span>Robot in 30 Hours</span>
            <strong>2022 build recap</strong>
            <small>Watch on YouTube <span aria-hidden="true">↗</span></small>
          </a>
          <a href="https://www.youtube.com/watch?v=580BkIanc_8" target="_blank" rel="noreferrer">
            <span>Robot in 30 Hours</span>
            <strong>PowerPlay robot walkthrough</strong>
            <small>Watch on YouTube <span aria-hidden="true">↗</span></small>
          </a>
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
        <div className="first-story__video-links first-story__video-links--single" aria-label="PowerPlay competition video">
          <a href="https://www.youtube.com/watch?v=L0NEEnnkDi4" target="_blank" rel="noreferrer">
            <span>Competition recap</span>
            <strong>San Diego Qualifiers</strong>
            <small>Watch on YouTube <span aria-hidden="true">↗</span></small>
          </a>
        </div>
      </section>

      <section className="first-story__section" id="roboctopi">
        <div className="first-story__story-row">
          <Visual src="/images/first/story/roboctopi-system-integration.jpg" alt="Roboctopi FTC robot during wiring and subsystem integration" caption="Roboctopi · designing one subsystem inside a mature, specialized robot." />
          <div className="first-story__copy">
            <h2>Designing Within a Larger Engineering Team — Roboctopi, 2023–24</h2>
            <p><span className="first-story__micro">My scope</span>I designed and delivered the V1 intake and delivery system, the claw/end effector, linear-slide string routing, and a wiring guide. I worked through Fusion 360 CAD, design reviews, quick prototypes, fabrication, and subsystem handoff until the hardware could be integrated onto the competition robot.</p>
            <p><span className="first-story__micro">Integration</span>The subsystem had to meet the robot envelope, transfer a pixel in less than 12 inches, preserve wiring clearance, and line up the intake with the delivery arm. Each interface was checked in the shared assembly before parts were machined, laser cut, printed, or molded.</p>
            <p><span className="first-story__micro">Team result</span>That work contributed to a season where Roboctopi set a world-record score of 416, won the San Diego Regional Inspire Award, qualified for the FIRST Championship, and earned the Championship Think Award. Those were team results; my responsibility was making my subsystem ready for the rest of the machine.</p>
          </div>
        </div>
        <div className="first-story__integration-gallery first-story__integration-gallery--single">
          <Visual src="/images/first/archive/roboctopi-v1-intake.jpg" alt="Fusion 360 view of the Roboctopi V1 claw intake" caption="V1 claw and delivery geometry developed in the shared assembly." contain />
        </div>
        <div className="first-story__metrics" aria-label="Roboctopi season results">
          <div><strong>416</strong><span>world-record score</span></div>
          <div><strong>Inspire Award</strong><span>San Diego Regional</span></div>
          <div><strong>FIRST Championship</strong><span>qualified and competed</span></div>
        </div>
      </section>

      <section className="first-story__section" id="team-spyder">
        <div className="first-story__story-row first-story__story-row--reverse">
          <div className="first-story__copy">
            <h2>Scaling Up — FRC Team Spyder, 2023–24</h2>
            <p>On Team Spyder, I focused on removable bumper mounting hardware instead of describing the entire FRC robot as my work. The problem was compact but real: the mount had to connect to a much larger structure, survive repeated installation, remain accessible, fit the frame, meet competition constraints, and avoid slowing down service in the pit.</p>
            <p>I carried the mount through constraint checks, interface design, fabrication, integration, and serviceability testing. That hardware supported a season with regional finalist appearances and a run at the 2024 FIRST Championship. I also contributed to the team’s advocacy work, which received a Certificate of Recognition from Supervisor Joel Anderson.</p>
          </div>
          <div className="first-story__story-media">
            <Visual src="/images/first/story/team-spyder-shooter-prototype.jpg" alt="FRC shooter prototype Chase built from plywood, aluminum extrusion, and compliant wheels" caption="FRC shooter prototype · a proof of concept I built to test wheel layout, compression, and ball path." />
            <Visual src="/images/first/story/team-spyder-practice-robot.jpg" alt="Two FRC robots during practice, with Team Spyder's robot on the right" caption="Practice · Team Spyder’s robot is on the right, with its intake and bumper interface visible." />
          </div>
        </div>
      </section>

      <section className="first-story__section" id="system-leadership">
        <div className="first-story__copy">
          <h2>System Leadership &amp; Community Impact</h2>
          <p>My role grew from machining parts and repairing robots into coordinating a roughly 15-person team across mechanical, programming, electronics, and outreach. I set priorities, ran design reviews, trained newer members, tracked deadlines, and kept subsystem decisions tied to the complete robot.</p>
          <p>I helped make our process more deliberate: define the problem, compare concepts, build the cheapest useful prototype, review the CAD, test the hardware, and record what changed. The same approach shaped our outreach. I helped lead technical training, public demonstrations, team support, and STEM advocacy, while continuing hands-on mentoring with the Golden Griffins and RaD FLL Challenge teams.</p>
        </div>
        <div className="first-story__outreach" aria-label="FIRST outreach impact">
          <div><strong>36</strong><span>outreach events</span></div>
          <div><strong>390+</strong><span>team volunteer hours</span></div>
          <div><strong>2,500+</strong><span>people reached</span></div>
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
          <p>The same cycle keeps showing up: CAD, calculations, prototypes, manufacturing, testing, failure, and redesign. The systems changed from competition robots to space electronics, but the way I learn from real hardware did not.</p>
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
