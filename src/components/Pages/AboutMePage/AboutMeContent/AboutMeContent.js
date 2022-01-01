import React from 'react';
import aboutMeData from '../../../../data/aboutMeData';
import Profile from '../Profile';
import Education from '../Education';
import SkillsSet from '../SkillsSet/SkillsSet';
import Skills from '../Skills/Skills';
import styles from './AboutMeContent.module.css';

const AboutMeContent = () => {
    const { profile, education, softSkills, tongues } = aboutMeData;

    return (
        <div className={styles["about-me-content"]}>
            <Profile profile={profile} />
            <Education education={education} />
            <SkillsSet />
            <Skills softSkills={softSkills} tongues={tongues} />
        </div>
    )

}

export default AboutMeContent;