import React from 'react';
import { ExternalLink, Github, Globe, Package, Code, Wrench } from 'lucide-react';
import { handleExternalLink } from '../utils/security';

interface Tool {
  name: string;
  description: string;
  category: string;
  website: string;
  github?: string;
  npm?: string;
  version?: string;
  icon: React.ReactNode;
}

const References: React.FC = () => {
  const tools: Tool[] = [
    // Frontend Framework & Build Tools
    {
      name: "React",
      description: "A JavaScript library for building user interfaces",
      category: "Frontend Framework",
      website: "https://react.dev",
      github: "https://github.com/facebook/react",
      npm: "https://www.npmjs.com/package/react",
      version: "^18.2.0",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "TypeScript",
      description: "Typed superset of JavaScript that compiles to plain JavaScript",
      category: "Programming Language",
      website: "https://www.typescriptlang.org",
      github: "https://github.com/microsoft/TypeScript",
      npm: "https://www.npmjs.com/package/typescript",
      version: "^5.8.3",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "Vite",
      description: "Next generation frontend tooling for fast development",
      category: "Build Tool",
      website: "https://vitejs.dev",
      github: "https://github.com/vitejs/vite",
      npm: "https://www.npmjs.com/package/vite",
      version: "^5.4.10",
      icon: <Wrench className="w-6 h-6" />
    },
    
    // Styling & UI
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      category: "CSS Framework",
      website: "https://tailwindcss.com",
      github: "https://github.com/tailwindlabs/tailwindcss",
      npm: "https://www.npmjs.com/package/tailwindcss",
      version: "^3.4.0",
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: "Lucide React",
      description: "Beautiful & consistent icon toolkit made by the community",
      category: "Icon Library",
      website: "https://lucide.dev",
      github: "https://github.com/lucide-icons/lucide",
      npm: "https://www.npmjs.com/package/lucide-react",
      version: "^0.525.0",
      icon: <Package className="w-6 h-6" />
    },
    {
      name: "PostCSS",
      description: "Tool for transforming CSS with JavaScript",
      category: "CSS Processor",
      website: "https://postcss.org",
      github: "https://github.com/postcss/postcss",
      npm: "https://www.npmjs.com/package/postcss",
      version: "^8.5.6",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      name: "Autoprefixer",
      description: "PostCSS plugin to parse CSS and add vendor prefixes",
      category: "CSS Tool",
      website: "https://autoprefixer.github.io",
      github: "https://github.com/postcss/autoprefixer",
      npm: "https://www.npmjs.com/package/autoprefixer",
      version: "^10.4.21",
      icon: <Wrench className="w-6 h-6" />
    },
    
    // Development Tools
    {
      name: "ESLint",
      description: "Pluggable JavaScript linter for identifying problematic patterns",
      category: "Code Quality",
      website: "https://eslint.org",
      github: "https://github.com/eslint/eslint",
      npm: "https://www.npmjs.com/package/eslint",
      icon: <Code className="w-6 h-6" />
    },
    
    // Deployment & Hosting
    {
      name: "GitHub Pages",
      description: "Static site hosting directly from GitHub repository",
      category: "Hosting Platform",
      website: "https://pages.github.com",
      github: "https://github.com/actions/deploy-pages",
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: "GitHub Actions",
      description: "CI/CD platform for automating workflows",
      category: "CI/CD",
      website: "https://github.com/features/actions",
      github: "https://github.com/features/actions",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      name: "gh-pages",
      description: "Publish files to a gh-pages branch on GitHub",
      category: "Deployment Tool",
      website: "https://www.npmjs.com/package/gh-pages",
      github: "https://github.com/tschaub/gh-pages",
      npm: "https://www.npmjs.com/package/gh-pages",
      version: "^5.0.0",
      icon: <Package className="w-6 h-6" />
    },
    
    // Security Tools
    {
      name: "CodeQL",
      description: "Semantic code analysis engine for finding security vulnerabilities",
      category: "Security Analysis",
      website: "https://codeql.github.com",
      github: "https://github.com/github/codeql",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const categories = [...new Set(tools.map(tool => tool.category))];

  const handleLinkClick = (url: string) => {
    handleExternalLink(url);
  };

  return (
    <section id="references" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tools & Technologies
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive reference to all tools, frameworks, and technologies used in building this portfolio.
            </p>
          </div>

          {/* Tools by Category */}
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-blue-500 mr-4"></span>
                {category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools
                  .filter(tool => tool.category === category)
                  .map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 group"
                    >
                      {/* Tool Header */}
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400 mr-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                          {tool.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                            {tool.name}
                          </h4>
                          {tool.version && (
                            <span className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded">
                              v{tool.version}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {tool.description}
                      </p>

                      {/* Links */}
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleLinkClick(tool.website)}
                          className="flex items-center space-x-1 px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors duration-300 text-xs"
                        >
                          <Globe className="w-3 h-3" />
                          <span>Website</span>
                        </button>
                        
                        {tool.github && (
                          <button
                            onClick={() => handleLinkClick(tool.github!)}
                            className="flex items-center space-x-1 px-3 py-1 bg-slate-700/50 text-gray-300 rounded hover:bg-slate-700/70 transition-colors duration-300 text-xs"
                          >
                            <Github className="w-3 h-3" />
                            <span>GitHub</span>
                          </button>
                        )}
                        
                        {tool.npm && (
                          <button
                            onClick={() => handleLinkClick(tool.npm!)}
                            className="flex items-center space-x-1 px-3 py-1 bg-red-600/20 text-red-400 rounded hover:bg-red-600/30 transition-colors duration-300 text-xs"
                          >
                            <Package className="w-3 h-3" />
                            <span>NPM</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          {/* Attribution */}
          <div className="mt-16 p-6 bg-slate-800/30 rounded-lg border border-slate-700/30">
            <h3 className="text-xl font-semibold text-white mb-4">Attribution & Acknowledgments</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2">Open Source Community</h4>
                <p className="leading-relaxed">
                  This portfolio is built entirely with open-source tools and libraries. 
                  Special thanks to all the maintainers and contributors who make these amazing tools possible.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">License Information</h4>
                <p className="leading-relaxed">
                  All tools and libraries used are properly licensed and attributed. 
                  This portfolio respects all license requirements and terms of use.
                </p>
              </div>
            </div>
          </div>

          {/* Version Information */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Portfolio built with modern web technologies • Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;