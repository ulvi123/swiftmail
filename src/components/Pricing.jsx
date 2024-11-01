import React from 'react';

const Pricing = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Choose Your AI Plan</h2>
                <div className="flex justify-center space-x-8">
                    {/* Starter Tier */}
                    <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs transition-transform transform hover:scale-105 duration-300">
                        <h3 className="text-3xl font-bold mb-4">Starter</h3>
                        <p className="text-3xl font-semibold mb-4">$7.99 USD</p>
                        <p className="mb-6 text-gray-600">Perfect for individuals looking to harness AI for personal productivity.</p>
                        <ul className="mb-6 text-left">
                            <li>✔️ AI-Powered Email Sorting</li>
                            <li>✔️ Smart Reply Suggestions</li>
                            <li>✔️ Basic Analytics on Email Engagement</li>
                        </ul>
                        <button className="bg-yellow-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
                            Get Started
                        </button>
                    </div>

                    {/* Premium Tier */}
                    <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs transition-transform transform hover:scale-105 duration-300">
                        <h3 className="text-3xl font-bold mb-4">Premium</h3>
                        <p className="text-3xl font-semibold mb-4">$15.99 USD</p>
                        <p className="mb-6 text-gray-600">Ideal for businesses needing advanced AI tools for email management.</p>
                        <ul className="mb-6 text-left">
                            <li>✔️ Advanced AI-Powered Email Sorting</li>
                            <li>✔️ Customizable Smart Reply Suggestions</li>
                            <li>✔️ Detailed Analytics and Reporting</li>
                            <li>✔️ Team Collaboration Features</li>
                        </ul>
                        <button className="bg-yellow-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
                            Get Started
                        </button>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs transition-transform transform hover:scale-105 duration-300">
                        <h3 className="text-3xl font-bold mb-4">Enterprise</h3>
                        <p className="text-3xl font-semibold mb-4">Talk to us!</p>
                        <p className="mb-6 text-gray-600">Tailored AI solutions for large organizations with specific needs.</p>
                        <ul className="mb-6 text-left">
                            <li>✔️ Fully Customizable AI Solutions</li>
                            <li>✔️ Unlimited Email Accounts and Storage</li>
                            <li>✔️ Dedicated AI Support Team</li>
                            <li>✔️ Integration with Existing Systems</li>
                        </ul>
                        <button className="bg-yellow-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;