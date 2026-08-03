import { Link } from "react-router-dom";
import { getFeaturedProjects, profile } from "../lib/content";

export default function Home() {
  const featuredProjects = getFeaturedProjects(2);

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

      <section className="home-projects" aria-labelledby="selected-projects-title">
        <div className="section-kicker">
          <div>
            <p className="eyebrow">Case studies</p>
            <h2 id="selected-projects-title">Selected Projects</h2>
          </div>
          <Link to="/projects">View all</Link>
        </div>
        <div className="home-project-list">
          {featuredProjects.map((project, index) => (
            <Link to={`/projects/${project.id}`} key={project.id}>
              <span className="home-project-index">0{index + 1}</span>
              <span className="home-project-copy">
                <strong>{project.name}</strong>
                <small>{project.summary}</small>
              </span>
              <time>{project.period}</time>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
