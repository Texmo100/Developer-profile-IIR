import React from 'react'

const Skills = (props) => {
    const skillRender1 = props.softSkills.map(item => <li className="skill-item">{item}</li>)
    const skillRender2 = props.tongues.map(item => <li className="skill-item">{item}</li>)
    return (
        <div className="content-item">
            <p className="content-item-title">Skills</p>
            <div className="content-item-box-wrapper">

                <div className="box-style left-box">
                    <p className="box-title-skills">Soft Skills</p>
                    <ul className="skills-container">
                        {skillRender1}
                    </ul>
                </div>

                <div className="box-style right-box">
                    <p className="box-title-skills">Languages</p>
                    <ul className="skills-container">
                        {skillRender2}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills