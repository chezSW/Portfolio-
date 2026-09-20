/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import { readdirSync } from "node:fs";
import path from "node:path";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual archive of Chase Norvell's engineering work.",
  alternates: { canonical: "/gallery" },
};

const imagePattern = /\.(?:avif|gif|jpe?g|png|webp)$/i;

function collectImages(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return entry.name === "experience" ? [] : collectImages(entryPath);
    }

    if (!imagePattern.test(entry.name)) return [];

    const relativePath = path
      .relative(path.join(process.cwd(), "public"), entryPath)
      .split(path.sep)
      .join("/");

    return [`/${relativePath}`];
  });
}

function imageAlt(src: string) {
  const filename = src.split("/").at(-1) ?? "engineering project";
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+-/, "")
    .replaceAll("-", " ");
}

export default function GalleryPage() {
  const images = collectImages(path.join(process.cwd(), "public", "images")).sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <main className="gallery-page shell">
      <h1>They say pictures speak a thousand words, lets see if thats true!</h1>
      <div className="gallery-wall">
        {images.map((src) => (
          <figure key={src}>
            <img src={src} alt={imageAlt(src)} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </main>
  );
}
