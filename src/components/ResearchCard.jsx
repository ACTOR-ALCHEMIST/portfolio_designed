import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResearchCard({ paper }) {
  return (
    <Link className="research-card" to={`/research/${paper.id}`}>
      <img src={paper.image} alt={paper.imageAlt} loading="lazy" />
      <div>
        <div className="card-title-row">
          <h2>{paper.title}</h2>
          <ArrowUpRight aria-hidden="true" size={22} strokeWidth={2} />
        </div>
        <p className="research-subtitle">{paper.subtitle}</p>
        <p>{paper.abstract}</p>
        <div className="tag-row" aria-label="Research keywords">
          {paper.keywords.map((keyword) => (
            <span className="tag" key={keyword}>
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
