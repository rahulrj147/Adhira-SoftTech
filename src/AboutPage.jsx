import React, { useState, useEffect } from 'react';
import Footer from './Footer';

import Navbar from './Navbar';
export default function About() {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: "10+", label: "Years of Excellence", icon: "🏆" },
    { number: "1000+", label: "Successful Placements", icon: "👥" },
    { number: "500+", label: "Corporate Clients", icon: "🏢" },
    { number: "7+", label: "Years Training", icon: "📚" }
  ];

  const services = [
    {
      title: "Executive Search",
      description: "Premium recruitment for C-level and senior management positions",
      icon: "👔",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Volume Hiring",
      description: "Efficient bulk recruitment solutions for growing organizations",
      icon: "📈",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Technical Recruitment",
      description: "Specialized hiring for IT, engineering, and technical roles",
      icon: "💻",
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Corporate Training",
      description: "Comprehensive skill development and leadership programs",
      icon: "🎯",
      color: "from-orange-600 to-red-600"
    }
  ];

  const testimonials = [
    {
      name: "Nikita Sharma",
      role: "HR Director, TechCorp",
      content: "Adira Softtech transformed our hiring process. Their attention to detail and quality of candidates is unmatched.",
      rating: 5
    },
    {
      name: "Rajesh Gupta",
      role: "CEO, InnovateLabs",
      content: "The training programs delivered by Adira have significantly improved our team's performance and productivity.",
      rating: 5
    },
    {
      name: "Sita Patel",
      role: "Operations Manager, GlobalTech",
      content: "Professional, efficient, and results-driven. Adira is our go-to partner for all recruitment needs.",
      rating: 5
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
              Adira Softtech
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 animate-pulse" />
          </div>
          
          <p className="text-2xl md:text-4xl mb-8 font-light opacity-90 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Where <span className="text-purple-400 font-semibold">Excellence</span> meets <span className="text-pink-400 font-semibold">Expertise</span>
          </p>
          
          <p className="text-xl md:text-2xl mb-12 opacity-70 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Revolutionizing recruitment and corporate training for over a decade
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="group-hover:animate-pulse">Explore Services</span>
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400/20 transform hover:scale-105 transition-all duration-300">
              Contact Us
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

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Journey
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mb-8" />
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p className="hover:text-white transition-colors duration-300">
                  Founded in <span className="text-purple-400 font-semibold">2014</span>, Adira Softtech has grown from a small team of dedicated professionals into a leading recruitment powerhouse, built on principles of integrity, passion, and relentless pursuit of excellence.
                </p>
                <p className="hover:text-white transition-colors duration-300">
                  Our <span className="text-pink-400 font-semibold">all-female recruiter team</span> brings unparalleled expertise and agility, comprising HR professionals with extensive experience in top MNCs, uniquely skilled to deliver quality candidates in record time.
                </p>
                <p className="hover:text-white transition-colors duration-300">
                  Beyond recruitment, we're premier providers of <span className="text-cyan-400 font-semibold">corporate training solutions</span>, delivering high-impact programs that drive success and foster growth for over 7 years.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20">
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-gray-300">Innovation in Action</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Purpose
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-700/30 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-spin">
                    <span className="text-white text-xl font-bold">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400">Our Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To bridge the gap between ambition and achievement by connecting the right people with the right roles. We foster long-term relationships and contribute to the growth and success of our clients and candidates.
                </p>
              </div>
            </div>

            <div className="group hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-pink-900/30 to-pink-700/30 rounded-3xl p-8 backdrop-blur-sm border border-pink-500/20 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4 group-hover:animate-spin">
                    <span className="text-white text-xl font-bold">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-pink-400">Our Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To be a trusted leader in recruitment solutions, known for our integrity, innovation, and unwavering commitment to excellence across all industries we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setActiveSection(index)}
              >
                <div className={`bg-gradient-to-br ${service.color}/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10 h-full hover:border-white/30 transition-all duration-300`}>
                  <div className="text-center">
                    <div className="text-5xl mb-6 group-hover:animate-bounce">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose Adira?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Tailored Solutions", desc: "Personalized recruitment services aligned with your specific goals", icon: "🎯" },
              { title: "Industry Expertise", desc: "In-depth knowledge across diverse industries and sectors", icon: "🏭" },
              { title: "Comprehensive Support", desc: "End-to-end support from sourcing to onboarding", icon: "🤝" },
              { title: "Excellence Commitment", desc: "Highest standards of professionalism and ethics", icon: "⭐" }
            ].map((item, index) => (
              <div key={index} className="group hover:scale-110 transition-all duration-300">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl p-6 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 h-full">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Client Stories
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl group-hover:animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-purple-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you're building a winning team or seeking your dream opportunity, we're your trusted partner in success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="group-hover:animate-pulse">Start Your Journey</span>
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400/20 transform hover:scale-105 transition-all duration-300">
                Learn More
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