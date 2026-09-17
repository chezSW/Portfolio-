import type { Project } from "./types";

export const firstRobotics: Project = {
  title: "FIRST Robotics",
  slug: "first-robotics",
  subtitle: "A student progression from early fabrication to mechanical design and team leadership",
  summary: "Ten years across FLL, FTC, and FRC—progressing from a mechanical member into CAD, mechanism design, subsystem ownership, and leadership of a roughly 15-person team.",
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
      src: "/images/first/archive/roboctopi-robot.jpg",
      alt: "Roboctopi FTC competition robot",
      caption: "FTC 14496 Roboctopi — one chapter in a student path spanning FLL, FTC, and FRC.",
      public: true,
      aspect: "wide",
    },
  ],
  process: ["Challenge", "Brainstorm", "Prototype", "CAD", "Design review", "Build", "Test", "Iterate"],
  sections: [],
};
