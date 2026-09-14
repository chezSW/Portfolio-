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

export function PowerDeviceCaseStudy({ nextProject }: { project: Project; nextProject?: Project }) {
  return (
    <article className="focused-case shell">
      <header className="focused-case__hero">
        <Link className="simple-back" href="/projects">← Projects</Link>
        <p className="simple-label">Professional · Power Device Corporation</p>
        <h1>HPSC electronics packaging</h1>
        <p className="focused-case__subtitle">PCB interfaces, thermal studies, drawings, and card-level hardware</p>
        <dl>
          <div><dt>Role</dt><dd>Mechanical Engineering Intern</dd></div>
          <div><dt>Dates</dt><dd>June 2025 — August 2026</dd></div>
          <div><dt>Focus</dt><dd>Packaging · Thermal · Drawings</dd></div>
        </dl>
        <p className="focused-case__summary">
          HPSC was my first card-level packaging project. The work sat between the PCB, thermal path, card frame, and chassis, so a change in one area usually moved a constraint somewhere else.
        </p>
        <aside>
          <strong>Scope note</strong>
          <p>The card was a shared engineering effort. I worked on mechanical PCB definition, packaging studies, selected heat-shunt geometry, thermal models, fabrication drawings, and hardware checks with review and support from other engineers. This page does not claim individual ownership of the full card.</p>
        </aside>
      </header>

      <Visual
        src="/images/professional/power-device/full-card-render.png"
        alt="Rendered HPSC card assembly with the PCB, card structure, connectors, and thermal hardware visible"
        caption="System context — the PCB, card structure, connectors, and heat-shunt hardware had to be developed as one package."
        contain
        priority
      />

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
          <Link className="case-link" href="/projects/ansys-temperature-automation">Read the automation note →</Link>
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
