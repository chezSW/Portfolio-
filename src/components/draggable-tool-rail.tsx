"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

type DraggableToolRailProps = {
  items: string[];
};

const AUTO_SPEED = 34;
const KEYBOARD_STEP = 96;

export function DraggableToolRail({ items }: DraggableToolRailProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);
  const lastFrameRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const resumeAtRef = useRef(0);
  const draggingRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const normalizeOffset = (value: number) => {
    const loopWidth = loopWidthRef.current;
    if (!loopWidth) return value;

    let next = value;
    while (next <= -loopWidth) next += loopWidth;
    while (next > 0) next -= loopWidth;
    return next;
  };

  const renderOffset = (value: number) => {
    const next = normalizeOffset(value);
    offsetRef.current = next;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${next}px, 0, 0)`;
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    if (!track || !group) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      reducedMotionRef.current = motionQuery.matches;
    };
    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    const measure = () => {
      loopWidthRef.current = group.getBoundingClientRect().width;
      renderOffset(offsetRef.current);
    };
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(group);
    measure();

    let frame = 0;
    const animate = (now: number) => {
      const previous = lastFrameRef.current || now;
      const elapsed = Math.min(now - previous, 48) / 1000;
      lastFrameRef.current = now;

      if (!draggingRef.current) {
        if (Math.abs(velocityRef.current) > 4) {
          renderOffset(offsetRef.current + velocityRef.current * elapsed);
          velocityRef.current *= Math.pow(0.055, elapsed);
        } else {
          velocityRef.current = 0;
          if (!reducedMotionRef.current && now >= resumeAtRef.current) {
            renderOffset(offsetRef.current - AUTO_SPEED * elapsed);
          }
        }
      }

      frame = window.requestAnimationFrame(animate);
    };
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setIsDragging(false);
    resumeAtRef.current = performance.now() + 650;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    draggingRef.current = true;
    setIsDragging(true);
    velocityRef.current = 0;
    lastPointerXRef.current = event.clientX;
    lastPointerTimeRef.current = performance.now();
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const now = performance.now();
    const delta = event.clientX - lastPointerXRef.current;
    const elapsed = Math.max(now - lastPointerTimeRef.current, 8);
    renderOffset(offsetRef.current + delta);
    velocityRef.current = (delta / elapsed) * 1000;
    lastPointerXRef.current = event.clientX;
    lastPointerTimeRef.current = now;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    velocityRef.current = 0;
    resumeAtRef.current = performance.now() + 900;
    renderOffset(offsetRef.current + (event.key === "ArrowLeft" ? -KEYBOARD_STEP : KEYBOARD_STEP));
  };

  return (
    <div
      ref={viewportRef}
      className={`reference-tools__viewport${isDragging ? " is-dragging" : ""}`}
      role="group"
      tabIndex={0}
      aria-label="Tools and technologies. Drag left or right, or use the arrow keys, to explore."
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onKeyDown={handleKeyDown}
    >
      <div ref={trackRef} className="reference-tools__track">
        {[0, 1, 2, 3].map((copy) => (
          <div
            key={copy}
            ref={copy === 0 ? groupRef : undefined}
            className="reference-tools__group"
            aria-hidden={copy > 0 ? "true" : undefined}
          >
            {items.map((item) => <span key={`${copy}-${item}`}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
