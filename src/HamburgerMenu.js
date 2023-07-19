import React, { useState } from 'react';
import './HamburgerMenu.css';
import Top from './Top'
import VoteSystem from './VoteSystem';

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Page1'); // デフォルトの表示ページを設定

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setActivePage('Page1'); // メニューが閉じられた場合にactivePageをリセット
    }
  };

  const handleMenuClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false); // メニュー項目がクリックされたらメニューを閉じる
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
            <button onClick={() => handleMenuClick('Page1')}>top</button>
          </li>
          <li>
            <button onClick={() => handleMenuClick('Page2')}>投票</button>
          </li>
          <li>
            <button onClick={() => handleMenuClick('Page3')}>Menu</button>
          </li>
        </ul>
      </div>
      <div className="content">
        {activePage === 'Page1' && <Top />}
        {activePage === 'Page2' && <div className="votesystem-container"><VoteSystem /></div>}
      </div>
    </div>
  );
}


export default HamburgerMenu;