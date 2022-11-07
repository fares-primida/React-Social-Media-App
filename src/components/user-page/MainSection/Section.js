import React from 'react'
import Aside from './Aside/Aside'
import Navbar from '../../user-page/Navbar/Navbar'

const Section = () => {
    return (
        <div className='main-section'>
            <Navbar />
            <section className='main-section'>
            <Aside />
            </section>
        </div>
    )
}

export default Section