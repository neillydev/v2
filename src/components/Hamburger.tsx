import React, { useState } from 'react';
import { useNav, useNavUpdate } from "../context/NavContext";

import styles from '../../styles/Hamburger.module.css';

const Hamburger = () => {
  const toggleNav = useNavUpdate();

  return (
    <div className={styles.hamburgerContainer} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default Hamburger;