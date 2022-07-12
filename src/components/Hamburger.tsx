import React, { useState } from 'react';

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