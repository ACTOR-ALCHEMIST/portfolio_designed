import BlogCard from "../components/BlogCard";
import { posts } from "../lib/content";

export default function Blog() {
  return (
    <div className="page-stack">
      <header className="page-header blog-header">
        <h1>Blog</h1>
        <p>记录学习笔记、技术分享和个人思考。（持续更新中）</p>
      </header>
      <div className="blog-list">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
