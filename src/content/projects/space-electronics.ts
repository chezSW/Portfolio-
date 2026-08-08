import type { Project } from "./types";

export const spaceElectronics: Project = {
  title: "Space Electronics Packaging",
  slug: "space-electronics-packaging",
  subtitle: "Mechanical design for radiation-hardened computing hardware",
  summary:
    "Mechanical packaging, chassis concepts, PCB assemblies, and fabrication drawings supporting space-electronics products from early concept work through manufacturing readiness.",
  categories: ["Professional", "Mechanical Design"],
  featured: true,
  public: true,
  order: 2,
  role: "Mechanical Engineering Intern",
  organization: "Power Device Corp",
  date: "June 2025 — Present",
  location: "San Diego, California",
  focus: "Mechanical Design / Electronics Packaging",
  system: "Radiation-Hardened Electronics",
  status: "Professional / NDA-Compliant",
  keyResult: "Supported approximately three hardware products",
  tools: ["SolidWorks", "GD&T", "Fabrication Drawings"],
  skills: ["PCB mechanical integration", "Chassis concepts", "System layouts"],
  visual: "packaging",
  media: [],
  metrics: [
    { value: "~3", label: "Products supported", detail: "Across multiple development stages" },
    { value: "3D", label: "Assembly definition", detail: "PCB, chassis, and interface models" },
  ],
  process: ["Requirements", "Layout", "CAD", "Review", "Drawings", "Production support"],
  sections: [
    {
      eyebrow: "01 / Overview",
      title: "Mechanical hardware around critical electronics",
      paragraphs: [
        "I support the mechanical definition of space-qualified, radiation-hardened electronics hardware. The work connects PCB geometry, chassis concepts, conductive heat paths, assembly interfaces, and the drawings needed to turn a layout into hardware.",
      ],
    },
    {
      eyebrow: "02 / Contribution",
      title: "From system layout to fabrication definition",
      paragraphs: [
        "My work has included SolidWorks PCB assemblies, chassis and packaging concepts, system layouts, and GD&T fabrication drawings. I have supported approximately three products through early concept development, design iteration, packaging, manufacturing readiness, and ongoing production support.",
      ],
      bullets: [
        "Model PCB assemblies and mechanical interfaces",
        "Develop enclosure and chassis concepts",
        "Resolve packaging constraints across the assembly",
        "Create fabrication drawings with GD&T",
      ],
    },
    {
      eyebrow: "03 / Integration",
      title: "Cross-functional by default",
      paragraphs: [
        "Electronics packaging decisions span mechanical, electrical, manufacturing, and thermal requirements. I work across those interfaces so that geometry, heat flow, assembly, and fabrication remain compatible as the design changes.",
      ],
    },
    {
      eyebrow: "04 / Confidentiality",
      title: "Showing the work responsibly",
      paragraphs: [
        "This case study uses only high-level, NDA-compliant descriptions. Customer information, sensitive component specifications, proprietary layouts, dimensions, and internal documentation are not published.",
      ],
    },
  ],
};
