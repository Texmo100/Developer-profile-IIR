import React from 'react';
import ProjectCards from '../../../../UI/ProjectCards/ProjectCards';
import LinkedButton from '../../../../UI/LinkedButton/LinkedButton';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
    return (
        <main className={styles["projects"]}>
            <div className={`${styles['delimiter']} ${styles['projects__content']}`}>
                <h3>Projects</h3>
                <ProjectCards />
                <LinkedButton className="button-all-projects" to="/projects">View all projects</LinkedButton>
            </div>
        </main>
    );
}

export default ProjectsSection;