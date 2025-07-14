import React from 'react';
import { ArrowLeft, Calendar, Clock, BookOpen, TrendingUp, Shield, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Breadcrumbs from '../components/Breadcrumbs';

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  icon: React.ReactNode;
  content: string[];
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="card-interactive">
      <div className="flex items-center space-x-3 mb-4">
        <div className="cyber-primary">{article.icon}</div>
        <span className="text-sm cyber-primary font-medium uppercase tracking-wide">
          {article.category}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold cyber-text mb-3 hover:text-gradient transition-colors duration-300">
        {article.title}
      </h3>
      
      <p className="cyber-text-muted mb-4 leading-relaxed">
        {article.excerpt}
      </p>
      
      <div className="flex items-center justify-between text-sm cyber-text-muted">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {article.date}
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {article.readTime}
          </span>
        </div>
        <button className="cyber-primary hover:text-cyber-secondary transition-colors font-medium">
          Read More →
        </button>
      </div>
    </article>
  );
}

function Insights() {
  const articles: Article[] = [
    {
      title: "The Evolution of Zero Trust Architecture in Modern Enterprises",
      excerpt: "Exploring how Zero Trust principles are reshaping cybersecurity strategies and why traditional perimeter-based security models are becoming obsolete in today's hybrid work environment.",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Zero Trust Architecture represents a fundamental shift in how we approach cybersecurity...",
        "Traditional security models relied heavily on network perimeters...",
        "Implementation strategies for Zero Trust in hybrid environments..."
      ]
    },
    {
      title: "Identity Governance in the Age of Remote Work",
      excerpt: "How organizations can maintain robust identity and access management while supporting distributed teams. Key strategies for balancing security with user experience in remote-first environments.",
      date: "January 8, 2025",
      readTime: "6 min read",
      category: "Identity Management",
      icon: <Lock className="w-6 h-6" />,
      content: [
        "The shift to remote work has fundamentally changed identity management requirements...",
        "Challenges in maintaining security posture with distributed teams...",
        "Best practices for remote identity governance..."
      ]
    },
    {
      title: "PowerShell Automation for Azure AD: Advanced Techniques",
      excerpt: "Deep dive into advanced PowerShell scripting techniques for Azure Active Directory management. Practical examples and best practices for automating identity lifecycle processes.",
      date: "December 28, 2024",
      readTime: "12 min read",
      category: "Technical Deep Dive",
      icon: <TrendingUp className="w-6 h-6" />,
      content: [
        "PowerShell remains one of the most powerful tools for Azure AD automation...",
        "Advanced scripting techniques for identity lifecycle management...",
        "Real-world examples and implementation strategies..."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-cyber">
      <Navigation currentPath="insights" />
      <Breadcrumbs currentPath="insights" />

      <main className="container-custom section-padding">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-12 h-12 cyber-primary mr-4" />
            <h1 className="text-gradient">Cybersecurity Insights</h1>
          </div>
          <p className="text-responsive-lg cyber-text-muted max-w-4xl mx-auto leading-relaxed">
            Sharing knowledge and insights from the frontlines of cybersecurity, identity management, 
            and IT infrastructure. Practical perspectives on emerging trends, implementation strategies, 
            and lessons learned from real-world deployments.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="glass rounded-2xl p-8 md:p-12 border border-cyber-primary/20 animate-slide-up">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-8 h-8 cyber-primary" />
              <span className="cyber-primary font-medium uppercase tracking-wide">Featured Article</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold cyber-text mb-6">
              The Evolution of Zero Trust Architecture in Modern Enterprises
            </h2>
            
            <p className="text-xl cyber-text-muted mb-8 leading-relaxed max-w-4xl">
              Exploring how Zero Trust principles are reshaping cybersecurity strategies and why traditional 
              perimeter-based security models are becoming obsolete in today's hybrid work environment. 
              This comprehensive analysis covers implementation challenges, success metrics, and practical 
              deployment strategies based on real-world enterprise experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-6 text-cyber-text-muted">
                <span className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  January 15, 2025
                </span>
                <span className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  8 min read
                </span>
              </div>
              <button className="btn-primary">
                Read Full Article
              </button>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articles.slice(1).map((article, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="glass rounded-2xl p-8 animate-fade-in">
          <h3 className="text-2xl font-bold cyber-text mb-8 text-center">Explore by Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-cyber-light/30 hover:bg-cyber-light/50 transition-colors cursor-pointer">
              <Shield className="w-12 h-12 cyber-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold cyber-text mb-2">Cybersecurity</h4>
              <p className="cyber-text-muted text-sm">Latest trends and best practices in enterprise security</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-cyber-light/30 hover:bg-cyber-light/50 transition-colors cursor-pointer">
              <Lock className="w-12 h-12 cyber-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold cyber-text mb-2">Identity Management</h4>
              <p className="cyber-text-muted text-sm">Access control, authentication, and governance insights</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-cyber-light/30 hover:bg-cyber-light/50 transition-colors cursor-pointer">
              <TrendingUp className="w-12 h-12 cyber-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold cyber-text mb-2">Technical Deep Dives</h4>
              <p className="cyber-text-muted text-sm">Advanced implementation guides and automation techniques</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16 glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold cyber-text mb-4">Stay Updated</h3>
          <p className="cyber-text-muted mb-6 max-w-2xl mx-auto">
            Get notified when new insights and technical articles are published. 
            Join cybersecurity professionals who rely on practical, real-world perspectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-cyber-dark/50 border border-cyber-primary/30 cyber-text focus:outline-none focus:border-cyber-primary transition-colors"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Insights;