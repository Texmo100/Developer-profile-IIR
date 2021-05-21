import React from 'react'
import { MdMail } from 'react-icons/md';
import { BsPhone } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FaGitlab } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div className="container-contact-info">
            <ul className="contact-info">
                <li className="contact-item">
                    <MdMail style={{ fontSize: "3rem", color: "#8B008B" }} />
                    <p>ir.isaac1000@gmail.com</p>
                </li>
                <li className="contact-item">
                    <BsPhone style={{ fontSize: "3rem", color: "#4097CC" }} />
                    <p>6621194655</p>
                </li>
                <li className="contact-item">
                    <FaLinkedin style={{ fontSize: "3rem", color: "#00FA9A" }} />
                    <p>Isaac Iñiguez Ruiz</p>
                </li>
                <li className="contact-item">
                    <AiFillGithub style={{ fontSize: "3rem", color: "aqua" }} />
                    <p>Texmo100</p>
                </li>
                <li className="contact-item">
                    <FaGitlab style={{ fontSize: "3rem", color: "#A0522D" }} />
                    <p>Texmo100</p>
                </li>
            </ul>
        </div>
    )
}

export default ContactInfo