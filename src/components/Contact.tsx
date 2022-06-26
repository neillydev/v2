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

            </motion.aside>
        </section>
    )
}

export default Contact