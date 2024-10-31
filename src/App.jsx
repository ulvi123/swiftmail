// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-[#d1e7ff] text-gray-800"> {/* Background color */}
                <Navbar />
                <Header />
                <main className="flex-grow container mx-auto px-4"> {/* Main content area */}
                    <Routes>
                        <Route path="/" element={<Features />} />
                        <Route path="/how-it-works" element={<HowItWorks />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <CallToAction />
                <Footer />
            </div>
        </Router>
    );
};

export default App;