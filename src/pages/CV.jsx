import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import SectionTitle from "../components/SectionTitle";
import { experiences, profile, projects, schools } from "../lib/content";

export default function CV() {
  const cvProjects = projects.filter((project) => project.cvFeatured !== false);

  return (
    <div className="page-stack">
      <header className="cv-hero" aria-labelledby="cv-title">
        <div>
          <p className="eyebrow">Resume</p>
          <h1 id="cv-title">{profile.title}</h1>
          <p>{profile.resumeSummary}</p>
        </div>
        <div className="metric-grid" aria-label="Resume highlights">
          {profile.resumeMetrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </header>

      <section aria-labelledby="experience-title">
        <SectionTitle id="experience-title">工作经历</SectionTitle>
        <div className="timeline-list">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      <section aria-labelledby="projects-title">
        <SectionTitle id="projects-title">精选项目</SectionTitle>
        <div className="resume-project-list">
          {cvProjects.map((project) => (
            <article className="resume-project" key={project.id}>
              <div className="resume-project-heading">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.role}</p>
                </div>
                <time>{project.period}</time>
              </div>
              <p>{project.summary}</p>
              <ul className="plain-list compact-listing">
                {project.highlights.slice(0, 5).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="education-title">
        <SectionTitle id="education-title">教育背景</SectionTitle>
        <div className="timeline-list">
          {schools.map((school) => (
            <EducationCard key={school.id} school={school} />
          ))}
        </div>
      </section>

      <section aria-labelledby="skills-title">
        <SectionTitle id="skills-title">技能</SectionTitle>
        <div className="info-grid">
          {profile.skills.map((skill) => (
            <article className="info-card" key={skill}>
              <p>{skill}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="awards-title">
        <SectionTitle id="awards-title">奖项</SectionTitle>
        <div className="timeline-list">
          {profile.awards.map((award) => (
            <article className="timeline-card compact-timeline" key={award.title}>
              <div className="timeline-heading">
                <div>
                  <h3>{award.title}</h3>
                </div>
                <time>{award.date}</time>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="opensource-title">
        <SectionTitle id="opensource-title">开源经历</SectionTitle>
        <div className="timeline-list">
          {profile.openSource.map((item) => (
            <article className="timeline-card compact-timeline" key={item.title}>
              <div className="timeline-heading">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
                <a className="inline-link" href={item.link} target="_blank" rel="noreferrer">
                  Link
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
