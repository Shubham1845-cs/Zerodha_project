import React from 'react'

function Hero() {
    return (
        <section className="pt-28 pb-10">
            <div className="max-w-[1140px] mx-auto px-4 text-center">
                <h1 className="text-[2.5rem] font-semibold text-gray-800 mb-4 leading-tight">
                    Support Portal
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Search for an answer or browse help topics to create a ticket
                </p>
                <div className="max-w-xl mx-auto">
                    <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                        <span className="pl-4 text-gray-400">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input
                            type="text"
                            placeholder="E.g., How do I open an account?"
                            className="flex-1 px-4 py-3 text-gray-700 outline-none bg-transparent"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero