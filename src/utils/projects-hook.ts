import { useState } from "react";

import { useEffect } from "react";
import { getProjects } from "../data/projects";
import { projects } from "../data/projects";
import { Commit, Project, Update } from "../types";
import { getCommits, getUpdates } from "../data/updates";

const cacheData = (data: any, key: string) => {
  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem('lastFetched' + key[0].toUpperCase() + key.slice(1), new Date().toISOString());
}

export const useProjects = (only: string[] = projects) => {
  const [projects, setProjects] = useState<Project[]>(localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')!) : []);

  useEffect(() => {
    const cachedData = localStorage.getItem('projects');
    const lastFetched = localStorage.getItem('lastFetchedProjects');
    if (cachedData && lastFetched && new Date(lastFetched).getTime() > Date.now() - 1000 * 60 * 10) {
      setProjects(JSON.parse(cachedData));
    } else {
      getProjects(only).then((projects) => {
        setProjects(projects);
        cacheData(projects, 'projects');
      });
    }
  }, []);

  return projects;
}

export const useUpdates = (only: string[] = projects) => {
  const [updates, setUpdates] = useState<Update[]>(localStorage.getItem('updates') ? JSON.parse(localStorage.getItem('updates')!) : []);

  useEffect(() => {
    const cachedData = localStorage.getItem('updates');
    const lastFetched = localStorage.getItem('lastFetchedUpdates');
    if (cachedData && lastFetched && new Date(lastFetched).getTime() > Date.now() - 1000 * 60 * 10) {
      setUpdates(JSON.parse(cachedData));
    } else {
      getUpdates(only).then((updates) => {
        setUpdates(updates);
        cacheData(updates, 'updates');
      });
    }
  }, []);

  return updates;
}

export const useCommits = (only: string[] = projects) => {
  const [commits, setCommits] = useState<{ commits: Commit[], project: string }[]>(localStorage.getItem('commits') ? JSON.parse(localStorage.getItem('commits')!) : []);

  useEffect(() => {
    const cachedData = localStorage.getItem('commits');
    const lastFetched = localStorage.getItem('lastFetchedCommits');
    if (cachedData && lastFetched && new Date(lastFetched).getTime() > Date.now() - 1000 * 60 * 10) {
      setCommits(JSON.parse(cachedData));
    } else {
      getCommits(only).then((commits) => {
        setCommits(commits);
        cacheData(commits, 'commits');
      });
    }
  }, []);

  return commits;
}