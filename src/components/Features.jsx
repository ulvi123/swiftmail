// src/components/Features.jsx
import React from 'react';
import { FaRegEnvelope, FaCheckCircle, FaRocket, FaShieldAlt } from 'react-icons/fa'; // Importing trendy icons

const Features = () => {
    return (
        <section className="py-20 bg-[#d1e7ff]"> {/* Set background color to match the app */}
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Features</h2>
                <p className="text-lg text-gray-600 mb-12">
                    Discover the powerful features of SwiftMail that make email management a breeze.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="text-blue-500 text-5xl mb-4">
                            <FaRegEnvelope />
                        </div>
                        <h3 className="text-xl font-semibold">Smart Categorization</h3>
                        <p className="mt-2 text-gray-600">
                            Automatically categorize and prioritize your emails for easy access.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="text-blue-500 text-5xl mb-4">
                            <FaCheckCircle />
                        </div>
                        <h3 className="text-xl font-semibold">Error Checking</h3>
                        <p className="mt-2 text-gray-600">
                            Identify and correct errors in your emails before sending them out.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="text-blue-500 text-5xl mb-4">
                            <FaRocket />
                        </div>
                        <h3 className="text-xl font-semibold">Fast Processing</h3>
                        <p className="mt-2 text-gray-600">
                            Send and manage emails faster with AI assistance at your fingertips.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="text-blue-500 text-5xl mb-4">
                            <FaShieldAlt />
                        </div>
                        <h3 className="text-xl font-semibold">Enhanced Security</h3>
                        <p className="mt-2 text-gray-600">
                            Keep your emails safe with advanced security features and encryption.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;