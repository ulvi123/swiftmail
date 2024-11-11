{/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
    <Link to="/signup" className="group relative px-8 py-4 rounded-xl text-white overflow-hidden transition-all duration-300">
        {/* Button gradient background */}
        <div className="absolute inset-0 bg-black transition-transform duration-300 group-hover:scale-[1.04]"></div>
        <span className="relative z-10 flex items-center justify-center text-lg font-medium">
            Start Writing Better Emails
            <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </span>
    </Link>

    <WaitlistButton />

    <Link to="/how-it-works" className="group px-8 py-4 rounded-xl text-lg font-medium text-gray-600 hover:text-gray-900 bg-white border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        See How It Works
    </Link>
</div>