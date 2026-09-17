import type { Project } from "./types";

export const lockingMecanum: Project = {
  title: "Locking Mecanum Wheel",
  slug: "locking-mecanum-wheel",
  subtitle: "Servo-actuated roller constraint for selectable traction",
  summary:
    "An independent servo-actuated mechanism exploring how a mecanum wheel could preserve omnidirectional motion when unlocked and gain conventional traction when engaged.",
  categories: ["Personal", "Mechanical Design", "Robotics"],
  featured: true,
  public: true,
  order: 4,
  role: "Designer / Builder",
  organization: "Personal Project",
  date: "2023",
  focus: "Mechanism Design / Rapid Prototyping",
  system: "Mecanum Drivetrain",
  status: "Personal Prototype",
  tools: ["CAD", "FDM Printing", "Servo Actuation"],
  skills: ["Linkages", "Off-the-shelf hardware", "Design iteration"],
  visual: "mechanism",
  media: [
    {
      src: "/images/locking-mecanum/wheel-locked.jpg",
      alt: "CAD front view of a mecanum wheel with its roller-locking linkage installed",
      caption: "The linkage constrains the rollers when straight-line traction matters more than strafing.",
      public: true,
      aspect: "square",
    },
  ],
  process: ["Problem", "Concept", "CAD", "Print", "Assemble", "Evaluate"],
  sections: [
    {
      title: "Mobility and traction pull in different directions",
      paragraphs: [
        "Mecanum rollers enable omnidirectional motion, but the same roller freedom can limit straightforward traction. I explored a mechanism that selectively constrains the rollers when conventional forward grip is more useful.",
      ],
    },
    {
      title: "Lock the rollers only when needed",
      paragraphs: [
        "A linear servo drives a linkage housed in 3D-printed components. The engaged mechanism applies force to or constrains the rollers; releasing it returns the wheel to normal mecanum behavior.",
      ],
      bullets: ["Low-cost, off-the-shelf actuation", "3D-printable geometry", "Reversible engagement", "Reproducible assembly"],
      layout: "gallery",
      media: [
        {
          src: "/images/locking-mecanum/linkage-side.jpg",
          alt: "CAD side view of the servo and linkage around a mecanum wheel",
          caption: "Side view of the servo-driven linkage and printed structure.",
          public: true,
          aspect: "wide",
        },
        {
          src: "/images/locking-mecanum/wheel-front.jpg",
          alt: "Front CAD view of the mecanum wheel mechanism",
          caption: "Designed around a commercial wheel and off-the-shelf hardware.",
          public: true,
          aspect: "square",
        },
      ],
    },
    {
      title: "What I would test next",
      paragraphs: [
        "The project demonstrated a practical actuation concept and packaging approach. Quantitative traction improvement was not measured, so no performance gain is claimed. A next iteration would instrument wheel load and drawbar force to compare locked and unlocked states.",
      ],
      layout: "visual-first",
      media: [
        {
          src: "/images/locking-mecanum/wheel-detail.jpg",
          alt: "Detailed CAD view of the mecanum roller locking mechanism",
          caption: "A concept that worked mechanically; the next useful step would be measurement.",
          public: true,
          aspect: "square",
        },
      ],
    },
  ],
};
