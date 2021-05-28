import React from 'react'
import GlobalHeader from '../GlobalHeader'
import FooterSection from '../FooterSection'
import {useLocation} from "react-router-dom";

const ProjectDetails = () => {
    const location = useLocation()
    const {state} = location //all project data

    return (
        <div className="wrapper-inner-pages">
            <GlobalHeader image="header-image-project-details" />
            <div className="content-page">
                <div className="container-inner-pages">
                    <p>{state.name}</p>
                </div>
            </div>
            <FooterSection />
        </div>
    )
}

export default ProjectDetails