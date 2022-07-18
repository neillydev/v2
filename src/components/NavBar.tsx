import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useScrollPosition } from '../hooks/useScrollPosition';
import resumePDF from '../../public/pdf/resume.pdf';

import styles from '../../styles/NavBar.module.css';
import NavItem from './NavItem';
import Hamburger from './Hamburger';

const classNames = (...classes: any) => {
    return classes.filter(Boolean).join('');
}

type NavProps = {
    refs: any
}

export default function NavBar({ refs }: NavProps) {
    const router = useRouter();
    const scrollPosition = useScrollPosition();
    useEffect(() => {
        switch (router.asPath) {
            case '/#about':
                scrollSmoothHandler(refs.aboutRef);
                break;
            case '/#experience':
                scrollSmoothHandler(refs.experienceRef);
                break;
            case '/#projects':
                scrollSmoothHandler(refs.projectsRef);
                break;
            case '/#contact':
                scrollSmoothHandler(refs.contactRef);
                break;
            default:
                break;
        }
    }, [router.asPath, refs]);

    const scrollSmoothHandler = (ref: any) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`${styles.navHeader} ${scrollPosition > 0 ? (scrollPosition > 125 ? styles.navHeaderScrolled : styles.navHeaderScrolling) : ''}`}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <a href='/'>

                    </a>
                </div>
                <Hamburger />
                <div className={styles.navList}>
                    <ol>
                        <NavItem destination='/#about' itemText='About' />
                        <NavItem destination='/#experience' itemText='Experience' />
                        <NavItem destination='/#projects' itemText='Projects' />
                        <NavItem destination='/#contact' itemText='Contact' />
                        <div className={styles.resumeContainer}>
                            <a className={styles.resumeBtn} href={resumePDF} target='_blank'>Resume</a>
                        </div>
                    </ol>
                </div>
            </nav>
        </header>
    )
};