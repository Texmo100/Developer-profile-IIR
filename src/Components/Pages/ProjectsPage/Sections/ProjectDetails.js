import React from 'react';
import GlobalHeader from '../../../UI/GlobalHeader';
import FooterSection from '../../../UI/FooterSection';
import {useLocation} from "react-router-dom";
import ProjectDetailsContent from './ProjectDetailsContent'

const ProjectDetails = () => {
    const location = useLocation()
    const {state} = location //all project data

    return (
        <div className="wrapper-inner-pages">
            <GlobalHeader image="header-image-project-details" />
            <div className="content-page">
                <div className="container-inner-pages">
                    <h1 className="title-page title-page-about-me">{state.name}</h1>
                    <ProjectDetailsContent project={state}/>
                </div>
            </div>
            <FooterSection />
        </div>
    )
}

export default ProjectDetails;