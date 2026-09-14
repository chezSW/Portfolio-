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
    date: "June 2025 — August 2026",
    summary:
      "Mechanical design, thermal analysis, electronics packaging, drawings, fixtures, and machining support for high-reliability electronics hardware.",
    contributions: [
      "Develop SolidWorks PCB assemblies, chassis concepts, system layouts, and GD&T fabrication drawings.",
      "Use steady-state thermal analysis to inform component placement, heat paths, and chassis decisions.",
      "Worked across more than 20 production-fixture configurations using additive and subtractive manufacturing.",
    ],
    relatedProjects: ["power-device-corporation", "manufacturing-fixtures", "ansys-temperature-automation"],
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
      "Contribute one subsystem to a team that placed in the Top 5 among 12 universities at Purdue University's Autonomous Karting Series.",
    ],
    relatedProjects: ["autonomous-kart-packaging"],
  },
  {
    role: "Student, Mechanical Designer, Team Lead, and Mentor",
    organization: "FIRST Tech Challenge",
    location: "San Diego, California",
    date: "August 2014 — Present",
    summary:
      "A progression from FLL and FTC fabrication into mechanical design, team leadership, FRC integration, and mentorship.",
    contributions: [
      "Contributed to drivetrains, odometry systems, linear mechanisms, intakes, end effectors, and custom aluminum hardware.",
      "Worked through design reviews, subsystem integration, and competition deadlines with the team.",
      "Continued after aging out as a mentor focused on CAD, prototyping, design reviews, and troubleshooting.",
    ],
    relatedProjects: ["first-robotics"],
  },
];
