import { Link } from "react-router-dom";
import { getFeaturedProjects, getRecentPosts, profile } from "../lib/content";

export default function Home() {
  const featuredProjects = getFeaturedProjects(2);
  const recentPosts = getRecentPosts(2);

  return (
    <div className="page-stack home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <p className="home-greeting">{profile.greeting}</p>
        <h2 id="home-title">{profile.headline}</h2>
        <p className="home-tagline">{profile.tagline}</p>
        <div className="intro-copy">
          <p>{profile.introEnglish}</p>
          <p>{profile.introChinese}</p>
        </div>
      </section>

      <section className="news-section" aria-labelledby="news-title">
        <h2 id="news-title">News</h2>
        <div className="news-list">
          {profile.news.map((item) => (
            <article className="news-item" key={`${item.date}-${item.title}`}>
              <time>{item.date}</time>
              <span aria-hidden="true" className="news-marker" />
              <p>{item.title}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-split" aria-label="Featured summaries">
        <div>
          <div className="section-kicker">
            <h2>Selected Projects</h2>
            <Link to="/projects">View all</Link>
          </div>
          <div className="compact-list">
            {featuredProjects.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id}>
                <span>{project.name}</span>
                <time>{project.period}</time>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="section-kicker">
            <h2>Recent Notes</h2>
            <Link to="/blog">Read blog</Link>
          </div>
          <div className="compact-list">
            {recentPosts.map((post) => (
              <a href={post.link} key={post.id} target="_blank" rel="noreferrer">
                <span>{post.title}</span>
                <time>{post.date}</time>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
