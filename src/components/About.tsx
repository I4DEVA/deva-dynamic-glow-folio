
import React, { useRef, useEffect, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="p-8 bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  Passionate Developer
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Currently pursuing B.Tech in Data Science, I combine analytical thinking with 
                  creative problem-solving. My journey spans from frontend development to data 
                  analysis, always seeking innovative solutions.
                </p>
              </div>

              <div className="p-8 bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                  Continuous Learner
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  With a foundation in Python, web development, and data visualization, 
                  I'm constantly expanding my skillset to stay ahead in the rapidly 
                  evolving tech landscape.
                </p>
              </div>
            </div>

            <div className={`space-y-8 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30" />
                <div className="relative p-8 bg-white/20 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-white/30">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Academic Excellence
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">Class 10</span>
                      <span className="font-bold text-blue-600">93%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">Class 12</span>
                      <span className="font-bold text-purple-600">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">Current CGPA</span>
                      <span className="font-bold text-green-600">7.94</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projects", value: "15+" },
                  { label: "Technologies", value: "6+" },
                  { label: "Certifications", value: "5+" },
                  { label: "Experience", value: "2+ Years" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-xl border border-white/20">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{item.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
                  </div>
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
