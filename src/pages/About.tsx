import React from 'react';
import { ArrowLeft, MapPin, Briefcase, Heart, Book, Plane, Coffee, Code, Car, Dumbbell } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Back Navigation */}
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">About Me</h1>
          <div className="flex items-center justify-center space-x-4 text-gray-300 mb-8">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Rotterdam, Netherlands
            </span>
            <span className="flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              User Authentication & Authorization Specialist
            </span>
          </div>
        </div>

        {/* Personal Story */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">My Story</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Growing up in the agricultural hub of Grabouw, South Africa, I've always been fascinated by the intersection of technology and human experience, inspired by how innovation can drive progress and efficiency in industries like agriculture that are vital to my hometown. My journey in IT began at the age of 10 when I was first introduced to networking and computer hardware. From then on, I frequently dabbled in building and repairing computers, solving software issues, networking and exploring penetration testing.
            </p>
            <p>
              Key milestones in my journey include obtaining my first full-time position at the college where I studied, just six months into my course. From there, I quickly advanced to become a systems admin, taking on significant responsibilities and opportunities for growth. I eventually achieved the IT coordinator/manager role at a young age and later made the significant move overseas, where I restarted my career and began focusing on user authentication and authorization.
            </p>
            <p>
              Exploring front-end web development and delving into security aspects related to access management. Pursuing new interests in AI and exploring what AI can do for the tech industry.
            </p>
          </div>
        </div>

        {/* Professional Focus */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Code className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">User Authentication & Authorization Specialist</h3>
                <p className="text-gray-300">Designing secure, seamless access solutions while driving innovation in identity management and user trust.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Coffee className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">IT Infrastructure & Security Specialist</h3>
                <p className="text-gray-300">Building resilient IT systems and optimizing workflows to enhance security, scalability, and business performance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Beyond IT Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Book className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Continuous Learning</h3>
                  <p className="text-gray-300">Currently exploring machine learning and AI, with a focus on enhancing identity management, cybersecurity, and IT infrastructure automation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Car className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Car Enthusiast</h3>
                  <p className="text-gray-300">Fueling my love for speed and precision through drifting and exploring the art of performance tuning and vehicle dynamics.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Devoted Beekeeper</h3>
                  <p className="text-gray-300">Combining patience and care to nurture thriving hives, while fostering a deep appreciation for the vital role bees play in our ecosystem.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Dumbbell className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Fitness Enthusiast</h3>
                  <p className="text-gray-300">Committed to building strength and resilience, embracing challenges, and striving for continuous personal growth through consistent training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;