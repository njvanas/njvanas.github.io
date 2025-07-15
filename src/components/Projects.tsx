import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { handleExternalLink } from '../utils/security';
import { slugify } from '../utils/slug';
import { projects, Project } from '../data/projects';

const Projects: React.FC = () => {

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating expertise in cybersecurity,
            automation, and modern web development.
          </p>
        </div>

        {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              id={slugify(project.title)}
              className="bg-slate-900/50 rounded-lg p-6 hover:bg-slate-900/70 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 group"
            >
                {/* Project Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400 group-hover:bg-blue-600/30 transition-colors duration-300">
                    {project.icon}
                  </div>
                  <span className="text-xs text-gray-400 bg-slate-800/50 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-gray-400 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {project.liveUrl && (
                    <button
                      onClick={() => handleExternalLink(project.liveUrl!)}
                      className="flex items-center space-x-2 px-3 py-2 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors duration-300 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  )}
                  {project.githubUrl && (
                    <button
                      onClick={() => handleExternalLink(project.githubUrl!)}
                      className="flex items-center space-x-2 px-3 py-2 bg-slate-700/50 text-gray-300 rounded hover:bg-slate-700/70 transition-colors duration-300 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </button>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors duration-300 text-sm">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              These projects demonstrate my versatility across different technologies and domains.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              <span>Discuss a Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;