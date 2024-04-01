import React from 'react';
import Navbar from '@/app/Components/Home/Navbar';
import Header from '@/app/Components/Home/Header'; 
import LanguageCards from '@/app/Components/Home/Cards';
import Footer from '@/app/Components/Home/Footer';
import Body from '@/app/Components/Home/Body'
import './globals.css';
import IntroPage from './Carga';

function Home() {
  return (
    <div className='paytone-one-regular'>
      <IntroPage />

        {/* Navbar */}
        <Navbar />

        {/* Header */}
        <Header />

        {/* TextoHeader */}

        {/* LanguageCards */}
        <LanguageCards />

        {/* Body */}
        <Body />

        {/* Footer */}
        <Footer />
      </div>

  );
}

export default Home;
