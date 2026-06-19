import { ArrowLeft, ExternalLink } from "lucide-react";
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
    <article className="detail-page">
      <Link className="back-link" to="/projects">
        <ArrowLeft aria-hidden="true" size={20} />
        Back to projects
      </Link>
      <header className="detail-header">
        <p className="eyebrow">{project.period}</p>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
      </header>
      <img
        className="detail-image"
        src={project.image}
        alt={project.imageAlt}
        loading="eager"
      />
      <section className="detail-section">
        <h2>Overview</h2>
        <p>{project.details}</p>
      </section>
      <section className="detail-section">
        <h2>Role</h2>
        <p>{project.role}</p>
      </section>
      <section className="detail-section">
        <h2>Highlights</h2>
        <ul className="plain-list">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>
      <div className="tag-row" aria-label="Project technologies">
        {project.tech.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
      {project.link ? (
        <a className="external-cta" href={project.link} target="_blank" rel="noreferrer">
          View reference
          <ExternalLink aria-hidden="true" size={18} />
        </a>
      ) : null}
    </article>
  );
}
