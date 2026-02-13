import React from 'react'

function Hero() {
    return (
        <section className="pt-28 pb-10">
            <div className="max-w-[1140px] mx-auto px-4 text-center">
                <h1 className="text-[2.5rem] font-semibold text-gray-800 mb-4 leading-tight">
                    Zerodha Products
                </h1>
                <p className="text-xl text-gray-600">
                    Sleek, modern, and intuitive trading platforms
                </p>
                <p className="mt-4">
                    <a href="#" className="text-[#387ed1] hover:underline font-medium">
                        Check out our investment offerings →
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Hero