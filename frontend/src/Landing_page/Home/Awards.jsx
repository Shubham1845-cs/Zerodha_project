import React from 'react'

function Awards() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-[1140px] mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left - Image */}
                    <div className="md:w-1/2">
                        <img
                            src="https://zerodha.com/static/images/press-logos.png"
                            alt="Press & Media"
                            className="w-full"
                        />
                    </div>

                    {/* Right - Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                            #1 trusted brand
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Zerodha has been featured in some of the biggest publications in India for pioneering discount broking.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We have won multiple awards including 'Fintech Startup of the Year' for revolutionizing the Indian stock broking landscape.
                        </p>
                        <a href="#" className="text-[#387ed1] hover:underline font-medium">
                            Learn more →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awards