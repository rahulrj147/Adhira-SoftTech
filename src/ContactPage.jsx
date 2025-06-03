import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: "📍",
      title: "Visit Our Office",
      subtitle: "Come explore about us",
      details: "Sector-4, Gomti Nagar, Lucknow, PIN: 226010",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: "📧",
      title: "Send us an Email",
      subtitle: "Don't hesitate to mail",
      details: "adirasofttech@outlook.com ,  adirasofttech@gmail.com ",
      color: "from-pink-600 to-pink-800"
    },
    {
      icon: "📞",
      title: "Call Us Now",
      subtitle: "Call us for more information",
      details: "+91-8383828124 / 6306776480 / 9264977545",
      color: "from-cyan-600 to-cyan-800"
    }
  ];

  const services = [
    "Executive Search",
    "Volume Hiring", 
    "Technical Recruitment",
    "Corporate Training",
    "Talent Consulting",
    "HR Solutions"
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" }
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
              Get In Touch
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 animate-pulse" />
          </div>
          
          <p className="text-2xl md:text-4xl mb-8 font-light opacity-90 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Let's <span className="text-purple-400 font-semibold">Connect</span> and <span className="text-pink-400 font-semibold">Collaborate</span>
          </p>
          
          <p className="text-xl md:text-2xl mb-12 opacity-70 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Ready to transform your hiring process? We're here to help you find the perfect talent or your dream opportunity.
          </p>

          <div className="animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="group-hover:animate-pulse">Start Conversation</span>
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

      {/* Contact Methods */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Reach Out to Us
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to connect with our expert team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${method.color}/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/30 h-full`}>
                  <div className="text-center">
                    <div className="text-6xl mb-6 group-hover:animate-bounce">
                      {method.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {method.subtitle}
                    </p>
                    <p className="text-lg font-semibold text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                      {method.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2  gap-16">
            {/* Contact Form */}

            <div className= 'flex flex-col-reverse gap-24' >
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Send us a Message
                </h3>
                
                <form>
                  {/* ...your form fields here... */}
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
             {/* Social Links */}
              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-700/30 rounded-3xl p-8 backdrop-blur-sm border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
                  <span className="text-3xl mr-3">🌐</span>
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-center py-3 bg-slate-800/50 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-white font-semibold">{social}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Office Hours */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-700/30 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center">
                  <span className="text-3xl mr-3">🕒</span>
                  Office Hours
                </h3>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-purple-500/20 last:border-b-0">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-white font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-pink-900/30 to-pink-700/30 rounded-3xl p-8 backdrop-blur-sm border border-pink-500/20">
                <h3 className="text-2xl font-bold mb-6 text-pink-400 flex items-center">
                  <span className="text-3xl mr-3">📊</span>
                  Response Time
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
                    <span className="text-gray-300">Email: Within 2-4 hours</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <span className="text-gray-300">Phone: Immediate response</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse" style={{ animationDelay: '1s' }} />
                    <span className="text-gray-300">Meeting: Within 24 hours</span>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>

    
      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you fill a position?",
                answer: "Our average time-to-fill is 15-20 days for most positions, with executive roles taking 3-4 weeks."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We work across multiple industries including IT, healthcare, finance, manufacturing, and more."
              },
              {
                question: "Do you offer replacement guarantees?",
                answer: "Yes, we provide a 90-day replacement guarantee for all permanent placements."
              },
              {
                question: "What are your training program options?",
                answer: "We offer leadership development, technical skills training, and customized corporate programs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden">
                <div className="p-6 cursor-pointer hover:bg-white/5 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-white mb-3">{faq.question}</h4>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
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