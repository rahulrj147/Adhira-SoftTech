import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function BuildYourselfPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('skills');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const buildPillars = [
    {
      icon: "🎯",
      title: "Skill Development",
      subtitle: "Master new technologies",
      description: "Enhance your technical expertise with cutting-edge technologies and industry-relevant skills.",
      color: "from-purple-600 to-purple-800",
      features: ["Programming Languages", "Cloud Technologies", "AI & Machine Learning", "Web Development"]
    },
    {
      icon: "🚀",
      title: "Career Growth",
      subtitle: "Accelerate your journey",
      description: "Strategic career planning and mentorship to reach your professional goals faster.",
      color: "from-pink-600 to-pink-800",
      features: ["Career Roadmap", "Leadership Training", "Interview Preparation", "Portfolio Building"]
    },
    {
      icon: "🧠",
      title: "Personal Excellence",
      subtitle: "Transform your mindset",
      description: "Develop emotional intelligence, communication skills, and personal effectiveness.",
      color: "from-cyan-600 to-cyan-800",
      features: ["Soft Skills", "Communication", "Time Management", "Problem Solving"]
    }
  ];

  const developmentPaths = [
    {
      category: "Technical Skills",
      icon: "💻",
      courses: [
        { name: "Full Stack Development", duration: "12 weeks", level: "Intermediate" },
        { name: "Data Science & Analytics", duration: "16 weeks", level: "Advanced" },
        { name: "Cloud Architecture", duration: "10 weeks", level: "Expert" },
        { name: "Mobile App Development", duration: "14 weeks", level: "Beginner" }
      ]
    },
    {
      category: "Leadership & Management",
      icon: "👑",
      courses: [
        { name: "Team Leadership", duration: "8 weeks", level: "Intermediate" },
        { name: "Project Management", duration: "12 weeks", level: "Advanced" },
        { name: "Strategic Planning", duration: "6 weeks", level: "Expert" },
        { name: "Conflict Resolution", duration: "4 weeks", level: "Beginner" }
      ]
    },
    {
      category: "Personal Development",
      icon: "🌟",
      courses: [
        { name: "Emotional Intelligence", duration: "6 weeks", level: "Beginner" },
        { name: "Public Speaking", duration: "8 weeks", level: "Intermediate" },
        { name: "Networking Skills", duration: "4 weeks", level: "Beginner" },
        { name: "Work-Life Balance", duration: "6 weeks", level: "All Levels" }
      ]
    }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      role: "Software Engineer → Tech Lead",
      growth: "200% salary increase",
      story: "Transformed from junior developer to team lead in 18 months through our mentorship program.",
      avatar: "👩‍💻"
    },
    {
      name: "Rajesh Kumar",
      role: "Analyst → Data Scientist",
      growth: "Career Transition",
      story: "Successfully transitioned to data science with our comprehensive training and placement support.",
      avatar: "👨‍🔬"
    },
    {
      name: "Anita Verma",
      role: "Manager → Director",
      growth: "Leadership Excellence",
      story: "Developed executive presence and strategic thinking skills to reach C-suite level.",
      avatar: "👩‍💼"
    }
  ];

  const mentorshipFeatures = [
    { icon: "🎓", title: "Expert Mentors", desc: "Industry professionals with 10+ years experience" },
    { icon: "📈", title: "Personalized Plans", desc: "Customized development roadmaps for your goals" },
    { icon: "🤝", title: "1:1 Sessions", desc: "Regular one-on-one guidance and feedback" },
    { icon: "🏆", title: "Certification", desc: "Industry-recognized certificates upon completion" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Floating particles background */}
      <Navbar/>
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Mouse follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 opacity-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(0.8)'
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Build Yourself
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 animate-pulse" />
          </div>
          
          <p className="text-2xl md:text-4xl mb-8 font-light opacity-90 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Transform Your <span className="text-purple-400 font-semibold">Career</span> and <span className="text-pink-400 font-semibold">Life</span>
          </p>
          
          <p className="text-xl md:text-2xl mb-12 opacity-70 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, but those who know how to pursue excellence rationally encounter extraordinary results.
          </p>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.9s' }}>
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="group-hover:animate-pulse">Start Your Journey</span>
            </button>
            <button className="group px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-600 transform hover:scale-105 transition-all duration-300">
              <span className="group-hover:animate-pulse">Explore Programs</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Build Pillars Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Three Pillars of Growth
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive approach to personal and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {buildPillars.map((pillar, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${pillar.color}/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/30 h-full`}>
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 group-hover:animate-bounce">
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {pillar.subtitle}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-pink-400 transition-colors duration-300" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Paths */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Choose Your Path
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured learning paths designed for different career goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {developmentPaths.map((path, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{path.icon}</div>
                  <h3 className="text-xl font-bold text-white">{path.category}</h3>
                </div>
                <div className="space-y-4">
                  {path.courses.map((course, idx) => (
                    <div key={idx} className="bg-slate-900/50 rounded-xl p-4 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer">
                      <h4 className="font-semibold text-white mb-2">{course.name}</h4>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{course.duration}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          course.level === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {course.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real transformations from our community members
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{story.avatar}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                  <p className="text-purple-400 font-semibold mb-2">{story.role}</p>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full">
                    <span className="text-green-400 text-sm font-semibold">{story.growth}</span>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "{story.story}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Program */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mentorship Program
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Personalized guidance from industry experts to accelerate your growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {mentorshipFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Apply for Mentorship
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of professionals who have already started their journey to excellence. 
              Your transformation begins with a single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-600 transform hover:scale-105 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
      `}</style>
    </div>
  );
}