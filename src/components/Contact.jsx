import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50/50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium
                        bg-gradient-to-r from-gray-50 to-gray-100 
                        border border-gray-200 rounded-full">
                        Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                        bg-clip-text text-transparent">
                        We'd Love to Hear From You
                    </h1>
                    <p className="text-xl text-gray-600">
                        Have questions about our AI email assistant? We're here to help.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div className="group relative p-8 rounded-2xl
                        bg-white backdrop-blur-lg
                        border border-gray-100
                        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                        hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                        transition-all duration-500">
                        
                        {/* Card Background */}
                        <div className="absolute inset-0 rounded-2xl opacity-40 transition-opacity duration-500
                            bg-gradient-to-br from-gray-100 via-white to-gray-50
                            group-hover:from-gray-200 group-hover:via-gray-100 group-hover:to-gray-50" />
                        
                        {/* Form Content */}
                        <div className="relative z-10 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <input 
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200
                                            focus:ring-2 focus:ring-black/5 focus:border-gray-300
                                            transition-all duration-300
                                            hover:shadow-[0_2px_10px_rgb(0,0,0,0.06)]"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input 
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200
                                            focus:ring-2 focus:ring-black/5 focus:border-gray-300
                                            transition-all duration-300
                                            hover:shadow-[0_2px_10px_rgb(0,0,0,0.06)]"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <input 
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200
                                        focus:ring-2 focus:ring-black/5 focus:border-gray-300
                                        transition-all duration-300
                                        hover:shadow-[0_2px_10px_rgb(0,0,0,0.06)]"
                                    placeholder="you@example.com"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200
                                        focus:ring-2 focus:ring-black/5 focus:border-gray-300
                                        transition-all duration-300
                                        hover:shadow-[0_2px_10px_rgb(0,0,0,0.06)]
                                        h-32 resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            
                            <button className="w-full py-3 px-6 rounded-xl font-medium text-white
                                bg-black hover:bg-gray-900
                                transition-all duration-300 ease-in-out
                                hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                                active:scale-[0.98]">
                                Send Message
                            </button>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {[
                            {
                                title: "Email Us",
                                content: "support@aiemail.com",
                                icon: "✉️",
                                gradient: "from-gray-100 to-gray-50",
                                hoverGradient: "group-hover:from-gray-200 group-hover:to-gray-100"
                            },
                            {
                                title: "Call Us",
                                content: "+1 (555) 123-4567",
                                icon: "📞",
                                gradient: "from-gray-50 to-white",
                                hoverGradient: "group-hover:from-gray-100 group-hover:to-gray-50"
                            },
                            {
                                title: "Visit Us",
                                content: "123 AI Street, Tech Valley, CA 94025",
                                icon: "📍",
                                gradient: "from-white to-gray-50",
                                hoverGradient: "group-hover:from-gray-50 group-hover:to-white"
                            }
                        ].map((item, index) => (
                            <div key={index} 
                                className="group relative p-6 rounded-xl
                                    bg-white backdrop-blur-lg
                                    border border-gray-100
                                    shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                                    transition-all duration-500">
                                
                                {/* Card Background */}
                                <div className={`absolute inset-0 rounded-xl opacity-40 transition-opacity duration-500
                                    bg-gradient-to-br ${item.gradient} ${item.hoverGradient}`} />
                                
                                {/* Content */}
                                <div className="relative z-10 flex items-center">
                                    <div className="w-12 h-12 
                                        flex items-center justify-center text-2xl
                                        bg-white rounded-lg shadow-sm border border-gray-100
                                        group-hover:scale-110 group-hover:rotate-6
                                        transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;