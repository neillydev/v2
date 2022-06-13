import React, { useState } from 'react';

import styles from '../../styles/Experience.module.css';

const Experience = () => {
    return (
        <div className={styles.experienceContainer}>
            <div className={styles.experienceContent}>
                <div className={styles.experienceHeader}>
                    <h2>
                        My Experience
                    </h2>
                </div>
                <div className={styles.experienceBody}>
                    <div className={styles.experienceList}>
                        <button className={`${styles.experienceTab} ${styles.experienceSelected}`}>
                            <span className={styles.experienceText}>Exact Staff</span>
                        </button>
                        <button className={`${styles.experienceTab}`}>
                            <span className={styles.experienceText}>Freelance</span>
                        </button>
                    </div>
                    <div className={styles.experienceBodyContent}>
                        <div className={styles.experienceBodyItem}>
                            <h3>Web Developer @ Exact Staff</h3>
                            <p>May 2022 - Present</p>
                            <ul>
                                <li>
                                    Engineered and maintained various web applications that provides staffing to numerous clients.
                                </li>
                                <li>
                                    Utilize various frontend/backend frameworks and query languages such as React, NextJS, NodeJS, GraphQL, Prisma, SQL, and PostgreSQL.
                                </li>
                                <li>
                                    Refactored the API, frontend design, and database management for Exact Staff and My Exact Jobs.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Experience;