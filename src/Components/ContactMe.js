import React, {Component} from 'react'

class ContactMe extends Component{
    render(){
        return(
            <section className="contact-me">
                <div className=" container container-contact-me">
                    <div className="contact-me-desc">
                        <h4>Get in Touch</h4>
                        <ul className="contact-me-items">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                    <div className="image-contact-me"></div>
                </div>
            </section>
        )
    }
}

export default ContactMe