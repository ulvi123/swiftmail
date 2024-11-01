import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks'; // Import the How It Works component
import About from './components/About';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import CallToAction from './components/CallToAction';
import DetailedHowItworks from './components/DetailedHowItWorks';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';


const App = () => {
    return (
      <CssBaseline>
        <Router>
            <div className="flex flex-col min-h-screen bg-[#d1e7ff] text-gray-800"> {/* Background color */}
                <Navbar />
                <Header />
                <main className="flex-grow container mx-auto px-4"> {/* Main content area */}
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Features />
                                <HowItWorks /> {/* Add How It Works section here */}
                            </>
                        } />
                        <Route path="/how-it-works" element={<DetailedHowItworks />} />
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
        </CssBaseline>

    );
};

export default App;