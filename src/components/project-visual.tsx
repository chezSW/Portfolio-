import type { ProjectVisual as ProjectVisualType } from "@/content/projects";

type ProjectVisualProps = {
  visual: ProjectVisualType;
  label: string;
  compact?: boolean;
};

const rollers = Array.from({ length: 6 });

export function ProjectVisual({ visual, label, compact = false }: ProjectVisualProps) {
  return (
    <div className={`project-visual project-visual--${visual}${compact ? " is-compact" : ""}`}>
      <div className="project-visual__grid" aria-hidden="true" />
      {visual === "thermal" ? (
        <div className="thermal-diagram" aria-hidden="true">
          <span className="thermal-diagram__source">CPU</span>
          <span className="thermal-diagram__path path-one" />
          <span className="thermal-diagram__path path-two" />
          <span className="thermal-diagram__sink">CHASSIS</span>
          <span className="thermal-diagram__reading">96°</span>
        </div>
      ) : null}

      {visual === "packaging" ? (
        <div className="packaging-diagram" aria-hidden="true">
          <span className="packaging-diagram__lid" />
          <span className="packaging-diagram__board"><i /><i /><i /></span>
          <span className="packaging-diagram__base" />
          <span className="packaging-diagram__axis">Z</span>
        </div>
      ) : null}

      {visual === "fixture" ? (
        <div className="fixture-diagram" aria-hidden="true">
          <span className="fixture-diagram__base" />
          <span className="fixture-diagram__part" />
          <span className="fixture-diagram__clamp clamp-left" />
          <span className="fixture-diagram__clamp clamp-right" />
          <span className="fixture-diagram__datum">A</span>
        </div>
      ) : null}

      {visual === "vehicle" ? (
        <div className="vehicle-diagram" aria-hidden="true">
          <span className="vehicle-diagram__body" />
          <span className="vehicle-diagram__wheel wheel-a" />
          <span className="vehicle-diagram__wheel wheel-b" />
          <span className="vehicle-diagram__module">ECU</span>
          <span className="vehicle-diagram__wire wire-a" />
          <span className="vehicle-diagram__wire wire-b" />
        </div>
      ) : null}

      {visual === "robotics" ? (
        <div className="robotics-diagram" aria-hidden="true">
          <span className="robotics-diagram__frame" />
          <span className="robotics-diagram__slide slide-a" />
          <span className="robotics-diagram__slide slide-b" />
          <span className="robotics-diagram__arm" />
          <span className="robotics-diagram__joint" />
        </div>
      ) : null}

      {visual === "mechanism" ? (
        <div className="mechanism-diagram" aria-hidden="true">
          <span className="mechanism-diagram__wheel">
            {rollers.map((_, index) => <i key={index} style={{ "--roller": index } as React.CSSProperties} />)}
          </span>
          <span className="mechanism-diagram__servo">SERVO</span>
          <span className="mechanism-diagram__link" />
        </div>
      ) : null}

      {visual === "fabrication" ? (
        <div className="fabrication-diagram" aria-hidden="true">
          <span className="fabrication-diagram__side side-a" />
          <span className="fabrication-diagram__side side-b" />
          <span className="fabrication-diagram__shelf shelf-a" />
          <span className="fabrication-diagram__shelf shelf-b" />
          <span className="fabrication-diagram__shelf shelf-c" />
          <span className="fabrication-diagram__caster caster-a" />
          <span className="fabrication-diagram__caster caster-b" />
        </div>
      ) : null}

      <p className="project-visual__label">{label}</p>
    </div>
  );
}
