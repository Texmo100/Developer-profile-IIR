import React from 'react';
import ContentItem from '../../../UI/ContentItem/ContentItem';
import ContentItemText from '../../../UI/ContentItem/ContentItemText';
import ContentItemBoxGroup from '../../../UI/ContentItem/ContentItemBoxGroup';
import ContentItemBox from '../../../UI/ContentItem/ContentItemBox';
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
import styles from './ProjectDetailsContent.module.css';

const ProjectDetailsContent = props => {
    const { project } = props;
    const { frameworks, languages, database, sourceCode } = project;

    //Frameworks Render
    const frameworkRender = frameworks.map(item => {
        if (item.name === ".Net Core") {
            return (
                <div className={styles["icon"]} key={item.id}>
                    <SiDotNet style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className={styles["icon__name"]}>{item.name}</p>
                </div>
            )
        }else if(item.name === "Boostrap"){
            return (
                <div className={styles["icon"]} key={item.id}>
                    <SiBootstrap style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className={styles["icon__name"]}>{item.name}</p>
                </div>
            )
        }else if(item.name === "React.js"){
            return (
                <div className={styles["icon"]} key={item.id}>
                    <FaReact style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className={styles["icon__name"]}>{item.name}</p>
                </div>
            )
        }else if(item.name === "React Native"){
            return (
                <div className={styles["icon"]} key={item.id}>
                    <FaReact style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className={styles["icon__name"]}>{item.name}</p>
                </div>
            )
        }
        return (
            <div className={styles["icon"]} key={item.id}>
                <p className={styles["icon__name"]}>{item.name}</p>
            </div>
        )
    })

    //Database Render
    const databaseRender = database.map(item => {
        if(item.name === "Microsoft SQL Server"){
            return(
                <div className={styles["icon"]} key={item.id}>
                    <SiMicrosoftsqlserver style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className={styles["icon__name"]}>{item.name}</p>
                </div>
            )
        }else if(item.name === "Firebase"){
            return (
                <div className={styles["icon"]} key={item.id}>
                    <SiFirebase style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className={styles["icon__name"]}>{item.name}</p>
                </div>
            )
        }
        return (
            <div className={styles["icon"]} key={item.id}>
                <p className={styles["icon__name"]}>{item.name}</p>
            </div>
        )
    })

    //Languages Render
    const languagesRender = languages.map(item => {
        if(item.name === "HTML5"){
            return (
                <div className={styles["icon"]} key={item.id}>
                    <AiFillHtml5 style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className={styles["icon__name"]}>{item.name}</p>
                </div>
            )
        }else if(item.name === "CSS3"){
            return (
                <div className={styles["icon"]} key={item.id}>
                    <DiCss3 style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className={styles["icon__name"]}>{item.name}</p>
                </div>
            )
        }else if(item.name === "JavaScript"){
            return (
                <div className={styles["icon"]} key={item.id}>
                    <SiJavascript style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className={styles["icon__name"]}>{item.name}</p>
                </div>
            )
        }else if(item.name === "C#"){
            return (
                <div className={styles["icon"]} key={item.id}>
                    <SiCsharp style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className={styles["icon__name"]}>{item.name}</p>
                </div>
            )
        }else if(item.name === "Java"){
            return (
                <div className={styles["icon"]} key={item.id}>
                    <SiJava style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className={styles["icon__name"]}>{item.name}</p>
                </div>
            )
        }else if(item.name === "Python"){
            return (
                <div className={styles["icon"]} key={item.id}>
                    <SiPython style={{fontSize: item.fontSize, color: item.color}}/>
                    <p className={styles["icon__name"]}>{item.name}</p>
                </div>
            )
        }
        return (
            <div className={styles["icon"]} key={item.id}>
                <p className={styles["icon__name"]}>{item.name}</p>
            </div>
        )
    })

    //Source Code Render
    const sourceCodeRender = sourceCode === "private" ? <p className={styles["source-code"]} style={{color: "red"}}>- {sourceCode} -</p> : 
    <p className={styles["source-code"]} style={{color: "#2980B9"}}>- {sourceCode} -</p>

    return (
        <div className={styles["project-details-content"]}>
            <ContentItem title="Description">
                <ContentItemText>{project.description}</ContentItemText>
            </ContentItem>

            <ContentItem title="Skills Set Used">
                <ContentItemBoxGroup>

                    <ContentItemBox classNameBox="small" classNameTitle="style-01" title="Frameworks">
                        <div className={styles["group-icons"]}>{frameworkRender}</div>
                    </ContentItemBox>

                    <ContentItemBox classNameBox="small" classNameTitle="style-01" title="Database">
                        <div className={styles["group-icons"]}>{databaseRender}</div>
                    </ContentItemBox>

                    <ContentItemBox classNameBox="big" classNameTitle="style-01" title="Languages">
                        <div className={styles["group-icons"]}>{languagesRender}</div>
                    </ContentItemBox>

                </ContentItemBoxGroup>
            </ContentItem>

            <ContentItem title="Source Code">
                {sourceCodeRender}
            </ContentItem>
        </div>
    );
}

export default ProjectDetailsContent;