import React from 'react';
import { FaCode } from 'react-icons/fa';
import LinkedButton from '../LinkedButton/LinkedButton';
import styles from './CardProject.module.css';

const CardProject = props => {
    const { project } = props;

    return (
        <div className={styles["card-project"]}>
            <div className={styles["card-project__image"]}>
                <FaCode style={{ fontSize: "10rem", color: "rgba(0, 0, 0, 0.5)" }} />
            </div>

            <div className={styles["card-project__info"]}>
                <p className={styles["card-project__info__title"]}>{project.name}</p>
                
                <LinkedButton
                    className="button-project-card" 
                    to={{ pathname: `/projectdetails-${project.name}`, state: project }}
                >
                    View Project
                </LinkedButton>
            </div>
        </div>
    );
}

export default CardProject;