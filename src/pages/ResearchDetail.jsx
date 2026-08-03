import { ArrowLeft, FileText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import paperPdf from "../data/137_file_Full_Paper_File.pdf";
import { getResearchById } from "../lib/content";
import NotFound from "./NotFound";

export default function ResearchDetail() {
  const { id } = useParams();
  const paper = getResearchById(id);

  if (!paper) {
    return <NotFound />;
  }

  return (
    <article className="detail-page research-detail-page">
      <Link className="back-link" to="/research">
        <ArrowLeft aria-hidden="true" size={20} />
        Back to research
      </Link>

      <header className="detail-header research-detail-header">
        <div className="detail-meta-row">
          <p className="eyebrow">{paper.venue}</p>
          <time>{paper.period}</time>
        </div>
        <h1>{paper.title}</h1>
        <p>{paper.subtitle}</p>
        <div className="research-author-row">
          <span>{paper.authors.join(", ")}</span>
          <span aria-hidden="true">·</span>
          <span>{paper.affiliation}</span>
        </div>
        <a className="research-pdf-cta" href={paperPdf} target="_blank" rel="noreferrer">
          <FileText aria-hidden="true" size={19} />
          Read full paper
          <span>PDF · {paper.pages} pages</span>
        </a>
      </header>

      <section className="project-metric-grid research-metric-grid" aria-label="Research outcomes">
        {paper.metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section className="research-overview" aria-labelledby="abstract-title">
        <figure className="research-paper-sheet">
          <img src={paper.image} alt={paper.imageAlt} loading="eager" />
          <figcaption>Original manuscript · page 01</figcaption>
        </figure>
        <div className="research-abstract-block">
          <p className="eyebrow">Abstract</p>
          <h2 id="abstract-title">中文电商场景的可信检测基准</h2>
          <p>{paper.abstract}</p>
          <blockquote>{paper.abstractOriginal}</blockquote>
        </div>
      </section>

      <section className="research-contributions" aria-labelledby="contributions-title">
        <div className="case-section-heading">
          <p className="eyebrow">Contributions</p>
          <h2 id="contributions-title">Three pieces, one robustness story</h2>
        </div>
        <div>
          {paper.contributions.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-narrative research-narrative" aria-label="Research method">
        <div>
          <p className="section-number">01</p>
          <h2>Research gap</h2>
          <p>{paper.problem}</p>
        </div>
        <div>
          <p className="section-number">02</p>
          <h2>Method</h2>
          <p>{paper.method}</p>
        </div>
      </section>

      <section className="research-visual-story" aria-labelledby="evidence-title">
        <div className="case-section-heading">
          <p className="eyebrow">Evidence</p>
          <h2 id="evidence-title">From controlled data to OOD results</h2>
        </div>
        <div>
          {paper.visuals.map((visual) => (
            <figure key={visual.src}>
              <div className={`research-visual-crop research-visual-${visual.crop}`}>
                <img src={visual.src} alt={visual.alt} loading="eager" />
              </div>
              <figcaption>
                <span>{visual.label}</span>
                {visual.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="research-findings" aria-labelledby="findings-title">
        <div>
          <p className="eyebrow">Findings</p>
          <h2 id="findings-title">Robustness without decoder-scale cost</h2>
          <p>{paper.results}</p>
        </div>
        <aside>
          <p className="eyebrow">Limitations</p>
          <p>{paper.limitations}</p>
        </aside>
      </section>

      <div className="tag-row research-keywords" aria-label="Research keywords">
        {paper.keywords.map((keyword) => (
          <span className="tag" key={keyword}>
            {keyword}
          </span>
        ))}
      </div>
    </article>
  );
}
