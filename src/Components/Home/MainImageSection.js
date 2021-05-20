import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class MainImageSection extends Component{
    render(){
        return(
            <section className="main-image">
                <div className="image-layer">
                    <div className="container container-main-image">
                        <h1 className="f-400">Hey there, i'm Isaac I.R. a Frontend Developer</h1>
                        <Link className="button button-main-image" to="/contactme">Let's talk</Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default MainImageSection