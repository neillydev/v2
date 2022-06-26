import React from 'react';

import styles from '../../styles/Experience.module.css';

type ExperienceProps = {
    title: string, duration: string, achievements: string[]
}

const ExperienceCard = ({title, duration, achievements}: ExperienceProps) => {
    return (

        <div className={`${styles.experienceBodyContent}`}>
            <div className={styles.experienceBodyItem}>
                <h3>{title}</h3>
                <p>{duration}</p>
                <ul>
                    {
                        achievements.map((achievement: string) => <li>{achievement}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default ExperienceCard