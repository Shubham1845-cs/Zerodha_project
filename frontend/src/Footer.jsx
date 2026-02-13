import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-10">
            <div className="max-w-[1140px] mx-auto px-4">
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Zerodha branding */}
                    <div>
                        <img
                            src="https://zerodha.com/static/images/logo.svg"
                            alt="Zerodha"
                            className="h-[20px] mb-6"
                        />
                        <p className="text-gray-500 text-sm leading-relaxed">
                            © 2010 - 2026, Zerodha Broking Ltd.<br />All rights reserved.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-gray-800 font-semibold text-sm mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/about" className="hover:text-[#387ed1] transition-colors">About</Link></li>
                            <li><Link to="/products" className="hover:text-[#387ed1] transition-colors">Products</Link></li>
                            <li><Link to="/pricing" className="hover:text-[#387ed1] transition-colors">Pricing</Link></li>
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">Referral programme</a></li>
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">Zerodha.tech</a></li>
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">Press & media</a></li>
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">Zerodha Cares (CSR)</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-gray-800 font-semibold text-sm mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">Contact us</a></li>
                            <li><Link to="/support" className="hover:text-[#387ed1] transition-colors">Support portal</Link></li>
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">Z-Connect blog</a></li>
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">List of charges</a></li>
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">Downloads & resources</a></li>
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">Videos</a></li>
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">Market overview</a></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h4 className="text-gray-800 font-semibold text-sm mb-4">Account</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/signup" className="hover:text-[#387ed1] transition-colors">Open an account</Link></li>
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">Fund transfer</a></li>
                            <li><a href="#" className="hover:text-[#387ed1] transition-colors">60 day challenge</a></li>
                        </ul>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="border-t border-gray-200 pt-8">
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                        Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                        Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                        <a href="https://nseindia.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#387ed1] transition-colors">NSE</a>
                        <a href="https://www.bseindia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#387ed1] transition-colors">BSE</a>
                        <a href="https://www.mcxindia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#387ed1] transition-colors">MCX</a>
                        <span>|</span>
                        <a href="#" className="hover:text-[#387ed1] transition-colors">Terms & conditions</a>
                        <a href="#" className="hover:text-[#387ed1] transition-colors">Policies & procedures</a>
                        <a href="#" className="hover:text-[#387ed1] transition-colors">Privacy policy</a>
                        <a href="#" className="hover:text-[#387ed1] transition-colors">Disclosure</a>
                        <a href="#" className="hover:text-[#387ed1] transition-colors">Investor charter</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer