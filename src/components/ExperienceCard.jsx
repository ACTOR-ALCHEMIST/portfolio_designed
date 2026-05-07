export default function ExperienceCard({ experience }) {
  return (
    <article className="timeline-card">
      <div className="timeline-heading">
        <div>
          <h3>
            {experience.company}
            <span>{experience.englishCompany}</span>
          </h3>
          <p>
            {experience.role} · {experience.location}
          </p>
        </div>
        <time>{experience.period}</time>
      </div>
      <p className="timeline-summary">{experience.summary}</p>
      <ul className="plain-list">
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="tag-row" aria-label="Skills used">
        {experience.tech.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
