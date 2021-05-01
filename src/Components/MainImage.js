import React, {Component} from 'react'
import NavBar from './Navbar'

class MainImage extends Component{
    render(){
        return(
            <section className="main-image">
                <div className="image-layer">
                    <NavBar />
                    <div className="container container-main-image">
                        <h1 className="f-400">Hey there, i'm Isaac I.R. a Frontend Developer</h1>
                        <button className="button">Let's talk</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default MainImage