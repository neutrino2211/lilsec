import { Update, Commit } from "../types";
import { projects } from "./projects";

export const getUpdates = async (only: string[] = projects): Promise<Update[]> => {
    const responses = await Promise.all(only.map(async (project) => {
        const response = await fetch(`https://api.github.com/repos/${project}/releases`);
        const data = await response.json();
        return data;
    }));
    const filteredData = responses.filter((release: any) => only.includes(release.id));
    return filteredData.map((release: any) => ({
        id: release.id,
        date: release.created_at,
        title: release.name,
        description: release.body,
        category: release.prerelease ? 'Prerelease' : 'Release'
    }));
};

export const getCommits = async (only: string[] = projects): Promise<{ commits: Commit[], project: string }[]> => {
    const responses = await Promise.all(only.map(async (project) => {
        const response = await fetch(`https://api.github.com/repos/${project}/commits`);
        const data = await response.json();
        return data;
    }));

    return responses.map((commits: any, index: number) => ({
        commits: commits.map((commit: any) => ({
            id: commit.sha,
            date: commit.commit.committer.date,
            message: commit.commit.message,
            author: commit.author.login,
            avatar: commit.author.avatar_url,
            project: only[index].split('/')[1]
        })),
        project: only[index].split('/')[1]
    }));
};

