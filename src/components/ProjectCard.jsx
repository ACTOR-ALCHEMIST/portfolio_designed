import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link className="project-card" to={`/projects/${project.id}`}>
      <div
        className={`project-media${
          project.imageTreatment ? ` image-treatment-${project.imageTreatment}` : ""
        }`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          style={{ objectPosition: project.imagePosition }}
        />
        <span className="project-category">{project.category}</span>
      </div>
      <div className="project-body">
        <div className="card-title-row">
          <h2>{project.name}</h2>
          <ArrowUpRight aria-hidden="true" size={22} strokeWidth={2} />
        </div>
        <time>{project.period}</time>
        <p>{project.summary}</p>
        <div className="project-card-metrics" aria-label="Project highlights">
          {project.metrics.slice(0, 2).map((metric) => (
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
