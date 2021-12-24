import React, {Component} from 'react';
import MainImageSection from '../Sections/MainImageSection';
import AboutMeSection from '../Sections/AboutMeSection';
import ProjectsSection from '../Sections/ProjectsSection';
import ContactMeSection from '../Sections/ContactMeSection';
import FooterSection from '../../../UI/FooterSection';

class Home extends Component{
    render(){
        return(
            <div className="wrapper-home">
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