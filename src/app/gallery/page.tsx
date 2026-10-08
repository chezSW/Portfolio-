/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual archive of Chase Norvell's engineering work.",
  alternates: { canonical: "/gallery" },
};

type GalleryAddition =
  | { kind: "image"; src: string; alt: string; width: number; height: number }
  | { kind: "video"; src: string; poster: string; title: string; width: number; height: number };

const galleryAdditions: GalleryAddition[] = [
  { kind: "video", src: "/videos/gallery/20240501_185153.mp4", poster: "/images/gallery/20240501_185153-poster.jpg", title: "FIRST - Robot testing outdoors", width: 1280, height: 720 },
  { kind: "video", src: "/videos/gallery/2024-4-14-8-4-38.mp4", poster: "/images/gallery/2024-4-14-8-4-38-poster.jpg", title: "FIRST - Robot mechanism test", width: 720, height: 1280 },
  { kind: "image", src: "/images/gallery/pdc-20250722_075736.jpg", alt: "Electronic component held in a black machining fixture", width: 1012, height: 1800 },
  { kind: "video", src: "/videos/gallery/20250723_084548.mp4", poster: "/images/gallery/20250723_084548-poster.jpg", title: "PDC - Component fixture machining", width: 1280, height: 720 },
  { kind: "image", src: "/images/gallery/pdc-20250722_114140.jpg", alt: "Broken cutting tool on the CNC machine bed", width: 1012, height: 1800 },
  { kind: "video", src: "/videos/gallery/20250722_111015.mp4", poster: "/images/gallery/20250722_111015-poster.jpg", title: "PDC - CNC machining setup", width: 1280, height: 720 },
  { kind: "image", src: "/images/gallery/pdc-20250627_142843.jpg", alt: "Machined plastic fixture inspected by hand", width: 1012, height: 1800 },
  { kind: "video", src: "/videos/gallery/20250627_134534.mp4", poster: "/images/gallery/20250627_134534-poster.jpg", title: "PDC - Plastic fixture machining", width: 1280, height: 720 },
  { kind: "image", src: "/images/gallery/pdc-20250625_150530.jpg", alt: "CNC test cuts in plastic stock", width: 1012, height: 1800 },
  { kind: "video", src: "/videos/gallery/20250714_115640.mp4", poster: "/images/gallery/20250714_115640-poster.jpg", title: "PDC - Drilling fixture in use", width: 1280, height: 720 },
  { kind: "image", src: "/images/gallery/pdc-20260122_084150.jpg", alt: "Printed electronics carrier with two connector openings held by hand", width: 1012, height: 1800 },
  { kind: "image", src: "/images/gallery/pdc-20260122_084108.jpg", alt: "Black prototype electronics chassis with sliding carrier trays", width: 1012, height: 1800 },
  { kind: "image", src: "/images/gallery/pdc-20260806_144307.jpg", alt: "White printed electronics chassis with black carrier trays installed", width: 1012, height: 1800 },
  { kind: "image", src: "/images/gallery/pdc-20260609_151727.jpg", alt: "Magnetic field measurement beside a circuit board in an aluminum fixture", width: 1012, height: 1800 },
  { kind: "image", src: "/images/gallery/pdc-20260206_142024.jpg", alt: "Gold electronic components seated in a gray protective carrier tray", width: 1800, height: 1012 },
  { kind: "image", src: "/images/gallery/pdc-20250813_121653.jpg", alt: "Component profile and height measurements on an inspection screen", width: 1800, height: 1012 },
  { kind: "image", src: "/images/gallery/pdc-20250813_145407.jpg", alt: "Gold leaded electronic component seated in a black alignment tool", width: 1800, height: 1012 },
  { kind: "image", src: "/images/gallery/pdc-20250721_150209.jpg", alt: "Chase Norvell engineering intern nameplate at Power Device Corporation", width: 1012, height: 1800 },
];

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
  ["/images/gallery/workshop-calculations.jpg", "Mechanism calculations written on the workshop whiteboard"],
  ["/images/gallery/mechanism-motion-sketch.jpg", "Whiteboard sketches comparing mechanism movement and geometry"],
  ["/images/gallery/lift-assembly-workshop.jpg", "Robot lift assembly during a workshop build session"],
  ["/images/gallery/robot-assembly-inspection.jpg", "Overhead view of a green FTC robot during assembly inspection"],
  ["/images/gallery/championship-arena-lights.jpg", "Red arena lighting during the FIRST Championship"],
  ["/images/gallery/championship-stands.jpg", "Packed stands above the FIRST Championship fields"],
  ["/images/gallery/machined-part-inspection.jpg", "Small machined part inspected by hand"],
  ["/images/gallery/ftc-pit-assembly.jpg", "FTC robot and mechanism assembly in the competition pit"],
  ["/images/gallery/electronics-globe-detail.jpg", "Close view of electronics inside a transparent globe"],
  ["/images/gallery/swe-outreach-table.jpg", "Group presenting at a Society of Women Engineers outreach table"],
] as const;

export default function GalleryPage() {
  return (
    <main className="gallery-page shell">
      <h1>They say pictures (and videos) speak a thousand words, lets see if that&apos;s true!</h1>
      <div className="gallery-wall">
        {galleryAdditions.map((item) => (
          <figure key={item.src}>
            {item.kind === "video" ? (
                <video
                  controls
                  playsInline
                  preload="none"
                  poster={item.poster}
                  width={item.width}
                  height={item.height}
                  aria-label={item.title}
                >
                  <source src={item.src} type="video/mp4" />
                  <a href={item.src}>Open {item.title}</a>
                </video>
            ) : (
              <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" />
            )}
          </figure>
        ))}
        {galleryImages.map(([src, alt]) => (
          <figure key={src}>
            <img src={src} alt={alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </main>
  );
}
