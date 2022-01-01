import React from 'react';
import ContentItem from '../../../UI/ContentItem/ContentItem';
import ContentItemBoxGroup from '../../../UI/ContentItem/ContentItemBoxGroup';
import ContentItemBox from '../../../UI/ContentItem/ContentItemBox';
import styles from './Skills.module.css';

const Skills = props => {

    const { softSkills, tongues } = props;
    
    const skillRender1 = softSkills.map(item => <li key={item.id} className={styles["skills__item"]}>{item.name}</li>)

    const skillRender2 = tongues.map(item => <li key={item.id} className={styles["skills__item"]}>{item.name}</li>)

    return (
        <ContentItem title='Skills'>
            <ContentItemBoxGroup>
                <ContentItemBox classNameBox="small" classNameTitle="style-02" title="Soft Skills">
                    <ul className={styles["skills"]}>
                        {skillRender1}
                    </ul>
                </ContentItemBox>

                <ContentItemBox classNameBox="small" classNameTitle="style-02" title="Languages">
                    <ul className={styles["skills"]}>
                        {skillRender2}
                    </ul>
                </ContentItemBox>
            </ContentItemBoxGroup>
        </ContentItem>
    );
}

export default Skills;