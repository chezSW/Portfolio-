import Image from "next/image";
import type { ProjectMedia } from "@/content/projects/types";

export function ImageGallery({ media }: { media: ProjectMedia[] }) {
  const approvedMedia = media.filter((item) => item.public);
  if (!approvedMedia.length) return null;

  return (
    <section className="image-gallery shell" aria-label="Approved project media">
      {approvedMedia.map((item) => (
        <figure key={item.src}>
          <div className="image-gallery__frame">
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
          </div>
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      ))}
    </section>
  );
}
