import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
                        🚀
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Create Your Account</h2>
                        <p className="text-gray-600 mt-2">Start crafting perfect emails with AI</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
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
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <input 
                                type="password"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200
                                    focus:ring-2 focus:ring-black/5 focus:border-gray-300
                                    transition-all duration-300
                                    hover:shadow-[0_2px_10px_rgb(0,0,0,0.06)]"
                                placeholder="Create a strong password"
                            />
                        </div>

                        <div className="flex items-center">
                            <input 
                                type="checkbox"
                                id="terms"
                                className="w-4 h-4 rounded border-gray-300 text-black 
                                    focus:ring-black/5 transition-colors duration-300"
                            />
                            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                                I agree to the{' '}
                                <a href="#" className="text-black hover:text-gray-900 transition-colors duration-300">
                                    Terms of Service
                                </a>
                                {' '}and{' '}
                                <a href="#" className="text-black hover:text-gray-900 transition-colors duration-300">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        <button 
                            type="submit"
                            className="w-full py-3 px-6 rounded-xl font-medium text-white
                                bg-black hover:bg-gray-900
                                transition-all duration-300 ease-in-out
                                hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                                active:scale-[0.98]">
                            Create Account
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

                    {/* Sign In Link */}
                    <p className="mt-8 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/signin" 
                            className="font-medium text-black hover:text-gray-900 
                                transition-colors duration-300">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp; 