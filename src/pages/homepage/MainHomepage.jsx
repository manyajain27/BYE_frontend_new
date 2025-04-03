import React from 'react'
import HomeSection from './HomeSection'
import About from '../about/About'
import ContactUs from '../contact/ContactUs'
import UpcomingTrips from '../trips/UpcomingTrips'
import Footer from '../footer/Footer'
import './MainHomepage.css'


function MainHomepage() {
  return (
    <div>
      <HomeSection />
      <About showNavbar={false} />
      <UpcomingTrips showNavbar={false} />
      <ContactUs showNavbar={false} />
      <Footer />
    </div>
  )
}

export default MainHomepage
