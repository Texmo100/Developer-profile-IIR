import React from 'react'

const Education = (props) => {
    return (
        <div className="content-item">
            <p className="content-item-title">Education</p>
            <p className="content-item-text">{`${props.education[0].degree} in ${props.education[0].name} (2016 - 2021)`}</p>
            <p className="content-item-text">{props.education[0].description}</p>
        </div>
    )
}

export default Education