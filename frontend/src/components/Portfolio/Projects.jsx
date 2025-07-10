import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { projects } from '../../data/mockData';
import ScrollAnimations from './ScrollAnimations';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
  };

  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-24 bg-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div 
        className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"
        style={parallaxStyle}
      ></div>
      <div 
        className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        style={{ 
          ...parallaxStyle, 
          transform: `${parallaxStyle.transform} rotate(${mousePosition.x * 0.1}deg)`,
        }}
      ></div>
      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 right-1/4 w-8 h-8 border border-orange-500/20 rotate-45 animate-spin opacity-30"
          style={{ animationDuration: '20s' }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimations animation="fadeInUp" delay={0}>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 lg:mb-6 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4 lg:mb-6"></div>
            <p className="text-gray-400 text-base sm:text-lg mt-4 lg:mt-6 max-w-2xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              API integration, and modern web technologies.
            </p>
          </div>
        </ScrollAnimations>

        {/* Filter buttons */}
        <ScrollAnimations animation="fadeInUp" delay={200}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 lg:mb-12">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === 'all' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-0' 
                  : 'border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10'
              }`}
            >
              All Projects
            </Button>
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={filter === tech ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(tech)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  filter === tech 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-0' 
                    : 'border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10'
                }`}
              >
                {tech}
              </Button>
            ))}
          </div>
        </ScrollAnimations>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollAnimations 
              key={project.id} 
              animation="scaleIn" 
              delay={index * 150}
            >
              <Card 
                className="bg-slate-800/50 border-slate-700 hover:border-orange-500/30 transition-all duration-500 transform hover:scale-105 group overflow-hidden relative cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project links overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center space-x-3 sm:space-x-4 transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg transform hover:scale-110 transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4"
                    >
                      <span className="mr-1 sm:mr-2">🔗</span>
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white shadow-lg transform hover:scale-110 transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4"
                    >
                      <span className="mr-1 sm:mr-2">📂</span>
                      GitHub
                    </Button>
                  </div>
                </div>
                
                {/* Project content */}
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-orange-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-slate-700/50 text-gray-300 hover:bg-orange-500/20 hover:text-orange-500 transition-all duration-300 transform hover:scale-105 cursor-pointer text-xs py-1 px-2"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Animated border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-orange-500/30 transition-all duration-500 pointer-events-none"></div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-transparent border-b-orange-500/0 group-hover:border-b-orange-500/30 transition-all duration-500"></div>
              </Card>
            </ScrollAnimations>
          ))}
        </div>

        {/* View More Projects Button */}
        <ScrollAnimations animation="fadeInUp" delay={600}>
          <div className="text-center mt-12 lg:mt-16">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">View More Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
          </div>
        </ScrollAnimations>
      </div>
    </section>
  );
};

export default Projects;