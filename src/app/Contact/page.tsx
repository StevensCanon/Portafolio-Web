'use client';
import React from 'react';
import Navbar from '@/app/Components/Home/Navbar';
import Footer from '@/app/Components/Home/Footer';
import Form from '@/app/Components/Contact/Form';
import '../globals.css';




function Home() {
  return (
    <div className='body-blanco '>
      {/* Navbar */}
      <Navbar />

      {/* Formulario */}
      <div className='py-40 px-8'>
        <Form />
        </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
