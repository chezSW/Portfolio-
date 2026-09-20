import { readFileSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { CodeDisclosure } from "@/components/code-disclosure";
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
      <div><ExpandableImage src={src} alt={alt} priority={priority} sizes="(max-width: 760px) 100vw, 980px" /></div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

type ProjectVideoProps = {
  src: string;
  poster: string;
  caption: string;
  className?: string;
};

function ProjectVideo({ src, poster, caption, className = "" }: ProjectVideoProps) {
  return (
    <figure className={`pdc-simple__video${className ? ` ${className}` : ""}`}>
      <div>
        <video controls preload="metadata" poster={poster}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

const scriptFilename = "MAX_COMPONENT_TEMPS_SCRIPT.txt";
const scriptCode = readFileSync(path.join(process.cwd(), "public", "downloads", scriptFilename), "utf8");

export function PowerDeviceCaseStudy({ nextProject }: { project: Project; nextProject?: Project }) {
  return (
    <article className="pdc-simple shell">
      <header className="pdc-simple__hero">
        <Link className="simple-back" href="/projects"><span aria-hidden="true">←</span> All projects</Link>
        <div className="pdc-simple__hero-grid">
          <div className="pdc-simple__hero-copy">
            <p className="case-number">Professional · Power Device Corporation</p>
            <h1>Mechanical engineering intern – Power Device Corporation</h1>
            <p>My internship at Power Device Corporation ended up covering a lot more than I expected. I started close to production, designing fixtures, 3D printing, machining, and supporting existing products, then gradually moved into R&amp;D for new space electronics.</p>
            <p>From there, I worked across PCB layouts, electronics packaging, chassis design, thermal analysis, manufacturing drawings, heat-transfer hardware, component footprint library work, Python automation, and fit checks as the first engineering hardware started coming together.</p>
            <p>I helped coordinate physical models and renders for marketing, and supported the manufacturing of some of the first heat-shunt hardware for the engineering boards. Some of the products I worked on, including the SSDR and HPSC, can now be found on PDC’s website, and I made the renders shown there.</p>
            <a className="reference-button reference-button--secondary" href="https://powerdevicecorp.com/en" target="_blank" rel="noreferrer">Visit Power Device Corporation <span aria-hidden="true">↗</span></a>
          </div>
          <Visual src="/images/professional/power-device/full-card-render.png" alt="Rendered Power Device Corporation aerospace electronics assembly" caption="Integrated HPSC card assembly." contain priority />
        </div>
      </header>

      <section className="pdc-simple__section" id="production-support">
        <div className="pdc-simple__copy">
          <h2>Production Support</h2>
        </div>
        <div className="pdc-simple__story">
          <div className="pdc-story-row">
            <div className="pdc-simple__copy"><p>This is one of the fixtures I worked on, and it’s a good example of the full process that went into a lot of the production-support work. The original process relied on an operator visually aligning a smaller part to the component by hand before clipping. It worked, but the setup took time and the final alignment depended heavily on the person doing it. I redesigned the setup so the fixture mechanically located both parts, meaning the alignment was built into the tooling instead of being done by eye.</p></div>
            <div className="pdc-story-row__media">
              <Visual src="/images/professional/power-device/pdc-story/production-drawing.png" alt="Engineering drawing used to design the clipping fixture" caption="Existing component drawing used to establish the production interface." contain />
              <Visual src="/images/professional/power-device/pdc-story/production-cad.png" alt="CAD model of the clipping fixture" caption="Clipping-block CAD and locating concept." contain />
            </div>
          </div>
          <div className="pdc-story-row pdc-story-row--reverse">
            <div className="pdc-simple__copy"><p>The fixture went through the full design and manufacturing process. I started with the existing component drawings and built a CAD model of the part, then worked through how it needed to be constrained and located. From there, I made an initial 3D-printed prototype to check fit and positioning, revised the design based on those physical fit checks, created the CAM in Fusion 360, and machined the final production version on the CNC.</p></div>
            <div className="pdc-story-row__media">
              <Visual src="/images/professional/power-device/pdc-story/production-cam.png" alt="Fusion 360 CAM setup for the clipping fixture" caption="Fusion 360 CAM used to machine the final fixture." contain />
              <Visual src="/images/professional/power-device/pdc-story/production-hardware.png" alt="Finished machined clipping fixture holding production components" caption="Finished production fixture after prototype fit checks and revision." />
            </div>
          </div>
          <div className="pdc-story-row">
            <div className="pdc-simple__copy"><p>Once the fixture was put into use, setup time dropped from roughly 5 minutes to under 1 minute per component, while also making the process more repeatable and less dependent on operator alignment. Over the course of the internship, I developed and delivered 20+ fixtures for different production needs, and this one is a good example of the general cycle behind that work: understand what is happening on the floor, talk with the people doing the work, design around the problem, prototype it, test it, revise it, and then make the production version.</p></div>
            <div className="pdc-story-row__media pdc-story-row__media--single">
              <ProjectVideo src="/videos/power-device/clipping-fixture-machining-full.mp4" poster="/images/professional/power-device/clipping-fixture-video-poster.jpg" caption="Machining the final production fixture." />
            </div>
          </div>
        </div>
      </section>

      <section className="pdc-simple__section" id="research-and-development">
        <div className="pdc-simple__copy">
          <h2>R&amp;D of Next-Generation Space Electronics</h2>
          <p>I worked on four of Power Device Corporation’s next-generation space products: the High Performance Space Computer (HPSC), Solid State Data Recorder (SSDR), Power Supply Card (PSC), and a 4-card chassis designed to house them together. My level of involvement was different on each one, but I contributed to all four through some combination of mechanical design, PCB packaging, thermal analysis, drawings, manufacturing support, and hardware integration.</p>
        </div>
        <div className="pdc-simple__story">
          <div className="pdc-story-row">
            <div className="pdc-simple__copy"><p>The HPSC is a good example of how that work came together. During the school year, I started by digging into the requirements and standards that would define the card before much of the hardware existed. Using those requirements, I helped create the mechanical layout for the main PCB, including the board outline, mounting features, keep-out areas, connector locations, and the available space for components. That information gave the electrical team a mechanical envelope to work inside as they developed the board layout.</p></div>
            <div className="pdc-story-row__media pdc-story-row__media--single"><Visual src="/images/professional/power-device/pdc-story/hpsc-pcb-layout.png" alt="HPSC main PCB mechanical definition" caption="HPSC main PCB mechanical definition and packaging envelope." contain /></div>
          </div>
          <div className="pdc-story-row pdc-story-row--reverse">
            <div className="pdc-simple__copy"><p>Component placement was another big part of the process. The electrical team would often have a few possible locations for a processor, memory, or another heat-generating component, and I would help determine whether those locations actually worked mechanically and thermally. I used the packaging requirements along with ANSYS Mechanical studies to compare placement options and different heat-shunt geometries. One of the studies shown here compared several heat-shunt wall configurations, and the results helped narrow down both the component location and the heat-shunt geometry that continued into the final card design.</p></div>
            <div className="pdc-story-row__media">
              <Visual src="/images/professional/power-device/pdc-story/hpsc-heat-shunt-thermal.png" alt="ANSYS thermal simulation comparing heat-shunt geometry" caption="ANSYS study used to compare component placement and heat-shunt geometry." contain />
              <Visual src="/images/professional/power-device/pdc-story/hpsc-heat-shunt-cad.png" alt="HPSC heat-shunt CAD model" caption="Heat-shunt CAD developed around the PCB and component interfaces." contain />
            </div>
          </div>
          <div className="pdc-story-row">
            <div className="pdc-simple__copy"><p>The design and analysis then went through Critical Design Reviews (CDRs), where I presented the results and design reasoning to the other engineers. Once the design was mature enough to build, I created manufacturing drawings for the heat shunts using GD&amp;T, material and finish requirements, and the tolerances needed for the PCB, components, and thermal interfaces. Those drawings were released internally and sent to a machine shop to manufacture the heat shunts for the first batch of five HPSC engineering boards.</p></div>
            <div className="pdc-story-row__media">
              <Visual src="/images/professional/power-device/pdc-story/hpsc-heat-shunt-drawing.png" alt="Heat-shunt machining drawing" caption="Released heat-shunt machining drawing with manufacturing requirements." contain />
              <Visual src="/images/professional/power-device/pdc-story/hpsc-heat-shunt-cad-hardware.png" alt="Machined HPSC heat shunt beside its CAD model" caption="Machined HPSC heat-shunt hardware beside the released CAD." contain />
            </div>
          </div>
          <div className="pdc-story-row pdc-story-row--reverse">
            <div className="pdc-simple__copy"><p>As those first boards started moving into assembly, my work shifted more toward supporting the physical hardware. I designed and 3D printed an ESD-safe PCB carrier that could safely hold both bare and populated HPSC boards while they were transported between facilities for assembly and reflow. That made the whole project feel pretty full circle because I had been involved from the early PCB layout and thermal studies, through design reviews and manufacturing drawings, and eventually into the machined heat shunts and first assembled engineering cards.</p></div>
            <div className="pdc-story-row__media">
              <Visual src="/images/professional/power-device/pdc-story/hpsc-pcb-carrier.png" alt="ESD-safe printed HPSC PCB carrier" caption="ESD-safe carrier for transporting bare and populated HPSC boards." />
              <Visual src="/images/professional/power-device/pdc-story/hpsc-first-card-handheld.png" alt="First HPSC engineering card during fit checking" caption="First HPSC engineering card during physical fit checks." />
              <Visual src="/images/professional/power-device/pdc-story/hpsc-first-card-test.png" alt="Assembled HPSC engineering card on the test bench" caption="The first assembled HPSC engineering card during bench testing." />
            </div>
          </div>
        </div>
      </section>

      <section className="pdc-simple__section" id="thermal-automation-overview">
        <div className="pdc-simple__copy">
          <h2>Thermal Data Extraction Automation – Overview</h2>
        </div>
        <div className="pdc-simple__story">
          <div className="pdc-story-row">
            <div className="pdc-simple__copy"><p>For the full-card thermal studies, I needed temperature data for every component on the board so junction temperatures, case temperatures, and margin to limits could be reviewed across the whole design. Doing that by hand was extremely slow. Probing each component one at a time in ANSYS could take over an hour for a single card, and I needed to do it across three cards. It also was not the most reliable method, since manually probing made it easy to miss the actual hottest point on a component.</p></div>
            <div className="pdc-story-row__media">
              <Visual src="/images/professional/power-device/pdc-story/psc-engineering-review.png" alt="Annotated Power Supply Card assembly prepared for an engineering review" caption="Power Supply Card assembly used in a real engineering review." contain />
              <Visual src="/images/professional/power-device/pdc-story/psc-full-assembly-review.png" alt="Power Supply Card full-assembly thermal study prepared for an engineering review" caption="Power Supply Card full-assembly thermal study reviewed with the engineering team." contain />
            </div>
          </div>
          <div className="pdc-story-row pdc-story-row--reverse">
            <div className="pdc-simple__copy"><p>To fix that, I wrote a Python script inside ANSYS Mechanical that automatically scanned every modeled body, pulled the maximum nodal temperature for each component, identified the node location, and exported the results into a CSV file. That gave me a much faster and more repeatable starting point for calculating junction temperatures and reviewing thermal margin, while also making it easier to communicate results to the rest of the mechanical team.</p></div>
            <div className="pdc-story-row__media pdc-story-row__media--single">
              <ProjectVideo src="/videos/power-device/ansys-script-showcase.mp4" poster="/images/professional/power-device/ansys-automation-video-poster-hq.jpg" caption="Live ANSYS showcase of the automated component-temperature extraction workflow." />
            </div>
          </div>
        </div>
      </section>

      <section className="pdc-simple__section" id="thermal-automation-code">
        <div className="pdc-simple__code-layout">
          <Visual src="/images/professional/power-device/pdc-story/thermal-script-uml.png" alt="Software diagram for the ANSYS thermal data extraction script" caption="Software flow for body-to-node temperature extraction and CSV export." contain className="pdc-simple__uml" />
          <div className="pdc-simple__copy">
            <h2>Thermal Data Extraction Automation - Code</h2>
            <p>The script begins by accessing the active ANSYS Mechanical analysis, mesh data, and the most recent solved temperature result. It also locates the Temperature result object in the solution tree so the same data can later be used for visualization.</p>
            <p>The model bodies are then collected and processed one at a time. For each body, the script maps the geometry to its corresponding mesh region and retrieves the node IDs associated with that body.</p>
            <p>It then reads the temperature value at each of those nodes, finds the maximum value, and identifies the node where that maximum occurs. The body name, maximum temperature, and node ID are stored together in a results list before moving to the next body.</p>
            <p>After all bodies have been processed, the results list is written to a CSV file. The script can also use the saved node IDs to place probe labels directly on the Temperature result in ANSYS, making it easier to visually locate the hot spots in the model.</p>
            <p>The code also includes error handling so that if a body has no valid mesh or temperature data, it skips that body and continues processing the rest of the model instead of stopping the entire script.</p>
          </div>
        </div>
        <CodeDisclosure code={scriptCode} downloadHref={`/downloads/${scriptFilename}`} filename={scriptFilename} />
      </section>

      <section className="pdc-simple__section pdc-simple__closing" id="takeaway">
        <div className="pdc-simple__copy">
          <h2>What I Took Away</h2>
          <p>I think the biggest thing I got from PDC was seeing what has to happen between a CAD model and real hardware. I worked with technicians on production problems, electrical engineers on PCB packaging and component placement, machinists and fab houses on parts that needed to be made, and outside vendors when we needed things like high-quality PolyJet models for the IEEE SMC-IT/SCC conference.</p>
          <p>By the end of the internship, I had designed and delivered 20+ production fixture configurations, with one cutting setup time from about 5 minutes to under 1 minute, helped develop thermal and mechanical hardware for the HPSC, SSDR, and PSC, and designed the four-card chassis that brought those systems together into one assembly. I also supported the first five batches of engineering boards, created manufacturing drawings that were sent out and turned into machined heat shunts, and made renders and physical models that were used publicly for marketing and customer-facing events.</p>
          <p>A lot of the learning came from seeing what happened after I finished the first version of something. CAD changed because electrical needed more room. Thermal results changed component placement or heat-shunt geometry. Tolerances and gap pads mattered once parts had to fit together. A fixture that looked fine on screen still needed to work for the technician using it every day. That feedback loop was probably the most useful part of the whole internship.</p>
          <p>And probably the coolest part for me was just getting the chance to work on actual space hardware that is meant to operate reliably for years. I got to watch some of those products go from early layouts and analysis to drawings, machined parts, engineering boards, and assembled hardware, which is exactly the kind of engineering work I want to keep doing.</p>
        </div>
      </section>

      <nav className="simple-project-nav" aria-label="Project navigation">
        <Link href="/projects">All projects</Link>
        {nextProject ? <Link href={`/projects/${nextProject.slug}`}>Next project <span aria-hidden="true">→</span></Link> : null}
      </nav>
    </article>
  );
}
