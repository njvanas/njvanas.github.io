import type { LucideIcon } from 'lucide-react';
import { Wrench, Globe, Zap, ChefHat, Download, BookOpen, BookMarked, GitBranch } from 'lucide-react';

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
    title: "CI/CD Demo",
    description:
      "Companion demo that visualizes how commits flow through GitHub Actions to a live GitHub Pages site",
    technologies: ["GitHub Actions", "GitHub Pages", "CI/CD", "HTML", "CSS", "JavaScript"],
    icon: GitBranch,
    category: "DevOps",
    liveUrl: "https://njvanas.github.io/CI-CD/",
    githubUrl: "https://github.com/njvanas/CI-CD",
    highlights: [
      "Pipeline visualization from code commit to deployment",
      "Automated build and deploy on push to main",
      "Hands-on illustration of GitHub Actions workflows",
      "Dedicated repo deployed to GitHub Pages via Actions"
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
    title: "GymBroRecipes Tracker",
    description:
      "Offline-first progressive web app for logging workouts, tracking nutrition, and monitoring body metrics; optional cloud sync via Supabase",
    technologies: ["JavaScript", "PWA", "IndexedDB", "Supabase", "React"],
    icon: ChefHat,
    category: "Health & Fitness",
    liveUrl: "https://gymbrorecipes.netlify.app/",
    githubUrl: "https://github.com/njvanas/GymBroRecipes-Tracker",
    highlights: [
      "Local-first storage in the browser with IndexedDB",
      "Workouts, nutrition, and body metrics in one place",
      "Optional Supabase sync for backup and multi-device access",
      "Installable PWA experience"
    ]
  },
  {
    title: "Gym Bro Recipes – Knowledge Base",
    description: "Informational resource on bodybuilding training phases: maintaining, cutting, and bulking",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    icon: BookMarked,
    category: "Content & Writing",
    githubUrl: "https://github.com/njvanas/Gym-Bro-Recipes",
    highlights: [
      "Educational content on maintaining, cutting, and bulking",
      "Clean, responsive layout with smooth navigation",
      "Disclaimer-backed informational focus",
      "No CTAs or social—purely reference material"
    ]
  }
];

export default projects;
