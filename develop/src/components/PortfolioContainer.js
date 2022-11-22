import React, { useState } from 'react';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <main>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* {renderPage()} */}
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
      </style>
    </main>
  );
}
