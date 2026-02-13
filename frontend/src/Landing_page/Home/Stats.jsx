import React from 'react'

function Stats() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-[1140px] mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left - Image */}
                    <div className="md:w-1/2">
                        <img
                            src="https://zerodha.com/static/images/ecosystem.png"
                            alt="Zerodha Ecosystem"
                            className="w-full"
                            onError={(e) => {
                                e.target.src = 'https://zerodha.com/static/images/kite-ecosystem.png'
                            }}
                        />
                    </div>

                    {/* Right - Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                            Trust with confidence
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    <i className="fa-solid fa-users text-[#387ed1] mr-2"></i>
                                    Customer-first always
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    <i className="fa-solid fa-shield-halved text-[#387ed1] mr-2"></i>
                                    No spam or gimmicks
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    <i className="fa-solid fa-globe text-[#387ed1] mr-2"></i>
                                    The Zerodha universe
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    <i className="fa-solid fa-hand-holding-dollar text-[#387ed1] mr-2"></i>
                                    Do better with money
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4 flex-wrap">
                            <a href="/products" className="bg-[#387ed1] hover:bg-[#2f6cb5] text-white font-medium py-2.5 px-6 rounded transition-colors">
                                Explore our products
                            </a>
                            <a href="#" className="border border-[#387ed1] text-[#387ed1] hover:bg-[#387ed1] hover:text-white font-medium py-2.5 px-6 rounded transition-colors">
                                Try Kite demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats