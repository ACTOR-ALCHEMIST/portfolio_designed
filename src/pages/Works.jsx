import WorkCard from "../components/WorkCard";
import { works } from "../lib/content";

export default function Works() {
  return (
    <div className="page-stack">
      <header className="page-header">
        <h1>个人作品</h1>
        <p>整理开源贡献、独立工具和全栈 AI 产品实践。</p>
      </header>
      <div className="work-grid">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}
