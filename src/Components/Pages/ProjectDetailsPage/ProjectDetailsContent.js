import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { SiDotNet } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiJava } from 'react-icons/si';
import { SiCsharp } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiMicrosoftsqlserver } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';

const ProjectDetailsContent = (props) => {
    const { project } = props
    const { frameworks } = project //Array
    const { languages } = project //Array
    const { database } = project //Array
    const { sourceCode } = project //String

    //Frameworks Render
    const frameworkRender = frameworks.map(item => {
        if (item.name === ".Net Core") {
            return (
                <div className="icon" key={item.id}>
                    <SiDotNet style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className="icon-name">{item.name}</p>
                </div>
            )
        }else if(item.name === "Boostrap"){
            return (
                <div className="icon" key={item.id}>
                    <SiBootstrap style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className="icon-name">{item.name}</p>
                </div>
            )
        }else if(item.name === "React.js"){
            return (
                <div className="icon" key={item.id}>
                    <FaReact style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className="icon-name">{item.name}</p>
                </div>
            )
        }else if(item.name === "React Native"){
            return (
                <div className="icon" key={item.id}>
                    <FaReact style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className="icon-name">{item.name}</p>
                </div>
            )
        }
        return (
            <div className="icon" key={item.id}>
                <p className="icon-name">{item.name}</p>
            </div>
        )
    })

    //Database Render
    const databaseRender = database.map(item => {
        if(item.name === "Microsoft SQL Server"){
            return(
                <div className="icon" key={item.id}>
                    <SiMicrosoftsqlserver style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className="icon-name">{item.name}</p>
                </div>
            )
        }else if(item.name === "Firebase"){
            return (
                <div className="icon" key={item.id}>
                    <SiFirebase style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className="icon-name">{item.name}</p>
                </div>
            )
        }
        return (
            <div className="icon" key={item.id}>
                <p className="icon-name">{item.name}</p>
            </div>
        )
    })

    //Languages Render
    const languagesRender = languages.map(item => {
        if(item.name === "HTML5"){
            return (
                <div className="icon" key={item.id}>
                    <AiFillHtml5 style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className="icon-name">{item.name}</p>
                </div>
            )
        }else if(item.name === "CSS3"){
            return (
                <div className="icon" key={item.id}>
                    <DiCss3 style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className="icon-name">{item.name}</p>
                </div>
            )
        }else if(item.name === "JavaScript"){
            return (
                <div className="icon" key={item.id}>
                    <SiJavascript style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className="icon-name">{item.name}</p>
                </div>
            )
        }else if(item.name === "C#"){
            return (
                <div className="icon" key={item.id}>
                    <SiCsharp style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className="icon-name">{item.name}</p>
                </div>
            )
        }else if(item.name === "Java"){
            return (
                <div className="icon" key={item.id}>
                    <SiJava style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className="icon-name">{item.name}</p>
                </div>
            )
        }else if(item.name === "Python"){
            return (
                <div className="icon" key={item.id}>
                    <SiPython style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className="icon-name">{item.name}</p>
                </div>
            )
        }
        return (
            <div className="icon" key={item.id}>
                <p className="icon-name">{item.name}</p>
            </div>
        )
    })

    //Source Code Render
    const sourceCodeRender = sourceCode === "private" ? <p className="content-item-text source-code" style={{color: "red"}}>- {sourceCode} -</p> : 
    <p className="content-item-text source-code" style={{color: "#2980B9"}}>- {sourceCode} -</p>

    return (
        <div className="container-about-me-content">
            <div className="content-item">
                <p className="content-item-title">Description</p>
                <p className="content-item-text">{project.description}</p>
            </div>

            <div className="content-item">
                <p className="content-item-title">Skills Set Used</p>
                <div className="content-item-box-wrapper">

                    <div className="box-style left-box">
                        <p className="box-title-skills-set">Frameworks</p>
                        <div className="icon-container">{frameworkRender}</div>
                    </div>

                    <div className="box-style right-box">
                        <p className="box-title-skills-set">Database</p>
                        <div className="icon-container">{databaseRender}</div>
                    </div>

                    <div className="box-style full-box">
                        <p className="box-title-skills-set">Languages</p>
                        <div className="icon-container">{languagesRender}</div>
                    </div>

                </div>
            </div>

            <div className="content-item">
                <p className="content-item-title">Source Code</p>
                {sourceCodeRender}
            </div>
        </div>
    )
}

export default ProjectDetailsContent