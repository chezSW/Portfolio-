/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual archive of Chase Norvell's engineering work.",
  alternates: { canonical: "/gallery" },
};

const galleryImages = [
  ["/images/gallery/first-championship-crowd.jpg", "FIRST Championship crowd under red and blue lights"],
  ["/images/gallery/roboctopi-team.jpg", "Roboctopi team at the FIRST Championship"],
  ["/images/gallery/beach-cleanup.jpg", "Beach cleanup with the Green Griffins"],
  ["/images/gallery/first-community.jpg", "FIRST community members at the Championship"],
  ["/images/gallery/championship-match.jpg", "Competition robot playing a match at the FIRST Championship"],
  ["/images/gallery/advocacy-team.jpg", "Student advocacy team dressed for a presentation"],
  ["/images/gallery/first-championship-opening.jpg", "Opening ceremony at the FIRST Championship"],
  ["/images/gallery/county-advocacy.jpg", "Student robotics advocates at a county office"],
  ["/images/gallery/beach-cleanup-team.jpg", "Green Griffins team after a beach cleanup"],
  ["/images/gallery/laser-cutting.jpg", "Laser cutter in the robotics workshop"],
  ["/images/gallery/machined-robot-plate.jpg", "Machined aluminum robot plate"],
  ["/images/gallery/print-iterations.jpg", "Broken blue 3D printed mechanism iterations"],
  ["/images/gallery/printed-part-detail.jpg", "Blue 3D printed part detail"],
] as const;

export default function GalleryPage() {
  return (
    <main className="gallery-page shell">
      <h1>They say pictures speak a thousand words, lets see if thats true!</h1>
      <div className="gallery-wall">
        {galleryImages.map(([src, alt]) => (
          <figure key={src}>
            <img src={src} alt={alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </main>
  );
}
