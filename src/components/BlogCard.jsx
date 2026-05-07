export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      {post.pinned ? <span className="pinned-label">置顶</span> : null}
      <div className="blog-card-heading">
        <h2>{post.title}</h2>
        <time>{post.date}</time>
      </div>
      <p>{post.summary}</p>
      <div className="tag-row" aria-label="Post tags">
        {post.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
