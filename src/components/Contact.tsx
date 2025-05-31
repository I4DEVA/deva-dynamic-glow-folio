
import React, { useState, useRef, useEffect } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'uunni553@gmail.com',
      link: 'mailto:uunni553@gmail.com',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 6282695240',
      link: 'tel:+916282695240',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/deva-narayan-99531b278/',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Let's Connect
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="p-8 bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  Ready to collaborate?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with 
                  innovative teams. Let's discuss how we can create something amazing together!
                </p>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      target={method.title === 'LinkedIn' ? '_blank' : undefined}
                      rel={method.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                      className="flex items-center p-4 bg-white/10 dark:bg-gray-700/30 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <div className={`text-2xl mr-4 p-3 rounded-full bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 dark:text-gray-200">
                          {method.title}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-6 bg-gradient-to-r from-green-400/20 to-blue-500/20 backdrop-blur-lg rounded-2xl border border-white/20">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                  <span className="text-gray-800 dark:text-gray-200 font-semibold">
                    Available for new opportunities
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Currently seeking internships and entry-level positions
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  Send me a message
                </h3>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className={`text-center mt-16 p-8 bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/20 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              © 2024 Deva Narayan. Built with React, TypeScript, and passion.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#hero" className="text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
