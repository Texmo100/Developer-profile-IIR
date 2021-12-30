import React from 'react';
import styles from './ContentItemBox.module.css';

const ContentItemBox = props => {
    return (
        <div className={`${styles['box']} ${styles['box--'+props.classNameBox]}`}>
            <p className={`${styles['box__title']} ${styles['box__title--'+props.classNameTitle]}`}>
                {props.title}
            </p>
            
            {props.children}
        </div>
    );
}

export default ContentItemBox;