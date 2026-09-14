import type { Project } from "./types";

export const eagleBookshelf: Project = {
  title: "Eagle Scout Service Project — Rolling Library Bookshelf",
  slug: "rolling-library-bookshelf",
  subtitle: "Eagle Scout service project delivered for public use",
  summary: "Planned and led the construction of a rolling bookshelf for a local library program.",
  categories: ["Personal", "Mechanical Design"],
  featured: false,
  public: true,
  order: 6,
  role: "Project Lead",
  organization: "Eagle Scout Service Project",
  date: "2023",
  focus: "Design Planning / Fabrication / Leadership",
  system: "Public-Use Furniture",
  status: "Completed Service Project",
  tools: ["Woodworking", "Fabrication", "Project Planning"],
  skills: ["Volunteer coordination", "Materials planning", "Installation"],
  visual: "fabrication",
  media: [
    {
      src: "/images/bookshelf/library-bookshelf.jpg",
      alt: "Finished wooden rolling bookshelf installed at the library",
      caption: "The finished bookshelf in use at the 4S Ranch Library.",
      public: true,
      aspect: "portrait",
    },
  ],
  process: ["Plan", "Source", "Coordinate", "Build", "Install"],
  sections: [
    {
      eyebrow: "01 / Need",
      title: "A physical solution for a community program",
      paragraphs: [
        "The 4S Ranch Library Friends of the Library program needed a purpose-built rolling bookshelf. The project had to be practical to fabricate with volunteers, durable in public use, and movable within the library environment.",
      ],
    },
    {
      eyebrow: "02 / Delivery",
      title: "Planning through installation",
      paragraphs: [
        "I planned and led the project, coordinating design, materials, woodworking, volunteer effort, fabrication, and installation. The result was a completed piece of hardware placed into real public use.",
      ],
      layout: "split",
      media: [
        {
          src: "/images/bookshelf/library-bookshelf-plaque.jpg",
          alt: "Detail of the plaque mounted on the completed library bookshelf",
          caption: "A small detail on a very physical kind of project.",
          public: true,
          aspect: "portrait",
        },
      ],
    },
    {
      eyebrow: "03 / Takeaway",
      title: "Leadership grounded in build reality",
      paragraphs: [
        "The project reinforced that a design is only useful when the materials, people, process, and installation plan all work together. It remains a useful counterpoint to my more technical electronics and robotics work.",
      ],
    },
  ],
};
