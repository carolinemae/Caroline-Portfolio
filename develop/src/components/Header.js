import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {

  window.addEventListener("scroll", (event) => {
    const scroll = window.pageYOffset;
    const navBar = document.querySelector(".custom-nav")
    if (scroll < 880) {
      navBar.style.backgroundColor = "#2a2c2c";
    } else if (scroll < 1930) {
      navBar.style.backgroundColor = "#466a64";
    } else if (scroll < 2795) {
      navBar.style.backgroundColor = "white";
    } else if (scroll < 3790) {
      navBar.style.backgroundColor = "#37348d";
    } else {
      navBar.style.backgroundColor = "#2a2c2c";
    }
  });

  return (
    <Navbar collapseOnSelect expand="lg" className='custom-nav'>
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
