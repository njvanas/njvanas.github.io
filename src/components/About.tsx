import React from 'react';
import { MapPin, Calendar, Award, Globe, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';
import { credlyProfileUrl } from '../data/social';
import { useCredlyEmbedScript } from '../hooks/useCredlyEmbedScript';
import { handleExternalLink } from '../utils/security';

const cardClassName =
  'flex flex-col items-center rounded-xl border border-slate-700/50 bg-slate-800/40 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-800/70 focus-within:border-blue-500/40';

const About: React.FC = () => {
  const hasCredlyBadges = certifications.some((c) => c.kind === 'credly');
  useCredlyEmbedScript(hasCredlyBadges);

  return (
    <section id="about" className="scroll-mt-24 py-20 bg-slate-800/50">
      <div className="container w-full mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From South African roots to architecting cloud at scale—building secure, resilient infrastructure that powers 60+ organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Personal Story */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Born and raised in South Africa, I've always been driven by technology's power to 
                  solve complex problems and connect people across the globe—and to do it securely.
                </p>
                <p>
                  Over a decade in IT has taken me from hands-on support and infrastructure to designing 
                  and running cloud environments at scale. I've built deep expertise in Microsoft 365 and 
                  Azure, identity and access with Entra ID, and security from the ground up—today I 
                  architect solutions for 60+ organizations, manage 40+ tenants, and act as a third-line 
                  expert on migrations, threat detection, and automation with PowerShell and AI tooling.
                </p>
                <p>
                  Based in Hilversum, I partner with clients to turn complex infrastructure into 
                  reliable, scalable systems—so they can focus on what they do best while their 
                  digital backbone stays secure and ahead of the curve.
                </p>
              </div>
            </div>

            {/* Key Facts */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/20 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Hilversum, Netherlands</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-600/20 rounded-full">
                  <Calendar className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Experience</h4>
                  <p className="text-gray-300">10+ Years in IT & Cloud Infrastructure</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-600/20 rounded-full">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Specialization</h4>
                  <p className="text-gray-300">Microsoft 365 & Azure Cloud Infrastructure · Identity, Security & Automation</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-600/20 rounded-full">
                  <Globe className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Origin</h4>
                  <p className="text-gray-300">South Africa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div id="certifications" className="mt-16 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-white mb-3 text-center">Certifications</h3>
            <p className="text-center text-sm text-gray-400 mb-8">
              <a
                href={credlyProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  handleExternalLink(credlyProfileUrl);
                }}
                className="text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 rounded-sm"
              >
                Full Credly profile
              </a>
              <span className="text-gray-500"> — all digital credentials in one place</span>
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {certifications.map((cert) =>
                cert.kind === 'learn' ? (
                  <a
                    key={cert.title}
                    href={cert.badgePageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group ${cardClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900`}
                  >
                    <img
                      src={cert.badgeImageUrl}
                      alt=""
                      width={120}
                      height={120}
                      className="h-[120px] w-[120px] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="mt-4 max-w-[14rem] text-center text-sm font-medium text-gray-200 group-hover:text-white">
                      {cert.title}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs text-blue-400 group-hover:underline">
                      View credential
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </a>
                ) : (
                  <div key={cert.title} className={cardClassName}>
                    <div
                      className="flex w-[150px] min-h-[270px] items-center justify-center"
                      data-iframe-width={cert.iframeWidth}
                      data-iframe-height={cert.iframeHeight}
                      data-share-badge-id={cert.shareBadgeId}
                      data-share-badge-host="https://www.credly.com"
                    />
                    <span className="mt-4 max-w-[14rem] text-center text-sm font-medium text-gray-200">
                      {cert.title}
                    </span>
                    <a
                      href={cert.publicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
                    >
                      View credential
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Core Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Microsoft 365 & Azure',
                'Entra ID & Conditional Access',
                'PowerShell & Automation',
                'Intune & Autopilot',
                'Multi-Tenant Architecture',
                'Threat Detection & Response',
                'Identity & Access Management',
                'Security & Compliance'
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700/70 transition-colors duration-300"
                >
                  <span className="text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
