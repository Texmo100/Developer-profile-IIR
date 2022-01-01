import React from 'react';
import styles from './ContentItemBoxGroup.module.css';

const ContentItemBoxGroup = props => {
    return (
        <div className={styles['content-item-box-group']}>
            {props.children}
        </div>
    );
}

export default ContentItemBoxGroup;