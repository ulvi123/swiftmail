import React from 'react';
import { Link } from 'react-router-dom';

const WatchDemo = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center">
                    <h1 className="text-4xl font-extrabold">Watch Our Demo</h1>
                    <p className="mt-2 text-lg">Experience the future of email management with our AI tools.</p>
                </div>

                {/* Video Section */}
                <div className="p-8">
                    <div className="relative pb-9/16">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border-0" // Removed frameborder
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Sample video link
                            title="Demo Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                    <h2 className="text-3xl font-semibold text-gray-800">Why Choose Our Tool?</h2>
                    <p className="mt-4 text-gray-600">
                        Our AI-powered email management tool is designed to help you craft perfect emails effortlessly. 
                        Here’s what you can expect:
                    </p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                            </svg>
                            <span>Craft perfect emails with intelligent suggestions.</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                            </svg>
                            <span>Automate repetitive tasks and focus on what matters.</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                            </svg>
                            <span>Join a growing community of satisfied users.</span>
                        </li>
                    </ul>
                </div>

                {/* Call to Action Section */}
                <div className="bg-gray-200 p-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Ready to Get Started?</h2>
                    <p className="mt-2">Sign up today and transform your email experience!</p>
                    <Link to="/register" className="mt-4 inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WatchDemo;