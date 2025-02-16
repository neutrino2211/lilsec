import React from 'react';
import { Code } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import logo from '../assets/logo.png';
import { useProjects } from '../utils/projects-hook';

export const Home: React.FC = () => {
  const projects = useProjects();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 h-[500px] relative">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img src={logo} alt="lilsec" className="h-32 w-32 rounded-md mt-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">lilsec</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              lilsec or "Little Security" is a collection of tools and resources for security enthusiasts developed by me (Mainasara Tsowa),
              a cybersecurity professional and software developer looking to publish my security tools and resources for the community.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Code className="mr-2" />
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length === 0 && (
              // Loading skeleton
              <div className="animate-pulse h-96 w-full bg-gray-200 rounded-md"></div>
            )}
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};