import React, {Component} from 'react'
import StickyNav from './StickyNav'


class MainImage extends Component{
    render(){
        return(
            <div className="main-image">
                <div className="image-layer">
                    <div className="container">
                        <StickyNav />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainImage