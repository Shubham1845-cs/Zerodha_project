import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import OpenAccount from '../../OpenAccount'
import Education from './Education'
import Awards from './Awards'
import Pricing from './Pricing'

function HomePage() {
    return (
        <>
            <Hero />
            <Stats />
            <Education />
            <Awards />
            <Pricing />
            <OpenAccount />
        </>
    )
}

export default HomePage