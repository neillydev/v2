import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

import styles from '../../styles/Hamburger.module.css';

const Hamburger = () => {
    const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={styles.hamburgerContainer} onClick={() => setNavOpen((current) => !current)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default Hamburger;