import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResearchCard({ paper }) {
  return (
    <Link className="research-card" to={`/research/${paper.id}`}>
      <div className="research-cover">
        <img src={paper.image} alt={paper.imageAlt} loading="eager" />
        <span>{paper.pages} pages</span>
      </div>
      <div className="research-card-body">
        <p className="eyebrow">
          {paper.venue} · {paper.period}
        </p>
        <div className="card-title-row">
          <h2>{paper.title}</h2>
          <ArrowUpRight aria-hidden="true" size={24} strokeWidth={2} />
        </div>
        <p className="research-subtitle">{paper.subtitle}</p>
        <p className="research-abstract">{paper.abstract}</p>
        <div className="research-card-metrics" aria-label="Paper highlights">
          {paper.metrics.slice(0, 3).map((metric) => (
            <span key={metric.label}>
              <strong>{metric.value}</strong>
              <small>{metric.label}</small>
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
