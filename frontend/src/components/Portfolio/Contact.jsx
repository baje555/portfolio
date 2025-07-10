import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { contactInfo } from '../../data/mockData';
import ScrollAnimations from './ScrollAnimations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 bg-slate-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div 
        className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        style={parallaxStyle}
      ></div>
      <div 
        className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"
        style={{ 
          ...parallaxStyle, 
          transform: `${parallaxStyle.transform} rotate(${mousePosition.x * 0.1}deg)`,
        }}
      ></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/3 left-1/4 w-6 h-6 border border-orange-500/20 rotate-45 animate-spin opacity-30"
          style={{ animationDuration: '18s' }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-purple-500/30 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimations animation="fadeInUp" delay={0}>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 lg:mb-6 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4 lg:mb-6"></div>
            <p className="text-gray-400 text-base sm:text-lg mt-4 lg:mt-6 max-w-2xl mx-auto leading-relaxed">
              Ready to work together? I'm available for freelance projects and full-time opportunities. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>
        </ScrollAnimations>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <ScrollAnimations animation="fadeInLeft" delay={200}>
            <Card className="bg-slate-900/50 border-slate-800 hover:border-orange-500/30 transition-all duration-500 relative overflow-hidden group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <CardContent className="p-6 sm:p-8 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 hover:border-orange-500/30"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 hover:border-orange-500/30"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Subject"
                      className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 hover:border-orange-500/30"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500 resize-none transition-all duration-300 hover:border-orange-500/30"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 py-4 sm:py-6 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <>
                          <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimations>

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <ScrollAnimations animation="fadeInRight" delay={400}>
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Let's Connect
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  I'm passionate about creating innovative solutions and always excited to discuss new opportunities. 
                  Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                </p>
              </div>
            </ScrollAnimations>

            {/* Contact Details */}
            <div className="space-y-4">
              {[
                { icon: '📧', title: 'Email', value: contactInfo.email, link: `mailto:${contactInfo.email}` },
                { icon: '🐙', title: 'GitHub', value: 'github.com/baje555', link: contactInfo.github },
                { icon: '💼', title: 'LinkedIn', value: 'linkedin.com/in/pankaj55', link: contactInfo.linkedin },
                { icon: '🌍', title: 'Location', value: contactInfo.location, link: null }
              ].map((contact, index) => (
                <ScrollAnimations 
                  key={contact.title} 
                  animation="fadeInRight" 
                  delay={500 + index * 100}
                >
                  <Card className="bg-slate-900/50 border-slate-800 hover:border-orange-500/30 transition-all duration-300 transform hover:scale-105 group cursor-pointer relative overflow-hidden">
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    <CardContent className="p-4 sm:p-6 relative z-10">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce">
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-orange-500 transition-colors duration-300">
                            {contact.title}
                          </h4>
                          {contact.link ? (
                            <a 
                              href={contact.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm sm:text-base break-all"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-gray-400 text-sm sm:text-base">
                              {contact.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-orange-500/30 transition-all duration-500 pointer-events-none"></div>
                  </Card>
                </ScrollAnimations>
              ))}
            </div>

            {/* Social Media Quick Links */}
            <ScrollAnimations animation="fadeInRight" delay={900}>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4">Follow me on</p>
                <div className="flex justify-center space-x-4">
                  {[
                    { icon: '🐙', link: contactInfo.github },
                    { icon: '💼', link: contactInfo.linkedin },
                    { icon: '📧', link: `mailto:${contactInfo.email}` }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/30 hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-110"
                    >
                      <span className="text-xl">{social.icon}</span>
                    </a>
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

export default Contact;