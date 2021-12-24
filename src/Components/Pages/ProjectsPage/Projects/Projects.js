import React, { useState} from 'react';
import GlobalHeader from '../../../UI/GlobalHeader';
import CardProject from '../Sections/CardProject';
import FooterSection from '../../../UI/FooterSection';
import aboutMeData from '../../../../data/aboutMeData';

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

export default Projects;