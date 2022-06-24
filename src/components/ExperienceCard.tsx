import React from 'react';

import styles from '../../styles/Experience.module.css';

const ExperienceCard = () => {
    return (

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
    )
}

export default ExperienceCard