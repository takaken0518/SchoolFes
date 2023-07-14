import React, { useState } from 'react';
import './HamburgerMenu.css';

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}>
    <div className="hamburger" onClick={toggleMenu}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
    <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </div>
  </div>
  );
}

export default HamburgerMenu;
