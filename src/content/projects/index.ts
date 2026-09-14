import { autonomousKart } from "./autonomous-kart";
import { ansysAutomation } from "./ansys-automation";
import { eagleBookshelf } from "./eagle-bookshelf";
import { firstRobotics } from "./first-robotics";
import { lockingMecanum } from "./locking-mecanum";
import { manufacturingFixtures } from "./manufacturing-fixtures";
import { powerDevice } from "./power-device";
import type { Project, ProjectCategory } from "./types";

export const projects: Project[] = [
  powerDevice,
  manufacturingFixtures,
  firstRobotics,
  autonomousKart,
  ansysAutomation,
  eagleBookshelf,
  lockingMecanum,
]
  .filter((project) => project.public)
  .sort((a, b) => a.order - b.order);

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Professional",
  "Thermal",
  "Mechanical Design",
  "Manufacturing",
  "Robotics",
  "Autonomous Systems",
  "Personal",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export type { Project, ProjectCategory, ProjectVisual } from "./types";
