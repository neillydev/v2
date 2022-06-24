import React, { useState } from 'react';

import styles from '../../styles/Experience.module.css';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    const [selected, setSelected] = useState(0);

    return (
        <section className={styles.experienceContainer}>
            <div className={styles.experienceContent}>
                <div className={styles.experienceHeader}>
                    <h2>
                        My Experience
                    </h2>
                </div>
                <div className={styles.experienceBody}>
                    <div className={styles.experienceList}>
                        <button className={`${styles.experienceTab} ${selected === 0 ? styles.experienceSelected : ''}`} onClick={()=>setSelected(0)}>
                            <span className={styles.experienceText}>Exact Staff</span>
                        </button>
                        <button className={`${styles.experienceTab} ${selected === 1 ? styles.experienceSelected : ''}`} onClick={()=>setSelected(1)}>
                            <span className={styles.experienceText}>Freelance</span>
                        </button>
                    </div>
                    <ExperienceCard />
                </div>
            </div>
        </section>
    )
};

export default Experience;