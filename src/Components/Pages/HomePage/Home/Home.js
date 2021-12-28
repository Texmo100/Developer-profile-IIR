import React from 'react';
import MainImageSection from '../Sections/MainImageSection/MainImageSection';
import AboutMeSection from '../Sections/AboutMeSection/AboutMeSection';
import ProjectsSection from '../Sections/ProjectsSection/ProjectsSection';
import ContactMeSection from '../Sections/ContactMeSection/ContactMeSection';
import FooterSection from '../../../UI/FooterSection';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles["wrapper-home"]}>
            <MainImageSection />
            <AboutMeSection />
            <ProjectsSection />
            <ContactMeSection />
            <FooterSection />
        </div>
    );
}

export default Home;