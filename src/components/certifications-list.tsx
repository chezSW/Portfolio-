import { certifications } from "@/content/certifications";

export function CertificationsList() {
  const verified = certifications.filter((item) => item.public && item.status === "completed");
  if (!verified.length) return null;

  return (
    <section className="certifications-list" aria-labelledby="certifications-title">
      <p className="eyebrow">Certifications</p>
      <h2 id="certifications-title">Verified credentials</h2>
      <div>
        {verified.map((item) => (
          <article key={`${item.name}-${item.date}`}>
            <span>{item.date}</span>
            <h3>{item.name}</h3>
            <p>{item.issuer}</p>
            {item.credentialUrl ? <a className="text-link" href={item.credentialUrl} target="_blank" rel="noreferrer">Verify credential ↗</a> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
