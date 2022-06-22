import React from 'react';

import styles from '../../styles/About.module.css';

const About = () => {
    return (
        <section className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutHeader}>
                    <h2>
                        Who Am I?
                    </h2>
                </div>
                <div className={styles.aboutBody}>
                    <p>Hi! My name is Vernon Neilly, and programming is my passion! From a young age, I've taken an interest in the internet; developing a burning desire to understand how everything worked under the hood.</p>
                    <p>From humble beginnings, creating websites with HTML, Javascript, and CSS, to building plugins and web applications for various clients, to working with a company, I've had the privilege to procure valuable experience from various different avenues.</p>
                    <p>Below are technologies I work with consistently:</p>
                    <ul className={styles.aboutTechnologies}>
                        <li>JavaScript/Typescript</li>
                        <li>NodeJS</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>NextJS</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
            <div className={styles.aboutImg}>
                <div className={styles.aboutImgContainer}>
                    <picture>
                        <img className={styles.aboutImgHeadshot} width="500" height="500" src="https://i.imgur.com/YHOjM4H.jpg" />
                    </picture>
                </div>
            </div>
        </section>
    )
};

export default About;