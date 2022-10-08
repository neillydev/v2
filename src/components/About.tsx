import React, { forwardRef } from 'react';
import { motion } from "framer-motion";

import styles from '../../styles/About.module.css';

const About = forwardRef((props: any, ref: any) => {
    return (
        <section className={styles.aboutSection} ref={ref}>
            <motion.aside
                className={styles.aboutContainer}
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
                <div className={styles.aboutContent}>
                    <div className={styles.aboutHeader}>
                        <h2>
                            Who Am I?
                        </h2>
                    </div>
                    <div className={styles.aboutBody}>
                        <p>Hi! My name is Vernon Neilly, and programming is my passion! From a young age, I've taken an interest in the internet; developing a burning desire to understand how everything worked under the hood.</p>
                        <p>From humble beginnings, creating websites with HTML, Javascript, and CSS, to building plugins and web applications for various clients as a freelancer, to being apart of a development team within a corporate landscape. I've acquired valuable experience from various different avenues.</p>
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
                            <img className={styles.aboutImgHeadshot} width="500" height="500" src="https://avatars.githubusercontent.com/u/51303046?s=400&u=47d8c7a555c3df2c38299576a16a1b98802b3880&v=4" />
                        </picture>
                    </div>
                </div>
            </motion.aside>
        </section>
    )
});

export default About;