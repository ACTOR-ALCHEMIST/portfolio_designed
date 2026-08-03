import ResearchCard from "../components/ResearchCard";
import { papers } from "../lib/content";

export default function Research() {
  return (
    <div className="page-stack">
      <header className="page-header research-page-header">
        <p className="eyebrow">Selected publication · 2025</p>
        <h1>基于对比学习的跨域与鲁棒性优化</h1>
        <p>
          一项围绕中文电商评论、受控数据合成与分层对比学习的完整研究，
          Benchmark从 26K 数据基准一路验证到最具挑战的跨模型、跨风格、跨领域场景。
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
