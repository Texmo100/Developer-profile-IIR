import React from 'react'

const ProjectDetailsContent = (props) => {
    const { project } = props

    return (
        <div className="container-about-me-content">
            <div className="content-item">
                <p className="content-item-title">Description</p>
                <p className="content-item-text">{project.description}</p>
            </div>
        </div>
    )
}

export default ProjectDetailsContent