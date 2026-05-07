import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getResearchById } from "../lib/content";
import NotFound from "./NotFound";

export default function ResearchDetail() {
  const { id } = useParams();
  const paper = getResearchById(id);

  if (!paper) {
    return <NotFound />;
  }

  return (
    <article className="detail-page">
      <Link className="back-link" to="/research">
        <ArrowLeft aria-hidden="true" size={20} />
        Back to research
      </Link>
      <header className="detail-header">
        <p className="eyebrow">
          {paper.venue} · {paper.period}
        </p>
        <h1>{paper.title}</h1>
        <p>{paper.subtitle}</p>
      </header>
      <img className="detail-image" src={paper.image} alt={paper.imageAlt} />
      <section className="detail-section">
        <h2>Abstract</h2>
        <p>{paper.abstract}</p>
      </section>
      <section className="detail-section">
        <h2>Authors</h2>
        <p>{paper.authors.join(", ")}</p>
      </section>
      <div className="tag-row" aria-label="Research keywords">
        {paper.keywords.map((keyword) => (
          <span className="tag" key={keyword}>
            {keyword}
          </span>
        ))}
      </div>
      {paper.links.map((link) => (
        <a
          className="external-cta"
          href={link.href}
          key={link.label}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
          <ExternalLink aria-hidden="true" size={18} />
        </a>
      ))}
    </article>
  );
}
