export default function EducationCard({ school }) {
  return (
    <article className="timeline-card">
      <div className="timeline-heading">
        <div>
          <h3>
            {school.name}
            <span>{school.englishName}</span>
          </h3>
          <p>
            {school.degree} · {school.major}
          </p>
        </div>
        <time>{school.period}</time>
      </div>
      {school.summary ? <p className="timeline-summary">{school.summary}</p> : null}
      {school.honors?.length ? (
        <p className="timeline-summary">荣誉：{school.honors.join("、")}</p>
      ) : null}
      {school.courses?.length ? (
        <p className="timeline-muted">核心课程：{school.courses.join("、")}</p>
      ) : null}
    </article>
  );
}
