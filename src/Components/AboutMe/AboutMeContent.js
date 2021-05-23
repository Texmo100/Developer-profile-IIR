import React, { useState }from 'react'
import aboutMeData from '../../Data/aboutMeData'
import Profile from './Profile'
import Education from './Education'

const AboutMeContent = () => {
    const [profileData] = useState(aboutMeData) //Array all data
    const [profile] = useState(profileData.profile) //String
    const [education] = useState(profileData.education) //Array

    return(
        <div className="container-about-me-content">
            <Profile profile={profile}/>
            <Education education={education}/>
            <div className="content-item">
                <p className="content-item-title">Skills Set</p>
            </div>
            <div className="content-item">
                <p className="content-item-title">Skills</p>
            </div>
        </div>
    )

}

export default AboutMeContent