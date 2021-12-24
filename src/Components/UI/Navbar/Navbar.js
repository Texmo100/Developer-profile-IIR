import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles["navbar-list"]}>
                <li>
                    <Link className={styles['navbar-list__item']} to="/">Home</Link>
                </li>
                <li>
                    <Link className={styles['navbar-list__item']} to="/aboutme">About me</Link>
                </li>
                <li>
                    <Link className={styles['navbar-list__item']} to="/projects">Projects</Link>
                </li>
                <li>
                    <Link className={styles['navbar-list__item']} to="/contactme">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;