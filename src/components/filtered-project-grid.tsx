"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/content/projects";
import { projectCategories } from "@/content/projects";
import { ProjectCard } from "./project-card";

type Filter = "All" | ProjectCategory;

export function FilteredProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visibleProjects = filter === "All"
    ? projects
    : projects.filter((project) => project.categories.includes(filter));

  return (
    <>
      <div className="project-filters" aria-label="Filter projects">
        {projectCategories.map((category) => (
          <button
            className={category === filter ? "is-active" : ""}
            key={category}
            onClick={() => setFilter(category)}
            type="button"
            aria-pressed={category === filter}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="project-count" aria-live="polite">
        {visibleProjects.length.toString().padStart(2, "0")} projects shown
      </p>
      <div className="project-grid project-grid--all">
        {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </>
  );
}
