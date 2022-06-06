import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from '../../styles/NavBar.module.css';
import NavItem from "./NavItem";

export default function NavBar(){
    const router = useRouter();

    return (
        <header className={styles.navHeader}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <a href="/">

                    </a>
                </div>
                <div className={styles.navList}>
                    <ol>
                        <NavItem destination="/#about" itemText="About" />
                        <NavItem destination="/#experience" itemText="Experience" />
                        <NavItem destination="/#projects" itemText="Projects" />
                        <NavItem destination="/#contact" itemText="Contact" />
                    </ol>
                </div>
            </nav>
        </header>
    )
};