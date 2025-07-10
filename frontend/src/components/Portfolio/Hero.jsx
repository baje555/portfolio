import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { personalInfo, skills } from '../../data/mockData';
import TypewriterEffect from './TypewriterEffect';
import ScrollAnimations from './ScrollAnimations';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
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
    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      
      {/* Dynamic gradient orbs */}
      <div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"
        style={parallaxStyle}
      ></div>
      <div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
        style={{ 
          ...parallaxStyle, 
          animationDelay: '1s',
          transform: `${parallaxStyle.transform} rotate(${mousePosition.x * 0.1}deg)`,
        }}
      ></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-background"></div>
      </div>

      {/* Floating geometric shapes with mouse tracking */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-orange-500/30 rotate-45 animate-spin"
          style={{ 
            animationDuration: '12s',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) rotate(45deg)`,
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-orange-500/40 to-red-500/40 rounded-full animate-bounce"
          style={{ 
            animationDelay: '0.5s',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-gradient-to-r from-purple-500/40 to-pink-500/40 transform rotate-45 animate-pulse"
          style={{ 
            animationDelay: '0.7s',
            transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px) rotate(45deg)`,
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-12 h-12 border border-dashed border-orange-500/20 rounded-full animate-spin"
          style={{ 
            animationDuration: '20s',
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left side - Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <ScrollAnimations animation="fadeInUp" delay={0}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                  Hello<span className="text-orange-500 animate-pulse">.</span>
                </h1>
                <div className="space-y-2">
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
                    {personalInfo.tagline}
                  </p>
                  <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center lg:justify-start">
                    <TypewriterEffect
                      texts={[
                        personalInfo.title,
                        'Java Developer',
                        'Spring Boot Expert',
                        'Backend Specialist',
                        'Full Stack Developer'
                      ]}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                      speed={100}
                      deleteSpeed={50}
                      delayBetweenTexts={2000}
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimations>

            {/* CTA Buttons */}
            <ScrollAnimations animation="fadeInUp" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <span className="relative z-10">Get a project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-orange-500 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">My resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
              </div>
            </ScrollAnimations>

            {/* Skills */}
            <ScrollAnimations animation="fadeInUp" delay={500}>
              <div className="space-y-4">
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest text-center lg:text-left">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                  {skills.map((skill, index) => (
                    <ScrollAnimations 
                      key={skill.name} 
                      animation="scaleIn" 
                      delay={600 + index * 100}
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-orange-500 text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 border border-gray-700 transform hover:scale-110 transition-all duration-300 cursor-pointer group"
                      >
                        <span className="mr-1 sm:mr-2 group-hover:animate-bounce">{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    </ScrollAnimations>
                  ))}
                </div>
              </div>
            </ScrollAnimations>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <ScrollAnimations animation="scaleIn" delay={700}>
              <div className="relative group">
                {/* Animated rings */}
                <div className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-orange-500/30 animate-spin group-hover:border-orange-500/50 transition-all duration-500"
                     style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-2 sm:inset-4 w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-88 lg:h-88 rounded-full border-2 border-dashed border-gray-600 animate-spin group-hover:border-orange-500/30 transition-all duration-500"
                     style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-4 sm:inset-6 w-56 h-56 sm:w-60 sm:h-60 md:w-68 md:h-68 lg:w-84 lg:h-84 rounded-full border border-dotted border-purple-500/20 animate-spin group-hover:border-purple-500/40 transition-all duration-500"
                     style={{ animationDuration: '25s' }}></div>
                
                {/* Floating orbs around profile */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-float opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ animationDelay: '1s' }}></div>
                <div className="absolute -top-2 -right-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-float opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ animationDelay: '2s' }}></div>
                
                {/* Profile image container */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-orange-500/20 to-red-500/20 p-3 sm:p-4 transform hover:scale-105 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/25">
                  <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-orange-500/30 shadow-2xl relative group-hover:ring-orange-500/50 transition-all duration-500">
                    <img 
                      src={personalInfo.profileImage} 
                      alt={personalInfo.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onLoad={() => setIsLoaded(true)}
                    />
                    {!isLoaded && (
                      <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
                    )}
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </ScrollAnimations>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <ScrollAnimations animation="fadeInUp" delay={1000}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center group-hover:border-orange-500 transition-colors duration-300">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse group-hover:bg-orange-500 transition-colors duration-300"></div>
          </div>
          <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll down
          </p>
        </div>
      </ScrollAnimations>
    </section>
  );
};

export default Hero;