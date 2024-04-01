import React from 'react';
import Navbar from '@/app/Components/Home/Navbar';
import Header from '@/app/Components/Projects/Header';
import Footer from '@/app/Components/Home/Footer';
import CardsProjects from '@/app/Components/Projects/Cards';

import '../globals.css';



function ProjectsPage() {
  return (
    <div>

     <Header />
      {/* Navbar */}
      <Navbar />

      {/* Projects */}
      <CardsProjects />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProjectsPage;
