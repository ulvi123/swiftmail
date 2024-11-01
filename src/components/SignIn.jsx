import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="min-h-screen pt-20 pb-16 flex items-center justify-center bg-gradient-to-b from-gray-50/50 to-white">
            <div className="w-full max-w-md">
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl p-8 md:p-10 
                    border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                    transition-all duration-500">
                    
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-8
                        flex items-center justify-center text-3xl
                        bg-white rounded-2xl rotate-12
                        shadow-sm border border-gray-100
                        hover:rotate-0 transition-transform duration-500">
                        ✨
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                        <p className="text-gray-600 mt-2">Sign in to continue crafting perfect emails</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
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
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Password</label>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    Forgot password?
                                </a>
                            </div>
                            <input 
                                type="password"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200
                                    focus:ring-2 focus:ring-black/5 focus:border-gray-300
                                    transition-all duration-300
                                    hover:shadow-[0_2px_10px_rgb(0,0,0,0.06)]"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full py-3 px-6 rounded-xl font-medium text-white
                                bg-black hover:bg-gray-900
                                transition-all duration-300 ease-in-out
                                hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                                active:scale-[0.98]">
                            Sign In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    {/* Social Logins */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center px-4 py-3 rounded-xl
                            border border-gray-200 hover:border-gray-300
                            transition-all duration-300
                            hover:shadow-[0_2px_10px_rgb(0,0,0,0.06)]">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" 
                                alt="Google" className="w-5 h-5 mr-2" />
                            <span className="text-sm font-medium text-gray-700">Google</span>
                        </button>
                        <button className="flex items-center justify-center px-4 py-3 rounded-xl
                            border border-gray-200 hover:border-gray-300
                            transition-all duration-300
                            hover:shadow-[0_2px_10px_rgb(0,0,0,0.06)]">
                            <img src="https://www.svgrepo.com/show/475647/github-color.svg" 
                                alt="GitHub" className="w-5 h-5 mr-2" />
                            <span className="text-sm font-medium text-gray-700">GitHub</span>
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="mt-8 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/signup" 
                            className="font-medium text-black hover:text-gray-900 
                                transition-colors duration-300">
                            Sign up now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn; 