import type { Project } from "./types";

export const spaceElectronics: Project = {
  title: "Space Electronics Hardware",
  slug: "space-electronics-packaging",
  subtitle: "Mechanical design for radiation-hardened computing hardware",
  summary:
    "Mechanical design, packaging, thermal, drawings, and production work from my mechanical engineering internship.",
  categories: ["Professional", "Mechanical Design"],
  featured: true,
  public: true,
  order: 1,
  role: "Mechanical Engineering Intern",
  organization: "Power Device Corp",
  date: "June 2025 — Present",
  location: "San Diego, California",
  focus: "Mechanical Design / Electronics Packaging",
  system: "Radiation-Hardened Electronics",
  status: "Professional / NDA-Compliant",
  keyResult: "Learning how a complete electronics product comes together",
  tools: ["SolidWorks", "GD&T", "Fabrication Drawings"],
  skills: ["PCB mechanical integration", "Chassis concepts", "System layouts"],
  visual: "packaging",
  media: [],
  metrics: [],
  process: ["Requirements", "Layout", "CAD", "Review", "Drawings", "Production support"],
  sections: [
    {
      title: "From mechanisms to complete hardware",
      paragraphs: [
        "FIRST Robotics taught me to think about mechanisms. My internship pushed that outward: the mechanism became a complete electronics assembly, and every mechanical decision affected something else around it.",
        "I helped develop chassis and packaging concepts for space electronics using PCB models, card assemblies, covers, carriers, connectors, mounting hardware, and the mechanical envelope around them.",
      ],
    },
    {
      title: "Figuring out how everything fits",
      paragraphs: [
        "I built detailed SolidWorks assemblies to work through PCB integration, mezzanine alignment, connector access, card spacing, covers, enclosure geometry, and the interfaces that determine whether the product can be assembled and serviced.",
      ],
      bullets: [
        "PCB and card-level mechanical integration",
        "Chassis, cover, carrier, and front-panel concepts",
        "Board-to-board relationships and connector access",
        "Assembly, serviceability, and manufacturing constraints",
      ],
    },
    {
      title: "CAD was part of the conversation",
      paragraphs: [
        "CAD models and physical prototypes helped communicate ideas during design reviews. The goal was not simply a complete assembly model; it was a model that made packaging conflicts and design options easier to discuss.",
      ],
    },
    {
      title: "Thermal became part of the design",
      paragraphs: [
        "As the packaging work developed, I began using steady-state thermal analysis to compare processor placement, conductive paths, heat shunts, interface material, and local chassis geometry. Those results fed back into the mechanical layout rather than living in a separate report.",
      ],
    },
    {
      title: "Getting the design ready to build",
      paragraphs: [
        "I also created fabrication drawings and used GD&T where appropriate. In parallel, production fixture work connected the product design to the technicians assembling microelectronics hardware every day.",
        "Later, I wrote a Python script inside ANSYS Mechanical to automate component-temperature review. That was a small workflow improvement, but it closed the loop nicely: I was improving both the hardware and the way I evaluated it.",
      ],
    },
    {
      title: "What is shown here",
      paragraphs: [
        "This page is intentionally a public shell. Customer information, proprietary geometry, dimensions, electrical data, and unapproved internship images are not included.",
      ],
      note: "Professional images are private by default and appear only after explicit public approval.",
    },
  ],
};
