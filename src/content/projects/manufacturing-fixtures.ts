import type { Project } from "./types";

export const manufacturingFixtures: Project = {
  title: "Production Fixture Development",
  slug: "manufacturing-fixtures",
  subtitle: "From technician problem to CNC production hardware",
  summary:
    "Designed and delivered more than 20 fixtures through a repeatable loop of CAD, rapid prototyping, technician feedback, revision, and machining.",
  categories: ["Professional", "Manufacturing", "Mechanical Design"],
  featured: true,
  public: true,
  order: 3,
  role: "Mechanical Engineering Intern",
  organization: "Power Device Corp",
  date: "June 2025 — Present",
  location: "San Diego, California",
  focus: "Fixture Design / Manufacturing",
  system: "Microelectronics Production Support",
  status: "Professional / NDA-Compliant",
  keyResult: "Delivered 20+ production fixtures",
  tools: ["SolidWorks", "Fusion 360 CAM", "CNC Milling", "FDM / SLA"],
  skills: ["Workholding", "Design for manufacture", "Technician collaboration"],
  visual: "fixture",
  media: [],
  metrics: [
    {
      value: "20+",
      label: "Fixtures delivered",
      detail: "Across assembly and production-support needs",
    },
    {
      value: "15–25%",
      label: "Setup-time reduction",
      detail: "For relevant fixture workflows",
    },
    {
      value: "3-axis",
      label: "CNC experience",
      detail: "Aluminum and engineering plastics",
    },
  ],
  process: ["Observe", "CAD", "Prototype", "Technician review", "Revise", "Machine"],
  sections: [
    {
      eyebrow: "01 / Context",
      title: "Small tools, direct production impact",
      paragraphs: [
        "Microelectronics assembly and production work often depends on purpose-built hardware that locates, supports, aligns, or protects small components. A fixture can be mechanically simple and still have an outsized effect on repeatability, setup, and operator confidence.",
      ],
    },
    {
      eyebrow: "02 / Ownership",
      title: "My role",
      paragraphs: [
        "I worked directly with technicians to understand the operation, capture the practical constraints, develop the CAD, prototype the concept, and incorporate feedback. Where the application called for a durable production part, I created CAM and machined the final fixture.",
      ],
      bullets: [
        "Package-lid alignment fixtures",
        "Component carriers",
        "Wire-bonding fixtures",
        "Lead-forming fixtures",
        "Drilling and location fixtures",
      ],
    },
    {
      eyebrow: "03 / Process",
      title: "Prototype before committing to metal",
      paragraphs: [
        "FDM and SLA prototypes made it fast to check part access, handling, alignment, and clearances at the workstation. That early feedback reduced the cost of revising a concept and made the final machined version more useful on day one.",
        "The work was iterative by design: technician feedback was an engineering input, not a final approval step.",
      ],
    },
    {
      eyebrow: "04 / Manufacturing",
      title: "Owning the handoff into hardware",
      paragraphs: [
        "For machined fixtures, I used Fusion 360 CAM for toolpaths and considered workholding, tool selection, feeds and speeds, stock access, and practical setup on a 3-axis CNC mill. I machined both aluminum and engineering plastics.",
      ],
      bullets: [
        "Design features around reachable tools and stable setups",
        "Choose prototype and production processes deliberately",
        "Translate CAD intent into a manufacturable part",
        "Inspect the finished hardware against the original need",
      ],
    },
    {
      eyebrow: "05 / Outcome",
      title: "A reusable production-support workflow",
      paragraphs: [
        "The result was more than a collection of one-off tools. The prototype-to-CNC loop became a reliable way to move workstation problems into production-ready hardware. Relevant fixtures reduced setup time by roughly 15–25% while improving repeatability, ergonomics, or ease of use.",
      ],
      note:
        "Selected work is described with NDA-compliant language. Fixture geometry and production details remain private unless explicitly approved.",
    },
  ],
};
