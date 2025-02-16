export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  longDescription: string;
}

export interface Update {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

export interface Commit {
  id: string;
  date: string;
  message: string;
  author: string;
  avatar: string;
  project: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  tasks: string[];
  startDate: string;
  endDate: string;
  location: string;
}