import React from 'react'
import GlobalHeader from '../GlobalHeader'
import FooterSection from '../FooterSection'

const AboutMe = () => {
  return (
    <div className="wrapper-inner-pages">
      <GlobalHeader image="header-image-about-me"/>
      <div className="content-page">
        <div className="container-inner-pages"></div>
      </div>
      <FooterSection />
    </div>
  )
}

export default AboutMe