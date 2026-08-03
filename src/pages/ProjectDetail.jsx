import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getProjectById } from "../lib/content";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return <NotFound />;
  }

  return (
    <article className="detail-page project-case-study">
      <Link className="back-link" to="/projects">
        <ArrowLeft aria-hidden="true" size={20} />
        Back to projects
      </Link>

      <header className="detail-header project-detail-header">
        <div className="detail-meta-row">
          <p className="eyebrow">{project.category}</p>
          <time>{project.period}</time>
        </div>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
      </header>

      <section className="project-metric-grid" aria-label="Project outcomes">
        {project.metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <figure className="detail-visual">
        <div
          className={`detail-visual-frame${
            project.imageTreatment ? ` image-treatment-${project.imageTreatment}` : ""
          }`}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="eager"
            style={{ objectPosition: project.imagePosition }}
          />
        </div>
        <figcaption>{project.imageCaption}</figcaption>
      </figure>

      <section className="project-narrative" aria-label="Project overview">
        <div>
          <p className="section-number">01</p>
          <h2>Challenge</h2>
          <p>{project.challenge}</p>
        </div>
        <div>
          <p className="section-number">02</p>
          <h2>Approach</h2>
          <p>{project.approach}</p>
        </div>
      </section>

      <section className="project-process" aria-labelledby="process-title">
        <div className="case-section-heading">
          <p className="eyebrow">System design</p>
          <h2 id="process-title">How it works</h2>
        </div>
        <ol>
          {project.process.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {project.media.length > 0 ? (
        <section className="project-media-gallery" aria-labelledby="stack-title">
          <div className="case-section-heading">
            <p className="eyebrow">Production stack</p>
            <h2 id="stack-title">Training to deployment</h2>
          </div>
          <div>
            {project.media.map((item) => (
              <figure key={item.src}>
                <div>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="project-outcomes" aria-labelledby="outcomes-title">
        <div className="case-section-heading">
          <p className="eyebrow">Contribution</p>
          <h2 id="outcomes-title">What changed</h2>
        </div>
        <p className="project-role">{project.role}</p>
        <ul className="plain-list">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <div className="tag-row project-tech" aria-label="Project technologies">
        {project.tech.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
