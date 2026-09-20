export const siteConfig = {
  name: "Chase Norvell",
  title: "Mechanical Engineering Portfolio",
  description:
    "Mechanical engineering work by Chase Norvell across hardware design, manufacturing, robotics, electronics packaging, and thermal analysis.",
  location: "San Diego, California",
  email: "cnorvell001@student.sdccd.edu" as string | null,
  linkedIn: "https://www.linkedin.com/in/chasenorvell" as string | null,
  resumePath: "/resume/chase-norvell-resume.pdf" as string | null,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chase-norvell-portfolio.pastel-jam-1641.chatgpt.site",
  navigation: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/#projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Connect", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
