import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Target, Award, ArrowRight, Menu, X, Star, CheckCircle, Phone, Mail, MapPin, Calendar, TrendingUp, Briefcase, GraduationCap } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Placement Consultancy",
      description: "Get the best candidates to get your business up and running with our top placement consultancy services in Lucknow.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "HR Outsourcing",
      description: "100% assistance in Manpower Recruitment at all levels and designations across different sectors.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Corporate Training",
      description: "Customized onsite corporate training programs for companies, government, associations, and organizations.",
      gradient: "from-pink-500 to-red-600"
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience", icon: <Calendar className="w-6 h-6" /> },
    { number: "1000+", label: "Successful Placements", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "500+", label: "Happy Clients", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar/>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Excellence Meets
              </span>
              <br />
              <span className="text-white">Expertise</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Rely on our efficient staffing and recruitment solutions. 
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-semibold"> 
                10+ years
              </span> of connecting outstanding talent with top-tier organizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:scale-105 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center space-x-2">
                  <span >Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-500 rounded-full text-white font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
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
              <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-20"></div>
                
                <div className="relative z-10 text-center space-y-4">
                  <Award className="w-16 h-16 text-yellow-400 mx-auto" />
                  <h3 className="text-2xl font-bold text-white">Trusted Partner With <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">CodeEternity</span></h3>
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
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Service</span>
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Portfolio</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive talent solutions tailored for your unique industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-105">
                
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group/btn">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Get In </span>
              <span className="text-white">Touch</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Ready to transform your recruitment process? Let's discuss your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-300">+91 8383828124 </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">info@adirasofttech.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-300">Lucknow, Uttar Pradesh</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                ></textarea>
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
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