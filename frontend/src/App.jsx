import { useState } from 'react'
import './App.css'

function App() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 transform transition hover:scale-105">
                <h1 className="text-4xl font-extrabold text-blue-600 mb-4 text-center">
                    Zerodha Clone
                </h1>
                <p className="text-gray-600 text-lg text-center mb-6">
                    Initializing the next generation trading platform.
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors">
                        Frontend Ready
                    </button>
                    <div className="bg-green-100 text-green-700 font-semibold py-2 px-6 rounded-lg">
                        v1.0.0
                    </div>
                </div>
            </div>
            <footer className="mt-8 text-gray-400 text-sm">
                Built with React + Tailwind CSS v4
            </footer>
        </div>
    )
}

export default App
