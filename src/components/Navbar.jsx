// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="container mx-auto p-5 flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold text-yellow-600 hover:text-blue-800 transition duration-300">
                    SwiftMail
                </Link>
                <div className="hidden md:flex space-x-8 relative">
                    <Link to="/" className="text-lg text-gray-800 hover:text-blue-600 transition duration-300">Features</Link>
                    <Link to="/how-it-works" className="text-lg text-gray-800 hover:text-blue-600 transition duration-300">How It Works</Link>
                    <Link to="/use-cases" className="text-lg text-gray-800 hover:text-blue-600 transition duration-300">Use Cases</Link>
                    <Link to="/about" className="text-lg text-gray-800 hover:text-blue-600 transition duration-300">About</Link>
                    <div className="relative">
                        <button 
                            onClick={toggleDropdown} 
                            className="flex items-center text-lg text-gray-800 hover:text-blue-600 focus:outline-none"
                        >
                            Tools
                            <span className={`ml-1 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </button>
                        <div 
                            className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition-all duration-300 ease-in-out ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                        >
                            <Link to="/products/email-generator" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-200">Email Generator</Link>
                            <Link to="/products/pdf-checker" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-200">PDF Checker</Link>
                            <Link to="/products/another-product" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-200">Another Product</Link>
                        </div>
                    </div>
                    <Link to="/pricing" className="text-lg text-gray-800 hover:text-blue-600 transition duration-300">Pricing</Link>
                    <Link to="/contact" className="text-lg text-gray-800 hover:text-blue-600 transition duration-300">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;