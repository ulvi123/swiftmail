// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} AI Email Manager. All rights reserved.</p>
                <p>Follow us on social media!</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="hover:text-gray-400">Facebook</a>
                    <a href="#" className="hover:text-gray-400">Twitter</a>
                    <a href="#" className="hover:text-gray-400">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;