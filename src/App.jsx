import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import CallToAction from './components/CallToAction';
import DetailedHowItWorks from './components/DetailedHowItWorks';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const Home = () => (
  <>
    <Header />
    <Features />
    <HowItWorks />
    <Pricing />
    <CallToAction />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Home page with all sections */}
            <Route path="/" element={<Home />} />
            
            {/* Individual pages */}
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<DetailedHowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Auth routes */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;