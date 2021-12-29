import React from 'react';
import PagesWrapper from '../../UI/PagesWrapper/PagesWrapper';
import CardProject from '../../UI/CardProject/CardProject';
import aboutMeData from '../../../data/aboutMeData';

const Projects = () => {
    const { projects } = aboutMeData;

    const projectsRenderCard = projects.map(item => <CardProject key={item.id} project={item} />)

    return (
        <PagesWrapper classNameTitle="center" title="Projects">
            <div className="container-cards-projects-page">
                {projectsRenderCard}
            </div>
        </PagesWrapper>
    )
}

export default Projects;