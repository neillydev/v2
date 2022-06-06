import React from 'react';

import styles from '../../styles/NavBar.module.css';

type NavItemProps = {
  destination: string;
  itemText: string;
};

const NavItem = ({destination, itemText}: NavItemProps) => {
  return (
    <li className={styles.navItemContainer}>
      <a href={destination}>
        {itemText}
      </a>
    </li>
  )
};

export default NavItem;