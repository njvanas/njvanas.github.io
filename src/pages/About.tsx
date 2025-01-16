import React from 'react';
import { ArrowLeft, MapPin, Briefcase, Heart, Book, Plane, Coffee, Code } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <a 
          href="/" 
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
              San Francisco, CA
            </span>
            <span className="flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              Senior Software Engineer
            </span>
          </div>
        </div>

        {/* Personal Story */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">My Story</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Born and raised in the heart of Silicon Valley, I've always been fascinated by the intersection of technology and human experience. My journey in software engineering began during my high school years when I built my first website for our school's robotics club.
            </p>
            <p>
              After graduating from Stanford University with a degree in Computer Science, I joined a fast-growing startup where I discovered my passion for building scalable applications that impact millions of users. Over the years, I've evolved from a full-stack developer to a technical leader, mentoring teams and architecting complex systems.
            </p>
            <p>
              Today, I specialize in cloud-native architectures and distributed systems, focusing on creating robust and efficient solutions that drive business growth while maintaining high performance and reliability.
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
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Software Architecture</h3>
                <p className="text-gray-300">Designing and implementing scalable, cloud-native solutions using modern technologies and best practices.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Coffee className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Team Leadership</h3>
                <p className="text-gray-300">Mentoring developers, managing projects, and fostering a culture of innovation and continuous learning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Beyond Coding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Book className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Continuous Learning</h3>
                  <p className="text-gray-300">Currently exploring machine learning and AI, with a focus on practical applications in software systems.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Community Involvement</h3>
                  <p className="text-gray-300">Active contributor to open-source projects and regular speaker at local tech meetups.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Plane className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Travel & Photography</h3>
                  <p className="text-gray-300">Passionate about exploring new cultures and capturing moments through street photography.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Coffee className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Coffee Enthusiast</h3>
                  <p className="text-gray-300">Amateur barista and collector of coffee brewing equipment from around the world.</p>
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