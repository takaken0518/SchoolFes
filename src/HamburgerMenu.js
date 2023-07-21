import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './HamburgerMenu.css';

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/top' ? 'active' : ''}>top</Link>
            </li>
            <li>
              <Link to="/vote" className={location.pathname === '/vote' ? 'active' : ''}>投票</Link>
            </li>
            <li>
              <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link>
            </li>
          </ul>
        </div>
      )}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default HamburgerMenu;
