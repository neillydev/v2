import React, { useState } from 'react'

import styles from '../../styles/Projects.module.css';

const Projects = () => {
    const [selected, setSelected] = useState(0);
    
    return (
        <div className={styles.projContainer}>
            <div className={styles.projHeader}>
                <h2>
                    My Works
                </h2>
            </div>
            <div className={styles.projItemContainer}>
                <div className={styles.projList}>
                    <button className={`${styles.projTab} ${selected === 0 ? styles.projTabSelected : ''}`} onClick={()=>setSelected(0)}>
                        <span className={styles.projText}>Waves</span>
                    </button>
                    <button className={`${styles.projTab} ${selected === 1 ? styles.projTabSelected : ''}`} onClick={()=>setSelected(1)}>
                        <span className={styles.projText}>Covid Maps</span>
                    </button>
                </div>
                <div className={styles.projItem}>
                    <div className={styles.projItemWrapper}>
                        <span>
                            <img className={styles.projItemImg} src="https://camo.githubusercontent.com/93f69877443045fe783bbc15a7746137eb6d30500a8fd2d5ce783db04b2f8dcd/68747470733a2f2f692e6779617a6f2e636f6d2f39376264323633623931666362633232393638373931356261303936396330622e706e67"
                                alt=""
                                style={{ width: "100%", height: "100%" }} />
                            <a href="https://waves.neilly.dev"
                                target="_blank" rel="noreferrer noopener" className={styles.projItemOverlay}>
                            </a>
                        </span>
                    </div>
                </div>
                <div className={styles.projCardContainer}>
                    <h3 className={styles.projCardHeader}>
                        <a href="https://waves.neilly.dev" target="_blank" rel="noreferrer noopener">Waves</a>
                    </h3>
                    <div className={styles.projCard}>
                        <p>A video sharing social media app that allows anybody to share their content with the world</p>
                    </div>
                    <ul className={styles.projTechnologies}>
                        <li>
                            React
                        </li>
                        <li>
                            Node JS
                        </li>
                        <li>
                            PostgreSQL
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects