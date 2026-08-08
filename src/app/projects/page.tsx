import type { Metadata } from "next";
import { FilteredProjectGrid } from "@/components/filtered-project-grid";
import { PageIntro } from "@/components/page-intro";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Engineering Projects",
  description: "Mechanical design, thermal analysis, manufacturing, robotics, and electronics packaging case studies by Chase Norvell.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Project index / 01—07"
        title="Engineering work, from simulation to manufactured hardware."
        description="Professional, student-team, and personal projects organized by the engineering decisions, tools, and physical outcomes behind them."
        aside="Professional work uses only NDA-compliant descriptions and public-safe diagrams."
      />
      <section className="projects-index shell">
        <FilteredProjectGrid projects={projects} />
      </section>
    </>
  );
}
