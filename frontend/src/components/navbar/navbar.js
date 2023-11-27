// Navbar.js
import "./navbar.css"
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Navbar = () => {
  return (
    <nav>
        
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <div className="icons">
        <li><a href="#"><CallIcon/></a></li>
        <li><a href="#"><ShoppingCartIcon/></a></li>
        <li><a href="#"><AccountCircleIcon/></a></li>
        <li><a href="#"><SearchIcon/></a></li>
        <li><a href="#"><FavoriteBorderIcon/></a></li>
       
        


        </div> 
                                 
      </ul>
    </nav>
  );
};

export default Navbar;
