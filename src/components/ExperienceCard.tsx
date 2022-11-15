import React from 'react';

import styles from '../../styles/Experience.module.css';

import BuildingSvg from '../../public/svg/building.svg';

type ExperienceProps = {
    title: string, duration: string, achievements: string[], company: boolean, companyName?: string, companyLink?: string
}

const ExperienceCard = ({ title, duration, achievements, company, companyName, companyLink }: ExperienceProps) => {
    return (

        <div className={`${styles.experienceBodyContent}`}>
            <div className={styles.experienceBodyItem}>
                <div className={styles.experienceTitle}>
                    {company && <BuildingSvg />}
                    <h3>{title} {company && <span className={styles.companyName}><a href={`${companyLink}`} target='_blank' rel="noopener noreferrer">{companyName}</a></span>}</h3>
                </div>
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