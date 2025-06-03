import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp,
  Send,
  Building2,
  Users,
  Target,
  Briefcase,
  Award,
  Globe
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Main Content Area */}
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              aadira Softtech
            </h1>
            <p className="text-xl opacity-80">Building Tomorrow's Workforce Today</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-yellow-500 rounded-full blur-xl animate-bounce delay-500"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              
              {/* Company Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      aadira Softtech
                    </h2>
                    <p className="text-sm text-gray-300">Since 2014</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  With 10+ years of expertise in recruitment and talent acquisition, we connect exceptional talent with leading organizations worldwide.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-lg hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Address:</p>
                      <p className="text-white font-medium">Sector-4, Gomti Nagar</p>
                      <p className="text-white font-medium">Lucknow, PIN: 226010</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">+91 8383828124</p>
                      <p className="text-white font-medium">+91 6306776480</p>
                      <p className="text-white font-medium">+91 9264977545</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">adirasofttech@outlook.com </p>
                      <p className="text-white font-medium">adirasofttech@gmail.com </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Services */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full mr-3"></div>
                  Our Expertise
                </h3>
                <ul className="space-y-3">
                  {[
                    { icon: Target, text: "Executive Search" },
                    { icon: Users, text: "Volume Hiring" },
                    { icon: Briefcase, text: "Technical Recruitment" },
                    { icon: Award, text: "Leadership Hiring" },
                    { icon: Globe, text: "Global Talent Solutions" }
                  ].map((service, index) => (
                    <li key={index} className="flex items-center space-x-3 group cursor-pointer">
                      <service.icon className="w-4 h-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {service.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mr-3"></div>
                  Stay Connected
                </h3>
                <p className="text-gray-300 text-sm">
                  Subscribe to our newsletter for the latest updates on job opportunities and industry insights.
                </p>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all duration-300"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 group">
                      <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'].map((link, index) => (
                      <a
                        key={index}
                        href="#"
                        className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 bg-black/20">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-center md:text-left">
                  <p className="text-gray-300 text-sm">
                    © 2025 aadira Softtech. All Rights Reserved | Managed by 
                    <span className="text-purple-400 font-semibold ml-1">CodeEternity</span>
                  </p>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="text-gray-400 text-sm">10+ Years of Excellence</span>
                  <button
                    onClick={scrollToTop}
                    className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-purple-500/25"
                  >
                    <ArrowUp className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}