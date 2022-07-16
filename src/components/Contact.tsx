import React, { useState, ChangeEvent, FormEvent, forwardRef } from 'react';
import { motion } from "framer-motion";
import { send } from 'emailjs-com';

import styles from '../../styles/Contact.module.css';

const Contact = forwardRef((props: any, ref: any) => {
    const [showContact, setShowContact] = useState(false);
    const [formContent, setFormContent] = useState({
        from_name: '',
        message: '',
        reply_to: ''
    });

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        send(process.env.NEXT_PUBLIC_SERVICE_ID ? process.env.NEXT_PUBLIC_SERVICE_ID : '', process.env.NEXT_PUBLIC_TEMPLATE_ID ? process.env.NEXT_PUBLIC_TEMPLATE_ID : '', formContent, process.env.NEXT_PUBLIC_USER_ID);
        setFormContent({
            from_name: '',
            message: '',
            reply_to: ''
        });
    };

    const handleFormChange = (e: any) => {
        setFormContent({ ...formContent, [e.target.name]: e.target.value });
    };

    const handleContactBtn = () => {
        setShowContact(!showContact);
    };

    return (
        <section className={styles.contactSection} ref={ref}>
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
                {showContact ?
                    <form className={`${styles.contactForm} ${styles.showForm}`} onSubmit={handleFormSubmit}>
                        <div className={styles.contactWrapper}>
                            <input className={styles.contactInput} type="text" name="from_name" placeholder=' ' required value={formContent.from_name} onChange={handleFormChange} />
                            <label className={styles.contactLabel} htmlFor="name">Name</label>
                        </div>
                        <div className={styles.contactWrapper}>
                            <input className={styles.contactInput} type="text" name="reply_to" placeholder=' ' required value={formContent.reply_to} onChange={handleFormChange} />
                            <label className={styles.contactLabel} htmlFor="email">Email</label>
                        </div>
                        <div className={styles.contactWrapper}>
                            <input className={styles.contactInput} type="text" name="message" placeholder=' ' required value={formContent.message} onChange={handleFormChange} />
                            <label className={styles.contactLabel} htmlFor="message">Message</label>
                        </div>
                        <button className={styles.contactSubmitBtn}>
                            Submit
                        </button>
                    </form> : null}
            </motion.aside>
        </section>
    )
});

export default Contact