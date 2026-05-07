import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/content";

export default function Projects() {
  return (
    <div className="page-stack">
      <header className="page-header">
        <h1>项目经历</h1>
        <p>
          以下是我参与的主要项目，聚焦于人 AI 协作、智能交互产品、人工智能应用等领域。
        </p>
      </header>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
