import React from 'react';
import { useNav, useNavUpdate } from "../context/NavContext";

import styles from '../../styles/Hamburger.module.css';

const Hamburger = () => {
  const navOpen = useNav();
  const toggleNav = useNavUpdate();

  const handleHamburger = () => {
    toggleNav();
  };

  return (
    <div className={`${styles.hamburgerContainer} ${navOpen ? styles.hamburgerClose : '' }`} onClick={handleHamburger}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default Hamburger;