import React from 'react';
import PagesWrapper from '../../UI/PagesWrapper/PagesWrapper';
import ProjectCards from '../../UI/ProjectCards/ProjectCards';

const Projects = () => {
    return (
        <PagesWrapper classNameTitle="center" title="Projects">
            <ProjectCards />
        </PagesWrapper>
    );
}

export default Projects;