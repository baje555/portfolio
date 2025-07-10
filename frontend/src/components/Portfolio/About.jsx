import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { personalInfo, statistics, services } from '../../data/mockData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Services */}
          <div className="space-y-8">
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card 
                  key={service.id} 
                  className="bg-slate-900/50 border-slate-800 hover:border-orange-500/30 transition-all duration-500 transform hover:scale-105 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - About content */}
          <div className="space-y-8">
            <div className="space-y-6 animate-fade-in-up delay-500">
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  About me
                </h2>
                <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                {personalInfo.description}
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                I'm always eager to learn new things and improve my skillset, especially around real-world applications and backend services. I'm ready to take on challenges that let me grow as a full-stack problem solver.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in-up delay-700">
              {statistics.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                      {stat.number}
                      <span className="text-orange-500 group-hover:text-white transition-colors duration-300">
                        {stat.suffix}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional skills showcase */}
            <div className="space-y-4 animate-fade-in-up delay-900">
              <p className="text-gray-400 text-sm uppercase tracking-widest">Core Expertise</p>
              <div className="flex flex-wrap gap-2">
                {['Java Development', 'Spring Boot', 'Backend APIs', 'Database Design', 'Git Workflows'].map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;