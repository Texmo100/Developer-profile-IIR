import React from 'react'
import { FaReact } from 'react-icons/fa';
import styles from './FooterSection.module.css';

const FooterSection = () => {
    return(
        <footer className={styles.footer}>
            <FaReact className={styles["react-icon"]}/>
            <p>created with React.js</p>
        </footer>
    );
}

export default FooterSection;