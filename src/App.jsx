import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHomepage from './pages/homepage/MainHomepage';
import FAQs from './pages/FAQs/FAQs';
import NavBar from './pages/homepage/NavBar';
import About from './pages/about/About';
import ContactUs from './pages/contact/ContactUs';
import UpcomingTrips from './pages/trips/UpcomingTrips';
import Footer from './pages/footer/Footer';
import BookTrip from './pages/booking/BookTrip';
import NotFound from './pages/notfound/NotFound';
import ExploreProperty from './pages/properties/ExploreProperty';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MainHomepage/>} />
        <Route path="/faqs" element={<><FAQs/><Footer/></>} />
        <Route path="/about" element={<><About/><Footer/></>} />
        <Route path="/contact" element={<><ContactUs/><Footer/></>} />
        <Route path="/trips/upcoming" element={<><UpcomingTrips/><Footer/></>} />
        <Route path="/book-trip" element={<><BookTrip/><Footer/></>} />
        <Route path="/explore-properties" element={<><ExploreProperty/><Footer/></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;