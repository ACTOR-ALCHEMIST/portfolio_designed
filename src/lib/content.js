import blogData from "../data/blog.json";
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
export const posts = blogData.posts;

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}

export function getResearchById(id) {
  return papers.find((paper) => paper.id === id);
}

export function getFeaturedProjects(limit = 2) {
  return projects.slice(0, limit);
}

export function getRecentPosts(limit = 3) {
  return [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

export function getPinnedPosts() {
  return posts.filter((post) => post.pinned);
}
