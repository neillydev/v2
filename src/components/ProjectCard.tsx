import React, { useState } from 'react';

import styles from '../../styles/Projects.module.css';

type ProjectCardProps = {
    title: string, url: string, description: string, technologies: string[], img: string
}

const ProjectCard = ({ title, url, description, technologies, img }: ProjectCardProps) => {
    const [selected, setSelected] = useState(0);
    
    return (
        <>
            <div className={styles.projItem}>
                <div className={styles.projItemWrapper}>
                    <span>
                        <img className={styles.projItemImg} src={img}
                            alt=""
                            style={{ width: "100%", height: "100%" }} />
                        <a href={url}
                            target="_blank" rel="noreferrer noopener" className={styles.projItemOverlay}>
                        </a>
                    </span>
                </div>
            </div>
            <div className={styles.projCardContainer}>
                <h3 className={styles.projCardHeader}>
                    <a href={url} target="_blank" rel="noreferrer noopener">{title}</a>
                </h3>
                <div className={styles.projCard}>
                    <p>{description}</p>
                </div>
                <ul className={styles.projTechnologies}>
                    {
                        technologies.map((technology: string) => <li>{technology}</li>)
                    }
                </ul>
                <span className={styles.projScroller}>
                    <span className={`${selected === 0 ? styles.projSelected : ''}`} onClick={() => setSelected(0)} />
                    <span className={`${selected === 1 ? styles.projSelected : ''}`} onClick={() => setSelected(1)} />
                </span>
            </div>
        </>
    )
}

export default ProjectCard