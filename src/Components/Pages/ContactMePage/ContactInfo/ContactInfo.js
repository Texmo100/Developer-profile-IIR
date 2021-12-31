import React from 'react'
import { MdMail } from 'react-icons/md';
import { BsPhone } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FaGitlab } from 'react-icons/fa';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
    return (
        <div className={styles["contact-info"]}>
            <ul className={styles["contact-info-content"]}>
                <li className={styles["contact-info-content__item"]}>
                    <MdMail style={{ fontSize: "3rem", color: "#166695" }} />
                    <p>ir.isaac1000@gmail.com</p>
                </li>
                <li className={styles["contact-info-content__item"]}>
                    <BsPhone style={{ fontSize: "3rem", color: "black" }} />
                    <p>6621194655</p>
                </li>
                <li className={styles["contact-info-content__item"]}>
                    <FaLinkedin style={{ fontSize: "3rem", color: "#166695" }} />
                    <p>Isaac I.R.</p>
                </li>
                <li className={styles["contact-info-content__item"]}>
                    <AiFillGithub style={{ fontSize: "3rem", color: "black" }} />
                    <p>Texmo100</p>
                </li>
                <li className={styles["contact-info-content__item"]}>
                    <FaGitlab style={{ fontSize: "3rem", color: "#FF5733" }} />
                    <p>Texmo100</p>
                </li>
            </ul>
        </div>
    );
}

export default ContactInfo;