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
                    
                    {selected === 0 ?
                    <ExperienceCard title='Web Developer @ Exact Staff' duration='May 2022 - Present' achievements={[
                        'Engineered and maintained various web applications that provides staffing to numerous clients.',
                        'Utilize various frontend/backend frameworks and query languages such as React, NextJS, NodeJS, GraphQL, Prisma, SQL, and PostgreSQL.',
                        'Refactored the API, frontend design, and database management for Exact Staff and My Exact Jobs.'
                    ]} />
                    :
                    <ExperienceCard title='Freelance' duration='Jan. 2017 - May 2022' achievements={[
                        'Engineered and maintained various web applications that provides staffing to numerous clients.',
                        'Utilize various frontend/backend frameworks and query languages such as React, NextJS, NodeJS, GraphQL, Prisma, SQL, and PostgreSQL.',
                        'Refactored the API, frontend design, and database management for Exact Staff and My Exact Jobs.'
                    ]}  />
                }
                </div>
            </div>
        </section>
    )
};

export default Experience;