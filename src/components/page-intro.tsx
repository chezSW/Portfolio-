type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: string;
};

export function PageIntro({ eyebrow, title, description, aside }: PageIntroProps) {
  return (
    <section className="page-intro shell">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <div className="page-intro__copy">
        <p>{description}</p>
        {aside ? <span>{aside}</span> : null}
      </div>
    </section>
  );
}
