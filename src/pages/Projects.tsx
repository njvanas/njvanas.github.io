import React, { useState } from 'react';
import { Github, Globe, Calendar, Users, TrendingUp, Shield, Code, Terminal, Zap, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Breadcrumbs from '../components/Breadcrumbs';
import gif1 from '../assets/html.gif';
import gif2 from '../assets/id.gif';
import gif3 from '../assets/settings.gif';
import gif4 from '../assets/checklist.gif';
import gif5 from '../assets/cookbook.gif';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  results: string[];
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured?: boolean;
  metrics?: {
    users?: string;
    performance?: string;
    security?: string;
  };
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="card-interactive">
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img 
          src={project.image} 
          alt={`${project.title} screenshot`} 
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-cyber-primary/20 cyber-primary rounded-full text-sm font-medium backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-cyber-accent/20 cyber-accent rounded-full text-sm font-medium backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <h3 className="text-2xl font-bold cyber-text hover:text-gradient transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="cyber-text-muted leading-relaxed">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-cyber-primary/20">
            {project.metrics.users && (
              <div className="text-center">
                <div className="text-lg font-bold cyber-primary">{project.metrics.users}</div>
                <div className="text-xs cyber-text-muted">Users</div>
              </div>
            )}
            {project.metrics.performance && (
              <div className="text-center">
                <div className="text-lg font-bold cyber-success">{project.metrics.performance}</div>
                <div className="text-xs cyber-text-muted">Performance</div>
              </div>
            )}
            {project.metrics.security && (
              <div className="text-center">
                <div className="text-lg font-bold cyber-warning">{project.metrics.security}</div>
                <div className="text-xs cyber-text-muted">Security</div>
              </div>
            )}
          </div>
        )}

        {/* Expandable Case Study */}
        {isExpanded && (
          <div className="space-y-6 animate-slide-up">
            <div>
              <h4 className="text-lg font-semibold cyber-text mb-2 flex items-center">
                <Shield className="w-5 h-5 mr-2 cyber-primary" />
                Problem Statement
              </h4>
              <p className="cyber-text-muted leading-relaxed">{project.problem}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold cyber-text mb-2 flex items-center">
                <Code className="w-5 h-5 mr-2 cyber-primary" />
                Solution Approach
              </h4>
              <p className="cyber-text-muted leading-relaxed">{project.solution}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold cyber-text mb-2 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 cyber-primary" />
                Results & Impact
              </h4>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-cyber-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="cyber-text-muted leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-cyber-primary/10 cyber-primary rounded-full text-sm font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <div className="flex space-x-4 flex-1">
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                className="flex items-center cyber-text-muted hover:cyber-primary transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
              >
                <Globe className="w-5 h-5 mr-2" />
                Live Demo
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                className="flex items-center cyber-text-muted hover:cyber-primary transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${project.title}`}
              >
                <Github className="w-5 h-5 mr-2" />
                Source Code
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            )}
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="cyber-primary hover:cyber-secondary transition-colors font-medium text-sm"
          >
            {isExpanded ? 'Show Less' : 'View Case Study'} →
          </button>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Security Tools', 'Web Development', 'Automation', 'Utilities'];

  const projects: Project[] = [
    {
      title: "Access Management Pro",
      description: "Enterprise-grade solution for managing access requests to IT systems, applications, and data with comprehensive audit trails and automated workflows.",
      longDescription: "A full-stack web application designed to streamline access management in enterprise environments while maintaining strict security controls.",
      problem: "Organizations struggled with manual access request processes, leading to security gaps, compliance issues, and operational inefficiencies. Existing solutions were either too complex or lacked proper audit capabilities.",
      solution: "Developed a React-based frontend with Node.js backend, implementing role-based access control, automated approval workflows, and comprehensive logging. Integrated with existing Active Directory infrastructure for seamless user management.",
      results: [
        "Reduced access request processing time from 5 days to 2 hours",
        "Achieved 100% audit trail compliance for SOC2 certification",
        "Decreased security incidents related to improper access by 85%",
        "Improved user satisfaction scores by 60% through streamlined interface"
      ],
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Azure AD"],
      image: gif2,
      liveUrl: "https://access-manager-demo.netlify.app",
      githubUrl: "https://github.com/njvanas/AccessManagerPro",
      category: "Security Tools",
      featured: true,
      metrics: {
        users: "500+",
        performance: "99.9%",
        security: "Zero Breaches"
      }
    },
    {
      title: "AIO Maintenance Tool",
      description: "All-in-one maintenance utility designed to streamline routine scripts and optimize system performance with automated security hardening features.",
      longDescription: "A comprehensive Python-based tool that automates system maintenance tasks while implementing security best practices.",
      problem: "IT administrators spent significant time on repetitive maintenance tasks, often missing critical security updates or performance optimizations due to manual processes.",
      solution: "Created a unified Python application with PowerShell integration that automates disk cleanup, software updates, log management, and security hardening. Includes scheduling capabilities and detailed reporting.",
      results: [
        "Reduced manual maintenance time by 75%",
        "Improved system performance metrics by 40%",
        "Eliminated missed security updates through automation",
        "Standardized maintenance procedures across 200+ systems"
      ],
      tech: ["Python", "PowerShell", "Windows API", "SQLite"],
      image: gif3,
      liveUrl: "https://github.com/njvanas/AIO-Maintenance/releases/tag/V1",
      githubUrl: "https://github.com/njvanas/AIO-Maintenance",
      category: "Automation",
      metrics: {
        users: "200+",
        performance: "+40%",
        security: "100% Updated"
      }
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing cybersecurity expertise with advanced accessibility features and performance optimization.",
      longDescription: "A React-based portfolio website designed to demonstrate technical skills while maintaining professional presentation and optimal user experience.",
      problem: "Need for a professional online presence that effectively communicates cybersecurity expertise while demonstrating modern web development capabilities and accessibility standards.",
      solution: "Built with React and TypeScript, implementing responsive design, semantic HTML, WCAG compliance, and performance optimization. Features custom animations, dark theme, and comprehensive SEO optimization.",
      results: [
        "Achieved 100% accessibility score on Lighthouse audits",
        "Optimized for 95+ performance score across all metrics",
        "Implemented comprehensive SEO resulting in improved search visibility",
        "Created reusable component library for future projects"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Actions"],
      image: gif1,
      liveUrl: "https://njvanas.github.io/",
      githubUrl: "https://github.com/njvanas/njvanas.github.io",
      category: "Web Development",
      featured: true,
      metrics: {
        performance: "95+",
        security: "A+ Rating"
      }
    },
    {
      title: "Auto Office Install Tool",
      description: "Automated Microsoft Office deployment solution with PowerShell automation and configuration management for enterprise environments.",
      longDescription: "A comprehensive deployment tool that simplifies Microsoft Office installation and configuration across enterprise networks.",
      problem: "Manual Office installations were time-consuming, error-prone, and difficult to standardize across different departments with varying requirements.",
      solution: "Developed PowerShell-based automation scripts with GUI interface for easy configuration. Includes silent installation options, custom configuration profiles, and automated license management.",
      results: [
        "Reduced installation time from 2 hours to 15 minutes per machine",
        "Achieved 100% consistency in Office configurations",
        "Eliminated installation errors through automated validation",
        "Saved 80+ hours per month in IT deployment time"
      ],
      tech: ["PowerShell", "Batch Scripts", "Windows Installer", "Group Policy"],
      image: gif3,
      liveUrl: "https://njvanas.github.io/Office-Auto-Install/",
      githubUrl: "https://github.com/njvanas/Office-Auto-Install",
      category: "Automation",
      metrics: {
        users: "1000+",
        performance: "87% Faster"
      }
    },
    {
      title: "Typing Speed Test",
      description: "Interactive web application for testing typing skills with real-time WPM calculation, accuracy tracking, and performance analytics.",
      longDescription: "A gamified typing test application designed to help users improve their typing skills through engaging challenges and detailed performance tracking.",
      problem: "Existing typing test tools lacked engaging user interfaces and comprehensive performance analytics, making it difficult for users to track improvement over time.",
      solution: "Created a responsive web application with real-time typing analysis, multiple difficulty levels, and detailed performance metrics. Implemented local storage for progress tracking and achievement system.",
      results: [
        "Achieved 95% user engagement rate with gamification features",
        "Implemented accurate WPM calculation with 99.9% precision",
        "Created responsive design supporting all device types",
        "Developed comprehensive analytics dashboard for progress tracking"
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "Local Storage API"],
      image: gif4,
      liveUrl: "https://njvanas.github.io/typing-speed-test",
      githubUrl: "https://github.com/njvanas/typing-speed-test",
      category: "Utilities",
      metrics: {
        users: "1000+",
        performance: "99.9%"
      }
    },
    {
      title: "GymBro Recipes",
      description: "Specialized recipe management tool designed for bodybuilders and fitness enthusiasts with macro tracking and meal planning features.",
      longDescription: "A comprehensive nutrition and recipe management application tailored specifically for fitness enthusiasts and bodybuilders.",
      problem: "Fitness enthusiasts struggled to find recipe tools that properly calculated macronutrients and supported their specific dietary requirements for muscle building and performance.",
      solution: "Built a specialized recipe application with macro calculation, meal planning, and nutritional analysis. Features ingredient substitution suggestions and bulk meal preparation guides.",
      results: [
        "Simplified macro tracking for 500+ fitness enthusiasts",
        "Reduced meal planning time by 60% through automation",
        "Achieved 95% accuracy in nutritional calculations",
        "Created comprehensive database of fitness-focused recipes"
      ],
      tech: ["React", "JavaScript", "Nutrition API", "Local Storage"],
      image: gif5,
      liveUrl: "https://gymbrorecipes.netlify.app",
      githubUrl: "https://github.com/njvanas/GymBroRecipes",
      category: "Utilities",
      metrics: {
        users: "500+",
        performance: "95% Accuracy"
      }
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-cyber">
      <Navigation currentPath="projects" />
      <Breadcrumbs currentPath="projects" />

      <main className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Terminal className="w-12 h-12 cyber-primary mr-4" />
            <h1 className="text-gradient">Featured Projects</h1>
          </div>
          <p className="text-responsive-lg cyber-text-muted max-w-4xl mx-auto leading-relaxed">
            A showcase of impactful cybersecurity and development projects demonstrating expertise in 
            identity management, automation, and secure application development. Each project includes 
            detailed case studies with quantifiable results and technical implementation insights.
          </p>
        </div>

        {/* Featured Projects Highlight */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold cyber-text mb-8 flex items-center">
            <Zap className="w-6 h-6 mr-3 cyber-primary" />
            Spotlight Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-cyber-primary text-cyber-dark'
                  : 'glass cyber-text-muted hover:cyber-primary hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold cyber-text mb-4">Interested in Collaboration?</h3>
          <p className="cyber-text-muted mb-6 max-w-2xl mx-auto leading-relaxed">
            These projects represent my commitment to delivering secure, efficient, and user-focused solutions. 
            Let's discuss how similar approaches can benefit your organization's cybersecurity and IT infrastructure needs.
          </p>
          <button 
            onClick={() => window.location.hash = 'contact'}
            className="btn-primary"
          >
            Start a Conversation
          </button>
        </div>
      </main>
    </div>
  );
}

export default Projects;