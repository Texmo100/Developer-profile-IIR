import React from 'react'
import { MdMail } from 'react-icons/md';
import { BsPhone } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FaGitlab } from 'react-icons/fa';
import styles from './ContactMeSection.module.css';

const ContactMeSection = () => {
    return (
        <section className={styles["contact-me"]}>
            <div className={`${styles['delimiter']} ${styles['contact-me__content']}`}>
                <div className={styles["contact-me__content__desc"]}>
                    <h4>Get in Touch</h4>
                    <ul className={styles["contact-me__content__desc__items"]}>
                        <li>
                            <MdMail style={{ fontSize: "3rem", color: "#8B008B" }} />
                            <p>ir.isaac1000@gmail.com</p>
                        </li>
                        <li>
                            <BsPhone style={{ fontSize: "3rem", color: "#4097CC" }} />
                            <p>6621194655</p>
                        </li>
                        <li>
                            <FaLinkedin style={{ fontSize: "3rem", color: "#00FA9A" }} />
                            <p>Isaac I.R.</p>
                        </li>
                        <li>
                            <AiFillGithub style={{ fontSize: "3rem", color: "aqua" }} />
                            <p>Texmo100</p>
                        </li>
                        <li>
                            <FaGitlab style={{ fontSize: "3rem", color: "#A0522D" }} />
                            <p>Texmo100</p>
                        </li>
                    </ul>
                </div>

                <div className={styles["contact-me__content__image"]}></div>
            </div>
        </section>
    );
}

export default ContactMeSection;