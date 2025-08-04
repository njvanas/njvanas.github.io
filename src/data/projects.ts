import type { LucideIcon } from 'lucide-react';
import { Code, Wrench, Globe, Zap, ChefHat, Download, BookOpen } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  category: string;
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Personal Blog",
    description: "Technical blog sharing insights on cybersecurity, IT infrastructure, and professional development",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Responsive Design"],
    icon: BookOpen,
    category: "Content & Writing",
    liveUrl: "https://njvanas.github.io/Blog/",
    githubUrl: "https://github.com/njvanas/Blog",
    highlights: [
      "Technical articles on cybersecurity topics",
      "Professional insights and career guidance",
      "Clean, readable blog layout design",
      "SEO optimized content structure"
    ]
  },
  {
    title: "Maintenance Tool",
    description: "All-in-one maintenance utility for routine scripts and performance optimization",
    technologies: ["PowerShell", "Windows", "Automation", "System Administration"],
    icon: Wrench,
    category: "System Administration",
    liveUrl: "https://njvanas.github.io/AIO-Maintenance/",
    githubUrl: "https://github.com/njvanas/AIO-Maintenance",
    highlights: [
      "Automated routine maintenance tasks",
      "Performance monitoring and optimization",
      "Script management and execution",
      "System health reporting"
    ]
  },
  {
    title: "Office Auto Install Tool",
    description: "Automated Microsoft Office installation and configuration utility",
    technologies: ["PowerShell", "Windows", "Microsoft Office", "Automation"],
    icon: Download,
    category: "System Administration",
    liveUrl: "https://njvanas.github.io/Office-Auto-Install/",
    githubUrl: "https://github.com/njvanas/Office-Auto-Install",
    highlights: [
      "Automated Office suite installation",
      "Configuration management",
      "Version control and updates",
      "Enterprise deployment ready"
    ]
  },
  {
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio showcasing technical skills and professional experience",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    icon: Globe,
    category: "Web Development",
    liveUrl: "https://njvanas.github.io",
    githubUrl: "https://github.com/njvanas/njvanas.github.io",
    highlights: [
      "Responsive design with modern aesthetics",
      "TypeScript for type safety",
      "Optimized performance with Vite",
      "Deployed on GitHub Pages"
    ]
  },
  {
    title: "Access Management Tool",
    description: "Comprehensive solution for managing access requests to IT systems",
    technologies: ["Azure AD", "PowerShell", "Identity Management", "Automation"],
    icon: Code,
    category: "Identity & Access Management",
    highlights: [
      "Streamlined access request workflows",
      "Integration with Azure Active Directory",
      "Automated provisioning and deprovisioning",
      "Compliance reporting and auditing"
    ]
  },
  {
    title: "Typing Speed Test",
    description: "Interactive web application to test typing skills and measure WPM",
    technologies: ["JavaScript", "HTML5", "CSS3", "Web APIs"],
    icon: Zap,
    category: "Web Application",
    liveUrl: "https://njvanas.github.io/typing-speed-test/",
    githubUrl: "https://github.com/njvanas/typing-speed-test",
    highlights: [
      "Real-time typing speed calculation",
      "Accuracy tracking and statistics",
      "Multiple test modes and difficulties",
      "Clean, intuitive user interface"
    ]
  },
  {
    title: "GymBroRecipes",
    description: "High-protein recipe and meal planning app for gym enthusiasts",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Nutrition APIs"],
    icon: ChefHat,
    category: "Health & Fitness",
    liveUrl: "https://njvanas.github.io/GymBroRecipes/",
    githubUrl: "https://github.com/njvanas/GymBroRecipes",
    highlights: [
      "Nutritional information tracking",
      "Macro calculator for fitness goals",
      "Recipe storage and organization",
      "Meal planning functionality"
    ]
  }
];

export default projects;
