import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { projects } from '../../data/mockData';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            API integration, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-slate-800/50 border-slate-700 hover:border-orange-500/30 transition-all duration-500 transform hover:scale-105 group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project links overlay */}
                <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="mr-2">🔗</span>
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="mr-2">📂</span>
                    GitHub
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-slate-700/50 text-gray-300 hover:bg-orange-500/20 hover:text-orange-500 transition-all duration-300 transform hover:scale-105"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12 animate-fade-in-up delay-1000">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;