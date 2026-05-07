import { ExternalLink } from "lucide-react";

export default function WorkCard({ work }) {
  return (
    <a className="work-card" href={work.link} target="_blank" rel="noreferrer">
      <img src={work.image} alt={work.imageAlt} loading="lazy" />
      <div className="work-body">
        <span className="eyebrow">{work.type}</span>
        <div className="card-title-row">
          <h2>{work.title}</h2>
          <ExternalLink aria-hidden="true" size={20} strokeWidth={2} />
        </div>
        <p>{work.summary}</p>
        <div className="tag-row" aria-label="Work tags">
          {work.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
