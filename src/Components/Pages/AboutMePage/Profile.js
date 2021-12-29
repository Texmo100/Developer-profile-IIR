import React from 'react'

const Profile = (props) => {
    return (
        <div className="content-item">
            <p className="content-item-title">Profile</p>
            <p className="content-item-text">{props.profile}</p>
        </div>
    )
}

export default Profile