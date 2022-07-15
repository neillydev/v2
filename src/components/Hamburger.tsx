import React, { useState } from 'react';
import { useNav, useNavUpdate } from "../context/NavContext";
import { useScrollPrevent } from "../hooks/useScrollPrevent";

import styles from '../../styles/Hamburger.module.css';

const Hamburger = () => {
  const navOpen = useNav();
  const toggleNav = useNavUpdate();
  const [allowScroll, blockScroll] = useScrollPrevent();

  const handleHamburger = () => {
    toggleNav();
    !navOpen ? allowScroll() : blockScroll();
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