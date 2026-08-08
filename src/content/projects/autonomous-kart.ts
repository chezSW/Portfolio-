import type { Project } from "./types";

export const autonomousKart: Project = {
  title: "Autonomous Kart Electronics Package",
  slug: "autonomous-kart-packaging",
  subtitle: "Serviceable, environmentally protected vehicle integration",
  summary:
    "Leading electronics enclosure and mounting design while coordinating mechanical, electrical, and autonomy requirements inside an autonomous kart.",
  categories: ["Autonomous Systems", "Mechanical Design", "Robotics"],
  featured: true,
  public: true,
  order: 4,
  role: "Electronics Packaging Lead",
  organization: "Mesa Full Self Driving Club",
  date: "March 2026 — Present",
  focus: "Electronics Packaging / Vehicle Integration",
  system: "Autonomous Kart",
  status: "Student Engineering Team / In Development",
  keyResult: "Team placed Top 5 nationally in a 12-university field",
  tools: ["CAD", "Enclosure Design", "Mechanical Integration"],
  skills: ["Sealing", "Wire routing", "Serviceability"],
  visual: "vehicle",
  media: [],
  metrics: [
    { value: "Top 5", label: "Team result", detail: "Autonomous Karting Series" },
    { value: "12", label: "Universities", detail: "National field at Purdue University" },
  ],
  process: ["Map interfaces", "Package", "Review", "Integrate", "Iterate"],
  sections: [
    {
      eyebrow: "01 / System",
      title: "Packaging autonomy hardware into a vehicle",
      paragraphs: [
        "The kart needs a compact electronics package that fits the vehicle, protects critical hardware, supports clean wire routing, and remains accessible when the team is testing or troubleshooting.",
      ],
    },
    {
      eyebrow: "02 / Role",
      title: "Owning the mechanical-electrical interface",
      paragraphs: [
        "As electronics packaging lead, I develop CAD mounts and enclosure concepts while coordinating mechanical, electrical, and software requirements. The objective is a serviceable, environmentally protected package that works with the rest of the vehicle.",
      ],
      bullets: ["Mounting and enclosure CAD", "Sealing features", "Wire routing", "Watertight design", "Service and assembly access"],
    },
    {
      eyebrow: "03 / Integration",
      title: "Requirements arrive from three disciplines",
      paragraphs: [
        "Mechanical geometry, electrical interfaces, connector access, sensing needs, and software debugging all shape the package. Regular cross-functional review helps prevent a locally good mechanical design from creating an integration problem elsewhere.",
      ],
    },
    {
      eyebrow: "04 / Team outcome",
      title: "National competition context",
      paragraphs: [
        "Mesa Full Self Driving placed Top 5 nationally at Purdue University’s Autonomous Karting Series in a field of 12 universities. This is a team result; the packaging work is one subsystem within the larger autonomous vehicle effort.",
      ],
    },
  ],
};
