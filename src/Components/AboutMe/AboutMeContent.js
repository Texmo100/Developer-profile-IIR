import React, { useState }from 'react'
import aboutMeData from '../../Data/aboutMeData'
import Profile from './Profile'
import Education from './Education'
import SkillsSet from './SkillsSet'
import Skills from './Skills'

const AboutMeContent = () => {
    const [profileData] = useState(aboutMeData) //Array all data
    const [profile] = useState(profileData.profile) //String
    const [education] = useState(profileData.education) //Array
    const [softSkills] = useState(profileData.softSkills) //Array
    const [tongues] = useState(profileData.tongues) //Array

    return(
        <div className="container-about-me-content">
            <Profile profile={profile}/>
            <Education education={education}/>
            <SkillsSet />
            <Skills softSkills={softSkills} tongues={tongues}/>
        </div>
    )

}

export default AboutMeContent