import React from 'react';

import styles from '../../styles/Hero.module.css';
import CodeEditor from './CodeEditor';

const Hero = () => {
  return (
    /* 
    Main part introducing myself on the left side, with the right side having a dark-mode code editor explaining either my languages, experience, or the intro itself in the
    code editor.
    
    Below it should be the hoverable, interactive buttons for my social medias (linkedin, github, etc)
    
    When you scroll down, it should fade in on the bottom left corner*/
    <section className={styles.heroSection}>
      <div className={styles.heroSectionContainer}>
        <div className={styles.heroItem} style={{ transitionDelay: '100ms' }}>
          <h1 className={styles.heroIntro}>
            Hello, my name is
          </h1>
        </div>
        <div className={styles.heroItem} style={{ transitionDelay: '200ms' }}>
          <h2 className={styles.heroHeader}>
            Vernon Neilly
          </h2>
        </div>
        <div className={styles.heroItem} style={{ transitionDelay: '300ms' }}>
          <h3 className={`${styles.heroHeader} ${styles.heroHeaderFade}`}>
            Full Stack Developer
          </h3>
        </div>
        <div className={styles.heroItem} style={{ transitionDelay: '400ms' }}>
          <p>
            I am a Full Stack Developer with over 10 years of experience engineering remarkable solutions. Presently, I'm developing practical solutions for staffing at&nbsp;
            <a href="https://exactstaff.com" target="_blank" rel="noreferrer">
              Exact Staff
            </a>
            .
          </p>
        </div>
      </div>
      <CodeEditor />
    </section>
  )
};

export default Hero;