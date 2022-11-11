import React from 'react'
import Aside from './Aside/Aside'
import Navbar from '../../user-page/Navbar/Navbar'
import ContentSection from '../ContentSection/ContentSection'

const Section = () => {
    return (
        <div className='main-section'>
            <Navbar />
            <section className='main-section'>
            <Aside />
            <ContentSection />
            </section>
        </div>
    )
}

export default Section