import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="eyebrow">404 / Drawing not found</p>
      <h1>This page is outside the current assembly.</h1>
      <p>The project may have moved, or it may not be approved for public display.</p>
      <Link className="button button--primary" href="/projects">Return to projects</Link>
    </section>
  );
}
