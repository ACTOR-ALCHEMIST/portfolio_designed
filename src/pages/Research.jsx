import ResearchCard from "../components/ResearchCard";
import { papers } from "../lib/content";

export default function Research() {
  return (
    <div className="page-stack">
      <header className="page-header">
        <h1>科研经历</h1>
        <p>
          研究与实验方向围绕 AI 文本检测、低资源部署、RAG 推理优化、自动化评估和训练框架工程化。
        </p>
      </header>

      <div className="research-list">
        {papers.map((paper) => (
          <ResearchCard key={paper.id} paper={paper} />
        ))}
      </div>
    </div>
  );
}
