import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const navigation = {
        product: [
            { name: 'Features', href: '/features' },
            { name: 'How it Works', href: '/how-it-works' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'About', href: '/about' }
        ],
        support: [
            { name: 'Help Center', href: '#' },
            { name: 'API Documentation', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' }
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Contact', href: '/contact' },
            { name: 'Careers', href: '#' },
            { name: 'Blog', href: '#' }
        ],
        social: [
            { name: 'Twitter', href: '#', icon: '𝕏' },
            { name: 'LinkedIn', href: '#', icon: '🔗' },
            { name: 'GitHub', href: '#', icon: '⌨️' },
            { name: 'Discord', href: '#', icon: '💬' }
        ]
    };

    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Logo and Description */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                                <span className="text-white text-xl font-bold">Sw</span>
                            </div>
                            <span className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 
                                bg-clip-text text-transparent">
                                iftmail
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Transforming email communication with AI-powered intelligence. 
                            Craft perfect emails every time.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            {navigation.product.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.href} 
                                        className="text-gray-600 hover:text-gray-900 text-sm
                                            transition-colors duration-300">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
                        <ul className="space-y-3">
                            {navigation.support.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} 
                                        className="text-gray-600 hover:text-gray-900 text-sm
                                            transition-colors duration-300">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.href} 
                                        className="text-gray-600 hover:text-gray-900 text-sm
                                            transition-colors duration-300">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-gray-600 text-sm">
                            © 2024 AI Email. All rights reserved.
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name}
                                    href={item.href}
                                    className="group relative p-2 rounded-lg 
                                        hover:bg-gray-50 transition-colors duration-300">
                                    <span className="text-xl group-hover:scale-110 
                                        transition-transform duration-300 inline-block">
                                        {item.icon}
                                    </span>
                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 
                                        bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 
                                        group-hover:opacity-100 transition-opacity duration-300 mb-2
                                        whitespace-nowrap">
                                        {item.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;