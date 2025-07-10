import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { contactInfo } from '../../data/mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Ready to work together? I'm available for freelance projects and full-time opportunities. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-900/50 border-slate-800 animate-fade-in-up">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500"
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
                      className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500"
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
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500"
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
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500 resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up delay-300">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Let's Connect
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm passionate about creating innovative solutions and always excited to discuss new opportunities. 
                Whether you have a project in mind or just want to chat about technology, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <Card className="bg-slate-900/50 border-slate-800 hover:border-orange-500/30 transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      📧
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800 hover:border-orange-500/30 transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      🐙
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">GitHub</h4>
                      <a 
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                      >
                        github.com/baje555
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800 hover:border-orange-500/30 transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      💼
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">LinkedIn</h4>
                      <a 
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                      >
                        linkedin.com/in/pankaj55
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800 hover:border-orange-500/30 transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      🌍
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Location</h4>
                      <p className="text-gray-400">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;