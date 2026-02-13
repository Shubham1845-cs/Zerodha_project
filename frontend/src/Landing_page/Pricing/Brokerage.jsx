import React from 'react'

function Brokerage() {
    return (
        <section className="py-16">
            <div className="max-w-[1140px] mx-auto px-4">
                {/* Three pricing cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Card 1 */}
                    <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full">
                            <i className="fa-solid fa-receipt text-3xl text-[#387ed1]"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Free equity delivery</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full">
                            <i className="fa-solid fa-chart-line text-3xl text-[#387ed1]"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Intraday and F&O trades</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full">
                            <i className="fa-solid fa-coins text-3xl text-[#387ed1]"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Free direct MF</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                        </p>
                    </div>
                </div>

                {/* Charges Table */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Charges breakdown</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 border-b border-gray-200"></th>
                                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 border-b border-gray-200">Equity</th>
                                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 border-b border-gray-200">Currency</th>
                                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 border-b border-gray-200">Commodity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <td className="py-4 px-6 text-sm text-gray-700 font-medium">Brokerage</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">₹0 for delivery. Flat ₹20 per trade for intraday</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">Flat ₹20 per trade</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">Flat ₹20 per trade</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-4 px-6 text-sm text-gray-700 font-medium">STT/CTT</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">0.1% on buy & sell (delivery)</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">No STT</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">0.01% on sell side</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-4 px-6 text-sm text-gray-700 font-medium">Transaction charges</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">NSE: 0.00297%, BSE: 0.00375%</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">NSE: 0.0009%</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">MCX: 0.0026%</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-4 px-6 text-sm text-gray-700 font-medium">GST</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">18%</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">18%</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-4 px-6 text-sm text-gray-700 font-medium">SEBI charges</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">₹10 / crore</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">₹10 / crore</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">₹10 / crore</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 text-sm text-gray-700 font-medium">Stamp charges</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">0.015% or 0.003% on buy side</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">0.0001% on buy side</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">0.002% on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="text-center">
                    <a href="#" className="text-[#387ed1] hover:underline font-medium">
                        Calculate your costs upfront →
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Brokerage