import React from 'react';
import ContentItem from '../../UI/ContentItem/ContentItem';
import ContentItemBoxGroup from '../../UI/ContentItem/ContentItemBoxGroup';

const Skills = props => {
    
    const skillRender1 = props.softSkills.map(item => <li key={item.id} className="skill-item">{item.name}</li>)

    const skillRender2 = props.tongues.map(item => <li key={item.id} className="skill-item">{item.name}</li>)

    return (
        <ContentItem title='Skills'>
            <ContentItemBoxGroup>
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
            </ContentItemBoxGroup>
        </ContentItem>
    );
}

export default Skills;