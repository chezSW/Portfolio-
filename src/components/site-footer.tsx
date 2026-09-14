import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div>
          <Link className="footer-name" href="/">{siteConfig.name}</Link>
          <p>{siteConfig.location}</p>
        </div>
        <nav aria-label="Footer navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="footer-contact">
          {siteConfig.email ? <a href={`mailto:${siteConfig.email}`}>Email</a> : null}
          {siteConfig.linkedIn ? <a href={siteConfig.linkedIn}>LinkedIn</a> : null}
        </div>
      </div>
      <p className="shell site-footer__copyright">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  );
}
