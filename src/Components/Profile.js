import React, {Component} from 'react'
import Image from './Image'
import Description from './Description'

class Profile extends Component{
    render(){
        return(
            <div className="profile-card">
                <Image />
                <Description />
            </div>
        )
    }
}

export default Profile