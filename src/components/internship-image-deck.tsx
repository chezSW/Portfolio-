"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";

const internshipImages = [
  {
    src: "/images/professional/power-device/unseen-gallery/01-die-attach-cad.jpg",
    alt: "CAD model of a multi-position die-attach fixture plate",
    stage: "01 · Die-attach fixture",
    caption: "A repeated die-attach operation became a fixture-layout problem: locate several parts consistently without slowing the operator.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/02-die-attach-hardware.jpg",
    alt: "Manufactured die-attach fixture loaded with production parts",
    stage: "02 · Loaded hardware",
    caption: "The finished plate shows the CAD intent translated into repeatable pockets, spacing, and access for real hardware.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/03-lead-straightener-cad.jpg",
    alt: "CAD model of a two-piece component lead-straightening tool",
    stage: "03 · Lead straightener",
    caption: "A compact two-piece tool was shaped around the component so its leads could be aligned without damaging the body.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/04-lead-straightener-hardware.jpg",
    alt: "Physical lead-straightening tool holding an electronic component",
    stage: "04 · Straightener test",
    caption: "The manufactured tool provided a quick physical check of grip, alignment, clearance, and operator handling.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/05-wire-bonding-cad.jpg",
    alt: "CAD model of a wire-bonding fixture plate with locating pockets",
    stage: "05 · Wire-bonding plate",
    caption: "The next fixture organized multiple devices into a controlled pattern while preserving the access needed for wire bonding.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/06-wire-bonding-hardware.jpg",
    alt: "Manufactured wire-bonding fixture plate with several device pockets",
    stage: "06 · Bonding hardware",
    caption: "The completed plate verified the pocket pattern, edge access, and real-world scale of the production setup.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/07-solder-dipping-cad.jpg",
    alt: "CAM view of a solder-dipping fixture and its machining setup",
    stage: "07 · Solder-dip fixture",
    caption: "The solder-dipping concept brought part support, immersion depth, and machinability into one small fixture.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/08-solder-dipping-hardware.jpg",
    alt: "First manufactured solder-dipping fixture held in hand",
    stage: "08 · First part",
    caption: "Holding the first part made tool scale, grip, and shop-floor usability immediately easier to judge.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/09-pind-wrench-cad.jpg",
    alt: "CAD model of a PIND wrench with a protected contact interface",
    stage: "09 · PIND wrench",
    caption: "A purpose-built wrench replaced improvised handling with a defined contact surface and a more usable lever arm.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/10-pind-wrench-hardware.jpg",
    alt: "Physical PIND wrench with metal contact pads installed",
    stage: "10 · Wrench prototype",
    caption: "The physical wrench checked reach, stiffness, and how the replaceable contact pieces met the production hardware.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/11-heat-block-cad.jpg",
    alt: "CAD assembly of a ring-shaped device and its heat-block fixture",
    stage: "11 · Heat-block concept",
    caption: "The heat-block assembly was modeled around the device geometry to control support, contact, and heating position.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/12-heat-block-hardware.jpg",
    alt: "Machined aluminum heat block held for inspection",
    stage: "12 · Machined block",
    caption: "The machined block closed the loop on tool access, engraved orientation cues, and the device-contact geometry.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/13-carrier-shell-cad.jpg",
    alt: "CAD model of the lower shell for a protective HPSC board carrier",
    stage: "13 · Carrier envelope",
    caption: "The work then moved from production tools to a protective board carrier, beginning with the outer envelope and closure geometry.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/14-carrier-board-fit-cad.jpg",
    alt: "CAD model showing a printed circuit board seated inside the carrier shell",
    stage: "14 · Board fit",
    caption: "Placing the board in the shell exposed the real clearance, connector, locating, and support relationships.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/15-carrier-exploded-cad.jpg",
    alt: "Exploded CAD view of the HPSC board carrier, circuit board, lid, and fasteners",
    stage: "15 · Carrier stack",
    caption: "The exploded view made the retention sequence, fastener access, and relationship between shell, board, and lid explicit.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/16-full-card-backplane.jpg",
    alt: "Rear render of the HPSC card showing the finned backplane interface",
    stage: "16 · Rear interface",
    caption: "At card scale, the rear interface had to combine the connector zone, structural frame, and a dense conduction surface.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/17-full-card-front-panel.jpg",
    alt: "Front-panel render of the HPSC card with five connector openings",
    stage: "17 · Front panel",
    caption: "The front panel concentrated connector spacing, mounting hardware, and service access into one tightly controlled face.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/18-full-card-underside-cad.jpg",
    alt: "Underside CAD view of the integrated HPSC card assembly",
    stage: "18 · Underside package",
    caption: "The underside view checked the less-visible relationships between the frame, board edge, connectors, and structural hardware.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/19-front-panel-drawing.jpg",
    alt: "Dimensioned fabrication drawing for the HPSC connector front panel",
    stage: "19 · Panel drawing",
    caption: "The connector face was converted from assembly geometry into a fabrication drawing with controlled slots, holes, and datums.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/20-cover-drawing.jpg",
    alt: "Dimensioned fabrication drawing for two HPSC cover configurations",
    stage: "20 · Cover definition",
    caption: "Cover geometry was documented with thickness, hole placement, edge details, and separate configuration views.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/21-board-stack-drawing.jpg",
    alt: "Engineering drawing documenting zones and interfaces across the HPSC board stack",
    stage: "21 · Stack definition",
    caption: "A board-stack drawing organized component zones, clearances, and interface heights before the assembly reached hardware.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/22-package-drawing.jpg",
    alt: "Detailed package drawing with section views and HPSC board renderings",
    stage: "22 · Package control",
    caption: "Section views tied the CAD assembly to manufactured thicknesses, board location, and the package's critical vertical interfaces.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/23-pcb-outline-drawing.jpg",
    alt: "Dimensioned HPSC main PCB outline drawing",
    stage: "23 · PCB outline",
    caption: "The main board outline established the mechanical datum for mounting, keepouts, connectors, and the enclosing hardware.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/24-board-interface-drawing.jpg",
    alt: "Mechanical interface drawing for the HPSC printed circuit board",
    stage: "24 · Interface map",
    caption: "The interface map captured the board regions and dimensions the surrounding mechanical package had to respect.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/25-ddr4-bottom-thermal.jpg",
    alt: "Section view of the bottom-side DDR4 cooling interface",
    stage: "25 · DDR4 section",
    caption: "A section view isolated the bottom-side DDR4 contact stack before the geometry was evaluated in the full thermal model.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/26-ddr4-section-thermal.jpg",
    alt: "ANSYS temperature contour for the underside DDR4 cooling path",
    stage: "26 · Bottom-side result",
    caption: "The underside result showed how heat spread from the memory region into the surrounding mechanical structure.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/27-ddr4-top-thermal.jpg",
    alt: "ANSYS temperature contour for the top-side DDR4 cooling path",
    stage: "27 · Top-side result",
    caption: "The top-side result made the alternate conduction path visible and comparable under the same model assumptions.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/28-analysis-workflow.jpg",
    alt: "Three ANSYS analysis systems for processor-top, processor-bottom, and full-card studies",
    stage: "28 · Study structure",
    caption: "Separate but parallel analysis systems kept processor placement and full-card comparisons traceable inside one workflow.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/29-no-gap-pad-thermal.jpg",
    alt: "ANSYS temperature contour of the HPSC card without the gap-pad interface",
    stage: "29 · Interface comparison",
    caption: "Removing the gap-pad interface created a clear comparison case for judging how strongly that mechanical contact affected heat flow.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/30-chassis-rear-render.jpg",
    alt: "Rear elevation render of the HPSC chassis showing the back interface",
    stage: "30 · Chassis rear",
    caption: "The rear elevation checked the system-level interface, fastener pattern, and access through the chassis wall.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/31-chassis-front-render.jpg",
    alt: "Front elevation render of the HPSC chassis card bays and support frame",
    stage: "31 · Card bays",
    caption: "The front view made card spacing, guide locations, mounting feet, and the open service path readable at a glance.",
  },
  {
    src: "/images/professional/power-device/unseen-gallery/32-chassis-structure-cad.jpg",
    alt: "Isometric CAD view of the HPSC chassis with ribbed side structure",
    stage: "32 · System structure",
    caption: "The final chassis view brings the story to system scale: multiple card bays, stiffening ribs, access, and a buildable structural package.",
  },
];

function wrapIndex(index: number) {
  return (index + internshipImages.length) % internshipImages.length;
}

export function InternshipImageDeck() {
  const [frontIndex, setFrontIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(1);
  const [rotationTurns, setRotationTurns] = useState(0);
  const showingBack = Math.abs(rotationTurns) % 2 === 1;
  const visibleIndex = showingBack ? backIndex : frontIndex;
  const visibleImage = internshipImages[visibleIndex];

  function showImage(index: number, direction: "next" | "previous") {
    const nextIndex = wrapIndex(index);
    if (nextIndex === visibleIndex) return;

    if (showingBack) {
      setFrontIndex(nextIndex);
    } else {
      setBackIndex(nextIndex);
    }
    setRotationTurns((turns) => turns + (direction === "next" ? 1 : -1));
  }

  function chooseImage(index: number) {
    const nextIndex = wrapIndex(index);
    const forwardDistance = (nextIndex - visibleIndex + internshipImages.length) % internshipImages.length;
    const backwardDistance = (visibleIndex - nextIndex + internshipImages.length) % internshipImages.length;
    showImage(nextIndex, forwardDistance <= backwardDistance ? "next" : "previous");
  }

  function handleCardKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showImage(visibleIndex + 1, "next");
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showImage(visibleIndex - 1, "previous");
    }
  }

  return (
    <section className="internship-deck" aria-label="Power Device internship image deck">
      <div className="internship-deck__eyebrow">
        <span>Project gallery</span>
        <span>Click image to flip</span>
      </div>

      <div className="internship-deck__stage">
        <button
          className="internship-deck__card"
          type="button"
          style={{ transform: `rotateY(${rotationTurns * 180}deg)` }}
          onClick={() => showImage(visibleIndex + 1, "next")}
          onKeyDown={handleCardKeyDown}
          aria-label={`Show next internship image. Currently showing ${visibleImage.caption}`}
        >
          <span className="internship-deck__face internship-deck__face--front" aria-hidden={showingBack}>
            <Image
              src={internshipImages[frontIndex].src}
              alt={internshipImages[frontIndex].alt}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 1080px"
            />
          </span>
          <span className="internship-deck__face internship-deck__face--back" aria-hidden={!showingBack}>
            <Image
              src={internshipImages[backIndex].src}
              alt={internshipImages[backIndex].alt}
              fill
              sizes="(max-width: 760px) 100vw, 1080px"
            />
          </span>
        </button>
      </div>

      <div className="internship-deck__footer">
        <button type="button" onClick={() => showImage(visibleIndex - 1, "previous")} aria-label="Show previous internship image">← Prev</button>
        <div className="internship-deck__caption" aria-live="polite">
          <span>{String(visibleIndex + 1).padStart(2, "0")} / {String(internshipImages.length).padStart(2, "0")}</span>
          <div><strong>{visibleImage.stage}</strong><p>{visibleImage.caption}</p></div>
        </div>
        <button type="button" onClick={() => showImage(visibleIndex + 1, "next")} aria-label="Show next internship image">Next →</button>
      </div>

      <div className="internship-deck__dots" aria-label="Choose an internship image">
        {internshipImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={index === visibleIndex ? "is-active" : ""}
            onClick={() => chooseImage(index)}
            aria-label={`Show image ${index + 1}: ${image.caption}`}
            aria-current={index === visibleIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
