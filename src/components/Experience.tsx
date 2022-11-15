import React, { forwardRef, useState } from 'react';
import { motion } from "framer-motion";

import styles from '../../styles/Experience.module.css';
import ExperienceCard from './ExperienceCard';


const Experience = forwardRef((props: any, ref: any) => {
    const [selected, setSelected] = useState(0);

    return (
        <section className={styles.experienceSection} ref={ref}>
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
                    <ExperienceCard title='Full Stack Developer @' duration='May 2022 - Nov. 2022' achievements={[
                        'Completely refactored an API, handling all backend functionality for associate onboarding, boosting development productivity by 60%, using NodeJS and GraphQL.',
                        'Developed a system of automated text messaging-based reminders, promoting associate acquisition by 30%, utilizing NodeJS, PostgreSQL, and GraphQL.',
                        'Engineered an administrator panel web application utilizing React, NextJS, GraphQL, NodeJS, and PostgreSQL, optimizing associate data fetching for all corporate staff.',
                        'Oversaw all development projects in a team including front-end, back-end, and SQL/PostgreSQL database management systems. ',
                    ]}
                    company
                    companyName='Exact Staff'
                    companyLink='https://www.exactstaff.com/' />
                    :
                    <ExperienceCard title='Software Developer - Freelance' duration='Jan. 2016 - May 2022' achievements={[
                        'Created a backend API in NodeJS, Express, MySQL, and Typescript which handled authentication using JSON Web Tokens.',
                        'Engineered and maintained an API for a referral system, resulting in thousands of customer acquisitions, leveraging NodeJS, Express, and PostgreSQL',
                        'Developed Java plugins for multiple clients'
                    ]} 
                    company={false} />
                }
                </div>
            </div>
            </motion.aside>
        </section>
    )
});

export default Experience;