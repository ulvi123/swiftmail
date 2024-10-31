import React from 'react';
import { FaRegCheckCircle, FaRocket, FaEnvelopeOpenText } from 'react-icons/fa'; // Importing icons

const HowItWorks = () => {
    return (
        <section className="py-20 bg-[#d1e7ff]"> {/* Change background color to match the app */}
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">How SwiftMail Works</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                    SwiftMail uses advanced AI technology to streamline your email management process. 
                    Here’s how it works:
                </p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="text-blue-500 text-4xl mb-4">
                            <FaRegCheckCircle />
                        </div>
                        <h3 className="text-xl font-semibold">Smart Categorization</h3>
                        <p className="mt-2 text-gray-600">
                            SwiftMail automatically categorizes your emails, making it easy to find what you need.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="text-blue-500 text-4xl mb-4">
                            <FaRocket />
                        </div>
                        <h3 className="text-xl font-semibold">AI-Powered Responses</h3>
                        <p className="mt-2 text-gray-600">
                            Generate quick responses with our AI suggestions, saving you time and effort.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="text-blue-500 text-4xl mb-4">
                            <FaEnvelopeOpenText />
                        </div>
                        <h3 className="text-xl font-semibold">Error Checking</h3>
                        <p className="mt-2 text-gray-600">
                            Ensure your emails are error-free with our built-in checking tools.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;