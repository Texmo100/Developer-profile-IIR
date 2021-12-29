import React from 'react';
import GlobalHeader from '../GlobalHeader/GlobalHeader';
import FooterSection from '../FooterSection/FooterSection';
import styles from './PagesWrapper.module.css';

const PagesWrapper = props => {
    return (
        <div className={styles["pages-wrapper"]}>
            <GlobalHeader image="header-image-about-me" />
            <div className={styles["body-page"]}>
                <div className={styles["body-page-content"]}>
                    <h1 className={
                        `
                            ${styles['body-page-content__title']}
                            ${styles['body-page-content__title--'+props.classNameTitle]}
                        `
                    }>
                        {props.title}
                    </h1>

                    {props.children}
                </div>
            </div>
            <FooterSection />
        </div>
    );
}

export default PagesWrapper;