import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import cv from "../data/cv.json";

export default function CV() {
  return (
    <div className="page-stack resume-page">
      <header className="resume-hero" aria-labelledby="cv-title">
        <div className="resume-hero-copy">
          <p className="eyebrow">{cv.hero.eyebrow}</p>
          <h1 id="cv-title">{cv.hero.title}</h1>
          <p>{cv.hero.summary}</p>
          <div className="resume-focus-list" aria-label="Professional focus">
            {cv.hero.focus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

      </header>

      <section className="resume-section" aria-labelledby="experience-title">
        <SectionTitle id="experience-title">工作经历</SectionTitle>
        <article className="resume-role-card">
          <div className="resume-role-heading">
            <div>
              <p className="eyebrow">Current role</p>
              <h3>
                {cv.experience.company}
                <span>{cv.experience.englishCompany}</span>
              </h3>
              <p>
                {cv.experience.role} · {cv.experience.location}
              </p>
            </div>
            <time>{cv.experience.period}</time>
          </div>
          <p className="resume-lead">{cv.experience.summary}</p>
          <ul className="resume-bullet-list">
            {cv.experience.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="resume-skill-chips" aria-label="Role skills">
            {cv.experience.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="resume-section" aria-labelledby="projects-title">
        <SectionTitle id="projects-title">项目经历</SectionTitle>
        <div className="resume-project-list-v2">
          {cv.projects.map((project, index) => (
            <article className="resume-project-v2" key={project.title}>
              <header>
                <span className="resume-project-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.role}</p>
                </div>
                <time>{project.period}</time>
              </header>
              <ul className="resume-bullet-list">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section" aria-labelledby="education-title">
        <SectionTitle id="education-title">教育经历</SectionTitle>
        <div className="resume-education-grid">
          {cv.education.map((item) => (
            <article key={item.school}>
              <div>
                <p className="eyebrow">{item.period}</p>
                <h3>{item.school}</h3>
                <span>{item.englishSchool}</span>
              </div>
              <p className="resume-degree">{item.degree}</p>
              <strong>{item.summary}</strong>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section" aria-labelledby="skills-title">
        <SectionTitle id="skills-title">技能</SectionTitle>
        <div className="resume-skills-grid">
          {cv.skills.map((skill) => (
            <article key={skill.group}>
              <p className="eyebrow">{skill.group}</p>
              <p>{skill.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section resume-support-grid" aria-label="Awards and open source">
        <div aria-labelledby="awards-title">
          <SectionTitle id="awards-title">奖项</SectionTitle>
          <div className="resume-award-list">
            {cv.awards.map((award) => (
              <article key={award.title}>
                <time>{award.date}</time>
                <div>
                  <h3>{award.title}</h3>
                  <p>{award.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div aria-labelledby="opensource-title">
          <SectionTitle id="opensource-title">开源经历</SectionTitle>
          <div className="resume-open-source-list">
            {cv.openSource.map((item) => (
              <a href={item.link} target="_blank" rel="noreferrer" key={item.title}>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.meta}</small>
                </span>
                <ArrowUpRight aria-hidden="true" size={20} />
                <p>{item.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
