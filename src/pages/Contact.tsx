import React from 'react';
import { ArrowLeft, Linkedin, MessageSquare, Mail, Phone } from 'lucide-react';

function ContactCard({
  icon,
  title,
  value,
  link
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 flex items-center space-x-4 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-400/50"
    >
      <div className="text-blue-400">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
        <p className="text-gray-300">{value}</p>
      </div>
    </a>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Let's Connect</h1>
          <p className="text-gray-300">Feel free to reach out through any of these channels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactCard
            icon={<Linkedin className="w-6 h-6" />}
            title="LinkedIn"
            value="nj.vanas"
            link="https://linkedin.com/in/njvanas"
          />
          <ContactCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Discord"
            value="dolfie_die_wolfie"
            link="https://discord.com/users/dolfie_die_wolfie"
          />
          <ContactCard
            icon={<Phone className="w-6 h-6" />}
            title="WhatsApp"
            value="+31 (647) 028 146"
            link="https://wa.me/31647028146"
          />
          <ContactCard
            icon={<Mail className="w-6 h-6" />}
            title="Email"
            value="njvanas@duck.com"
            link="mailto:njvanas@duck.com"
          />
        </div>

        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">Availability</h2>
          <p className="text-gray-300 mb-4">
            I'm currently available for freelance work and interesting projects. 
            Typically, I respond within 24 hours during business days.
          </p>
          <p className="text-gray-300">
            For urgent matters, WhatsApp or Discord are the fastest ways to reach me.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Contact;