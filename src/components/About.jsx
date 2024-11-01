import React from 'react';

const About = () => {
    const stats = [
        { number: "50K+", label: "Active Users" },
        { number: "1M+", label: "Emails Improved" },
        { number: "98%", label: "Satisfaction Rate" },
        { number: "24/7", label: "AI Support" }
    ];

    const values = [
        {
            title: "Innovation First",
            description: "We're constantly pushing the boundaries of AI technology to improve email communication.",
            icon: "💡",
            gradient: "from-blue-100 via-indigo-100 to-purple-100",
            hoverGradient: "group-hover:from-blue-200 group-hover:via-indigo-200 group-hover:to-purple-200"
        },
        {
            title: "User Privacy",
            description: "Your data security and privacy are our top priorities, with enterprise-grade encryption.",
            icon: "🛡️",
            gradient: "from-rose-100 via-pink-100 to-purple-100",
            hoverGradient: "group-hover:from-rose-200 group-hover:via-pink-200 group-hover:to-purple-200"
        },
        {
            title: "Global Impact",
            description: "We're helping professionals worldwide communicate more effectively and confidently.",
            icon: "🌍",
            gradient: "from-amber-100 via-orange-100 to-rose-100",
            hoverGradient: "group-hover:from-amber-200 group-hover:via-orange-200 group-hover:to-rose-200"
        }
    ];

    const team = [
        {
            name: "Sarah Johnson",
            role: "CEO & Co-founder",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
        },
        {
            name: "Michael Chen",
            role: "CTO & Co-founder",
            image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
        },
        {
            name: "Emma Davis",
            role: "Head of AI",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-16">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-8
                            bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                            bg-clip-text text-transparent">
                            Transforming Email Communication
                            <br />
                            Through AI Innovation
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                            We're on a mission to help professionals worldwide communicate more effectively,
                            build stronger relationships, and achieve better results through their emails.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-6 bg-white rounded-xl border border-gray-100
                                    shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                                    transition-all duration-300">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 
                                        bg-clip-text text-transparent">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Founded in 2023, AI Email emerged from a simple observation: professionals spend 
                            too much time crafting and perfecting their emails. We believed AI could help 
                            make this process more efficient while improving communication quality.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Today, we're proud to serve thousands of professionals worldwide, helping them 
                            communicate more effectively and confidently through our AI-powered platform.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                alt="Team collaboration" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Values Section */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="group relative p-8 rounded-2xl
                                bg-white backdrop-blur-lg
                                border border-gray-100
                                shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                                hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                                transition-all duration-500">
                                
                                {/* Card Background */}
                                <div className={`absolute inset-0 rounded-2xl opacity-40 transition-opacity duration-500
                                    bg-gradient-to-br ${value.gradient} ${value.hoverGradient}`} />
                                
                                <div className="relative z-10">
                                    <div className="w-16 h-16 mb-6
                                        flex items-center justify-center text-3xl
                                        bg-white rounded-xl
                                        shadow-sm border border-gray-100
                                        group-hover:scale-110 group-hover:rotate-6
                                        transition-transform duration-500">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group relative">
                            <div className="relative rounded-2xl overflow-hidden
                                shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                                hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                                transition-all duration-500">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full aspect-square object-cover
                                        group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-white/80">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;