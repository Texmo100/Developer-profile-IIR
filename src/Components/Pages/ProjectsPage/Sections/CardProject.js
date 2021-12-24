import React from 'react'
import { FaCode } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const CardProject = (props) => {
    const {project} = props

    return(
        <div className="card-project">
            <div className="image-project">
                <FaCode style={{fontSize: "10rem", color: "rgba(0, 0, 0, 0.5)"}}/>
            </div>
            <div className="project-info">
                <p className="project-title">{project.name}</p>
                <Link className="button button-project-card" to={{pathname: `/projectdetails-${project.name}`, state: project}}>View Project</Link>
            </div>
        </div>
    )
}

export default CardProject