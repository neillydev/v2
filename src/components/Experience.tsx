import React, { useState } from 'react';
import { motion } from "framer-motion";

import styles from '../../styles/Experience.module.css';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    const [selected, setSelected] = useState(0);

    return (
        <section className={styles.experienceSection}>
        <motion.aside
            className={styles.experienceContainer}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{
                opacity: 1,
            }}
            transition={{
                duration: 0.45,
                delay: 0.4,
            }}>
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
                    <ExperienceCard title='Software Developer - Freelance' duration='Jan. 2017 - May 2022' achievements={[
                        'Developed reliable web applications for various clients ',
                        'Worked directly with clients to ensure project requirements were met',
                        'Developed personal web applications in React, NodeJS, and PostgreSQL'
                    ]}  />
                }
                </div>
            </div>
            </motion.aside>
        </section>
    )
};

export default Experience;