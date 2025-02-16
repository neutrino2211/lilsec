import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ProjectUpdate } from '../components/ProjectUpdate';
import { useProjects, useUpdates, useCommits } from '../utils/projects-hook';
import { ProjectCommit } from '../components/ProjectCommit';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projects = useProjects();
  const updates = useUpdates();
  const commits = useCommits();
  const project = projects.find((p) => p.id == id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const projectUpdates = updates.filter((u) => u.id === id);
  const projectCommits = commits.find((c) => c.project === project?.title);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pb-12 pt-20">
        <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center my-2 pb-6">
          <ArrowLeft className="mr-2" /> Back to Projects
        </Link>
        
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden lg:grid lg:grid-cols-2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed">
              {project.longDescription}
            </p>

            <div className="flex gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={20} className="mr-2" />
                  View Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github size={20} className="mr-2" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Project Updates</h2>
          <div className="space-y-4">
            {projectUpdates.length > 0 ? (
              projectUpdates.map((update) => (
                <ProjectUpdate key={update.id} update={update} />
              ))
            ) : (
              <div className="text-gray-500">No updates found</div>
            )}
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Project Commits</h2>
            <div className="space-y-4">
              {projectCommits!.commits.length > 0 ? (
                projectCommits!.commits.map((commit) => (
                  <ProjectCommit key={commit.id} commit={commit} />
                ))
              ) : (
                <div className="text-gray-500">No commits found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};