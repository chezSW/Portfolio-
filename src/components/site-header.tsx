"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Link className="brand" href="/" aria-label={`${siteConfig.name} home`}>
          <strong>{siteConfig.name}</strong>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.navigation.map((item, index) => (
            <Link key={item.href} href={item.href} className={index === siteConfig.navigation.length - 1 ? "nav-cta" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <details ref={menu} className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => { if (menu.current) menu.current.open = false; }}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
