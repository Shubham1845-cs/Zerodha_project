import React from 'react'

function Signup() {
    return (
        <section className="pt-28 pb-20">
            <div className="max-w-[500px] mx-auto px-4">
                <h1 className="text-[2rem] font-semibold text-gray-800 mb-2 text-center">
                    Open a free demat account
                </h1>
                <p className="text-gray-500 text-center mb-10">
                    Start investing and trading in just a few minutes
                </p>

                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 outline-none focus:border-[#387ed1] focus:ring-1 focus:ring-[#387ed1] transition-colors"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 outline-none focus:border-[#387ed1] focus:ring-1 focus:ring-[#387ed1] transition-colors"
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-4 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md text-gray-500 text-sm">
                                +91
                            </span>
                            <input
                                type="tel"
                                placeholder="Your 10-digit mobile number"
                                className="flex-1 border border-gray-300 rounded-r-md px-4 py-3 text-gray-700 outline-none focus:border-[#387ed1] focus:ring-1 focus:ring-[#387ed1] transition-colors"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-[#387ed1] hover:bg-[#2f6cb5] text-white font-medium py-3 rounded-md transition-colors text-lg">
                        Sign up now
                    </button>

                    <p className="text-xs text-gray-400 mt-6 text-center leading-relaxed">
                        I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry.
                        Please read the <a href="#" className="text-[#387ed1] hover:underline">Terms and conditions</a>.
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        Or sign up with your <a href="#" className="text-[#387ed1] hover:underline">Digilocker</a> or <a href="#" className="text-[#387ed1] hover:underline">Aadhaar</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Signup