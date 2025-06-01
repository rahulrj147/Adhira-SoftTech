import React, { useState, useEffect } from 'react';
import logo from './assets/Logo-PNG-2.png';

import { 
  Menu, 
  X, 
  Building2, 
  Users, 
  Info, 
  Phone,
  ServerIcon
} from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
        name: 'Home',
        href: '/',
        icon: Building2
    },
    {
      name: 'About Us',
      href: '/about',
      icon: Info
    },
    {
      name: 'Our Services',
      href: '/our-services',
      icon: ServerIcon
    },
    {
      name: 'Build Your Team',
      href: '/build-your-team',
      icon: Users
    },
    {
      name: 'Contact Us',
      href: '/contact',
      icon: Phone
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-xl border-b border-white/10' 
        : 'bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-lg'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
           <img src={logo} alt="Adhira Softtech Logo" className="w-auto h-16 rounded-full" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-2 text-white hover:text-purple-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/10 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            
            {/* CTA Button */}
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl mt-4 p-4 border border-white/10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-3 text-white hover:text-purple-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/10 mb-2 group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}