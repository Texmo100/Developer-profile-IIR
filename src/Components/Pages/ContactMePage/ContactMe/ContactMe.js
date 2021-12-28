import React from 'react';
import GlobalHeader from '../../../UI/GlobalHeader';
import ContactInfo from '../Sections/ContactInfo';
import FooterSection from '../../../UI/FooterSection/FooterSection';


const ContactMe = () => {
    return (
        <div className="wrapper-inner-pages">
            <GlobalHeader image="header-image-contact-me"/>
            <div className="content-page">
                <div className="container-inner-pages">
                    <h1 className="title-page title-page-contact-me">Contact me</h1>
                    <ContactInfo />
                </div>
            </div>
            <FooterSection />
        </div>
    )
}

export default ContactMe;