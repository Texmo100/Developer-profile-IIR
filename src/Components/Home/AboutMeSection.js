import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class AboutMeSection extends Component{
    render(){
        return(
            <section className="about-me">
                <div className=" container container-about-me">
                    <div className="image-profile"></div>
                    <div className="image-profile-desc">
                        <h2 className="f-700">About me</h2>
                        <Link className="button button-about-me" to="/aboutme">View more</Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMeSection