import type { ThermalComparison as ThermalComparisonType } from "@/content/projects/types";

export function ThermalComparison({ comparison }: { comparison: ThermalComparisonType }) {
  return (
    <section className="thermal-comparison shell" aria-labelledby="thermal-comparison-title">
      <div className="section-heading">
        <p className="eyebrow">Decision visualization</p>
        <h2 id="thermal-comparison-title">Thermal trade study</h2>
        <p>User-supplied public values. Geometry and setup details are withheld.</p>
      </div>
      <div className="thermal-comparison__body">
        <div className="architecture architecture--preferred">
          <div><span>{comparison.first.label}</span><strong>{comparison.first.value}</strong></div>
          <p>{comparison.first.detail}</p>
          <span className="architecture__status">Selected direction</span>
        </div>
        <div className="thermal-delta">
          <span>ΔT</span>
          <strong>{comparison.delta}</strong>
        </div>
        <div className="architecture">
          <div><span>{comparison.second.label}</span><strong>{comparison.second.value}</strong></div>
          <p>{comparison.second.detail}</p>
          <span className="architecture__status">Alternate concept</span>
        </div>
      </div>
      <div className="heat-path">
        <span className="heat-path__title">Generic conductive path</span>
        <ol>
          {comparison.heatPath.map((item, index) => (
            <li key={item}><span>{(index + 1).toString().padStart(2, "0")}</span>{item}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
