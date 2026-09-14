"use client";

import { useState } from "react";
import type { Project } from "@/content/projects";
import { ProjectCard } from "./project-card";

type Filter = "All" | "Professional" | "Student Teams" | "Personal";

const filters: Filter[] = ["All", "Professional", "Student Teams", "Personal"];

function belongsTo(project: Project, filter: Filter) {
  if (filter === "All") return true;
  if (filter === "Professional") return project.categories.includes("Professional");
  if (filter === "Personal") return project.categories.includes("Personal");
  return ["autonomous-kart-packaging", "first-robotics"].includes(project.slug);
}

export function FilteredProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visibleProjects = projects.filter((project) => belongsTo(project, filter));

  return (
    <>
      <div className="project-filters" aria-label="Filter projects">
        {filters.map((category) => (
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
      <div className="filtered-project-list" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            variant={index % 4 === 0 ? "wide" : index % 4 === 1 ? "portrait" : index % 4 === 3 ? "compact" : "standard"}
            showSummary={index % 3 === 0}
          />
        ))}
      </div>
    </>
  );
}
