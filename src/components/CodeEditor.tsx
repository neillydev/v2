import React from 'react';

import styles from '../../styles/CodeEditor.module.css';
import heroStyles from '../../styles/Hero.module.css';

const CodeEditor = () => {
  return (
    <div className={`${styles.codeContainer} ${heroStyles.heroItem4}`}>
      <div className={styles.codeHeader}>
        <span className={styles.codeCommandPre}>
          $
        </span>
        {/* <div className={styles.mockControls}>
          <span className={`${styles.mockWindowControl} ${styles.mockControlClose}`} />
                <span className={`${styles.mockWindowControl} ${styles.mockControlMin}`} />
                <span className={`${styles.mockWindowControl} ${styles.mockControlMax}`} />
        </div> */}
      </div>
      <div className={styles.codeBody}>
        <ol className={styles.code}>
          <li>
            <span className={styles.codeLine}>
              <span className={styles.var}>
                interface
              </span>
              &nbsp;Person = {`{`}
            </span>
          </li>
          <li>
            <span className={styles.codeLine}>
              &nbsp;&nbsp;&nbsp;&nbsp;name: string;
            </span>
          </li>
          <li>
            <span className={styles.codeLine}>
              &nbsp;&nbsp;&nbsp;&nbsp;occupation: string;
            </span>
          </li>
          <li>
            <span className={styles.codeLine}>
              &nbsp;&nbsp;&nbsp;&nbsp;yearsOfExperience: number;
            </span>
          </li>
          <li>
            <span className={styles.codeLine}>
              {`}`};
            </span>
          </li>
          <li>
            <span className={styles.codeLine}>
            </span>
          </li>
          <li>
            <span className={styles.codeLine}>
              <span className={styles.var}>
                var
              </span>
              &nbsp;Vernon: Person = {`{`}
            </span>
          </li>
          <li>
            <span className={`${styles.codeLine} ${styles.line8}`}>
              &nbsp;&nbsp;&nbsp;&nbsp;name: "Vernon",
            </span>
          </li>
          <li>
            <span className={`${styles.codeLine} ${styles.line9}`}>
              &nbsp;&nbsp;&nbsp;&nbsp;occupation: "Full Stack Developer",
            </span>
          </li>
          <li>
            <span className={`${styles.codeLine} ${styles.line10}`}>
              &nbsp;&nbsp;&nbsp;&nbsp;yearsOfExperience: 10
            </span>
          </li>
          <li>
            <span className={styles.codeLine}>
              {`}`};
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default CodeEditor