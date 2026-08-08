import type { Metadata } from "next";
import Link from "next/link";
import { CertificationsList } from "@/components/certifications-list";
import { PageIntro } from "@/components/page-intro";
import { siteConfig } from "@/config/site";
import { education } from "@/content/education";
import { experience } from "@/content/experience";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume overview for Chase Norvell: mechanical design, thermal analysis, electronics packaging, manufacturing, and robotics.",
  alternates: { canonical: "/resume" },
};

const skills = [
  { title: "CAD & analysis", items: ["SolidWorks", "ANSYS Mechanical", "Fusion 360", "Onshape", "Autodesk Inventor"] },
  { title: "Manufacturing", items: ["Fusion 360 CAM", "CNC milling", "FDM printing", "SLA printing", "Soldering", "Silicone molding"] },
  { title: "Engineering methods", items: ["GD&T", "Fabrication drawings", "Tolerance stack-ups", "Fixture design", "Electronics packaging", "Mechanical integration"] },
  { title: "Software", items: ["Python", "OrCAD / Allegro — PCB review familiarity"] },
];

export default function ResumePage() {
  return (
    <>
      <PageIntro
        eyebrow="Resume / Technical overview"
        title="Mechanical design, thermal analysis, and hands-on hardware development."
        description="The portfolio provides the engineering context behind the resume: what I owned, how I worked, and what changed because of the work."
      />
      <section className="resume-actions shell">
        {siteConfig.resumePath ? (
          <a className="button button--primary" href={siteConfig.resumePath} download>Download resume PDF</a>
        ) : (
          <div className="document-status"><span>PDF</span><div><strong>Approved resume file pending</strong><p>The download button will appear as soon as a public resume PDF is added.</p></div></div>
        )}
        <Link className="button" href="/projects">View project evidence</Link>
      </section>
      <section className="resume-overview shell">
        <div className="resume-column">
          <p className="eyebrow">Experience</p>
          {experience.map((item) => (
            <article key={`${item.organization}-${item.date}`}>
              <span>{item.date}</span><h2>{item.role}</h2><h3>{item.organization}</h3><p>{item.summary}</p>
            </article>
          ))}
        </div>
        <div className="resume-column">
          <p className="eyebrow">Education</p>
          <article>
            <span>{education.date}</span><h2>{education.school}</h2><h3>{education.program}</h3><p>{education.gpa} · {education.distinction}</p>
          </article>
          <p className="eyebrow resume-skills-label">Technical skills</p>
          <div className="resume-skills">
            {skills.map((group) => <div key={group.title}><h3>{group.title}</h3><p>{group.items.join(" · ")}</p></div>)}
          </div>
        </div>
      </section>
      <div className="shell"><CertificationsList /></div>
    </>
  );
}
