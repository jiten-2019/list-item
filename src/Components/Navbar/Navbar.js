import React from 'react';
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <div className="logo"><span>Logo</span></div>
        <div className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#news">My Portfolio</a>
          <a href="#contact">Clients</a>
          <a href="#about">Get in Touch</a>
        </div>
      </div>
    </div>
  )
}
