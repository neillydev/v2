import Link from 'next/link';
import React from 'react';

import styles from '../../styles/NavBar.module.css';

type NavItemProps = {
  destination: string;
  itemText: string;
};

const NavItem = ({destination, itemText}: NavItemProps) => {
  return (
    <li className={styles.navItemContainer}>
      <Link href={destination}>
        {itemText}
      </Link>
    </li>
  )
};

export default NavItem;