import React from 'react';
import { ArrowDown, Shield, Server, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            NJ van As
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-8 font-light">
            Cybersecurity & IT Infrastructure Specialist
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Identity & Access Management Expert with over a decade of experience 
            securing digital infrastructures and empowering organizations through technology.
          </p>

          {/* Key Skills Icons */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex flex-col items-center group">
              <div className="p-4 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors duration-300">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <span className="text-sm text-gray-400 mt-2">Security</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-4 bg-purple-600/20 rounded-full group-hover:bg-purple-600/30 transition-colors duration-300">
                <Server className="w-8 h-8 text-purple-400" />
              </div>
              <span className="text-sm text-gray-400 mt-2">Infrastructure</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-4 bg-green-600/20 rounded-full group-hover:bg-green-600/30 transition-colors duration-300">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <span className="text-sm text-gray-400 mt-2">Identity & Access</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
