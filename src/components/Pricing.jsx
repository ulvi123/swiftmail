import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: "Free",
            price: "7.99",
            decimal: "",
            description: "Perfect for trying out our services",
            gradient: "from-blue-100 via-cyan-100 to-teal-100",
            hoverGradient: "group-hover:from-blue-200 group-hover:via-cyan-200 group-hover:to-teal-200",
            icon: "🚀",
            features: [
                "Up to 50 emails per month",
                "Basic tone detection",
                "Grammar checking",
                "Standard templates"
            ],
            popular: false
        },
        {
            name: "Pro",
            price: "29",
            decimal: "99",
            description: "Ideal for professionals and small teams",
            gradient: "from-rose-100 via-pink-100 to-purple-100",
            hoverGradient: "group-hover:from-rose-200 group-hover:via-pink-200 group-hover:to-purple-200",
            icon: "⭐",
            features: [
                "Unlimited emails",
                "Advanced tone optimization",
                "Multiple language support",
                "Custom templates",
                "Priority support",
                "Team collaboration",
                "Analytics dashboard"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: "98",
            decimal: "99",
            description: "For organizations requiring maximum power",
            gradient: "from-amber-100 via-orange-100 to-yellow-100",
            hoverGradient: "group-hover:from-amber-200 group-hover:via-orange-200 group-hover:to-yellow-200",
            icon: "🏢",
            features: [
                "Everything in Pro",
                "Custom API access",
                "Dedicated account manager",
                "Custom AI training",
                "Advanced analytics",
                "SLA guarantee",
                "White-label option"
            ],
            popular: false
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-6">Simple, Transparent Pricing</h2>
                <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                    Choose the perfect plan for your needs. All plans include our core features with varying levels of capabilities.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {plans.map((plan, index) => (
                        <div key={index} 
                            className={`group relative p-8 rounded-2xl transition-all duration-500
                            hover:transform hover:-translate-y-2
                            bg-white backdrop-blur-lg
                            border border-gray-200 hover:border-gray-300
                            ${plan.popular ? 'shadow-xl scale-105' : 'shadow-lg'}
                            hover:shadow-2xl
                            flex flex-col`}>
                            
                            {/* Animated Background */}
                            <div className={`absolute inset-0 rounded-2xl opacity-40 transition-opacity duration-500
                                bg-gradient-to-br ${plan.gradient} ${plan.hoverGradient}`} />
                            
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2
                                    bg-gradient-to-r from-pink-500 to-purple-500 text-white
                                    px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon & Title */}
                                <div className="mb-8 w-16 h-16 
                                    flex items-center justify-center text-3xl
                                    rounded-xl shadow-lg
                                    bg-white border border-gray-200
                                    transform transition-transform duration-500
                                    group-hover:rotate-6 group-hover:scale-110">
                                    {plan.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-5xl font-bold">${plan.price}</span>
                                    {plan.decimal && (
                                        <span className="text-3xl font-bold">.{plan.decimal}</span>
                                    )}
                                    <span className="text-gray-600 ml-2">/month</span>
                                </div>
                                <p className="text-gray-600 mb-8">{plan.description}</p>

                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-600">
                                            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300
                                    transform hover:-translate-y-0.5 hover:shadow-lg
                                    ${plan.popular 
                                        ? 'bg-black text-white hover:bg-gray-800' 
                                        : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-300'}`}>
                                    Get Started
                                </button>
                            </div>

                            {/* Bottom Gradient Line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-2 
                                rounded-b-2xl opacity-0 group-hover:opacity-100 
                                transition-all duration-500
                                bg-gradient-to-r ${plan.gradient}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;