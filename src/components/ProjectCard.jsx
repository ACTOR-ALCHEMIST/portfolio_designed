import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link className="project-card" to={`/projects/${project.id}`}>
      <div className="project-media">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
      <div className="project-body">
        <div className="card-title-row">
          <h2>{project.name}</h2>
          <ArrowUpRight aria-hidden="true" size={22} strokeWidth={2} />
        </div>
        <time>{project.period}</time>
        <p>{project.summary}</p>
      </div>
    </Link>
  );
}
