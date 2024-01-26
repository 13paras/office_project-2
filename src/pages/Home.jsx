import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import AboutUs from '../components/AboutUs'
import Carousel from '../components/Carousel'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <main>
        <Hero />
        <Stats />
        <AboutUs />
        {/* <Carousel /> */}
        <Testimonials />
    </main>
  )
}

export default Home