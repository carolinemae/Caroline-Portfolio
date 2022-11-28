import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {

  function checkWidth() {
    const viewWidth = document.documentElement.clientWidth;
    const navList = document.querySelector('#responsive-navbar-nav');
    if (viewWidth <= 992) {
      navList.style.backgroundColor = '#0000008a';
      navList.style.margin = '20px';
    }
  }

  window.addEventListener("load", () => {
    checkWidth();
  })

  window.addEventListener("scroll", (event) => {
    const navBar = document.querySelector('.navbar');
    const scroll = window.pageYOffset;
    if (scroll > 810) {
      navBar.style.backgroundColor = '#00000060';
    } else {
      navBar.style.backgroundColor = '#00000000';
    }

    checkWidth();
  });

  return (
    <Navbar collapseOnSelect expand="lg" className='custom-nav' variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className='center'>
        <Nav className="me-auto align-center">
          <Nav.Link href="#home"
          onClick={() => handlePageChange('Home')} 
          className={currentPage === 'Home' ? 'nav-link light-nav active' : 'nav-link light-nav'}
          >
            Home
          </Nav.Link>
          <Nav.Link href="#about" 
          onClick={() => handlePageChange('About')} 
          className={currentPage === 'About' ? 'nav-link light-nav active' : 'nav-link light-nav'}
          >
            About
          </Nav.Link>
          <Nav.Link href="#portfolio"
          onClick={() => handlePageChange('Portfolio')} 
          className={currentPage === 'Portfolio' ? 'nav-link light-nav active' : 'nav-link light-nav'}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link href="#resume"
          onClick={() => handlePageChange('Resume')} 
          className={currentPage === 'Resume' ? 'nav-link light-nav active' : 'nav-link light-nav'}
          >
            Resume
          </Nav.Link>
          <Nav.Link href="#contact"
          onClick={() => handlePageChange('Contact')} 
          className={currentPage === 'Contact' ? 'nav-link light-nav active' : 'nav-link light-nav'}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
