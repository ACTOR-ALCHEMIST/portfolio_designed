import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/content";

export default function Projects() {
  return (
    <div className="page-stack">
      <header className="page-header">
        <h1>项目经历</h1>
        <p>
          以下项目聚焦多模态内容理解、DPO 偏好优化、Agentic 数据蒸馏、LLM 高效推理和模型工程化落地。
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
