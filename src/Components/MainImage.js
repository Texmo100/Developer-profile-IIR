import React, {Component} from 'react'
import NavBar from './Navbar'

class MainImage extends Component{
    render(){
        return(
            <div className="main-image">
                <div className="image-layer">
                    <NavBar />
                    <div className="container"></div>
                </div>
            </div>
        )
    }
}

export default MainImage