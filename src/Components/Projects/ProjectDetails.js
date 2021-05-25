import React from 'react'
import GlobalHeader from '../GlobalHeader'
import FooterSection from '../FooterSection'

const ProjectDetails = (props) => {
    return (
        <div className="wrapper-inner-pages">
            <GlobalHeader image="header-image-project-details" />
            <div className="content-page">
                <div className="container-inner-pages">
                    <p>{props.number}</p>
                </div>
            </div>
            <FooterSection />
        </div>
    )
}

export default ProjectDetails