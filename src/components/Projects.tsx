import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

import styles from '../../styles/Projects.module.css';

const Projects = () => {
    const [selected, setSelected] = useState(0);

    return (
        <section className={styles.projContainer}>
            <div className={styles.projHeader}>
                <h2>
                    My Works
                </h2>
            </div>
            <div className={styles.projItemContainer}>
                <div className={styles.projList}>
                    <button className={`${styles.projTab} ${selected === 0 ? styles.projTabSelected : ''}`} onClick={() => setSelected(0)}>
                        <span className={styles.projText}>Waves</span>
                    </button>
                    <button className={`${styles.projTab} ${selected === 1 ? styles.projTabSelected : ''}`} onClick={() => setSelected(1)}>
                        <span className={styles.projText}>Covid Maps</span>
                    </button>
                </div>
                {
                    selected === 0 ?
                        <ProjectCard title="Waves" url="https://waves.neilly.dev"
                            description="A video sharing social media app that allows anybody to share their content with the world"
                            technologies={["React", "Node JS", "PostgreSQL"]}
                            img="https://camo.githubusercontent.com/93f69877443045fe783bbc15a7746137eb6d30500a8fd2d5ce783db04b2f8dcd/68747470733a2f2f692e6779617a6f2e636f6d2f39376264323633623931666362633232393638373931356261303936396330622e706e67"
                        />
                        :
                        <ProjectCard title="Covid Maps" url="https://github.com/neillydev/covidmaps"
                            description="🌎Real-time COVID-19 case map built with React"
                            technologies={["React", "Google Maps API"]}
                            img="https://camo.githubusercontent.com/4390730c6105344b42f84005ddb19ae85016f3354a1740e7812285a4463ceca2/68747470733a2f2f692e696d6775722e636f6d2f676c54516271552e706e67"
                        />
                }
            </div>
        </section>
    )
}

export default Projects