import React from 'react'
import GlobalHeader from '../GlobalHeader'
import FooterSection from '../FooterSection'
import AboutMeContent from './AboutMeContent'

const AboutMe = () => {
  return (
    <div className="wrapper-inner-pages">
      <GlobalHeader image="header-image-about-me"/>
      <div className="content-page">
        <div className="container-inner-pages">
          <h1 className="title-page title-page-about-me">About me</h1>
          <AboutMeContent />
        </div>
      </div>
      <FooterSection />
    </div>
  )
}

export default AboutMe