import React from 'react'
/*import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { MdPhonelink } from 'react-icons/md';
import { SiDotNet } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiJava } from 'react-icons/si';
import { SiCsharp } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { SiMicrosoftsqlserver } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { FaTrello } from 'react-icons/fa';
import { SiAdobexd } from 'react-icons/si';*/

const ProjectDetailsContent = (props) => {
    const { project } = props

    return (
        <div className="container-about-me-content">
            <div className="content-item">
                <p className="content-item-title">Description</p>
                <p className="content-item-text">{project.description}</p>
            </div>
        </div>
    )
}

export default ProjectDetailsContent