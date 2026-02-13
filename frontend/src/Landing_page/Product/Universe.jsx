import React from 'react'

function Universe() {
    const partners = [
        {
            name: 'Zerodha Fund House',
            desc: 'Our asset management venture that is creating simple and transparent index funds to help you save for your goals.',
            logo: 'https://zerodha.com/static/images/fundhouse-logo.svg',
            url: 'https://www.zerodhafundhouse.com/'
        },
        {
            name: 'Streak',
            desc: 'Systematic trading platform that allows you to create and backtest strategies without coding.',
            logo: 'https://zerodha.com/static/images/streak-logo.png',
            url: 'https://streak.tech'
        },
        {
            name: 'Sensibull',
            desc: 'Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.',
            logo: 'https://zerodha.com/static/images/sensibull-logo.svg',
            url: 'https://sensibull.com'
        },
        {
            name: 'Smallcase',
            desc: 'Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.',
            logo: 'https://zerodha.com/static/images/smallcase-logo.svg',
            url: 'https://smallcase.zerodha.com'
        },
        {
            name: 'Tijori',
            desc: 'Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.',
            logo: 'https://zerodha.com/static/images/tijori-logo.svg',
            url: 'https://www.tijorifinance.com/'
        },
        {
            name: 'Ditto',
            desc: 'Personalized advice on life and health insurance. No spam and no mis-selling.',
            logo: 'https://zerodha.com/static/images/ditto-logo.svg',
            url: 'https://joinditto.in/'
        }
    ]

    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-[1140px] mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">The Zerodha Universe</h2>
                <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                    Extend your trading and investment experience even further with our partner platforms
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partners.map((partner, index) => (
                        <a
                            key={index}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-left"
                        >
                            <div className="h-8 mb-6">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-full"
                                    onError={(e) => {
                                        e.target.parentElement.innerHTML = `<span class="text-xl font-bold text-gray-700">${partner.name}</span>`
                                    }}
                                />
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{partner.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Universe