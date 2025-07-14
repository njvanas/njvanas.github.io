import React from 'react';
import { MapPin, Briefcase, Heart, Book, Plane, Server, Code, Car, Dumbbell, Shield, Users, Target, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Breadcrumbs from '../components/Breadcrumbs';

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="card text-center">
      <div className="cyber-primary mb-3 flex justify-center">
        {icon}
      </div>
      <div className="text-2xl font-bold cyber-text mb-1">{value}</div>
      <div className="text-sm cyber-text-muted">{label}</div>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-gradient-cyber">
      <Navigation currentPath="about" />
      <Breadcrumbs currentPath="about" />

      <main className="container-custom section-padding">
        {/* Profile Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="w-32 h-32 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full flex items-center justify-center text-4xl font-bold text-cyber-dark mx-auto mb-8 animate-float">
            NJ
          </div>
          <h1 className="text-gradient mb-6">About Me</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 cyber-text-muted mb-8">
            <span className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 cyber-primary" />
              Rotterdam, Netherlands
            </span>
            <span className="flex items-center">
              <Briefcase className="w-5 h-5 mr-2 cyber-primary" />
              Workspace Administrator
            </span>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <StatCard 
              icon={<Award className="w-6 h-6" />}
              value="10+"
              label="Years Experience"
            />
            <StatCard 
              icon={<Shield className="w-6 h-6" />}
              value="90%"
              label="Security Incident Reduction"
            />
            <StatCard 
              icon={<Users className="w-6 h-6" />}
              value="500+"
              label="Users Managed"
            />
            <StatCard 
              icon={<Target className="w-6 h-6" />}
              value="40%"
              label="Efficiency Improvement"
            />
          </div>
        </div>

        {/* Unique Value Proposition */}
        <div className="glass rounded-2xl p-8 md:p-12 mb-16 text-center animate-slide-up">
          <h2 className="text-3xl font-bold cyber-text mb-6">My Unique Value Proposition</h2>
          <p className="text-xl cyber-primary font-semibold mb-4">
            "Cybersecurity Specialist with Proven Results in Identity & Access Management"
          </p>
          <p className="cyber-text-muted leading-relaxed max-w-4xl mx-auto">
            I bridge the gap between complex security requirements and practical business solutions. 
            My approach combines deep technical expertise with a keen understanding of organizational 
            needs, delivering security implementations that protect without hindering productivity. 
            With a track record of reducing security incidents by 90% while improving operational 
            efficiency by 40%, I transform cybersecurity from a business constraint into a competitive advantage.
          </p>
        </div>

        {/* Personal Story */}
        <div className="card mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-semibold cyber-text mb-8 flex items-center">
            <Book className="w-6 h-6 mr-3 cyber-primary" />
            My Journey in Cybersecurity
          </h2>
          <div className="space-y-6 cyber-text-muted leading-relaxed">
            <p>
              My fascination with cybersecurity began at age 10 in the agricultural town of Grabouw, South Africa, 
              where I first encountered networking and computer hardware. This early exposure sparked a lifelong 
              passion for understanding how technology can both enable and protect human endeavors. Growing up 
              in an agricultural community taught me the importance of robust, reliable systems – lessons that 
              directly translate to cybersecurity principles.
            </p>
            <p>
              The pivotal moment in my career came when I secured my first full-time position at the college 
              where I was studying, just six months into my course. This opportunity allowed me to apply 
              theoretical knowledge in real-world scenarios immediately. I quickly progressed from basic IT 
              support to systems administration, taking on increasingly complex security challenges and 
              discovering my natural aptitude for identity and access management.
            </p>
            <p>
              My international move to the Netherlands marked a significant evolution in my career focus. 
              Restarting in a new country provided fresh perspectives on global cybersecurity challenges 
              and exposed me to advanced European compliance frameworks. This experience refined my approach 
              to security governance and deepened my expertise in Azure-based identity solutions.
            </p>
            <p>
              Today, I'm exploring the intersection of artificial intelligence and cybersecurity, investigating 
              how AI can enhance threat detection and automate security responses while maintaining the human 
              judgment essential for complex security decisions. My goal is to stay at the forefront of 
              cybersecurity innovation while never losing sight of the fundamental principle: technology 
              should serve and protect people, not complicate their lives.
            </p>
          </div>
        </div>

        {/* Professional Philosophy */}
        <div className="card mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-semibold cyber-text mb-8 flex items-center">
            <Target className="w-6 h-6 mr-3 cyber-primary" />
            Professional Philosophy & Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold cyber-text">Security-First Mindset</h3>
              <p className="cyber-text-muted leading-relaxed">
                Every solution I design begins with security considerations. I believe that robust security 
                isn't an afterthought but the foundation upon which all reliable systems are built. This 
                approach has consistently resulted in implementations that exceed compliance requirements 
                while maintaining operational efficiency.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold cyber-text">User-Centric Design</h3>
              <p className="cyber-text-muted leading-relaxed">
                The most secure system is worthless if users can't or won't use it properly. I prioritize 
                solutions that enhance security while improving user experience, understanding that adoption 
                and compliance are directly linked to usability and clear communication of security benefits.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold cyber-text">Continuous Innovation</h3>
              <p className="cyber-text-muted leading-relaxed">
                The cybersecurity landscape evolves rapidly, and staying ahead requires constant learning 
                and adaptation. I actively research emerging threats, new technologies, and evolving best 
                practices, ensuring my solutions remain effective against tomorrow's challenges, not just today's.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold cyber-text">Measurable Results</h3>
              <p className="cyber-text-muted leading-relaxed">
                I believe in quantifying security improvements and operational efficiency gains. By establishing 
                clear metrics and regularly measuring progress, I ensure that security investments deliver 
                tangible business value and can be clearly communicated to stakeholders at all levels.
              </p>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="card mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-semibold cyber-text mb-8 flex items-center">
            <Code className="w-6 h-6 mr-3 cyber-primary" />
            Current Professional Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 cyber-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold cyber-text mb-2">Azure Identity Solutions</h3>
                  <p className="cyber-text-muted leading-relaxed">
                    Designing and implementing comprehensive Azure Active Directory solutions, including 
                    Conditional Access policies, Multi-Factor Authentication, and Privileged Identity Management. 
                    Focus on creating seamless, secure authentication experiences that scale with organizational growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Server className="w-8 h-8 cyber-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold cyber-text mb-2">Hybrid Cloud Security</h3>
                  <p className="cyber-text-muted leading-relaxed">
                    Specializing in securing hybrid environments that bridge on-premises infrastructure 
                    with cloud services. Expertise in maintaining security posture across diverse 
                    platforms while enabling digital transformation initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="card animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl font-semibold cyber-text mb-8">Beyond Cybersecurity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Book className="w-6 h-6 cyber-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold cyber-text mb-2">Continuous Learning</h3>
                  <p className="cyber-text-muted leading-relaxed">
                    Currently exploring machine learning applications in cybersecurity, with particular 
                    interest in automated threat detection and response systems. Also studying quantum 
                    computing's implications for future cryptographic standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Car className="w-6 h-6 cyber-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold cyber-text mb-2">Automotive Enthusiasm</h3>
                  <p className="cyber-text-muted leading-relaxed">
                    Passionate about automotive technology and performance tuning. The precision required 
                    in vehicle dynamics mirrors the attention to detail essential in cybersecurity 
                    implementations – both require understanding complex systems and their interactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 cyber-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold cyber-text mb-2">Beekeeping</h3>
                  <p className="cyber-text-muted leading-relaxed">
                    Maintaining bee colonies has taught me patience, observation skills, and the importance 
                    of ecosystem thinking – all valuable traits in cybersecurity. Like network security, 
                    beekeeping requires understanding complex interactions and maintaining delicate balances.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Dumbbell className="w-6 h-6 cyber-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold cyber-text mb-2">Fitness & Resilience</h3>
                  <p className="cyber-text-muted leading-relaxed">
                    Regular strength training builds both physical and mental resilience. The discipline 
                    and consistency required in fitness directly translate to the methodical approach 
                    necessary for effective cybersecurity practices and continuous professional development.
                  </p>
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