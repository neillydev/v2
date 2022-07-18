import React from 'react';

import styles from '../../styles/main.module.css';

const Main = () => {
    return (
        <div className={styles.meteorShower}>
            <svg aria-hidden="true" id="svg-meteor" className={styles.svgDefs} data-name="meteor" viewBox="0 0 195 173.05" width="195" height="173.05">
                <symbol id="meteor">
                    <path d="M192.39.66c-33.66,31.46-93.3,81.16-129,108.88L3.42,156c-5,3.89-4.29,11.28.74,15.4s12.84-.83,13.1-1.07C51.09,138.62,82.6,104.72,116.64,73c8.89-8.29,66.23-59.5,77.47-70.13C196.17,1,194.24-1.08,192.39.66Z" />
                </symbol>
            </svg>
            <svg aria-hidden="true" className={`${styles.meteorOne} ${styles.meteor}`} width="195" height="173.05" viewBox="0 0 195 173.05">
            </svg>

            <svg aria-hidden="true" className={`${styles.meteorTwo} ${styles.meteor}`} width="195" height="173.05" viewBox="0 0 195 173.05">
            </svg>

            <svg aria-hidden="true" role="presentation" className={`${styles.meteorThree} ${styles.meteor}`} width="195" height="173.05" viewBox="0 0 195 173.05">
            </svg>

            <svg aria-hidden="true" className={`${styles.meteorFour} ${styles.meteor}`} width="195" height="173.05" viewBox="0 0 195 173.05">
            </svg>

            <svg aria-hidden="true" className={`${styles.meteorFive} ${styles.meteor}`} width="195" height="173.05" viewBox="0 0 195 173.05">
            </svg>

            <svg aria-hidden="true" className={`${styles.meteorSix} ${styles.meteor}`} width="195" height="173.05" viewBox="0 0 195 173.05">
            </svg>
        </div>
    )
}

export default Main