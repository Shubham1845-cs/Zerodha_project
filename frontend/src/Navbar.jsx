import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
            <div className="max-w-[1140px] mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/">
                    <img
                        src="https://zerodha.com/static/images/logo.svg"
                        alt="Zerodha"
                        className="h-[25px]"
                    />
                </Link>

                <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
                    <li><Link to="/signup" className="hover:text-[#387ed1] transition-colors">Signup</Link></li>
                    <li><Link to="/about" className="hover:text-[#387ed1] transition-colors">About</Link></li>
                    <li><Link to="/products" className="hover:text-[#387ed1] transition-colors">Products</Link></li>
                    <li><Link to="/pricing" className="hover:text-[#387ed1] transition-colors">Pricing</Link></li>
                    <li><Link to="/support" className="hover:text-[#387ed1] transition-colors">Support</Link></li>
                    <li>
                        <button className="text-gray-500 hover:text-[#387ed1] transition-colors">
                            <i className="fa-solid fa-bars text-lg"></i>
                        </button>
                    </li>
                </ul>

                {/* Mobile hamburger */}
                <button className="md:hidden text-gray-600">
                    <i className="fa-solid fa-bars text-xl"></i>
                </button>
            </div>
        </nav>
    )
}

export default Navbar