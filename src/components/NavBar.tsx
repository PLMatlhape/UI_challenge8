import React from 'react'
import './navBar.css' 

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/shop">Shop Online</a></li>
        <li><a href="/find">Find In Store</a></li>
        <li><a href="/learn">Learn More</a></li>
        <li><button className="subscribe-btn">Subscribe</button></li>
      </ul>
    </nav>
  )
}