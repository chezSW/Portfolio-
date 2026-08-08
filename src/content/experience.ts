export type Experience = {
  role: string;
  organization: string;
  location: string;
  date: string;
  summary: string;
  contributions: string[];
  relatedProjects: string[];
};

export const experience: Experience[] = [
  {
    role: "Mechanical Engineering Intern",
    organization: "Power Device Corp",
    location: "San Diego, California",
    date: "June 2025 — Present",
    summary:
      "Mechanical design, thermal analysis, electronics packaging, drawings, fixtures, and machining for space-qualified and radiation-hardened electronics hardware.",
    contributions: [
      "Develop SolidWorks PCB assemblies, chassis concepts, system layouts, and GD&T fabrication drawings.",
      "Support approximately three products through concept development, packaging, manufacturing readiness, and production support.",
      "Use steady-state thermal analysis to inform component placement, heat paths, and chassis decisions.",
      "Designed and delivered 20+ production fixtures using additive and subtractive manufacturing.",
    ],
    relatedProjects: ["thermal-analysis", "space-electronics-packaging", "manufacturing-fixtures"],
  },
  {
    role: "Electronics Packaging Lead",
    organization: "Mesa Full Self Driving Club",
    location: "San Diego, California",
    date: "March 2026 — Present",
    summary:
      "Leading the enclosure and mounting work that integrates autonomous-computing hardware into a serviceable, environmentally protected kart package.",
    contributions: [
      "Develop CAD mounts, enclosure geometry, sealing features, and wire-routing strategy.",
      "Coordinate mechanical, electrical, and autonomy requirements across subsystem interfaces.",
      "Contribute one subsystem to a team that placed Top 5 nationally in a 12-university field.",
    ],
    relatedProjects: ["autonomous-kart-packaging"],
  },
  {
    role: "Mechanical Design Lead / Team Member",
    organization: "FIRST Tech Challenge",
    location: "San Diego, California",
    date: "August 2014 — April 2024",
    summary:
      "A decade of competition robotics spanning CAD, prototyping, fabrication, integration, testing, and later mechanical leadership.",
    contributions: [
      "Designed and built drivetrains, odometry systems, linear mechanisms, intakes, end effectors, and custom aluminum hardware.",
      "Worked within a 15-person team through design reviews, subsystem integration, and competition deadlines.",
      "Competed at the 2024 FIRST Championship; the team earned 1st Place for the Think Award.",
    ],
    relatedProjects: ["first-robotics", "locking-mecanum-wheel"],
  },
];
