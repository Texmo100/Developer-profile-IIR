import React, {Component} from 'react'
import ProjectCards from './ProjectCards'

class Projects extends Component{
    render(){
        return(
            <main className="projects">
                <div className="container container-projects">
                    <h3>Projects</h3>
                    <ProjectCards />
                    <button className="button-projects">View all projects</button>
                </div>
            </main>
        )
    }
}

export default Projects