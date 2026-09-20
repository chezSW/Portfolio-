import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { siteConfig } from "@/config/site";
import { education } from "@/content/education";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Chase Norvell, a mechanical engineering student who likes making real hardware.",
  alternates: { canonical: "/about" },
};

const skills = [
  ["Design", "SolidWorks, Onshape, Fusion 360, Autodesk Inventor"],
  ["Analysis", "ANSYS Mechanical, steady-state thermal analysis"],
  ["Manufacturing", "Fusion 360 CAM, CNC milling, FDM and SLA printing, soldering"],
  ["Engineering", "GD&T, drawings, tolerance stack-ups, fixture design, electronics packaging"],
  ["Programming", "Python"],
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="I like building things that have to work outside the CAD model."
        description="I am a mechanical engineering student in San Diego. I got into engineering through FIRST Robotics and have since worked on competition robots, CNC fixtures, electronics packaging, and thermal simulations for high-reliability hardware."
      />
      <div className="about-page shell">
        <section className="about-opening">
          <div className="about-copy">
            <p>
              FIRST Robotics taught me that the fastest way to learn is usually to
              build something, test it, figure out what actually went wrong, and try
              again. That habit stuck. Now I move between mechanical design,
              manufacturing, thermal analysis, electronics packaging, and whatever
              else the hardware needs that day.
            </p>
            <p>
              The part I enjoy most is where systems overlap: when a bracket changes
              a wire route, a thermal path changes a chassis, or a clean CAD assembly
              meets the very real question of how somebody is supposed to put it
              together. A good design has to fit, stay cool, go together without a
              fight, and make sense to the person building it.
            </p>
            <p>
              I care about the details, but I also like keeping engineering curious,
              practical, and a little fun. If something goes kabloom, the next
              question is what we learned from it. When I am not doing that, there is
              a decent chance I am modifying my desktop PC in a way the manufacturer
              probably did not intend.
            </p>
          </div>
          <figure className="about-portrait">
            <Image src="/images/about/chase-norvell.jpg" alt="Chase Norvell" fill sizes="(max-width: 760px) 100vw, 34vw" />
          </figure>
        </section>

        <section className="about-details" aria-labelledby="education-title">
          <div>
            <h2 id="education-title">Education</h2>
            <h3>{education.school}</h3>
            <p>{education.program}</p>
            <p>{education.gpa} · {education.distinction}</p>
            <p>{education.date}</p>
            <p className="small-copy">Targeting transfer to a four-year mechanical engineering program.</p>
            <p className="small-copy">{education.coursework.join(" · ")}</p>
          </div>
          <div>
            <h2>Tools I use</h2>
            <dl className="skills-list">
              {skills.map(([title, items]) => (
                <div key={title}>
                  <dt>{title}</dt>
                  <dd>{items}</dd>
                </div>
              ))}
            </dl>
            <p className="small-copy">OrCAD and Allegro are used for PCB review and mechanical integration—not circuit design.</p>
          </div>
        </section>

        <section className="about-contact">
          <h2>Contact</h2>
          <p>{siteConfig.location}</p>
          <div>
            {siteConfig.email ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : null}
            {siteConfig.linkedIn ? <a href={siteConfig.linkedIn}>LinkedIn ↗</a> : null}
            <Link href="/resume">Resume →</Link>
          </div>
        </section>
      </div>
    </>
  );
}
