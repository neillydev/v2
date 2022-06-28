import React, { useState } from 'react';
import { motion } from "framer-motion";

import styles from '../../styles/Contact.module.css';

const Contact = () => {
    const [showContact, setShowContact] = useState(false);

    const handleContactBtn = () => {
        setShowContact(!showContact);
    };

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
                <button className={styles.contactBtn} onClick={handleContactBtn}>
                    {!showContact ? `Say Hi` : `Show less`}
                </button>
                <form className={styles.contactForm}>
                    <div className={styles.contactWrapper}>
                        <input className={styles.contactInput} type="text" id="name" placeholder=' ' required />
                        <label className={styles.contactLabel}  htmlFor="name">Name</label>
                    </div>
                    <div className={styles.contactWrapper}>
                        <input className={styles.contactInput}type="text" id="email" placeholder=' ' required />
                        <label className={styles.contactLabel} htmlFor="email">Email</label>
                    </div>
                    <div className={styles.contactWrapper}>
                        <input className={styles.contactInput} type="text" id="message" placeholder=' ' required />
                        <label className={styles.contactLabel} htmlFor="message">Message</label>
                    </div>
                </form>
            </motion.aside>
        </section>
    )
}

export default Contact