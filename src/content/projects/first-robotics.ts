import type { Project } from "./types";

export const firstRobotics: Project = {
  title: "A Decade of FIRST Robotics",
  slug: "first-robotics",
  subtitle: "Mechanical design, fabrication, integration, and team leadership",
  summary:
    "Ten years of iterative robot development, progressing from team member to mechanical leadership on a 15-person FTC team.",
  categories: ["Robotics", "Mechanical Design", "Manufacturing"],
  featured: false,
  public: true,
  order: 5,
  role: "Mechanical Design Lead / Team Member",
  organization: "FIRST Tech Challenge",
  date: "August 2014 — April 2024",
  focus: "Robot Mechanisms / Electromechanical Integration",
  system: "Competition Robotics",
  status: "Student Team",
  keyResult: "Competed at the 2024 FIRST Championship",
  tools: ["CAD", "CNC", "FDM Printing", "Iterative Testing"],
  skills: ["Drivetrains", "Linear mechanisms", "Dense packaging"],
  visual: "robotics",
  media: [],
  metrics: [
    { value: "10 yrs", label: "FIRST involvement", detail: "Team member through mechanical leadership" },
    { value: "15", label: "Team members", detail: "Cross-functional FTC team" },
    { value: "224", label: "Championship field", detail: "Approximate 2024 team count" },
  ],
  process: ["Game analysis", "Concepts", "CAD", "Fabricate", "Test", "Compete"],
  sections: [
    {
      eyebrow: "01 / Overview",
      title: "Engineering under a competition clock",
      paragraphs: [
        "FIRST taught me to move quickly without separating design from build reality. Over roughly ten years, I worked across mechanical design, prototyping, fabrication, subsystem integration, design review, and iterative testing.",
      ],
    },
    {
      eyebrow: "02 / Systems",
      title: "Mechanisms built and iterated",
      bullets: [
        "Belted mecanum drivetrains and custom milled aluminum chassis",
        "Three-wheel odometry packaging",
        "Linear slides, including a 36-inch extension",
        "3D-printed intakes and end effectors",
        "Servo-actuated claws, turrets, arms, and pass-off mechanisms",
        "Dense electromechanical packaging inside the FTC envelope",
      ],
    },
    {
      eyebrow: "03 / Growth",
      title: "From contributor to mechanical leadership",
      paragraphs: [
        "My responsibilities grew over time; I did not lead for the full decade. Later work included coordinating mechanical decisions, supporting design reviews, and helping a 15-person team converge on reliable competition hardware.",
      ],
    },
    {
      eyebrow: "04 / Competition",
      title: "Team achievement at the 2024 Championship",
      paragraphs: [
        "The team competed in the approximately 224-team field at the 2024 FIRST Championship and earned 1st Place for the Think Award. Across the years, the team also earned judged awards including Inspire, Impact, Think, Innovate, Design, and Control honors.",
      ],
      note: "Awards shown here are team achievements, not individual awards.",
    },
  ],
};
