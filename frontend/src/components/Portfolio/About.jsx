import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { personalInfo, statistics, services } from '../../data/mockData';
import ScrollAnimations from './ScrollAnimations';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
  };

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-slate-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div 
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        style={parallaxStyle}
      ></div>
      <div 
        className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"
        style={{ 
          ...parallaxStyle, 
          transform: `${parallaxStyle.transform} rotate(${mousePosition.x * 0.1}deg)`,
        }}
      ></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-6 h-6 border border-orange-500/20 rotate-45 animate-spin opacity-50"
          style={{ animationDuration: '15s' }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-purple-500/30 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left side - Services */}
          <div className="space-y-6 lg:space-y-8">
            <ScrollAnimations animation="fadeInLeft" delay={0}>
              <div className="space-y-6 lg:space-y-8">
                {services.map((service, index) => (
                  <ScrollAnimations 
                    key={service.id} 
                    animation="fadeInLeft" 
                    delay={index * 150}
                  >
                    <Card 
                      className="bg-slate-900/50 border-slate-800 hover:border-orange-500/30 transition-all duration-500 transform hover:scale-105 group relative overflow-hidden cursor-pointer"
                      onMouseEnter={() => setHoveredService(service.id)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      
                      <CardContent className="p-4 sm:p-6 relative z-10">
                        <div className="flex items-start space-x-4">
                          <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce">
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      
                      {/* Animated border */}
                      <div className={`absolute inset-0 border-2 border-transparent transition-all duration-500 ${
                        hoveredService === service.id ? 'border-orange-500/50' : ''
                      }`}></div>
                    </Card>
                  </ScrollAnimations>
                ))}
              </div>
            </ScrollAnimations>
          </div>

          {/* Right side - About content */}
          <div className="space-y-6 lg:space-y-8">
            <ScrollAnimations animation="fadeInRight" delay={200}>
              <div className="space-y-4 lg:space-y-6">
                <div className="relative">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 lg:mb-6 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
                    About me
                  </h2>
                  <div className="absolute -left-4 top-0 w-1 h-12 sm:h-16 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                  <div className="absolute -left-2 top-2 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                </div>
                
                <div className="space-y-4 lg:space-y-6">
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed transform hover:scale-105 transition-transform duration-300 cursor-default">
                    {personalInfo.description}
                  </p>
                  
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed transform hover:scale-105 transition-transform duration-300 cursor-default">
                    I'm always eager to learn new things and improve my skillset, especially around real-world applications and backend services. I'm ready to take on challenges that let me grow as a full-stack problem solver.
                  </p>
                </div>
              </div>
            </ScrollAnimations>

            {/* Statistics */}
            <ScrollAnimations animation="fadeInRight" delay={400}>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {statistics.map((stat, index) => (
                  <ScrollAnimations 
                    key={index} 
                    animation="scaleIn" 
                    delay={600 + index * 100}
                  >
                    <div className="text-center group transform hover:scale-110 transition-all duration-300 cursor-pointer p-3 sm:p-4 rounded-xl hover:bg-slate-800/30">
                      <div className="space-y-2">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300 relative">
                          {stat.number}
                          <span className="text-orange-500 group-hover:text-white transition-colors duration-300">
                            {stat.suffix}
                          </span>
                          {/* Animated underline */}
                          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500"></div>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimations>
                ))}
              </div>
            </ScrollAnimations>

            {/* Additional skills showcase */}
            <ScrollAnimations animation="fadeInRight" delay={700}>
              <div className="space-y-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
                  Core Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Java Development', 'Spring Boot', 'Backend APIs', 'Database Design', 'Git Workflows'].map((skill, index) => (
                    <ScrollAnimations 
                      key={skill} 
                      animation="scaleIn" 
                      delay={800 + index * 100}
                    >
                      <Badge 
                        variant="outline" 
                        className="border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-110 cursor-pointer text-xs sm:text-sm py-1 px-2 sm:px-3"
                      >
                        {skill}
                      </Badge>
                    </ScrollAnimations>
                  ))}
                </div>
              </div>
            </ScrollAnimations>

            {/* Interactive progress bars */}
            <ScrollAnimations animation="fadeInRight" delay={900}>
              <div className="space-y-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest">
                  Skill Levels
                </p>
                <div className="space-y-3">
                  {[
                    { name: 'Java', level: 95 },
                    { name: 'Spring Boot', level: 90 },
                    { name: 'Database Design', level: 85 },
                    { name: 'Frontend', level: 80 }
                  ].map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-300 group-hover:text-orange-500 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-400 group-hover:text-orange-500 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 ease-out transform origin-left"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimations>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;