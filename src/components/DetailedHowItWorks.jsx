import React from 'react';

const DetailedHowItWorks = () => {
    const steps = [
        {
            title: "Sign Up in Seconds",
            description: "Get started with a simple, secure signup process that takes less than a minute.",
            icon: "✨",
            gradient: "from-blue-100 via-indigo-100 to-purple-100",
            hoverGradient: "group-hover:from-blue-200 group-hover:via-indigo-200 group-hover:to-purple-200",
            details: [
                "No credit card required",
                "Instant account activation",
                "Secure authentication"
            ],
          
        },
        {
            title: "Connect Your Email",
            description: "Integrate your email accounts with our secure platform in just a few clicks.",
            icon: "🔗",
            gradient: "from-rose-100 via-pink-100 to-purple-100",
            hoverGradient: "group-hover:from-rose-200 group-hover:via-pink-200 group-hover:to-purple-200",
            details: [
                "Gmail & Outlook support",
                "End-to-end encryption",
                "Quick email sync"
            ],
            
        },
        {
            title: "Start Writing Better",
            description: "Let our AI help you craft perfect emails that get the results you want.",
            icon: "🚀",
            gradient: "from-amber-100 via-orange-100 to-rose-100",
            hoverGradient: "group-hover:from-amber-200 group-hover:via-orange-200 group-hover:to-rose-200",
            details: [
                "Real-time suggestions",
                "Tone adjustment",
                "Grammar checking"
            ],
            
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
            {/* Header Section */}
            <div className="text-center max-w-4xl mx-auto px-6 mb-16">
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium
                    bg-gradient-to-r from-gray-50 to-gray-100 
                    border border-gray-200 rounded-full">
                    Three Simple Steps
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6
                    bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                    bg-clip-text text-transparent">
                    How It Works
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Get started instantly and transform your email communication with AI-powered assistance.
                </p>
            </div>

            {/* Progress Line */}
            <div className="hidden md:block max-w-6xl mx-auto px-6 relative mb-12">
                <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>
                <div className="absolute top-1/2 left-[10%] right-[70%] h-0.5 bg-black"></div>
            </div>

            {/* Steps Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Step Number & Status */}
                            <div className="absolute -left-4 -top-4 flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-full bg-black text-white
                                    flex items-center justify-center text-sm font-medium z-10">
                                    {index + 1}
                                </div>
                              
                            </div>

                            {/* Card */}
                            <div className="group relative p-8 rounded-2xl
                                bg-white backdrop-blur-lg
                                border border-gray-100
                                shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                                hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                                transition-all duration-500
                                h-full">
                                
                                {/* Card Background */}
                                <div className={`absolute inset-0 rounded-2xl opacity-40 transition-opacity duration-500
                                    bg-gradient-to-br ${step.gradient} ${step.hoverGradient}`} />
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-16 h-16 mb-6
                                        flex items-center justify-center text-3xl
                                        bg-white rounded-xl
                                        shadow-sm border border-gray-100
                                        group-hover:scale-110 group-hover:rotate-6
                                        transition-transform duration-500">
                                        {step.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {step.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Feature List */}
                                    <ul className="space-y-3">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="flex items-center text-gray-600 bg-gray-50 
                                                p-2 rounded-lg group-hover:bg-white/80 transition-colors duration-300">
                                                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" 
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                                        strokeWidth={2} d="M5 13l4 4L19 7"/>
                                                </svg>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <button className="group px-8 py-3.5 rounded-xl font-medium text-white
                        bg-black hover:bg-gray-900
                        transition-all duration-300 ease-in-out
                        hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                        active:scale-[0.98]">
                        <span className="flex items-center justify-center">
                            Get Started Now
                            <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 
                                group-hover:translate-x-0.5" 
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailedHowItWorks;