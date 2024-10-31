// src/components/Features.jsx
import { FaRegEnvelope, FaCheckCircle, FaRocket, FaShieldAlt } from 'react-icons/fa'; // Importing trendy icons

const Features = () => {
    return (
        <section className="py-20"> {/* Light gray background for the section */}
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Features</h2>
                <p className="text-lg text-gray-600 mb-12">
                    Discover the powerful features of SwiftMail that make email management a breeze.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="text-gray-700 text-5xl mb-4 transition-transform duration-300 transform hover:translate-y-[-5px]">
                            <FaRegEnvelope />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Smart Categorization</h3>
                        <p className="mt-2 text-gray-600">
                            Automatically categorize and prioritize your emails for easy access.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="text-gray-700 text-5xl mb-4 transition-transform duration-300 transform hover:translate-y-[-5px]">
                            <FaCheckCircle />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Error Checking</h3>
                        <p className="mt-2 text-gray-600">
                            Identify and correct errors in your emails before sending them out.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="text-gray-700 text-5xl mb-4 transition-transform duration-300 transform hover:translate-y-[-5px]">
                            <FaRocket />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Fast Processing</h3>
                        <p className="mt-2 text-gray-600">
                            Send and manage emails faster with AI assistance at your fingertips.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="text-gray-700 text-5xl mb-4 transition-transform duration-300 transform hover:translate-y-[-5px]">
                            <FaShieldAlt />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Enhanced Security</h3>
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