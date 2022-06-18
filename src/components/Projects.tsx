import React from 'react'

import styles from '../../styles/Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.projContainer}>
            <div className={styles.projHeader}>
                <h2>
                    My Works
                </h2>
            </div>
            <div className={styles.projItemContainer}>
                <div className={styles.projList}>
                    <button className={`${styles.projTab} ${styles.projTabSelected}`}>
                        <span className={styles.projText}>Waves</span>
                    </button>
                    <button className={`${styles.projTab}`}>
                        <span className={styles.projText}>Covid Maps</span>
                    </button>
                </div>
                <div className={styles.projItem}>
                    <div className={styles.projItemWrapper}>
                        <a href="https://waves.neilly.dev" className={styles.projItemImg} target="_blank" rel="noreferrer noopener"></a>
                        <img className={styles.projItemImg} src="https://camo.githubusercontent.com/93f69877443045fe783bbc15a7746137eb6d30500a8fd2d5ce783db04b2f8dcd/68747470733a2f2f692e6779617a6f2e636f6d2f39376264323633623931666362633232393638373931356261303936396330622e706e67" alt="" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
                <div className={styles.projCardContainer}>
                    <h3 className={styles.projCardHeader}>
                        <a href="https://waves.neilly.dev">Waves</a>
                    </h3>
                    <div className={styles.projCard}>
                        <p>A video sharing social media app that allows anybody to share their content with the world</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects