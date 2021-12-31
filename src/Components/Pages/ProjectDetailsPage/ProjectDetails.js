import React from 'react';
import { useLocation } from "react-router-dom";
import PagesWrapper from '../../UI/PagesWrapper/PagesWrapper';
import ProjectDetailsContent from './ProjectDetailsContent/ProjectDetailsContent';

const ProjectDetails = () => {
    const location = useLocation()
    const { state } = location //all project data

    return (
        <PagesWrapper classNameTitle="left" title={state.name} image="project-details">
            <ProjectDetailsContent project={state}/>
        </PagesWrapper>
    );
}

export default ProjectDetails;