import React from 'react'

function RightSection() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-[1140px] mx-auto px-4">
                {/* Kite Connect API */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
                    <div className="md:w-7/12">
                        <img
                            src="https://zerodha.com/static/images/products-kiteconnect.png"
                            alt="Kite Connect API"
                            className="w-full"
                        />
                    </div>
                    <div className="md:w-5/12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Kite Connect API</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
                        </p>
                        <a href="#" className="text-[#387ed1] hover:underline font-medium">Kite Connect →</a>
                    </div>
                </div>

                {/* Varsity mobile */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-7/12">
                        <img
                            src="https://zerodha.com/static/images/products-varsity.png"
                            alt="Varsity"
                            className="w-full"
                        />
                    </div>
                    <div className="md:w-5/12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Varsity mobile</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Want to know more about our technology stack? Check out the{' '}
                            <a href="https://zerodha.tech/" className="text-[#387ed1] hover:underline">Zerodha.tech</a> blog.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RightSection