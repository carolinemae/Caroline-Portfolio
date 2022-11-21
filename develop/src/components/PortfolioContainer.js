import React, { useState } from 'react';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   }
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Portfolio') {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === 'Contact') {
  //     return <Contact />;
  //   }
  //   return <Resume />;
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  console.log(document.documentElement.clientHeight);

  window.addEventListener("scroll", (event) => {
    const navLinks = document.querySelectorAll('.nav-link');
    const scroll = window.pageYOffset;
    if (scroll < 1945) {
      for (const navLink of navLinks) {
        navLink.classList.add('light-nav');
      }
    } else if (scroll > 2795) {
      for (const navLink of navLinks) {
        navLink.classList.add('light-nav');
      }
    } else {
      for (const navLink of navLinks) {
        navLink.classList.remove('light-nav');
      }
    }
  });

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
