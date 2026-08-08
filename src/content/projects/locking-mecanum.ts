import type { Project } from "./types";

export const lockingMecanum: Project = {
  title: "Locking Mecanum Wheel",
  slug: "locking-mecanum-wheel",
  subtitle: "Servo-actuated roller constraint for selectable traction",
  summary:
    "A reproducible mechanism intended to preserve mecanum mobility when unlocked and provide more conventional forward traction when engaged.",
  categories: ["Personal", "Mechanical Design", "Robotics"],
  featured: false,
  public: true,
  order: 6,
  role: "Designer / Builder",
  organization: "Personal Project",
  date: "2023",
  focus: "Mechanism Design / Rapid Prototyping",
  system: "Mecanum Drivetrain",
  status: "Personal Prototype",
  tools: ["CAD", "FDM Printing", "Servo Actuation"],
  skills: ["Linkages", "Off-the-shelf hardware", "Design iteration"],
  visual: "mechanism",
  media: [],
  process: ["Problem", "Concept", "CAD", "Print", "Assemble", "Evaluate"],
  sections: [
    {
      eyebrow: "01 / Problem",
      title: "Mobility and traction pull in different directions",
      paragraphs: [
        "Mecanum rollers enable omnidirectional motion, but the same roller freedom can limit straightforward traction. I explored a mechanism that selectively constrains the rollers when conventional forward grip is more useful.",
      ],
    },
    {
      eyebrow: "02 / Concept",
      title: "A reversible mechanical state",
      paragraphs: [
        "A linear servo drives a linkage housed in 3D-printed components. The engaged mechanism applies force to or constrains the rollers; releasing it returns the wheel to normal mecanum behavior.",
      ],
      bullets: ["Low-cost, off-the-shelf actuation", "3D-printable geometry", "Reversible engagement", "Reproducible assembly"],
    },
    {
      eyebrow: "03 / Reflection",
      title: "A concept that needs measured validation",
      paragraphs: [
        "The project demonstrated a practical actuation concept and packaging approach. Quantitative traction improvement was not measured, so no performance gain is claimed. A next iteration would instrument wheel load and drawbar force to compare locked and unlocked states.",
      ],
    },
  ],
};
