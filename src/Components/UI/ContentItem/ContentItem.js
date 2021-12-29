import React from 'react';
import styles from './ContentItem.module.css';

const ContentItem = props => {
    return(
        <div className={styles["content-item"]}>
            <p className={styles["content-item__title"]}>{props.title}</p>
            {props.children}
        </div>
    );
}

export default ContentItem;