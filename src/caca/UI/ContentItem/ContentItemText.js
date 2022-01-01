import React from 'react';
import styles from './ContentItemText.module.css';

const ContentItemText = props => {
    if(props.classNameText === 'bold'){
        return (
            <p className={`${styles['content-item__text']} ${styles['content-item__text--bold']}`}>
                {props.children}
            </p>
        );
    }

    return (
        <p className={styles['content-item__text']}>
            {props.children}
        </p>
    );
}

export default ContentItemText;