import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "@/components/contact-cta";
import { PageIntro } from "@/components/page-intro";
import { education } from "@/content/education";

export const metadata: Metadata = {
  title: "About",
  description: "About Chase Norvell, a mechanical engineering student focused on thermal, electronics packaging, manufacturing, aerospace, and robotics.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About / Engineer + builder"
        title="I like the full loop from a messy constraint to a working part."
        description="CAD matters, but I care just as much about what happens after CAD: thermal behavior, tool access, assembly, machining, technician feedback, and the next design iteration."
      />
      <section className="about-grid shell">
        <div className="about-story">
          <p className="eyebrow">Engineering perspective</p>
          <h2>Designing for the real hardware</h2>
          <p>
            My current work sits at the intersection of mechanical design and electronics. I enjoy packaging dense assemblies, understanding how heat gets out, and making sure the final geometry can actually be fabricated, assembled, and serviced.
          </p>
          <p>
            FIRST Robotics gave me an early habit of prototyping quickly and testing the physical mechanism instead of defending the first CAD model. Professional fixture work strengthened the other half of that lesson: small details in setup and usability matter to the people building the product every day.
          </p>
          <p>
            I’m especially interested in aerospace, advanced robotics, electronics packaging, and hardware organizations where mechanical, electrical, manufacturing, and software teams work closely together.
          </p>
          <p className="about-aside">Outside formal projects, I’m also the kind of person willing to make questionable but carefully considered modifications to a desktop PC.</p>
        </div>
        <aside className="education-card">
          <p className="eyebrow">Education</p>
          <h2>{education.school}</h2>
          <p>{education.program}</p>
          <dl>
            <div><dt>GPA</dt><dd>{education.gpa}</dd></div>
            <div><dt>Standing</dt><dd>{education.distinction}</dd></div>
            <div><dt>Plan</dt><dd>{education.date}</dd></div>
          </dl>
          <h3>Selected coursework</h3>
          <ul>{education.coursework.map((course) => <li key={course}>{course}</li>)}</ul>
          <Link className="text-link" href="/resume">Resume overview →</Link>
        </aside>
      </section>
      <ContactCta />
    </>
  );
}
