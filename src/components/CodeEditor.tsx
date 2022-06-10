import React from 'react';

import styles from '../../styles/CodeEditor.module.css';

const CodeEditor = () => {
  return (
    <div className={styles.codeContainer}>
        <div className={styles.codeHeader}>
            <div className={styles.mockControls}>
                <span className={`${styles.mockWindowControl} ${styles.mockControlClose}`} />
                <span className={`${styles.mockWindowControl} ${styles.mockControlMin}`} />
                <span className={`${styles.mockWindowControl} ${styles.mockControlMax}`} />
            </div>
        </div>
    </div>
  )
}

export default CodeEditor