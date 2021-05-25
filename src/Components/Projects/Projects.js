import React from 'react'
import GlobalHeader from '../GlobalHeader'
import CardProject from './CardProject'
import FooterSection from '../FooterSection'

const Projects = () => {
    return (
        <div className="wrapper-inner-pages">
            <GlobalHeader image="header-image-projects"/>
            <div className="content-page">
                <div className="container-inner-pages">
                    <h1 className="title-page title-page-projects">Projects</h1>
                    <div className="container-cards-projects-page">
                        <CardProject />
                        <CardProject />
                        <CardProject />
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    )
}

export default Projects