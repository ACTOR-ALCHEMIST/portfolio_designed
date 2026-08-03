import educationData from "../data/education.json";
import experienceData from "../data/experience.json";
import profileData from "../data/profile.json";
import projectsData from "../data/projects.json";
import researchData from "../data/research.json";
import worksData from "../data/works.json";

export const profile = profileData;
export const schools = educationData.schools;
export const experiences = experienceData.experiences;
export const projects = projectsData.projects;
export const papers = researchData.papers;
export const works = worksData.works;

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}

export function getResearchById(id) {
  return papers.find((paper) => paper.id === id);
}

export function getFeaturedProjects(limit = 2) {
  return projects.slice(0, limit);
}
