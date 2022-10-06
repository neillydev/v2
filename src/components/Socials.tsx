import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Socials.module.css';
import Github from '../../public/svg/github.svg';
import LinkedIn from '../../public/svg/linkedin.svg';
import Twitter from '../../public/svg/twitter.svg';

const Socials = () => {
  return (
    <div className={styles.socialsContainer}>
      <ul className={styles.socialsList}>
        <li className={styles.socialsListItem}>
          <a href='https://github.com/neillydev' target='_blank' rel='noreferrer noopener' aria-label='Github'>
            <Github />
          </a>
        </li>
        <li className={styles.socialsListItem}>
          <a href='https://www.linkedin.com/in/neillydev' target='_blank' rel='noreferrer noopener' aria-label='LinkedIn'>
            <LinkedIn />
          </a>
        </li>
        <li className={styles.socialsListItem}>
          <a href='https://twitter.com/neillydev' target='_blank' rel='noreferrer noopener' aria-label='Twitter'>
            <Twitter />
          </a>
        </li>
      </ul>
    </div>
  )
};

export default Socials;