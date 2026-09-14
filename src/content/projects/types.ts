export type ProjectCategory =
  | "Professional"
  | "Thermal"
  | "Mechanical Design"
  | "Manufacturing"
  | "Robotics"
  | "Autonomous Systems"
  | "Personal";

export type ProjectVisual =
  | "thermal"
  | "packaging"
  | "fixture"
  | "vehicle"
  | "robotics"
  | "mechanism"
  | "fabrication"
  | "automation";

export type ProjectSection = {
  eyebrow?: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
  media?: ProjectMedia[];
  video?: ProjectVideo;
  layout?: "text" | "split" | "visual-first" | "gallery";
};

export type ProjectMetric = {
  value: string;
  label: string;
  detail?: string;
};

export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
  public: boolean;
  aspect?: "wide" | "portrait" | "square" | "natural";
};

export type ProjectVideo = {
  src: string;
  poster: string;
  caption: string;
  label: string;
  public: boolean;
};

export type ThermalComparison = {
  first: { label: string; value: string; detail: string };
  second: { label: string; value: string; detail: string };
  delta: string;
  heatPath: string[];
};

export type Project = {
  title: string;
  slug: string;
  subtitle: string;
  summary: string;
  categories: ProjectCategory[];
  featured: boolean;
  public: boolean;
  order: number;
  role: string;
  organization: string;
  date: string;
  location?: string;
  focus: string;
  system: string;
  status: string;
  keyResult?: string;
  tools: string[];
  skills: string[];
  visual: ProjectVisual;
  media: ProjectMedia[];
  metrics?: ProjectMetric[];
  process?: string[];
  thermalComparison?: ThermalComparison;
  sections: ProjectSection[];
};
