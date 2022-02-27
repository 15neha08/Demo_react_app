import React from 'react';
import { ReactComponent as Logo } from '../../Assests/home/Logo.svg';
import SearchIcon from '../../Assests/home/search-icons.png';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { CommercialBg } from './styleComponent';

function Navbars() {
  return (
    <CommercialBg >
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 zcs-navbar">
        <div className="navbar-toggler logo-toggler">
          <Logo />
        </div>
        <button className="navbar-toggler  mx-2" type="button" data-toggle="collapse" data-target="/navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse justify-content-around navbar-items-list" id="navbarTogglerDemo01">
          <Logo />
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Technologoes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Careers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">News</a>
            </li>
            <li class="nav-item mx-2">
              <button className="contact-us">Contact Us</button>

            </li>
            <img src={SearchIcon} alt="SearchIcon" height="20px" width="20px" className="mt-2 mx-2" />
          </ul>

        </div>
      </nav>

      
    </CommercialBg>
  )
}
export default Navbars;