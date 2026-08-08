import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "@/components/contact-cta";
import { PageIntro } from "@/components/page-intro";
import { experience } from "@/content/experience";
import { getProject } from "@/content/projects";

export const metadata: Metadata = {
  title: "Engineering Experience",
  description: "Professional, autonomous-systems, and competition-robotics experience across mechanical design, thermal, manufacturing, and integration.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience / 2014—Present"
        title="Hands-on engineering across professional hardware and student teams."
        description="A concise timeline of roles and technical contributions, with deeper project links where the work can be shown responsibly."
      />
      <section className="timeline shell" aria-label="Engineering experience timeline">
        {experience.map((item, index) => (
          <article className="timeline-entry" key={`${item.organization}-${item.date}`}>
            <div className="timeline-entry__index"><span>{(index + 1).toString().padStart(2, "0")}</span></div>
            <div className="timeline-entry__meta">
              <span>{item.date}</span>
              <span>{item.location}</span>
            </div>
            <div className="timeline-entry__body">
              <p className="eyebrow">{item.organization}</p>
              <h2>{item.role}</h2>
              <p className="timeline-entry__summary">{item.summary}</p>
              <ul>{item.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
              <div className="timeline-entry__projects">
                {item.relatedProjects.map((slug) => {
                  const project = getProject(slug);
                  return project ? <Link key={slug} href={`/projects/${slug}`}>{project.title} ↗</Link> : null;
                })}
              </div>
            </div>
          </article>
        ))}
      </section>
      <ContactCta />
    </>
  );
}
