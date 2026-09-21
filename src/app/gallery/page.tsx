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
  ["/images/gallery/mechanism-whiteboard-sketch.jpg", "Whiteboard sketch exploring a robot mechanism"],
  ["/images/gallery/cardboard-cone-prototype.jpg", "Cardboard prototype fitted around a red traffic cone"],
  ["/images/gallery/early-lift-chassis.jpg", "Early robot chassis with twin vertical lift rails"],
  ["/images/gallery/powerplay-robot-base.jpg", "Early POWERPLAY robot base under construction"],
  ["/images/gallery/lift-intake-prototype.jpg", "Bench prototype of a lift and intake assembly"],
  ["/images/gallery/gripper-mechanism-closeup.jpg", "Close view of a custom robot gripper mechanism"],
  ["/images/gallery/cone-handling-test.jpg", "Robot gripper testing alignment with a blue cone"],
  ["/images/gallery/servo-cup-mechanism.jpg", "Servo-driven scoring mechanism holding a blue cup"],
  ["/images/gallery/alliance-team-photo.jpg", "Robotics teams gathered together at a competition"],
  ["/images/gallery/ftc-practice-robot.jpg", "FTC robot staged for a workshop test"],
  ["/images/gallery/mountain-climbing-selfie.jpg", "Mountain climbing selfie in the Italian Alps"],
  ["/images/gallery/mountain-valley.jpg", "Mountain valley viewed from a climbing route"],
  ["/images/gallery/removable-mount-prototype.jpg", "Hands-on test of a removable robot mounting plate"],
  ["/images/gallery/assembly-jig-test.jpg", "Robot assembly jig and fixture under test"],
  ["/images/gallery/load-test-rig.jpg", "Paired load-test rigs for a fabricated component"],
  ["/images/gallery/first-championship-match-view.jpg", "View of robots competing at the FIRST Championship"],
  ["/images/gallery/fabrication-nesting-layout.jpg", "Fabrication layout with parts nested for cutting"],
  ["/images/gallery/kart-build-session.jpg", "Working beside an electric kart chassis"],
  ["/images/gallery/electric-kart-chassis.jpg", "Electric kart chassis during electronics integration"],
  ["/images/gallery/competition-volunteer.jpg", "Volunteer overlooking a robotics competition field"],
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
