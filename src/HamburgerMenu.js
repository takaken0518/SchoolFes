import React, { useState } from 'react';
import './HamburgerMenu.css';
import Top from './Top'
import VoteSystem from './VoteSystem';

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Page1'); // デフォルトの表示ページを設定

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (page) => {
    setActivePage(page);
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

          <li>
            <a href='./top'>top</a>
          </li>

          <li>
            <a href='./vote'>投票</a>
          </li>
            
          <li>
          <a href='./menu'>Menu</a>
          </li>

        </ul>
      </div>
      <div className="content">
        {activePage === 'Page1' && <Top />}
        {activePage === 'Page2' && <VoteSystem />}
      </div>
    </div>
  );
}

export default HamburgerMenu;