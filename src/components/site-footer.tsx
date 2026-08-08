import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__top">
        <div>
          <Link className="footer-name" href="/">
            {siteConfig.name}
          </Link>
          <p>Mechanical design → thermal engineering → manufactured hardware.</p>
        </div>
        <nav aria-label="Footer navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="shell site-footer__bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>Built to show the engineering.</span>
      </div>
    </footer>
  );
}
