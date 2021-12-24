import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkedButton.module.css';

const LinkedButton = props => {
    return(
        <Link className={`${styles['button']} ${styles[props.className]}`} to={props.to}>
            {props.children}
        </Link>
    );
}

export default LinkedButton;