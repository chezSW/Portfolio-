import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { experience } from "@/content/experience";
import { getProject } from "@/content/projects";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional hardware, autonomous systems, and competition robotics experience by Chase Norvell.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="The places I learned by doing."
        description="Professional hardware work, an autonomous-kart team, and ten years of FIRST Robotics."
      />
      <section className="experience-list shell" aria-label="Engineering experience">
        {experience.map((item) => (
          <article className="experience-entry" key={`${item.organization}-${item.date}`}>
            <div className="experience-entry__meta">
              <p>{item.date}</p>
              <p>{item.location}</p>
            </div>
            <div className="experience-entry__body">
              <h2>{item.role}</h2>
              <p className="experience-entry__organization">{item.organization}</p>
              <p>{item.summary}</p>
              <ul>
                {item.contributions.map((contribution) => (
                  <li key={contribution}>{contribution}</li>
                ))}
              </ul>
              <div className="experience-entry__links">
                {item.relatedProjects.map((slug) => {
                  const project = getProject(slug);
                  return project ? (
                    <Link key={slug} href={`/projects/${slug}`}>
                      {project.title} →
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
