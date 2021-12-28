import React from 'react';
import CardProject from '../CardProject/CardProject';
import aboutMeData from '../../../data/aboutMeData';
import styles from './ProjectCards.module.css';

const ProjectCards = () => {
    const { projects } = aboutMeData;

    const projectsRenderCard = projects.map(item => <CardProject key={item.id} project={item} />);

    return (
        <div className={styles["project-cards"]}>
            {projectsRenderCard}
        </div>
    );
}

export default ProjectCards;