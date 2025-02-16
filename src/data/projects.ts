import { Project } from '../types';

export const projects = [
  "neutrino2211/valradar",
  "neutrino2211/scryer",
  "neutrino2211/mw-embed",
]

export async function getProjects(only: string[] = projects): Promise<Project[]> {
  const data = await Promise.all(only.map(async (project) => {
    const response = await fetch(`https://api.github.com/repos/${project}`);
    const repo = await response.json();
    return {
      ...repo,
      ogImage: `https://opengraph.githubassets.com/main/${project.split('/')[0]}/${project.split('/')[1]}/`
    }
  }));
  const filteredData = data.filter((project: {full_name: string}) => only.includes(project.full_name));
  // console.log(filteredData, data.map((project: any) => project.full_name));
  return filteredData.map((project: any) => ({
    id: project.id,
    title: project.name,
    description: project.description,
    image: project.ogImage,
    tags: project.topics,
    demoUrl: project.homepage,
    githubUrl: project.html_url,
    longDescription: project.description,
  }));
}