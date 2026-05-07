import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import SectionTitle from "../components/SectionTitle";
import { experiences, schools } from "../lib/content";

export default function CV() {
  return (
    <div className="page-stack">
      <section aria-labelledby="education-title">
        <SectionTitle id="education-title">教育背景</SectionTitle>
        <div className="timeline-list">
          {schools.map((school) => (
            <EducationCard key={school.id} school={school} />
          ))}
        </div>
      </section>

      <section aria-labelledby="experience-title">
        <SectionTitle id="experience-title">实习经历</SectionTitle>
        <div className="timeline-list">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>
    </div>
  );
}
