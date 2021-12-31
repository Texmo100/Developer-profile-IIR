import React from 'react';
import PagesWrapper from '../../UI/PagesWrapper/PagesWrapper';
import ContactInfo from './ContactInfo/ContactInfo';


const ContactMe = () => {
    return (
        <PagesWrapper classNameTitle="center" title="Contact me" image="contact-me">
            <ContactInfo />
        </PagesWrapper>
    )
}

export default ContactMe;