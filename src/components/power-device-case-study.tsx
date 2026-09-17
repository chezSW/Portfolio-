import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type VisualProps = {
  src: string;
  alt: string;
  caption: string;
  contain?: boolean;
  priority?: boolean;
};

function Visual({ src, alt, caption, contain = false, priority = false }: VisualProps) {
  return (
    <figure className={`case-visual${contain ? " case-visual--contain" : ""}`}>
      <div><Image src={src} alt={alt} fill loading={priority ? "eager" : "lazy"} sizes="(max-width: 760px) 100vw, 980px" /></div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function PowerDeviceInternshipOverview() {
  return (
    <div className="pdc-story">
      <section className="pdc-story__overview">
        <div>
          <p className="case-number">Internship scope</p>
          <h2>From CAD and analysis to hardware on the floor</h2>
          <p>I spent more than a year working on high-reliability aerospace electronics, with exposure to the full path from mechanical design and analysis through drawings, manufacturing, assembly, troubleshooting, and iteration.</p>
        </div>
        <dl>
          <div><dt>Role</dt><dd>Mechanical Engineering Intern</dd></div>
          <div><dt>Dates</dt><dd>June 2025 — August 2026</dd></div>
          <div><dt>Environment</dt><dd>Aerospace electronics hardware</dd></div>
        </dl>
      </section>

      <section className="pdc-story__results" aria-label="Internship results">
        <div><strong>20+</strong><span>production-fixture configurations</span></div>
        <div><strong>~5 min → &lt;1 min</strong><span>estimated setup-time change for one fixture</span></div>
        <div><strong>Design → build</strong><span>analysis, drawings, manufacturing, and hardware</span></div>
      </section>
      <p className="pdc-story__note">The setup-time comparison comes from project notes and shop-floor use, not a controlled time study.</p>

      <section className="pdc-story__work">
        <header><p className="case-number">What I worked on</p><h2>Four connected areas of responsibility</h2></header>
        <div className="pdc-story__work-grid">
          <article><span>01</span><h3>Mechanical design &amp; packaging</h3><p>SolidWorks PCB assemblies, chassis and card-level layouts, heat-transfer hardware, interference checks, tolerance stack-ups, GD&amp;T drawings, and manufacturing support.</p></article>
          <article><span>02</span><h3>Thermal analysis</h3><p>PCB-level ANSYS Mechanical studies used to review component temperatures, thermal margin, conductive heat paths, and cooling concepts while geometry could still change.</p></article>
          <article><span>03</span><h3>Engineering automation</h3><p>A Python tool inside ANSYS that extracted peak temperatures and node locations to CSV and created review labels. I used AI-assisted debugging while developing it, then verified the workflow against the model results.</p></article>
          <article><span>04</span><h3>Manufacturing &amp; fixture design</h3><p>More than 20 fixture configurations using SolidWorks, Fusion 360 CAM, FDM printing, and CNC machining—from quick fit checks to production tooling used by operators.</p></article>
        </div>
      </section>

      <section className="pdc-story__evidence" aria-label="Internship evidence">
        <Visual src="/images/professional/power-device/full-card-hardware.jpg" alt="Assembled HPSC electronics hardware" caption="Electronics packaging — interfaces carried from CAD into assembled hardware." contain />
        <Visual src="/images/professional/power-device/ansys-automation.png" alt="ANSYS Mechanical interface showing automated temperature review" caption="Automation — repetitive temperature review converted into a repeatable Python workflow." contain />
        <Visual src="/images/professional/power-device/gallery-01-clipping-hardware.jpg" alt="Machined production clipping fixture" caption="Manufacturing — the fixture that reduced reliance on visual alignment and shortened setup." />
      </section>

      <section className="pdc-story__lesson">
        <p className="case-number">What this experience taught me</p>
        <blockquote>Designing something in CAD is only part of the job. The useful engineering happens when the design survives analysis, drawings, manufacturing, assembly, troubleshooting, and iteration on real hardware.</blockquote>
      </section>
    </div>
  );
}

export function PowerDeviceDisclosure({ project }: { project: Project }) {
  return (
    <details className="pdc-disclosure">
      <summary>
        <div className="pdc-disclosure__image"><Image src="/images/professional/power-device/full-card-render.png" alt="Integrated HPSC electronics card assembly" fill loading="eager" sizes="(max-width: 760px) 100vw, 58vw" /></div>
        <div className="pdc-disclosure__copy">
          <p>Professional experience</p>
          <time>{project.date}</time>
          <h2>{project.title}</h2>
          <span>{project.summary}</span>
          <strong><i aria-hidden="true">+</i> View internship</strong>
        </div>
      </summary>
      <div className="pdc-disclosure__body">
        <PowerDeviceInternshipOverview />
        <Link className="pdc-disclosure__permalink" href={`/projects/${project.slug}`}>Open the full internship case study →</Link>
      </div>
    </details>
  );
}

export function PowerDeviceCaseStudy({ nextProject }: { project: Project; nextProject?: Project }) {
  return (
    <article className="focused-case shell">
      <header className="focused-case__hero">
        <nav className="reference-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/projects">Projects Archive</Link><span>/</span><strong>Power Device Corporation</strong></nav>
        <Link className="simple-back" href="/projects">← Projects</Link>
        <p className="simple-label">Professional · Power Device Corporation</p>
        <h1>Internship at Power Device Corporation</h1>
        <p className="focused-case__subtitle">Mechanical design, thermal analysis, manufacturing, and production hardware for high-reliability aerospace electronics</p>
        <dl>
          <div><dt>Role</dt><dd>Mechanical Engineering Intern</dd></div>
          <div><dt>Dates</dt><dd>June 2025 — August 2026</dd></div>
          <div><dt>Focus</dt><dd>Packaging · Thermal · Drawings</dd></div>
        </dl>
        <div className="reference-case-skills"><p>Skills</p>{["SolidWorks", "ANSYS Mechanical", "GD&T", "Fusion 360 CAM", "Python", "CNC Machining"].map((tool) => <span key={tool}>{tool}</span>)}</div>
        <p className="focused-case__summary">Over more than a year, I worked across the engineering path from CAD and analysis to drawings, machining, assembly, and production support.</p>
        <aside>
          <strong>Scope note</strong>
          <p>The aerospace assemblies were shared engineering efforts. This page distinguishes the work I performed from team-owned hardware and omits proprietary details.</p>
        </aside>
      </header>

      <PowerDeviceInternshipOverview />

      <section className="focused-case__section">
        <div className="focused-case__copy">
          <p className="case-number">Selected engineering deep dive</p>
          <h2>HPSC electronics packaging</h2>
          <p>The clearest public technical story is the card-level packaging work connecting the PCB, thermal path, card frame, connectors, and chassis. A change in one area usually moved a constraint somewhere else.</p>
        </div>
        <Visual
          src="/images/professional/power-device/full-card-render.png"
          alt="Rendered HPSC card assembly with the PCB, card structure, connectors, and thermal hardware visible"
          caption="System context — the PCB, card structure, connectors, and heat-shunt hardware had to be developed as one package."
          contain
          priority
        />
      </section>

      <section className="focused-case__section focused-case__section--split">
        <div className="focused-case__copy">
          <p className="case-number">01 / Interfaces</p>
          <h2>Defining the mechanical envelope</h2>
          <p>The mechanical PCB definition established board geometry, mounting features, connector relationships, keep-out regions, and the component space available to the thermal hardware.</p>
          <p>As the electrical layout and surrounding structure changed, the mechanical definition went through roughly 12 revisions. The important part was not the revision count by itself. It was learning that a small layout change could alter a heat-shunt shape, clearance, or assembly interface later in the card.</p>
        </div>
        <div className="focused-case__media-pair">
          <Visual src="/images/professional/power-device/pcb-interface-cad.jpg" alt="Mechanical CAD definition of the HPSC printed circuit board" caption="CAD definition — board outline, mounting, connector, and keep-out interfaces." contain />
          <Visual src="/images/professional/power-device/pcb-hardware.jpg" alt="Physical HPSC printed circuit board used during packaging checks" caption="Delivered PCB — the physical interface behind the mechanical model." contain />
        </div>
      </section>

      <section className="focused-case__section">
        <div className="focused-case__copy">
          <p className="case-number">02 / Analysis</p>
          <h2>Using smaller models to answer specific questions</h2>
          <p>I used steady-state thermal studies while the layout and mechanical geometry could still change. Smaller models were useful when I needed to isolate one question, such as how processor placement or a local heat-shunt feature changed the conductive path.</p>
          <p>The current source files show clear differences between the concepts, but the exact comparison basis is still being documented. I am therefore treating these as design trade studies rather than publishing a headline temperature improvement.</p>
        </div>
        <div className="focused-case__media-pair focused-case__media-pair--wide">
          <Visual src="/images/professional/power-device/processor-top.png" alt="ANSYS result for one processor placement concept" caption="Processor placement concept A — one of the models used to compare the conduction path." contain />
          <Visual src="/images/professional/power-device/processor-bottom.png" alt="ANSYS result for a second processor placement concept" caption="Processor placement concept B — shown as a trade study, not a qualified hardware result." contain />
        </div>
      </section>

      <section className="focused-case__section focused-case__section--split">
        <div className="focused-case__copy">
          <p className="case-number">03 / Geometry</p>
          <h2>Following the heat path through the metal</h2>
          <p>For the bottom heat shunt, I compared wall extensions, chamfers, fillets, and combinations of those features. Temperature and heat-flux results helped show how the geometry changed heat spreading into the surrounding structure.</p>
          <p>The useful result was not a rainbow contour plot. It was a clearer basis for reviewing which geometry should continue into the later design. The final machined hardware closes the loop, but I do not label the exploratory model as a production qualification.</p>
        </div>
        <div className="focused-case__media-pair">
          <Visual src="/images/professional/power-device/heat-path-lowest-temperature.jpg" alt="Temperature result from a selected heat-shunt geometry study" caption="Selected study result — compared with the same model family to review local geometry." contain />
          <Visual src="/images/professional/power-device/heat-path-flux-spread.jpg" alt="Heat-flux result showing conduction through the heat-shunt structure" caption="Heat flux made the spreading path easier to interpret than temperature alone." contain />
        </div>
      </section>

      <section className="focused-case__section">
        <div className="focused-case__copy">
          <p className="case-number">04 / Definition</p>
          <h2>Turning mature geometry into a buildable part</h2>
          <p>Once geometry matured, the work changed from deciding what the part should be to defining how it should be built. The fabrication drawings captured dimensions, tolerances, datums, material, finish, and the interfaces that controlled assembly.</p>
          <p>The drawing shown here is useful because it connects the CAD and analysis to an actual manufacturing definition. The machined heat shunt is evidence of that handoff, not a claim that every feature or drawing on the card was mine.</p>
        </div>
        <div className="focused-case__media-pair focused-case__media-pair--wide">
          <Visual src="/images/professional/power-device/fabrication-drawing.png" alt="Fabrication drawing with dimensions, datums, tolerances, material, and finish notes" caption="Build-to definition — the drawing carries the functional interfaces out of CAD." contain />
          <Visual src="/images/professional/power-device/heat-shunt-hardware.jpg" alt="Machined HPSC heat-shunt hardware" caption="Machined heat-shunt hardware — the physical result of the design and drawing handoff." />
        </div>
      </section>

      <section className="focused-case__section focused-case__section--split">
        <div className="focused-case__copy">
          <p className="case-number">05 / Hardware feedback</p>
          <h2>Designing around the board that actually arrived</h2>
          <p>A delivered PCB included a hole smaller than the mechanical interface expected. Instead of treating the CAD model as the final authority, the team developed two heat-shunt configurations around the hardware that was actually available.</p>
          <p>That moment is one of the more honest summaries of the project: the work moved between requirements, CAD, analysis, drawings, and physical checks, and the real part still had the final word.</p>
        </div>
        <Visual src="/images/professional/power-device/full-card-fit-hardware.jpg" alt="HPSC engineering card hardware during a physical fit check" caption="Hardware fit check — physical interfaces exposed what the nominal CAD model could not settle by itself." />
      </section>

      <section className="focused-case__section">
        <div className="focused-case__copy">
          <p className="case-number">06 / Supporting tools</p>
          <h2>Making result review more repeatable</h2>
          <p>As the full-card models grew, checking the maximum modeled temperature and node location for every body became repetitive. I wrote a Python script inside ANSYS Mechanical to collect those values, export them to CSV, and create labels for review.</p>
          <p>The script did not make the engineering decision or calculate junction temperature and margin. It made one collection step more consistent. The implementation and its limitations are documented separately.</p>
        </div>
      </section>

      <section className="focused-case__section">
        <div className="focused-case__copy">
          <p className="case-number">07 / Manufacturing support</p>
          <h2>Designing fixtures around the operation</h2>
          <p>Across the internship I worked on more than 20 production-fixture configurations, including original designs as well as CAM, machining, and support work on existing tooling.</p>
          <p>One clipping fixture replaced visual centering with mechanical location. After printed fit checks and CNC machining, project notes estimated that setup moved from roughly five minutes to under one minute per component. I treat that as a shop-floor comparison rather than a controlled time study.</p>
        </div>
        <div className="focused-case__media-pair">
          <Visual src="/images/professional/power-device/clipping-fixture.png" alt="CAD model of a production clipping fixture" caption="Clipping fixture CAD — mechanical location replaced operator-dependent visual alignment." contain />
          <Visual src="/images/professional/power-device/gallery-01-clipping-hardware.jpg" alt="Finished machined production clipping fixture" caption="Finished hardware — printed checks informed the machined production tool." />
        </div>
      </section>

      <section className="focused-case__closing">
        <Visual src="/images/professional/power-device/full-card-hardware.jpg" alt="Assembled HPSC engineering card hardware" caption="Assembled engineering hardware — the point where interface decisions, drawings, and real parts had to agree." />
        <div>
          <p className="case-number">Result</p>
          <h2>What I took from the project</h2>
          <p>I left with a much clearer understanding of how packaging decisions move between disciplines. A PCB change can become a thermal problem; a tolerance can become an assembly problem; and a machined part can expose an assumption that looked fine in the model.</p>
          <p>Professional work shown with permission. Proprietary details, source files, and identifying information have been omitted or simplified.</p>
        </div>
      </section>

      <nav className="simple-project-nav"><Link href="/projects">← All projects</Link>{nextProject ? <Link href={`/projects/${nextProject.slug}`}>Next: {nextProject.title} →</Link> : null}</nav>
    </article>
  );
}
