import Link from "next/link";
import { siteConfig } from "@/config/site";

export function ContactCta() {
  return (
    <section className="contact-cta shell" aria-labelledby="contact-cta-title">
      <div>
        <p className="eyebrow">Next conversation</p>
        <h2 id="contact-cta-title">Interested in my work?</h2>
      </div>
      <p>
        I’m interested in mechanical design, thermal, electronics packaging,
        manufacturing, aerospace, and robotics opportunities.
      </p>
      <div className="contact-cta__links">
        {siteConfig.email ? <a className="button button--primary" href={`mailto:${siteConfig.email}`}>Email</a> : null}
        {siteConfig.linkedIn ? <a className="button" href={siteConfig.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a> : null}
        <Link className="button" href="/resume">Resume</Link>
        {!siteConfig.email && !siteConfig.linkedIn ? <Link className="button button--primary" href="/contact">Contact details</Link> : null}
      </div>
    </section>
  );
}
