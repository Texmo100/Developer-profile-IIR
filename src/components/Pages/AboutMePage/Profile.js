import React from 'react';
import ContentItem from '../../UI/ContentItem/ContentItem';
import ContentItemText from '../../UI/ContentItem/ContentItemText';

const Profile = props => {
    return (
        <ContentItem title="Profile">
            <ContentItemText>{props.profile}</ContentItemText>
        </ContentItem>
    );
}

export default Profile;