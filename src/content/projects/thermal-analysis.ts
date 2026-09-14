import type { Project } from "./types";

export const thermalAnalysis: Project = {
  title: "Thermal Analysis & Hardware Cooling",
  slug: "thermal-analysis",
  subtitle: "Steady-state analysis for space electronics packaging",
  summary:
    "Compared two processor-placement concepts to understand how the conductive heat path into the chassis affected predicted component temperature.",
  categories: ["Professional", "Thermal", "Mechanical Design"],
  featured: true,
  public: true,
  order: 2,
  role: "Mechanical Engineering Intern",
  organization: "Power Device Corp",
  date: "June 2025 — Present",
  location: "San Diego, California",
  focus: "Thermal / Mechanical Packaging",
  system: "Space Electronics",
  status: "Professional / NDA-Compliant",
  keyResult: "Used thermal results to change the mechanical design",
  tools: ["ANSYS Mechanical", "SolidWorks", "Steady-State Thermal"],
  skills: ["Heat-path analysis", "Packaging trade studies", "Design iteration"],
  visual: "thermal",
  media: [],
  metrics: [
    {
      value: "~25 °C",
      label: "Processor-placement difference",
      detail: "Between two compared concepts",
    },
    {
      value: "~20%",
      label: "Chassis weight reduction",
      detail: "From a later pocketing iteration",
    },
    {
      value: "~2%",
      label: "Overall temperature reduction",
      detail: "Associated with that pocketed chassis iteration",
    },
  ],
  process: ["Define concepts", "Build model", "Solve", "Compare", "Inform packaging"],
  sections: [
    {
      title: "The question",
      paragraphs: [
        "The thermal work usually started with a mechanical question: where should the processor go, how should heat reach the chassis, or which local geometry made that path work better?",
        "I used steady-state studies in ANSYS Mechanical to compare those choices before the next packaging iteration.",
      ],
    },
    {
      title: "Why the processor moved",
      paragraphs: [
        "One trade study compared processor placement on opposite sides of the assembly. The concepts differed by roughly 25 °C, which was enough to influence processor placement, PCB routing direction, heat-shunt design, and the surrounding package.",
      ],
    },
    {
      title: "Getting heat into the chassis",
      paragraphs: [
        "I also compared local geometry around conductive paths: base geometry, chamfers, fillets, extended features, and combinations of those changes. I looked at how heat flux moved around standoffs and walls, and how heat shunts behaved with and without interface material.",
        "The useful result was not the contour plot by itself. It was understanding which geometry gave heat a better path without creating a new packaging or manufacturing problem.",
      ],
      note:
        "Geometry, loads, materials, boundary conditions, interface resistance, and mesh details remain private until approved.",
    },
    {
      title: "Taking material out without making things hotter",
      paragraphs: [
        "A later chassis iteration used pocketing to remove unnecessary material. That version reduced chassis weight by approximately 20% while reducing overall card temperatures by roughly 2%.",
        "I am not claiming structural performance from that result; this was a mechanical and thermal design iteration, not a public structural-analysis result.",
      ],
    },
    {
      title: "What changed",
      paragraphs: [
        "Thermal analysis became one of the inputs to processor placement, heat-path architecture, heat-shunt details, interface material, local chassis geometry, and enclosure packaging. The simulations were most useful when they ended with a different piece of CAD.",
      ],
    },
  ],
};
