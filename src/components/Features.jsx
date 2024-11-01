import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Smart Tone Detection",
            description: "Our AI automatically analyzes and adjusts your email's tone to perfectly match your intended audience, whether professional, casual, or formal.",
            icon: "🎯",
            gradient: "from-rose-100 via-pink-100 to-purple-100",
            hoverGradient: "group-hover:from-rose-200 group-hover:via-pink-200 group-hover:to-purple-200"
        },
        {
            title: "Real-time Suggestions",
            description: "Get instant recommendations for better word choices, clearer sentences, and more impactful messaging as you type.",
            icon: "⚡",
            gradient: "from-blue-100 via-cyan-100 to-teal-100",
            hoverGradient: "group-hover:from-blue-200 group-hover:via-cyan-200 group-hover:to-teal-200"
        },
        {
            title: "Grammar & Style Check",
            description: "Advanced AI ensures perfect grammar while maintaining your unique writing style and enhancing your message's clarity.",
            icon: "✨",
            gradient: "from-amber-100 via-orange-100 to-yellow-100",
            hoverGradient: "group-hover:from-amber-200 group-hover:via-orange-200 group-hover:to-yellow-200"
        },
        {
            title: "Multiple Variations",
            description: "Generate multiple versions of your email with different tones and styles, helping you choose the perfect message.",
            icon: "🎨",
            gradient: "from-emerald-100 via-green-100 to-lime-100",
            hoverGradient: "group-hover:from-emerald-200 group-hover:via-green-200 group-hover:to-lime-200"
        }
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Powerful Features for Perfect Emails
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} 
                            className="group relative p-8 rounded-2xl transition-all duration-500
                            hover:transform hover:-translate-y-2 
                            bg-white backdrop-blur-lg
                            border border-gray-200 hover:border-gray-300
                            shadow-lg hover:shadow-2xl
                            min-h-[320px] flex flex-col">
                            
                            {/* Animated Background Gradient */}
                            <div className={`absolute inset-0 rounded-2xl opacity-40 transition-opacity duration-500
                                bg-gradient-to-br ${feature.gradient} ${feature.hoverGradient}`} />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="mb-8 w-16 h-16 
                                    flex items-center justify-center text-3xl
                                    rounded-xl shadow-lg
                                    bg-white border border-gray-200
                                    transform transition-transform duration-500
                                    group-hover:rotate-6 group-hover:scale-110">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Bottom Gradient Line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-2 
                                rounded-b-2xl opacity-0 group-hover:opacity-100 
                                transition-all duration-500
                                bg-gradient-to-r ${feature.gradient}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;