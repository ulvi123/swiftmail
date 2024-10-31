// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <section className="bg-gray-800 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-sans font-bold leading-tight">
                    <span className="text-white">Welcome to</span>  <span className="text-yellow-300">SwiftMail</span> {/* Made "Welcome" white */}
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    <span className='text-white'>Experience lightning-fast email management with our AI-powered tools designed for busy professionals.</span>
                </p>
                <div className="mt-8">
                    <button className="bg-yellow-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
                        Get Started
                    </button>
                    <button className="ml-4 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Header;