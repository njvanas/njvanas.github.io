import React from 'react';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import gif1 from '../assets/html.gif';
import gif2 from '../assets/id.gif';
import gif3 from '../assets/settings.gif';
import gif4 from '../assets/checklist.gif';
import gif5 from '../assets/cookbook.gif';

function ProjectCard({ 
  title, 
  description, 
  tech, 
  image, 
  liveUrl, 
  githubUrl 
}: { 
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {liveUrl && (
            <a 
              href={liveUrl}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Maintenance Tool",
      description: "An all-in-one maintenance utility designed to streamline routine scripts and optimize performance. This tool simplifies the management of essential maintenance tasks, including disk cleanup, software updates, manual log management, and access to standardized scripts.",
      tech: ["Python", "PowerShell"],
      image: gif3,
      liveUrl: "https://github.com/njvanas/AIO-Maintenance/releases/tag/V1",
      githubUrl: "https://github.com/njvanas/AIO-Maintenance"
    },
    {
      title: "This Website",
      description: "My personal website, showcasing my versatility.",
      tech: ["JSON", "TypeScript", "JavaScript", "React", "HTML", "CSS"],
      image: gif1,
      liveUrl: "https://njvanas.github.io/",
      githubUrl: "https://github.com/njvanas/njvanas.github.io"
    },
    {
      title: "Access Management Tool",
      description: "Comprehensive solution for managing access requests to IT systems, applications, and data. It is designed to streamline the approval process, ensure security, and provide a robust audit trail.",
      tech: ["React", "Node.js", "Postgresql", "Docker"],
      image: gif2,
      liveUrl: "going-live-soon",
      githubUrl: "https://github.com/njvanas/AccessManagerPro"
    },
    {
      title: "Typing Speed Test",
      description: "A fun little website to test your typing skills and see what your WPM is.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: gif4,
      liveUrl: "https://njvanas.github.io/typing-speed-test",
      githubUrl: "https://github.com/njvanas/typing-speed-test"
    },
    {
      title: "Recipe Tool",
      description: "An all-in-one recipe utility designed to streamline the recipe processs for bodybuilders and general fitness persons.",
      tech: ["Python", "PowerShell"],
      image: gif5,
      liveUrl: "https://gymbrorecipes.netlify.app",
      githubUrl: "https://github.com/njvanas/GymBroRecipes"
    },
    {
      title: "Auto Office Install Tool",
      description: "Automated tool for streamlined Microsoft Office installation and configuration. Simplifies the deployment process with customizable installation options and automated setup procedures.",
      tech: ["PowerShell", "Batch"],
      image: gif3, // Using the same maintenance tool gif as placeholder
      liveUrl: "https://njvanas.github.io/Office-Auto-Install/",
      githubUrl: "https://github.com/njvanas/Office-Auto-Install"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
          }}
          className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </a>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-100 mb-8 text-center">Featured Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Projects;
