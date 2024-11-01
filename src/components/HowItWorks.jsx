import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEnvelopeOpenText, faRocket } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">How It Works</h2>
                <p className="mb-8 text-lg text-gray-600">Experience seamless email management with our intuitive AI-powered platform.</p>
                <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
                    {/* Step 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs transition-transform transform hover:scale-105 duration-300">
                        <FontAwesomeIcon icon={faUserPlus} className="text-4xl text-gray-500 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Step 1: Sign Up</h3>
                        <p className="text-gray-600">Create your account in just a few minutes and start managing your emails effortlessly.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs transition-transform transform hover:scale-105 duration-300">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-4xl text-gray-500 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Step 2: Connect Your Email</h3>
                        <p className="text-gray-600">Easily connect your email accounts to our platform for seamless integration.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs transition-transform transform hover:scale-105 duration-300">
                        <FontAwesomeIcon icon={faRocket} className="text-4xl text-gray-500 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Step 3: Enjoy AI Features</h3>
                        <p className="text-gray-600">Leverage our AI tools to sort, prioritize, and respond to your emails efficiently.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;