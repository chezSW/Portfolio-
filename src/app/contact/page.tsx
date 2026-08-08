import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Chase Norvell about mechanical design, thermal, electronics packaging, manufacturing, aerospace, and robotics opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact / San Diego, CA"
        title="Let’s talk about hardware."
        description="I’m interested in mechanical design, thermal engineering, electronics packaging, manufacturing, aerospace, and robotics opportunities."
      />
      <section className="contact-panel shell">
        <div className="contact-panel__status">
          <span className="status-dot" aria-hidden="true" />
          <div><strong>Open to relevant engineering conversations</strong><p>{siteConfig.location}</p></div>
        </div>
        <div className="contact-methods">
          {siteConfig.email ? (
            <a href={`mailto:${siteConfig.email}`}><span>Email</span><strong>{siteConfig.email}</strong><i aria-hidden="true">↗</i></a>
          ) : (
            <div><span>Email</span><strong>Public address pending approval</strong></div>
          )}
          {siteConfig.linkedIn ? (
            <a href={siteConfig.linkedIn} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>View profile</strong><i aria-hidden="true">↗</i></a>
          ) : (
            <div><span>LinkedIn</span><strong>Profile link pending approval</strong></div>
          )}
          <Link href="/resume"><span>Resume</span><strong>View technical overview</strong><i aria-hidden="true">→</i></Link>
        </div>
        {!siteConfig.email || !siteConfig.linkedIn ? (
          <p className="contact-panel__note">Contact details were not included in the supplied source material, so this public build does not guess or expose them. They can be added once in the central site configuration.</p>
        ) : null}
      </section>
    </>
  );
}
