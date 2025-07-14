import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card">
      <div className="flex items-center mb-4">
        <Quote className="w-8 h-8 cyber-primary mr-3" />
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-cyber-warning cyber-warning" />
          ))}
        </div>
      </div>
      <p className="cyber-text mb-6 italic leading-relaxed">"{testimonial.content}"</p>
      <div className="border-t border-cyber-primary/20 pt-4">
        <div className="font-semibold cyber-text">{testimonial.name}</div>
        <div className="text-sm cyber-text-muted">{testimonial.role}</div>
        <div className="text-sm cyber-primary">{testimonial.company}</div>
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
      content: "NJ's expertise in identity management transformed our security posture. His implementation of Azure AD solutions reduced our authentication issues by 90% while maintaining seamless user experience.",
      rating: 5
    },
    {
      name: "Marcus van der Berg",
      role: "DevOps Lead",
      company: "CloudFirst B.V.",
      content: "Working with NJ on our hybrid cloud migration was exceptional. His PowerShell automation scripts saved us countless hours and his attention to security compliance was invaluable.",
      rating: 5
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "CTO",
      company: "SecureData Inc.",
      content: "NJ's deep understanding of access management and his ability to translate complex security requirements into practical solutions made him an indispensable team member during our compliance audit.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-cyber-light/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">What Colleagues Say</h2>
          <p className="text-responsive-lg cyber-text-muted max-w-3xl mx-auto">
            Testimonials from professionals I've collaborated with across various cybersecurity and IT infrastructure projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;