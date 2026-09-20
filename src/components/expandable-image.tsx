"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ExpandableImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
};

export function ExpandableImage({ src, alt, sizes, priority = false }: ExpandableImageProps) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const triggerElement = trigger.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerElement?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={trigger}
        className="expandable-image"
        type="button"
        aria-label={`Expand image: ${alt}`}
        onClick={() => setOpen(true)}
      >
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} />
        <span className="expandable-image__hint" aria-hidden="true">↗</span>
      </button>
      {open
        ? createPortal(
            <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
              <button className="image-lightbox__close" type="button" aria-label="Close expanded image" onClick={() => setOpen(false)}>×</button>
              <div className="image-lightbox__frame" onClick={(event) => event.stopPropagation()}>
                <Image src={src} alt={alt} fill sizes="100vw" />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
