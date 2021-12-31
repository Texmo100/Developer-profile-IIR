import React from 'react';
import PagesWrapper from '../../UI/PagesWrapper/PagesWrapper';
import ProjectCards from '../../UI/ProjectCards/ProjectCards';

const Projects = () => {
    return (
        <PagesWrapper classNameTitle="center" title="Projects" image="projects">
            <ProjectCards />
        </PagesWrapper>
    );
}

export default Projects;