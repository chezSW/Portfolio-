import type { Project } from "./types";

export const ansysAutomation: Project = {
  title: "Automating Temperature Review in ANSYS",
  slug: "ansys-temperature-automation",
  subtitle: "A small Python tool for a repetitive thermal-analysis task",
  summary:
    "A Python script that records the maximum modeled nodal temperature and node ID for each body, exports the results, and creates labels for review.",
  categories: ["Professional", "Thermal"],
  featured: false,
  public: false,
  order: 4,
  role: "Mechanical Engineering Intern",
  organization: "Power Device Corp",
  date: "2026",
  location: "San Diego, California",
  focus: "Thermal workflow automation",
  system: "ANSYS Mechanical",
  status: "Professional project with approved workflow imagery",
  tools: ["Python", "ANSYS Mechanical", "CSV"],
  skills: ["Engineering automation", "Nodal result review", "Data export"],
  visual: "automation",
  media: [
    {
      src: "/images/professional/power-device/ansys-automation.png",
      alt: "ANSYS Mechanical temperature-review workflow with automated result labels",
      caption: "Automated maximum-temperature review in ANSYS Mechanical",
      public: true,
    },
  ],
  process: ["Read solved result", "Loop through bodies", "Find maximum node", "Export", "Label"],
  sections: [
    {
      title: "Why I wrote it",
      paragraphs: [
        "As the full-card thermal models grew, checking the maximum modeled temperature and location for every component by hand became repetitive and easy to do inconsistently. I automated that collection step so more review time could go toward investigating the result.",
        "I used AI while debugging parts of the script. The engineering task, workflow definition, result checks, and decision to keep interpretation manual remained my responsibility.",
      ],
    },
    {
      title: "What the script does",
      paragraphs: [
        "The current version reads the first configured analysis and its last solved result set in ANSYS Mechanical. It loops through the modeled bodies, maps each body to its mesh nodes, retrieves the nodal temperatures, and keeps the maximum value and its associated node number.",
      ],
      bullets: [
        "Exports the component, maximum temperature, and node number to CSV",
        "Can clear the previous result labels before a new review",
        "Creates maximum-temperature probe labels at the identified nodes",
        "Produces a consistent collection format for the local model workflow",
      ],
      video: {
        src: "/videos/power-device/ansys-temperature-review-demo-hq.mp4",
        poster: "/images/professional/power-device/ansys-automation-video-poster-hq.jpg",
        label: "Demonstration of the automated component-temperature review workflow in ANSYS Mechanical",
        caption: "The script running inside ANSYS Mechanical and recreating maximum-temperature probe labels.",
        public: true,
      },
    },
    {
      title: "What it does not do",
      paragraphs: [
        "The script does not calculate junction temperature, margin of safety, or component power. Those checks happened later in the engineering review. It also assumes a specific ANSYS tree and result setup, so I treat it as a local workflow tool rather than a universal ANSYS utility.",
        "Its value was narrower and more practical: collect the same model result in the same format, then leave the engineering interpretation to the reviewer.",
      ],
      note: "The full source code is not public in this version.",
    },
  ],
};
