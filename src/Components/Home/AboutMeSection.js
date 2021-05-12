import React, {Component} from 'react'


class AboutMeSection extends Component{
    render(){
        return(
            <section className="about-me">
                <div className=" container container-about-me">
                    <div className="image-profile"></div>
                    <div className="image-profile-desc">
                        <h2 className="f-700">About me</h2>
                        <button className="button-about-me">View more</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMeSection