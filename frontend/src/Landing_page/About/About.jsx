import React from 'react'
import Hero from './Hero'
import Team from './Team'
import OpenAccount from '../../OpenAccount'

function About() {
    return (
        <>
            <Hero />
            <section className="py-16">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2">
                            <img
                                src="https://zerodha.com/static/images/nithin-kamath-background.jpg"
                                alt="Nithin Kamath"
                                className="w-full rounded-lg"
                                onError={(e) => {
                                    e.target.style.display = 'none'
                                }}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Team />
            <OpenAccount />
        </>
    )
}

export default About