export const siteConfig = {
  name: "Chase Norvell",
  title: "Mechanical Engineering Portfolio",
  description:
    "Mechanical engineering portfolio focused on hardware design, thermal analysis, electronics packaging, manufacturing, robotics, and aerospace systems.",
  location: "San Diego, California",
  email: null as string | null,
  linkedIn: null as string | null,
  resumePath: null as string | null,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  navigation: [
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
