import type { Project } from "./types";

export const firstRobotics: Project = {
  title: "FIRST Robotics",
  slug: "first-robotics",
  subtitle: "Learning engineering by building, testing, and redesigning complete robot systems",
  summary: "Ten years across FLL, FTC, and FRC—progressing from fabrication into CAD, mechanism ownership, rapid prototyping, system integration, and technical leadership.",
  categories: ["Robotics", "Mechanical Design", "Manufacturing"],
  featured: true,
  public: true,
  order: 3,
  role: "Student, Mechanical Designer, and Team Lead",
  organization: "FIRST LEGO League, FIRST Tech Challenge, and FIRST Robotics Competition",
  date: "2014 — 2024",
  focus: "Mechanical Design / Prototyping / Leadership",
  system: "Competition Robotics",
  status: "Student competition experience",
  keyResult: "A decade-long progression from team member to mechanical designer and team lead",
  tools: ["Fusion 360", "Onshape", "CNC", "FDM Printing", "Iterative Testing"],
  skills: ["Mechanism design", "Prototyping", "Leadership", "System integration"],
  visual: "robotics",
  media: [
    {
      src: "/images/first/story/powerplay-mantis-hero.jpg",
      alt: "Green Griffins PowerPlay robot with its intake fully extended",
      caption: "Mantis — the result of a season built around prototypes, testing, and iteration.",
      public: true,
      aspect: "wide",
    },
  ],
  process: ["Challenge", "Brainstorm", "Prototype", "CAD", "Design review", "Build", "Test", "Iterate"],
  sections: [],
};
