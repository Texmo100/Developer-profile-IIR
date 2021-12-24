import React, { useState} from 'react';
import CardProject from './CardProject';
import aboutMeData from '../../../../data/aboutMeData';

const ProjectCards = () => {
    const [data] = useState(aboutMeData)
    const [projects] = useState(data.projects)

    const projectsRenderCard = projects.map(item => <CardProject key={item.id} project={item}/>)

    return(
        <div className="container-cards">
            {projectsRenderCard}
        </div>
    )
}

export default ProjectCards;