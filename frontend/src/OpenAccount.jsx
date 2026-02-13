import React from 'react'

function OpenAccount() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-[1140px] mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Open a Zerodha account
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
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

export default OpenAccount