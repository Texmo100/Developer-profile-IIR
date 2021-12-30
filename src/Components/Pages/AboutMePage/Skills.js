import React from 'react';
import ContentItem from '../../UI/ContentItem/ContentItem';
import ContentItemBoxGroup from '../../UI/ContentItem/ContentItemBoxGroup';
import ContentItemBox from '../../UI/ContentItem/ContentItemBox';

const Skills = props => {
    
    const skillRender1 = props.softSkills.map(item => <li key={item.id} className="skill-item">{item.name}</li>)

    const skillRender2 = props.tongues.map(item => <li key={item.id} className="skill-item">{item.name}</li>)

    return (
        <ContentItem title='Skills'>
            <ContentItemBoxGroup>
                <ContentItemBox classNameBox="small" classNameTitle="style-02" title="Soft Skills">
                    <ul className="skills-container">
                        {skillRender1}
                    </ul>
                </ContentItemBox>

                <ContentItemBox classNameBox="small" classNameTitle="style-02" title="Languages">
                    <ul className="skills-container">
                        {skillRender2}
                    </ul>
                </ContentItemBox>
            </ContentItemBoxGroup>
        </ContentItem>
    );
}

export default Skills;