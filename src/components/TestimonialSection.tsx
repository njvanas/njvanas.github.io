import React from 'react';
import { Quote, Star, Linkedin } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  linkedinUrl?: string;
  avatar?: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="flex items-center justify-between mb-6">
        <Quote className="w-8 h-8 cyber-primary" />
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-cyber-warning cyber-warning" />
          ))}
        </div>
      </div>
      
      <blockquote className="cyber-text mb-8 italic leading-relaxed text-lg">
        "{testimonial.content}"
      </blockquote>
      
      <div className="border-t border-cyber-primary/20 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold cyber-text text-lg">{testimonial.name}</div>
            <div className="text-sm cyber-text-muted">{testimonial.role}</div>
            <div className="text-sm cyber-primary font-medium">{testimonial.company}</div>
          </div>
          {testimonial.linkedinUrl && (
            <a
              href={testimonial.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors cyber-text-muted hover:cyber-primary"
              aria-label={`View ${testimonial.name}'s LinkedIn profile`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Mitchell",
      role: "IT Security Manager",
      company: "TechCorp Solutions",
      content: "NJ's expertise in identity management transformed our security posture completely. His implementation of Azure AD solutions reduced our authentication issues by 90% while maintaining seamless user experience. His attention to detail and proactive approach to security challenges made him an invaluable team member.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/sarah-mitchell-security"
    },
    {
      name: "Marcus van der Berg",
      role: "DevOps Lead",
      company: "CloudFirst B.V.",
      content: "Working with NJ on our hybrid cloud migration was exceptional. His PowerShell automation scripts saved us countless hours and his deep understanding of security compliance frameworks was invaluable. He consistently delivered solutions that exceeded our expectations.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/marcus-vandenberg"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Chief Technology Officer",
      company: "SecureData Inc.",
      content: "NJ's ability to translate complex security requirements into practical, implementable solutions is remarkable. His work on our access management system not only improved our security posture but also enhanced user productivity. A true cybersecurity professional.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/elena-rodriguez-cto"
    }
  ];

  return (
    <section className="section-padding bg-cyber-light/20">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-gradient mb-8">What Colleagues Say</h2>
          <p className="text-responsive-lg cyber-text-muted max-w-4xl mx-auto leading-relaxed">
            Testimonials from cybersecurity professionals and IT leaders I've collaborated with 
            across various identity management and infrastructure security projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold cyber-text mb-4">Ready to Add Your Testimonial?</h3>
            <p className="cyber-text-muted mb-6 leading-relaxed">
              Have we worked together on a cybersecurity or IT infrastructure project? 
              I'd love to hear about your experience and showcase our collaboration.
            </p>
            <a
              href="https://linkedin.com/in/njvanas"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;