import React from 'react'

const CardProject = () => {
    return(
        <div className="card-project">
            <div className="image-project"></div>
            <div className="project-info">
                <p className="project-title">project title</p>
                <p className="project-desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <button className="button-project-card">View Project</button>
            </div>
        </div>
    )
}

export default CardProject