import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            title: "Write Your Draft",
            description: "Start with your email draft in any style. Our AI works seamlessly with everything from quick replies to complex business proposals. Write naturally and let our tool enhance your message.",
            icon: "✍️",
            gradient: "from-rose-100 via-pink-100 to-purple-100",
            hoverGradient: "group-hover:from-rose-200 group-hover:via-pink-200 group-hover:to-purple-200",
            details: ["Smart template detection", "Real-time analysis", "Multi-language support"]
        },
        {
            title: "AI Analysis",
            description: "Watch as our advanced AI analyzes your email in real-time, understanding context, tone, and intent. Get instant feedback on emotional impact, clarity, and professional appropriateness.",
            icon: "🤖",
            gradient: "from-blue-100 via-cyan-100 to-teal-100",
            hoverGradient: "group-hover:from-blue-200 group-hover:via-cyan-200 group-hover:to-teal-200",
            details: ["Tone analysis", "Context understanding", "Cultural sensitivity check"]
        },
        {
            title: "Get Suggestions",
            description: "Receive intelligent suggestions that elevate your writing while maintaining your authentic voice. Choose from multiple refined versions, each perfectly calibrated for your specific audience.",
            icon: "💡",
            gradient: "from-amber-100 via-orange-100 to-yellow-100",
            hoverGradient: "group-hover:from-amber-200 group-hover:via-orange-200 group-hover:to-yellow-200",
            details: ["Alternative phrasings", "Style improvements", "Engagement optimizations"]
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} 
                            className="group relative p-8 rounded-2xl transition-all duration-500
                            hover:transform hover:-translate-y-2
                            bg-white backdrop-blur-lg
                            border border-gray-200 hover:border-gray-300
                            shadow-lg hover:shadow-2xl
                            min-h-[420px] flex flex-col">
                            
                            {/* Animated Background */}
                            <div className={`absolute inset-0 rounded-2xl opacity-40 transition-opacity duration-500
                                bg-gradient-to-br ${step.gradient} ${step.hoverGradient}`} />
                            
                            {/* Content Container */}
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon */}
                                <div className="mb-8 w-16 h-16 
                                    flex items-center justify-center text-3xl
                                    rounded-xl shadow-lg
                                    bg-white border border-gray-200
                                    transform transition-transform duration-500
                                    group-hover:rotate-6 group-hover:scale-110">
                                    {step.icon}
                                </div>

                                {/* Main Content */}
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                                    {step.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    {step.description}
                                </p>

                                {/* Feature List */}
                                <div className="mt-auto">
                                    <ul className="space-y-3">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="flex items-center text-gray-600">
                                                <span className="mr-2 text-blue-500">•</span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Bottom Gradient Line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-2 
                                rounded-b-2xl opacity-0 group-hover:opacity-100 
                                transition-all duration-500
                                bg-gradient-to-r ${step.gradient}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;