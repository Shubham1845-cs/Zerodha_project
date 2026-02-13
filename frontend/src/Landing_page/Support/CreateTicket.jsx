import React from 'react'

function CreateTicket() {
    const categories = [
        {
            title: 'Account Opening',
            icon: 'fa-user-plus',
            items: ['Resident individual', 'Minor', 'Non Resident Indian (NRI)', 'Company, Partnership, HUF and LLP']
        },
        {
            title: 'Your Zerodha Account',
            icon: 'fa-user',
            items: ['Your Profile', 'Account modification', 'Client Master Report (CMR)', 'Nomination', 'Transfer of securities']
        },
        {
            title: 'Kite',
            icon: 'fa-chart-simple',
            items: ['IPO', 'Trading FAQs', 'Margin Trading Facility (MTF)', 'Charts and orders', 'Alerts and Nudges']
        },
        {
            title: 'Funds',
            icon: 'fa-wallet',
            items: ['Add money', 'Withdraw money', 'Add bank accounts', 'eMandates']
        },
        {
            title: 'Console',
            icon: 'fa-desktop',
            items: ['Portfolio', 'Reports', 'Corporate actions', 'Referral program']
        },
        {
            title: 'Coin',
            icon: 'fa-coins',
            items: ['Understanding mutual funds', 'Coin app', 'Transactions and reports', 'National Pension System (NPS)']
        }
    ]

    return (
        <section className="py-16">
            <div className="max-w-[1140px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                                    <i className={`fa-solid ${category.icon} text-[#387ed1]`}></i>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.items.map((item, i) => (
                                    <li key={i}>
                                        <a href="#" className="text-sm text-gray-600 hover:text-[#387ed1] transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center bg-gray-50 rounded-lg p-10 border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Can't find what you're looking for?</h2>
                    <p className="text-gray-600 mb-6">Create a support ticket and we'll get back to you.</p>
                    <a href="#" className="inline-block bg-[#387ed1] hover:bg-[#2f6cb5] text-white font-medium py-3 px-8 rounded transition-colors">
                        Create a ticket
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CreateTicket