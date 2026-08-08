import type { Project } from "./types";

export const thermalAnalysis: Project = {
  title: "Thermal Architecture Trade Study",
  slug: "thermal-analysis",
  subtitle: "Steady-state analysis for space electronics packaging",
  summary:
    "Compared two processor-placement concepts to understand how the conductive heat path into the chassis affected predicted component temperature.",
  categories: ["Professional", "Thermal", "Mechanical Design"],
  featured: true,
  public: true,
  order: 1,
  role: "Mechanical Engineering Intern",
  organization: "Power Device Corp",
  date: "June 2025 — Present",
  location: "San Diego, California",
  focus: "Thermal / Mechanical Packaging",
  system: "Space Electronics",
  status: "Professional / NDA-Compliant",
  keyResult: "Selected the lower-temperature packaging architecture",
  tools: ["ANSYS Mechanical", "SolidWorks", "Steady-State Thermal"],
  skills: ["Heat-path analysis", "Packaging trade studies", "Design iteration"],
  visual: "thermal",
  media: [],
  metrics: [
    {
      value: "~96 °C",
      label: "Architecture A",
      detail: "More direct conductive path to the chassis",
    },
    {
      value: "~25 °C",
      label: "Predicted reduction",
      detail: "Compared with the alternate placement",
    },
    {
      value: "2",
      label: "Architectures compared",
      detail: "Processor placement and heat-path concepts",
    },
  ],
  thermalComparison: {
    first: {
      label: "Architecture A",
      value: "~96 °C",
      detail: "Shorter, more direct path into the chassis",
    },
    second: {
      label: "Architecture B",
      value: "~121 °C",
      detail: "Alternate component placement and heat path",
    },
    delta: "~25 °C lower",
    heatPath: ["Processor", "Heat shunt", "Chassis", "External structure"],
  },
  process: ["Define concepts", "Build model", "Solve", "Compare", "Inform packaging"],
  sections: [
    {
      eyebrow: "01 / Context",
      title: "The engineering question",
      paragraphs: [
        "A space-electronics package needed a processor architecture with an effective conductive path into the chassis. Placement affected more than temperature: it also influenced PCB routing direction, heat-shunt geometry, and the mechanical layout around the assembly.",
        "I used a steady-state thermal trade study to compare two packaging concepts before the next mechanical iteration.",
      ],
    },
    {
      eyebrow: "02 / Ownership",
      title: "My role",
      paragraphs: [
        "I prepared and compared the two concepts in ANSYS Mechanical, interpreted the predicted temperature difference, and communicated how the result affected processor placement and packaging direction.",
      ],
      bullets: [
        "Evaluate conductive heat-flow paths",
        "Compare processor/component placement",
        "Study chassis conduction and heat-shunt concepts",
        "Translate analysis into a mechanical packaging decision",
      ],
    },
    {
      eyebrow: "03 / Constraints",
      title: "A coupled packaging decision",
      paragraphs: [
        "The thermal result could not be treated in isolation. The preferred path also had to remain compatible with PCB routing, mechanical interfaces, assembly access, and the chassis concept.",
      ],
      note:
        "Detailed geometry, boundary conditions, loads, materials, and mesh settings are intentionally omitted until approved for public release.",
    },
    {
      eyebrow: "04 / Interpretation",
      title: "Why the architecture changed",
      paragraphs: [
        "The architecture with a more direct path to the chassis predicted a processor temperature near 96 °C. The alternate placement was approximately 25 °C hotter. That difference was large enough to make thermal performance a deciding input to the next layout iteration.",
        "The comparison informed component placement, PCB routing direction, heat-shunt design, and the surrounding mechanical package.",
      ],
    },
    {
      eyebrow: "05 / Outcome",
      title: "Analysis became a design input",
      paragraphs: [
        "The lower-temperature architecture became the basis for continued packaging development. The value of the study was not just a contour plot; it established a clearer heat-flow strategy for the hardware team to carry into the next design cycle.",
      ],
    },
  ],
};
