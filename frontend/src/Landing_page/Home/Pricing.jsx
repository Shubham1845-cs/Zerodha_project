import React from 'react'

function Pricing() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-[1140px] mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Unbeatable pricing
                </h2>
                <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                    We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-10">
                    {/* Free account opening */}
                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-[#387ed1] mb-3">₹0</h3>
                        <p className="text-gray-600 text-base">
                            Free account<br />opening
                        </p>
                    </div>

                    {/* Free equity delivery */}
                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-[#387ed1] mb-3">₹0</h3>
                        <p className="text-gray-600 text-base">
                            Free equity delivery<br />and direct mutual funds
                        </p>
                    </div>

                    {/* Intraday and F&O */}
                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-[#387ed1] mb-3">₹20</h3>
                        <p className="text-gray-600 text-base">
                            Intraday and<br />F&O
                        </p>
                    </div>
                </div>

                <a href="#" className="text-[#387ed1] hover:underline text-base font-medium">
                    See pricing →
                </a>
            </div>
        </section>
    )
}

export default Pricing