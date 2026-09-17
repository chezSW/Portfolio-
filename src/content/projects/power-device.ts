import type { Project } from "./types";

export const powerDevice: Project = {
  title: "Internship at Power Device Corporation",
  slug: "power-device-corporation",
  subtitle: "PCB interfaces, thermal studies, drawings, and card-level hardware",
  summary:
    "Mechanical design, thermal analysis, manufacturing, and production hardware for high-reliability aerospace electronics.",
  categories: ["Professional", "Mechanical Design", "Manufacturing", "Thermal"],
  featured: true,
  public: true,
  order: 1,
  role: "Mechanical Engineering Intern",
  organization: "Power Device Corporation",
  date: "June 2025 — August 2026",
  location: "San Diego, California",
  focus: "Mechanical Design / Packaging / Thermal / Manufacturing",
  system: "Space Electronics Hardware",
  status: "Selected professional work and approved project imagery",
  keyResult: "20+ fixture configurations; one setup reduced from roughly 5 minutes to under 1 minute",
  tools: ["SolidWorks", "ANSYS Mechanical", "Fusion 360 CAM", "Python"],
  skills: ["Electronics packaging", "Fixture design", "Thermal design", "GD&T"],
  visual: "packaging",
  media: [
    {
      src: "/images/professional/power-device/full-card-render.png",
      alt: "Rendered HPSC electronics assembly with its PCB, frame, and thermal hardware visible",
      caption: "Integrated HPSC card assembly",
      public: true,
    },
  ],
  metrics: [
    { value: "20+", label: "Fixture configurations", detail: "Original designs plus machining and production-support work" },
    { value: "~5 min → <1 min", label: "Setup-time estimate", detail: "Shop-floor comparison for one clipping fixture" },
  ],
  process: [
    "Production problem",
    "Requirements",
    "CAD",
    "Analysis",
    "Prototype",
    "Drawing",
    "Hardware",
    "Feedback",
  ],
  sections: [],
};
