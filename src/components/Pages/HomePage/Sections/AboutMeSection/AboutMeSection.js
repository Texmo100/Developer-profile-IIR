import React from 'react';
import LinkedButton from '../../../../UI/LinkedButton/LinkedButton';
import styles from './AboutMeSection.module.css';

const AboutMeSection = () => {
    return (
        <section className={styles["about-me"]}>
            <div className={`${styles['delimiter']} ${styles['about-me__content']}`}>
                <div className={styles["about-me__content__image"]}></div>
                <div className={styles["about-me__content__desc"]}>
                    <h2>About me</h2>
                    <LinkedButton className="about-me__content__button" to="/aboutme">
                        View more
                    </LinkedButton>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;