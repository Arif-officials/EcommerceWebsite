// Navbar.js
import "./navbar.css"
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#"><FavoriteIcon/></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
