import React from 'react'

function Hero() {
    return (
        <section className="pt-28 pb-10">
            <div className="max-w-[1140px] mx-auto px-4 text-center">
                <img
                    src="https://zerodha.com/static/images/landing.png"
                    alt="Zerodha Landing"
                    className="w-full max-w-[700px] mx-auto mb-16"
                    onError={(e) => {
                        e.target.src = 'https://zerodha.com/static/images/kite-app.png'
                    }}
                />
                <h1 className="text-[2.75rem] font-semibold text-gray-800 mb-4 leading-tight">
                    Invest in everything
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <a
                    href="/signup"
                    className="inline-block bg-[#387ed1] hover:bg-[#2f6cb5] text-white text-lg font-medium py-3 px-8 rounded transition-colors"
                >
                    Sign up for free
                </a>
            </div>
        </section>
    )
}

export default Hero