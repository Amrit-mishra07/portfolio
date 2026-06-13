import ProjectsClient from "./ProjectsClient";
import projectRepos from "../data/projects.json";

async function getGithubProjects() {
  const projectsData = [];

  for (const repoFullName of projectRepos) {
    try {
      const res = await fetch(`https://api.github.com/repos/${repoFullName}`, { 
        next: { revalidate: 3600 } 
      });
      
      if (res.ok) {
        const repo = await res.json();
        projectsData.push({
          num: `[0${projectsData.length + 1}]`,
          tag: repo.language ? `$ ${repo.language.toLowerCase()} · open-source` : "$ open-source",
          name: repo.name,
          desc: repo.description || "No description provided.",
          tech: repo.language ? [repo.language] : [],
          github: repo.html_url,
          live: repo.homepage || null,
          isComingSoon: false
        });
      }
    } catch (error) {
      console.error(`Failed to fetch github repo ${repoFullName}`, error);
    }
  }

  // Fill with coming soon if we couldn't fetch enough projects or if list is short
  while (projectsData.length < 4) {
    projectsData.push({
      num: `[0${projectsData.length + 1}]`,
      tag: "$ in-progress",
      name: "// coming soon",
      desc: "Currently building — drop by GitHub to see what's cooking.",
      tech: [],
      github: "https://github.com/Amrit-mishra07",
      live: null,
      isComingSoon: true,
    });
  }

  return projectsData;
}

export default async function Projects() {
  const allProjects = await getGithubProjects();
  return <ProjectsClient projects={allProjects} />;
}
