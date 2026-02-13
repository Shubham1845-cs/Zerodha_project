import React from 'react'

function Education() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-[1140px] mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-10">
                    Free and open market education
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Varsity */}
                    <div className="md:w-1/2 text-left">
                        <img
                            src="https://zerodha.com/static/images/varsity-app.png"
                            alt="Varsity"
                            className="w-full max-w-[400px] mx-auto mb-6"
                            onError={(e) => {
                                e.target.src = 'https://zerodha.com/static/images/products-varsity.png'
                            }}
                        />
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </p>
                        <a href="#" className="text-[#387ed1] hover:underline font-medium">
                            Varsity →
                        </a>
                    </div>

                    {/* TradingQ&A */}
                    <div className="md:w-1/2 text-left">
                        <img
                            src="https://zerodha.com/static/images/trading-qa.png"
                            alt="TradingQ&A"
                            className="w-full max-w-[400px] mx-auto mb-6"
                            onError={(e) => {
                                e.target.src = 'https://zerodha.com/static/images/varsity-app.png'
                            }}
                        />
                        <p className="text-gray-600 leading-relaxed mb-4">
                            TradingQ&A, the most active trading and investment community in India for all your market related queries.
                        </p>
                        <a href="#" className="text-[#387ed1] hover:underline font-medium">
                            TradingQ&A →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
