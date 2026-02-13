import React from 'react'

function LeftSection() {
    return (
        <section className="py-16">
            <div className="max-w-[1140px] mx-auto px-4">
                {/* Kite */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="md:w-7/12">
                        <img
                            src="https://zerodha.com/static/images/products-kite.png"
                            alt="Kite"
                            className="w-full"
                        />
                    </div>
                    <div className="md:w-5/12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Kite</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-[#387ed1] hover:underline font-medium">Try demo →</a>
                            <a href="#" className="text-[#387ed1] hover:underline font-medium">Learn more →</a>
                        </div>
                    </div>
                </div>

                {/* Console */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
                    <div className="md:w-7/12">
                        <img
                            src="https://zerodha.com/static/images/products-console.png"
                            alt="Console"
                            className="w-full"
                        />
                    </div>
                    <div className="md:w-5/12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Console</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.
                        </p>
                        <a href="#" className="text-[#387ed1] hover:underline font-medium">Learn more →</a>
                    </div>
                </div>

                {/* Coin */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-7/12">
                        <img
                            src="https://zerodha.com/static/images/products-coin.png"
                            alt="Coin"
                            className="w-full"
                        />
                    </div>
                    <div className="md:w-5/12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Coin</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
                        </p>
                        <a href="#" className="text-[#387ed1] hover:underline font-medium">Coin →</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeftSection