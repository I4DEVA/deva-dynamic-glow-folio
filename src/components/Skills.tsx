
import React, { useState, useRef, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  color: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'Python', level: 85, category: 'programming', icon: '🐍', color: 'from-green-400 to-blue-500' },
    { name: 'JavaScript', level: 80, category: 'programming', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 75, category: 'frontend', icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
    { name: 'HTML/CSS', level: 90, category: 'frontend', icon: '🎨', color: 'from-pink-400 to-red-500' },
    { name: 'Power BI', level: 80, category: 'data', icon: '📊', color: 'from-purple-400 to-indigo-500' },
    { name: 'Data Analysis', level: 85, category: 'data', icon: '📈', color: 'from-teal-400 to-green-500' },
    { name: 'Machine Learning', level: 70, category: 'data', icon: '🤖', color: 'from-indigo-400 to-purple-500' },
    { name: 'Git', level: 75, category: 'tools', icon: '🔧', color: 'from-gray-400 to-gray-600' },
  ];

  const categories = ['all', 'programming', 'frontend', 'data', 'tools'];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

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
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Skills & Expertise
          </h2>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white/20 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-700/50'
                } backdrop-blur-sm border border-white/20`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group p-6 bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`text-3xl mr-4 p-3 rounded-full bg-gradient-to-r ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {skill.category}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100 + 800}ms`
                      }}
                    />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className={`mt-16 p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-lg rounded-2xl border border-white/20 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
              What I Bring to the Table
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Full-Stack</div>
                <p className="text-gray-600 dark:text-gray-400">
                  End-to-end development capabilities
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">Data-Driven</div>
                <p className="text-gray-600 dark:text-gray-400">
                  Analytics and visualization expertise
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">Innovative</div>
                <p className="text-gray-600 dark:text-gray-400">
                  Creative problem-solving approach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
