import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume for Chase Norvell, mechanical engineering student.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <PageIntro
        eyebrow="Resume"
        title="The short version of the work."
        description="A clean public resume export is being prepared. Until then, the portfolio carries the most current project and education details."
      />
      <section className="resume-page shell">
        {siteConfig.resumePath ? (
          <a className="resume-download" href={siteConfig.resumePath} download>
            Download resume PDF ↓
          </a>
        ) : (
          <div className="resume-pending">
            <p><strong>Public PDF pending final review.</strong></p>
            <p>Contact me for the current copy while the downloadable version is being prepared.</p>
          </div>
        )}
        <p>
          In the meantime, the <Link href="/projects">work archive</Link> has the
          hardware stories, or <Link href="/contact">contact me</Link> for a current copy.
        </p>
      </section>
    </>
  );
}
