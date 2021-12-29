import React from 'react';
import ContentItem from '../../UI/ContentItem/ContentItem';
import ContentItemText from '../../UI/ContentItem/ContentItemText';

const Education = props => {
    return (
        <ContentItem title='Education'>
            <ContentItemText classNameText='bold'>
                {`${props.education[0].degree} in ${props.education[0].name} (2016 - 2021).`}
            </ContentItemText>

            <ContentItemText>
                {props.education[0].description}
            </ContentItemText>
        </ContentItem>
    );
}

export default Education;