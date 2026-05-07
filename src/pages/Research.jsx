import ResearchCard from "../components/ResearchCard";
import { papers } from "../lib/content";

export default function Research() {
  return (
    <div className="page-stack">
      <header className="page-header">
        <h1>科研经历</h1>
        <p>
          研究关注 Human-AI Interaction、AI 辅助设计工具和创造力支持，强调技术能力与体验价值之间的认知对齐。
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
