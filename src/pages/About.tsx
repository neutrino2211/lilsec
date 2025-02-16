import React, { useState } from 'react';
import { Github, Linkedin, Mail, Terminal, Coffee, Globe } from 'lucide-react';
import { skills, skillPillColors } from '../data/skills';
import experiences from '../data/experiences';

export const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-slate-900 h-[400px]">
        <div className="container mx-auto px-4 h-full flex items-end">
          <div className="pb-8">
            <h1 className="text-4xl font-bold text-white mb-4 pt-12">About Me</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Hello, I'm a Backend/DevOps engineer and Malware Reverse Engineer with over 5 years of experience with Go,
              Python, Node.js and Typescript and over 2 years of experience in Professional Cybersecurity. 
              Outside of work I work on my hobby projects and play a lot of Football Manager.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Terminal className="h-6 w-6 text-blue-600" />
              Technical Skills
            </h2>
            <div className="space-y-4">
              {
                Object.entries(skills).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="font-semibold mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span key={skill} className={`px-3 py-1 ${skillPillColors[category as keyof typeof skillPillColors]} text-white rounded-full text-sm`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Coffee className="h-6 w-6 text-blue-600" />
              Experience
            </h2>
            <div className="space-y-4">
              {
                (showMore ? experiences : experiences.slice(0, 3)).map((experience) => (
                  <div key={experience.id}>
                    <h3 className="font-bold">{experience.position}</h3>
                    <p className="text-gray-600">{experience.company} • {experience.startDate} - {experience.endDate}</p>
                    <ul className="list-disc font-semibold list-inside">
                      {experience.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))
              }
            </div>
            <button onClick={toggleShowMore} className="text-blue-600 hover:text-blue-800">
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2 mb-6">
            <Globe className="h-6 w-6 text-blue-600" />
            Get in Touch
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/neutrino2211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mainasara-tsowa-17098b214/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:tsowamainasara@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};