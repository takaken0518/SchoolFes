import React from 'react'

import HamburgerMenu from './HamburgerMenu';

import './header.css';
import Animetion from './Animetion.css';

const Header = () => {
  return (
    <div>
    <header class="fadeLeft">
    <h1>
      <font color="b1dedb">Yama</font>
      <font color="7dfaca">Ga</font>
      <font color="eddc8e">Storonomia</font>

    </h1>
    <HamburgerMenu/>

    </header>

    </div>
  )
}

export default Header;