import React from 'react';
import { ProjectUpdate } from '../components/ProjectUpdate';
import { useUpdates, useCommits } from '../utils/projects-hook';
import { ProjectCommit } from '../components/ProjectCommit';
export const Updates: React.FC = () => {
  const updates = useUpdates();
  const commits = useCommits();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-slate-900 h-72">
        <div className="container mx-auto px-4 h-full flex items-end">
          <div className="pb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Project Updates</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Latest releases and commits from projects
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Updates</h1>
          <div className="space-y-8">
            {updates.length === 0 && (
              <div className="text-center text-gray-500">No updates found</div>
            )}
            {updates.map((update) => (
              <ProjectUpdate key={update.id} update={update} />
            ))}
          </div>
          <h1 className="text-2xl font-bold mb-4">Commits</h1>
          <div className="space-y-8">
            {commits.length === 0 && (
              <div className="text-center text-gray-500">No commits found</div>
            )}
            {commits.map((commit) => (
              <div key={commit.project}>
                <h3 className="text-lg font-bold mb-4">{commit.project.toUpperCase()}</h3>
                <div className="space-y-4">
                  {commit.commits.map((commit) => (
                    <ProjectCommit key={commit.id} commit={commit} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};