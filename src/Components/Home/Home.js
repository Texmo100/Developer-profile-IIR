import React, {Component} from 'react'
import MainImageSection from './MainImageSection'
import AboutMeSection from './AboutMeSection'
import ProjectsSection from './ProjectsSection'
import ContactMeSection from './ContactMeSection'
import FooterSection from '../FooterSection'

class Home extends Component{
    render(){
        return(
            <div className="wrapper">
              <MainImageSection />
              <AboutMeSection />
              <ProjectsSection />
              <ContactMeSection />
              <FooterSection />
            </div>
        )
    }
}

export default Home