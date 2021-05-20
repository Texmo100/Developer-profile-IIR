import React, {Component} from 'react'
import ProjectCards from '../Projects/ProjectCards'
import {Link} from 'react-router-dom'

class ProjectsSection extends Component{
    render(){
        return(
            <main className="projects">
                <div className="container container-projects">
                    <h3>Projects</h3>
                    <ProjectCards />
                    <Link className="button button-all-projects" to="/projects">View all projects</Link>
                </div>
            </main>
        )
    }
}

export default ProjectsSection