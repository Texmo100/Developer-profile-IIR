import React from 'react';
import LinkedButton from '../../../../UI/LinkedButton/LinkedButton';
import styles from './MainImageSection.module.css';

const MainImageSection = () => {
    return (
        <header className={styles["main-image"]}>
            <div className={styles["main-image__layer"]}>
                <div className={`${styles['delimiter']} ${styles['main-image__content']}`}>
                    <h1>Hey there, i'm Isaac I.R. a Software Developer</h1>
                    <LinkedButton className='main-image__content__button' to="/contactme">
                        Let's talk
                    </LinkedButton>
                </div>
            </div>
        </header>
    );
}

export default MainImageSection;