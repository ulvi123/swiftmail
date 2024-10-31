// src/components/CallToAction.jsx
import React from 'react';

const CallToAction = () => {
    return (
        <section className="py-10 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">Ready to Boost Your Email Efficiency?</h2>
            <p className="mt-2">Join thousands of professionals who trust our AI tool.</p>
            <button className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">Get Started</button>
        </section>
    );
};

export default CallToAction;