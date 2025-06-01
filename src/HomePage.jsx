import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Target, Award, ArrowRight, Menu, X, Star, CheckCircle, Phone, Mail, MapPin, Calendar, TrendingUp, Briefcase, GraduationCap } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Placement Consultancy",
      description: "Get the best candidates to get your business up and running with our top placement consultancy services in Lucknow.",
      gradient: "from-purple-600 to-purple-800"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "HR Outsourcing",
      description: "100% assistance in Manpower Recruitment at all levels and designations across different sectors.",
      gradient: "from-pink-600 to-pink-800"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Corporate Training",
      description: "Customized onsite corporate training programs for companies, government, associations, and organizations.",
      gradient: "from-cyan-600 to-cyan-800"
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience", icon: <Calendar className="w-6 h-6" /> },
    { number: "1000+", label: "Successful Placements", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "500+", label: "Happy Clients", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Floating particles background */}
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

      {/* Navigation */}
      <Navbar/>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence Meets
              </span>
              <br />
              <span className="text-white">Expertise</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Rely on our efficient staffing and recruitment solutions. 
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> 
                10+ years
              </span> of connecting outstanding talent with top-tier organizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-500 rounded-full text-white font-semibold hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-purple-900/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  About
                </span>
                <span className="text-white"> Adira Softtech</span>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded in 2014, Adira Softtech was built on the principles of integrity, passion, and a relentless pursuit of excellence. Over the past decade, we have grown from a small team of dedicated professionals into a leading recruitment agency.
              </p>
              
              <div className="space-y-4">
                {[
                  "10+ years of recruitment excellence",
                  "Technology-driven outsourcing solutions",
                  "People-first approach to talent acquisition",
                  "Proven track record across industries"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-full"></div>
                
                <div className="relative z-10 text-center space-y-4">
                  <Award className="w-16 h-16 text-yellow-400 mx-auto" />
                  <h3 className="text-2xl font-bold text-white">Trusted Partner With <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">CodeEternity</span></h3>
                  <p className="text-gray-300">
                    Your success is our mission. We connect outstanding talent with top-tier organizations across diverse industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-slate-900/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Service</span>
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"> Portfolio</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive talent solutions tailored for your unique industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient}/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="flex items-center space-x-2 text-purple-400 hover:text-pink-400 transition-colors duration-300 group/btn">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-purple-900/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Get In </span>
              <span className="text-white">Touch</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Ready to transform your recruitment process? Let's discuss your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-purple-900/30 to-purple-700/30 rounded-3xl border border-white/10 hover:border-white/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-300">+91 8383828124</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-pink-900/30 to-pink-700/30 rounded-3xl border border-white/10 hover:border-white/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">info@adirasofttech.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-cyan-900/30 to-cyan-700/30 rounded-3xl border border-white/10 hover:border-white/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-300">Lucknow, Uttar Pradesh</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                ></textarea>
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
      
      <Footer/>
    </div>
  );
};

export default HomePage;