import React from 'react';
import styles from '../../styles/Hamburger.module.css';

const HamburgerMenu = () => {
  return (
    <div className={styles.hamburgerMenu}>
      <div className={styles.closeMenu}></div>
    </div>
  )
}

export default HamburgerMenu