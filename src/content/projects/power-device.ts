import type { Project } from "./types";

export const powerDevice: Project = {
  title: "Power Device Corporation Internship",
  slug: "power-device-corporation",
  subtitle: "PCB interfaces, thermal studies, drawings, and card-level hardware",
  summary:
    "A shared card-level development effort connecting PCB interfaces, packaging, thermal studies, drawings, and engineering hardware.",
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
  keyResult: "Interfaces → analysis → drawings → hardware",
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
  metrics: [{ value: "~12", label: "PCB geometry iterations", detail: "Mechanical definition evolved with electrical and packaging feedback" }],
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
