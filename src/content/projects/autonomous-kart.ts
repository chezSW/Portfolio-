import type { Project } from "./types";

export const autonomousKart: Project = {
  title: "Mesa FSD — Autonomous Kart Electronics Package",
  slug: "autonomous-kart-packaging",
  subtitle: "Mechanical integration work in progress",
  summary:
    "Student-team packaging work for the electrical and autonomy hardware on an autonomous kart. Detailed subsystem evidence is still being documented.",
  categories: ["Autonomous Systems", "Mechanical Design", "Robotics"],
  featured: false,
  public: true,
  order: 5,
  role: "Electronics Packaging Lead",
  organization: "Mesa Full Self Driving Club",
  date: "March 2026 — Present",
  focus: "Electronics Packaging / Vehicle Integration",
  system: "Autonomous Kart",
  status: "Student Engineering Team / In Development",
  keyResult: "Packaging work in development",
  tools: ["CAD", "Enclosure Design", "Mechanical Integration"],
  skills: ["Interface mapping", "Wire routing", "Service access"],
  visual: "vehicle",
  media: [
    {
      src: "/images/kart/autonomous-kart.jpg",
      alt: "Student autonomous kart chassis with electronics and wiring installed",
      caption: "The current kart platform. Packaging work is developing around the vehicle and its subsystem interfaces.",
      public: true,
      aspect: "wide",
    },
  ],
  metrics: [
    { value: "Top 5", label: "Team result", detail: "Autonomous Karting Series" },
    { value: "12", label: "Universities", detail: "National field at Purdue University" },
  ],
  process: ["Map interfaces", "Package", "Review", "Integrate", "Iterate"],
  sections: [
    {
      eyebrow: "01 / System",
      title: "Current project context",
      paragraphs: [
        "The kart needs an electronics package that fits the vehicle, protects critical hardware, supports clean wire routing, and remains accessible during testing. The current public material establishes the vehicle context, not a completed enclosure.",
      ],
    },
    {
      eyebrow: "02 / Role",
      title: "My role",
      paragraphs: [
        "As electronics packaging lead, I develop mount and enclosure concepts while coordinating mechanical, electrical, and autonomy requirements. I am still documenting the first complete subsystem story, so this page does not claim a finished or validated package.",
      ],
      bullets: ["Mounting and enclosure concepts", "Wire-routing strategy", "Interface coordination", "Service and assembly access"],
      layout: "split",
    },
    {
      eyebrow: "03 / Integration",
      title: "Requirements arrive from three disciplines",
      paragraphs: [
        "Mechanical geometry, electrical interfaces, connector access, sensing needs, and debugging access all shape the package. Regular review helps catch integration problems before one subsystem is designed too far in isolation.",
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
