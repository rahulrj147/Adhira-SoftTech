import React, { useState, useEffect } from 'react';
import { Users, UserCheck, Clock, Building, ExternalLink, Star, Zap, Shield, Target, ChevronRight, Award, Briefcase, TrendingUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function OurServices() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Recruitment Services",
      subtitle: "Find the perfect talent",
      description: "Comprehensive talent acquisition solutions tailored to your business needs. We connect you with top-tier professionals across various industries.",
      color: "from-purple-600 to-purple-800",
      features: ["Executive Search", "Technical Recruitment", "Industry Expertise", "Quality Assurance"]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Permanent Staffing",
      subtitle: "Long-term solutions",
      description: "Long-term staffing solutions for sustainable growth. Find the perfect permanent employees who align with your company culture and goals.",
      color: "from-pink-600 to-pink-800",
      features: ["Cultural Fit Assessment", "Skills Evaluation", "Background Verification", "Onboarding Support"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Temporary Staffing",
      subtitle: "Flexible workforce",
      description: "Flexible workforce solutions for project-based requirements. Get skilled professionals for short-term assignments and seasonal demands.",
      color: "from-cyan-600 to-cyan-800",
      features: ["Quick Deployment", "Flexible Duration", "Cost-Effective", "Project Management"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Bulk Hiring",
      subtitle: "Scale your team",
      description: "Large-scale recruitment for expanding organizations. Efficiently hire multiple candidates while maintaining quality standards.",
      color: "from-indigo-600 to-indigo-800",
      features: ["Mass Recruitment", "Campus Hiring", "Walk-in Drives", "Assessment Centers"]
    }
  ];

  const industries = [
    { name: 'IT & Technology', icon: '💻' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Finance & Banking', icon: '🏦' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Retail & E-commerce', icon: '🛒' },
    { name: 'Education', icon: '🎓' },
    { name: 'Automotive', icon: '🚗' },
    { name: 'Real Estate', icon: '🏢' }
  ];

  const processes = [
    { step: '01', title: 'Requirement Analysis', desc: 'Understanding your specific needs and requirements', icon: '🎯' },
    { step: '02', title: 'Talent Sourcing', desc: 'Identifying and attracting the right candidates', icon: '🔍' },
    { step: '03', title: 'Assessment', desc: 'Comprehensive evaluation and skill assessment', icon: '⚡' },
    { step: '04', title: 'Final Selection', desc: 'Presenting the best-matched candidates', icon: '🏆' }
  ];

  const metrics = [
    { number: '500+', label: 'Successful Placements', icon: '👥' },
    { number: '150+', label: 'Happy Clients', icon: '🤝' },
    { number: '95%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '48hrs', label: 'Average Response Time', icon: '⚡' }
  ];

  const testimonials = [
    {
      quote: "aadira Softtech transformed our hiring process. Their expertise in IT recruitment is unmatched.",
      author: "Sarah Johnson",
      position: "HR Director, TechCorp",
      avatar: "👩‍💼"
    },
    {
      quote: "The quality of candidates provided by aadira exceeded our expectations. Highly recommended!",
      author: "Michael Chen",
      position: "CEO, InnovateLabs",
      avatar: "👨‍💻"
    },
    {
      quote: "Professional, efficient, and results-driven. aadira is our go-to partner for all staffing needs.",
      author: "Emma Williams",
      position: "Talent Manager, GlobalTech",
      avatar: "👩‍🔬"
    }
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
              Our Services
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 animate-pulse" />
          </div>
          
          <p className="text-2xl md:text-4xl mb-8 font-light opacity-90 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Empowering <span className="text-purple-400 font-semibold">Businesses</span> with Strategic <span className="text-pink-400 font-semibold">Talent</span>
          </p>
          
          <p className="text-xl md:text-2xl mb-12 opacity-70 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            The great explorer of the truth, the master-builder of human happiness. We deliver comprehensive staffing solutions that transform your workforce and accelerate business growth.
          </p>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.9s' }}>
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="group-hover:animate-pulse">Get Started</span>
            </button>
            <button className="group px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-600 transform hover:scale-105 transition-all duration-300">
              <span className="group-hover:animate-pulse">Explore Services</span>
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

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive staffing solutions designed to meet your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-all duration-500 cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className={`bg-gradient-to-br ${service.color}/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/30 h-full`}>
                  <div className="text-center mb-6">
                    <div className="text-purple-400 mb-4 group-hover:animate-bounce group-hover:text-pink-400 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
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

      {/* Partnership Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Strategic Partnership
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
              <p className="text-xl text-gray-300">
                Enhancing our services through strategic collaboration
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">⚡</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Powered by Innovation</h3>
                    <p className="text-gray-400">Cutting-edge technology solutions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🛡️</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Trusted Partnership</h3>
                    <p className="text-gray-400">Reliable and secure collaboration</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Enhanced Solutions</h3>
                    <p className="text-gray-400">Comprehensive service delivery</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    In Partnership with
                  </h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
                    CodeEternity
                  </div>
                  <p className="text-gray-300 mb-6">
                    Together, we deliver exceptional technology and staffing solutions that drive business success.
                  </p>
                  <a
                    href="https://codeeternity.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Visit CodeEternity
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Industry Expertise
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized recruitment solutions across diverse industry verticals
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 text-center group hover:scale-105">
                <div className="text-4xl mb-4 group-hover:animate-bounce">{industry.icon}</div>
                <h3 className="text-white font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Process
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A streamlined approach to deliver the best talent for your organization
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processes.map((process, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3 group-hover:animate-bounce">{process.icon}</div>
                    <div className="text-3xl font-bold text-purple-400 mb-4">{process.step}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-400 text-sm">{process.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-400/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of companies who have already transformed their hiring process with our expert solutions. 
              Your perfect team is just one conversation away.
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