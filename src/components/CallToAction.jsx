// src/components/CallToAction.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="relative p-12 overflow-hidden">
            {/* Simple, elegant background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
            
            {/* Main content */}
            <div className="relative max-w-4xl mx-auto">
                {/* Decorative line */}
                <div className="absolute -left-40 right-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="absolute -right-40 left-0 top-1/3 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                <div className="relative bg-white rounded-2xl p-12 
                    border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                    transition-all duration-500">
                    
                    {/* Notion-style emoji */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2
                        w-20 h-20 flex items-center justify-center text-5xl
                        bg-white rounded-2xl rotate-12
                        shadow-sm border border-gray-100
                        hover:rotate-0 transition-transform duration-500">
                        ✨
                    </div>

                    <div className="space-y-6 text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mt-6
                            bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                            bg-clip-text text-transparent">
                            Ready to Transform Your Emails?
                        </h2>
                        
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Join thousands of professionals who are crafting perfect emails with AI assistance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Link to="/signup" className="group">
                                <button className="px-8 py-3.5 rounded-xl font-medium text-white
                                    bg-black hover:bg-gray-900
                                    transition-all duration-300 ease-in-out
                                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                                    active:scale-[0.98]">
                                    <span className="flex items-center justify-center">
                                        Get Started
                                        <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 
                                            group-hover:translate-x-0.5" 
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </button>
                            </Link>

                            <Link to="/watch-demo" className="group">
                                <button className="px-8 py-3.5 rounded-xl font-medium
                                    text-gray-600 hover:text-gray-900
                                    border border-gray-200 hover:border-gray-300
                                    transition-all duration-300 ease-in-out
                                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                                    active:scale-[0.98]">
                                    Watch Demo
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;