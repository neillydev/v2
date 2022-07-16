import React from 'react';
import Link from 'next/link';
import { useNav, useNavUpdate } from "../context/NavContext";
import { useScrollPrevent } from "../hooks/useScrollPrevent";

import styles from '../../styles/Hamburger.module.css';

const HamburgerMenu = () => {
  const navOpen = useNav();
  const toggleNav = useNavUpdate();

  const handleHamburger = () => {
    toggleNav();
  };

  return (
    <div className={`${styles.hamburgerMenu} ${navOpen ? styles.hamburgerOpen : ''}`}>
      <div className={styles.hamburgerWrapper}>
        <div className={styles.hamburgerItem} onClick={handleHamburger}>
          <Link href='#about'>
            <h1>About</h1>
          </Link>
        </div>
        <div className={styles.hamburgerItem} onClick={handleHamburger}>
          <Link href='#experience'>
            <h1>Experience</h1>
          </Link>
        </div>
        <div className={styles.hamburgerItem} onClick={handleHamburger}>
          <Link href='#projects'>
            <h1>Projects</h1>
          </Link>
        </div>
        <div className={styles.hamburgerItem} onClick={handleHamburger}>
          <Link href='#contact'>
            <h1>Contact</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu