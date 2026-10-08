import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/content";

export default function Projects() {
  return (
    <div className="page-stack">
      <header className="page-header projects-header">
        <p className="eyebrow">Selected work · 2026</p>
        <h1>从模型到数据飞轮</h1>
        <p>
          两个生产级 AI case study：一个用通用多模态模型和逐标签置信度处理内容分类，
          一个把稀缺 badcase 扩展为可训练、可质检的数据闭环。
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
