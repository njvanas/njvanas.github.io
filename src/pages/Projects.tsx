import React from 'react';
import { ArrowLeft, Github, Globe, Rocket, Brain, ShoppingCart, MessageSquare } from 'lucide-react';

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
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Stripe integration. Includes features like cart management, user authentication, and order processing.",
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800",
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/johndoe/ecommerce"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application powered by advanced NLP processing. Features include sentiment analysis, language translation, and context-aware responses.",
      tech: ["React", "Node.js", "Socket.io", "TensorFlow.js", "OpenAI API"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800",
      liveUrl: "https://ai-chat-demo.com",
      githubUrl: "https://github.com/johndoe/ai-chat"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, task delegation, and progress tracking features.",
      tech: ["React", "GraphQL", "MongoDB", "Express", "Socket.io"],
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800",
      liveUrl: "https://task-manager-demo.com",
      githubUrl: "https://github.com/johndoe/task-manager"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <a 
          href="/" 
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