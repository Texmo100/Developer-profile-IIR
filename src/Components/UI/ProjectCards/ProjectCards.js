import React from 'react';
import CardProject from '../CardProject/CardProject';
import aboutMeData from '../../../data/aboutMeData';
import styles from './ProjectCards.module.css';

const ProjectCards = props => {
    const { projects } = aboutMeData;

    const threeProjects = projects.slice(0, 3);

    const projectsCardRenderThree = threeProjects.map(item => <CardProject key={item.id} project={item} />);

    const projectsCardRender = projects.map(item => <CardProject key={item.id} project={item} />);

    if (props.classNameProjectCards === 'short') {
        return (
            <div className={`${styles['project-cards']} ${styles['project-cards--' + props.classNameProjectCards]}`}>
                {projectsCardRenderThree}
            </div>
        );
    }

    return (
        <div className={`${styles['project-cards']} ${styles['project-cards--full']}`}>
            {projectsCardRender}
        </div>
    );
}

export default ProjectCards;