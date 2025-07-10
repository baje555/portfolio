import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { personalInfo, skills } from '../../data/mockData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-orange-500/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-orange-500/40 to-red-500/40 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-gradient-to-r from-purple-500/40 to-pink-500/40 transform rotate-45 animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hello<span className="text-orange-500">.</span>
              </h1>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up delay-300">
                  {personalInfo.tagline}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-white animate-fade-in-up delay-500">
                  {personalInfo.title}
                </h2>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-700">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get a project
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                My resume
              </Button>
            </div>

            {/* Skills */}
            <div className="space-y-4 animate-fade-in-up delay-900">
              <p className="text-gray-400 text-sm uppercase tracking-widest">Technologies</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill.name} 
                    variant="secondary" 
                    className="bg-gray-800/50 text-gray-300 hover:bg-gray-700 text-sm py-2 px-4 border border-gray-700 transform hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-1000">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 w-80 h-80 rounded-full border-4 border-orange-500/30 animate-spin-slow"></div>
              <div className="absolute inset-4 w-72 h-72 rounded-full border-2 border-dashed border-gray-600 animate-spin-reverse"></div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-orange-500/20 to-red-500/20 p-4 transform hover:scale-105 transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-orange-500/30 shadow-2xl">
                  <img 
                    src={personalInfo.profileImage} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;