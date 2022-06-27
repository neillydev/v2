import React from 'react';
import { motion } from "framer-motion";

import styles from '../../styles/Contact.module.css';

const Contact = () => {
    return (
        <section className={styles.contactSection}>
            <motion.aside
                className={styles.contactContainer}
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
                <div className={styles.contactHeader}>
                    <h2>
                        Contact Me
                    </h2>
                </div>
                <p>
                    Send me a message if you have a question, or want to get in touch!
                </p>
            </motion.aside>
        </section>
    )
}

export default Contact