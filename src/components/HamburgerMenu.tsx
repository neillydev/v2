import React from 'react';
import { useNav, useNavUpdate } from "../context/NavContext";
import styles from '../../styles/Hamburger.module.css';

const HamburgerMenu = () => {
  const navOpen = useNav();

  return (
    <div className={`${styles.hamburgerMenu} ${navOpen ? styles.hamburgerOpen : styles.hamburgerMenuClose }`}>
      <div className={styles.hamburgerWrapper}>
        <div className={styles.hamburgerItem}>
          <h1>About</h1>
        </div>
        <div className={styles.hamburgerItem}>
          <h1>Experience</h1>
        </div>
        <div className={styles.hamburgerItem}>
          <h1>Projects</h1>
        </div>
        <div className={styles.hamburgerItem}>
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu