import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const location = useLocation();

    const tools = [
        {
            name: "AI Email Assistant",
            description: "Craft perfect emails with AI",
            icon: "✉️",
            path: "/email-assistant"
        },
        {
            name: "PDF AI Chat",
            description: "Chat with your PDF documents",
            icon: "📄",
            path: "/pdf-chat"
        },
        {
            name: "AI Writing Helper",
            description: "Get writing suggestions in real-time",
            icon: "✍️",
            path: "/writing-helper"
        },
        {
            name: "Document Analyzer",
            description: "Analyze documents with AI",
            icon: "🔍",
            path: "/document-analyzer"
        }
    ];

    const navItems = [
        { name: 'Features', path: '/features' },
        { name: 'How it Works', path: '/how-it-works' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/about' }
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.tools-dropdown')) {
                setIsToolsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
            ${isScrolled ? 'py-4 bg-white/80 backdrop-blur-lg shadow-[0_2px_20px_rgb(0,0,0,0.04)]' 
            : 'py-6 bg-transparent'}`}>
            
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center
                            group-hover:scale-105 transition-transform duration-300">
                            <span className="text-white text-xl font-bold">Sw</span>
                        </div>
                        <span className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 
                            bg-clip-text text-transparent">
                            iftmail
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Tools Dropdown */}
                        <div className="relative tools-dropdown">
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsToolsOpen(!isToolsOpen);
                                }}
                                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 
                                    transition-colors duration-300">
                                <span>Tools</span>
                                <svg className={`w-4 h-4 transition-transform duration-300 
                                    ${isToolsOpen ? 'rotate-180' : ''}`} 
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-0 mt-2 w-80 
                                bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                                border border-gray-100 overflow-hidden
                                transition-all duration-300 transform origin-top
                                ${isToolsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                <div className="p-2">
                                    {tools.map((tool, index) => (
                                        <Link
                                            key={index}
                                            to={tool.path}
                                            className="flex items-start p-3 rounded-xl hover:bg-gray-50
                                                transition-colors duration-300 group">
                                            <span className="w-8 h-8 flex items-center justify-center text-xl
                                                bg-white rounded-lg shadow-sm border border-gray-100
                                                group-hover:scale-110 group-hover:rotate-6
                                                transition-transform duration-500">
                                                {tool.icon}
                                            </span>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">{tool.name}</p>
                                                <p className="text-xs text-gray-500">{tool.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Other Nav Items */}
                        {navItems.map((item) => (
                            <Link 
                                key={item.path}
                                to={item.path}
                                className="text-gray-600 hover:text-gray-900 
                                    relative group transition-colors duration-300">
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900
                                    group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link 
                            to="/signin"
                            className="hidden sm:block text-gray-600 hover:text-gray-900
                                px-4 py-2 rounded-lg transition-colors duration-300">
                            Sign In
                        </Link>
                        
                        <Link 
                            to="/signup"
                            className="group relative px-5 py-2 rounded-lg text-white
                                overflow-hidden transition-all duration-300">
                            <div className="absolute inset-0 bg-black transition-transform 
                                duration-300 group-hover:scale-[1.04]"></div>
                            <span className="relative z-10 flex items-center justify-center font-medium">
                                Get Started
                                <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 
                                    group-hover:translate-x-0.5" 
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden
                    ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="py-4 space-y-4">
                        {/* Mobile Tools Dropdown */}
                        <div className="px-4">
                            <div className="font-medium text-gray-900 mb-2">Tools</div>
                            <div className="space-y-2 pl-4">
                                {tools.map((tool, index) => (
                                    <Link
                                        key={index}
                                        to={tool.path}
                                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900
                                            transition-colors duration-300">
                                        <span>{tool.icon}</span>
                                        <span>{tool.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Other Mobile Nav Items */}
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 text-gray-600 hover:text-gray-900
                                    hover:bg-gray-50 rounded-lg transition-colors duration-300">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;