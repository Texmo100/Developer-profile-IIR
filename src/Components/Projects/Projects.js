import React, { useState} from 'react'
import GlobalHeader from '../GlobalHeader'
import CardProject from './CardProject'
import FooterSection from '../FooterSection'
import aboutMeData from '../../Data/aboutMeData'

const Projects = () => {
    const [data] = useState(aboutMeData)
    const [projects] = useState(data.projects)

    const projectsRenderCard = projects.map(item => <CardProject key={item.id} project={item}/>)
    return (
        <div className="wrapper-inner-pages">
            <GlobalHeader image="header-image-projects"/>
            <div className="content-page">
                <div className="container-inner-pages">
                    <h1 className="title-page title-page-projects">Projects</h1>
                    <div className="container-cards-projects-page">
                        {projectsRenderCard}
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    )
}

export default Projects