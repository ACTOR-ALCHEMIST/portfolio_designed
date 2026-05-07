import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p className="eyebrow">404</p>
      <h1 id="not-found-title">Page not found</h1>
      <p>这个页面不存在，或内容 ID 还没有配置到 JSON 数据中。</p>
      <Link className="external-cta" to="/">
        Back home
      </Link>
    </section>
  );
}
