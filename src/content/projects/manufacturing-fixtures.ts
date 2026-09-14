import type { Project } from "./types";

export const manufacturingFixtures: Project = {
  title: "Production Fixtures",
  slug: "manufacturing-fixtures",
  subtitle: "From an operator problem to printed checks and machined tooling",
  summary: "Two examples of fixture work carried from a production-floor problem through CAD, fit checks, CAM, machining, and hardware review.",
  categories: ["Professional", "Manufacturing", "Mechanical Design"],
  featured: true,
  public: true,
  order: 2,
  role: "Mechanical Engineering Intern",
  organization: "Power Device Corporation",
  date: "June 2025 — August 2026",
  location: "San Diego, California",
  focus: "Fixture Design / Manufacturing Support",
  system: "Microelectronics Production",
  status: "Professional work shown with permission",
  keyResult: "More than 20 fixture configurations across production and engineering support",
  tools: ["SolidWorks", "Fusion 360 CAM", "CNC Milling", "FDM / SLA"],
  skills: ["Workholding", "Locating", "Rapid fit checks", "Machining"],
  visual: "fixture",
  media: [
    {
      src: "/images/professional/power-device/gallery-01-clipping-hardware.jpg",
      alt: "Machined clipping fixture holding microelectronics components",
      caption: "The finished clipping fixture replaced visual centering with mechanical location.",
      public: true,
      aspect: "wide",
    },
  ],
  process: ["Observe the operation", "Define location", "Print and check", "Revise", "Program CAM", "Machine"],
  sections: [
    {
      title: "Start with the operation",
      paragraphs: [
        "A lot of my early work began with a technician showing me a step that was slow, awkward, or dependent on experience. I learned to watch the operation before opening CAD: what locates the part, what the operator has to see or feel, and which motion actually controls the result.",
        "Across the internship I worked on more than 20 fixture configurations. Some were original designs, while others were machining or support work based on an existing design. The two examples below are the clearest stories I can show publicly.",
      ],
    },
    {
      title: "Replacing visual alignment with mechanical location",
      paragraphs: [
        "One clipping step relied on an experienced operator visually centering a Kovar lid before it moved to the next process. I designed a fixture that located the package and lid mechanically, printed roughly two versions to check the fit, then programmed and machined the final part.",
        "My project notes estimate that the operation went from about five minutes to under one minute per component. I treat that as a shop-floor comparison rather than a controlled time study, but the fixture also made the setup less dependent on visual judgment.",
      ],
      media: [
        {
          src: "/images/professional/power-device/clipping-fixture.png",
          alt: "CAD view of the clipping fixture used to locate a component and lid",
          caption: "The locating strategy was checked in printed versions before the final part was machined.",
          public: true,
          aspect: "wide",
        },
      ],
      video: {
        src: "/videos/power-device/clipping-fixture-machining.mp4",
        poster: "/images/professional/power-device/clipping-fixture-video-poster.jpg",
        label: "Short CNC machining clip from production of the clipping fixture",
        caption: "This clip shows manufacture of the fixture. The operator-time comparison came from the completed clipping workflow.",
        public: true,
      },
      layout: "gallery",
    },
    {
      title: "Adding depth control to a drilling setup",
      paragraphs: [
        "A second fixture supported depth-controlled lid preparation for lab gas analysis. The existing drill-press setup did not give the operator direct depth feedback, so I built the workholding around a printed lower locator and a machined ABS top clamp. ABS was practical to machine and less likely to scratch the part than a metal top clamp.",
        "I checked the resulting depth on dummy parts with a Keyence microscope. The source notes include an approximate tolerance statement, but its unit and basis are not clear enough to publish as a result.",
      ],
      media: [
        {
          src: "/images/professional/power-device/drill-holder.jpg",
          alt: "Drilling holder with printed lower locator and machined top clamp",
          caption: "The two-piece holder locates the package while the top clamp protects the surface and keeps the setup modular.",
          public: true,
          aspect: "wide",
        },
      ],
      video: {
        src: "/videos/power-device/drill-holder-operation-hq.mp4",
        poster: "/images/professional/power-device/drill-holder-video-poster-hq.jpg",
        label: "Drilling holder during a production fit check",
        caption: "The motion makes the workholding and tool access easier to understand than another finished-part photo.",
        public: true,
      },
      layout: "gallery",
    },
    {
      title: "Other production support",
      paragraphs: [
        "Other work included component carriers, heat-block fixtures, wire-bonding support, a same-day lead straightener, and small hand tools. One solder-dipping fixture appears in my manufacturing work because I created CAM and machined it; I did not design that fixture.",
        "The useful lesson was not the number of parts. It was learning when a quick print could answer the next question and when the fixture needed a drawing, a machined material, or a more controlled inspection step.",
      ],
      media: [
        {
          src: "/images/professional/power-device/u44-carrier.jpg",
          alt: "Printed U44 component carrier with lid and stacking features",
          caption: "The U44 carrier was built around an existing machine interface measured without a drawing.",
          public: true,
          aspect: "wide",
        },
      ],
      layout: "visual-first",
    },
  ],
};
