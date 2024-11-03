import React from 'react';
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#fafafa]"></div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-transparent 
                [background-image:linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] 
                [background-size:72px_72px]">
            </div>

            {/* Main Content Container */}
            <div className="relative max-w-7xl mx-auto px-6 py-32">
                <div className="text-center space-y-8">
                    {/* Floating Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full
                        bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                        border border-gray-100 mb-4 animate-float-slow">
                        <span className="text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 
                            bg-clip-text text-transparent">
                            Powered by Claude sonnet,model-o1 and llama
                        </span>
                        <div className="w-1 h-1 bg-gray-300 rounded-full mx-3"></div>
                        <span className="text-gray-600">New Features Available →</span>
                    </div>

                    {/* Main Heading with Animation */}
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tight
                        bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent 
                        animate-slide-in">
                        Craft Perfect Emails
                        <br />
                        <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 
                            bg-clip-text text-transparent animate-slide-in">
                            with AI Precision
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Transform your email communication with AI-powered suggestions,
                        tone optimization, and professional refinements in real-time.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Link to="/signup" className="group relative px-8 py-4 rounded-xl text-white
                            overflow-hidden transition-all duration-300">
                            {/* Button gradient background */}
                            <div className="absolute inset-0 bg-black transition-transform 
                                duration-300 group-hover:scale-[1.04]"></div>
                            
                                <span className="relative z-10 flex items-center justify-center text-lg font-medium">
                                    Start Writing Better Emails
                                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 
                                    group-hover:translate-x-1"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                        </Link>

                        <Link to="/how-it-works" className="group px-8 py-4 rounded-xl text-lg font-medium
                            text-gray-600 hover:text-gray-900
                            bg-white border-2 border-gray-100 hover:border-gray-200
                            transition-all duration-300
                            hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            See How It Works
                        </Link>
                    </div>

                    {/* Stats Section with Fade-in Animation */}
                    <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto 
                        animate-fade-in">
                        {[
                            { number: "50+", label: "Active Users" },
                            { number: "2k+", label: "Emails Improved" },
                            { number: "90%", label: "Satisfaction Rate" },
                            { number: "24/7", label: "AI Support" }
                        ].map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-4xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 
                                    bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r 
                    from-transparent via-gray-200 to-transparent"></div>
            </div>
        </header>
    );
};

export default Header;