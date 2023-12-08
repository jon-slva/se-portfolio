import React, { useEffect, useRef } from 'react';
import headshot1 from '../../assets/images/me.jpg';
import logoJS from '../../assets/images/skills/javascript.svg';
import logoReact from '../../assets/images/skills/react.svg';
import logoHTML from '../../assets/images/skills/html.svg';
import logoSass from '../../assets/images/skills/sass.svg';
import logoThree from '../../assets/images/skills/three-js-logo.svg';
import logoCSS from '../../assets/images/skills/css.svg';
import logoNode from '../../assets/images/skills/node.js.svg';
import logoMysql from '../../assets/images/skills/mysql.svg';
import logoAxios from '../../assets/images/skills/axios.svg';
import logoGit from '../../assets/images/skills/git.svg';
import logoExpress from '../../assets/images/skills/express.svg';
import logoJira from '../../assets/images/skills/jira.svg';
import logoMonday from '../../assets/images/skills/monday-ar21.svg';

import logoGithub from '../../assets/images/skills/github.svg';

import flixPic from '../../assets/images/Flixnet desktop.png';
import mentorPic from '../../assets/images/mentor-me-desktop-2.png';
import AWSPic from '../../assets/images/aws-hackathon-1.png';
import thisPic from '../../assets/images/this-or-that-1.png';

import "./Homepage.scss";
import Project from '../../components/Project/Project';
import Skill from '../../components/Skill/Skill';
import { Link } from 'react-router-dom';

const Homepage = () => {

    return (
        <main>
            <section className="hero" >
                <div className="hero__container">
                    <div>
                        <h1 className="hero__title">Jonathan Silva</h1>
                        <h2 className="hero__subtitle">Software Engineer</h2>
                        {/* <h2 className="hero__subtitle">Fullstack Developer</h2> */}
                    </div>

                    <img className="hero__headshot" src={headshot1} alt="" />

                    <div className="hero__container-text">
                        <p className="hero__bio">
                            Hey! I'm a <b>Software Engineer</b> based in New York. I love learning and trying new things. I'm a multi-instrumentalist, former 3D CAD Designer, Production Manager, Jewelry Desiger, PC tinkerer, and tech gadget hoarder.
                        </p>
                        <Link to="https://github.com/jon-slva" target="_blank" className="hero__github-link">
                            <h3 className="hero__github">Check out my github <img className="hero__github-logo" src={logoGithub} alt="" /></h3>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="skills">
                <h2 className="skills__header">Skills</h2>

                <div className="skills__container">
                    <Skill logoSrc={logoJS} altText="Javascript" title="Javascript" />
                    <Skill logoSrc={logoReact} altText="React" title="React" />
                    <Skill logoSrc={logoHTML} altText="HTML" title="HTML" />
                    <Skill logoSrc={logoCSS} altText="CSS" title="CSS" />
                    <Skill logoSrc={logoSass} altText="Sass" />
                    <Skill logoSrc={logoThree} altText="Three.js" />
                    <Skill logoSrc={logoNode} altText="Node" />
                    <Skill logoSrc={logoMysql} altText="MySQL" />
                    <Skill logoSrc={logoExpress} altText="Express" />
                    <Skill logoSrc={logoAxios} altText="Axios" />
                    <Skill altText="Agile" title="Agile Methodology" />
                    <Skill logoSrc={logoGit} altText="Git" />
                    <Skill altText="Auth" title="User Authentication" />
                    <Skill logoSrc={logoJira} altText="Jira" />
                    <Skill logoSrc={logoMonday} altText="Monday" />
                </div>
            </section>

            <aside className="projects">
                <h2 className="projects__header">Projects</h2>

                <div className="projects-container">
                    <Project
                        title="AWS Hackathon (won)"
                        description="4 teams were tasked with redesigning the interface of the AWS Data Exchange Marketplace. On our team were 2 Software Engineers (myself and my teammate), 2 UX designers, and 1 Data Scientist. According to feedback about the project, My implementation of an AI powered Suggested Datasets section was the deciding factor in our winning the project."
                        imgSrc={AWSPic}
                    />

                    <Project
                        title="Mentor Me"
                        description="Mentor Me is is my bootcamp capstone project. I am passionte about many things, and learning is at the center of that passion. So I made this platform to connect people who want to learn, with experienced people who want to fill the role of a mentor. It utilizes Three.js to render interactions and locations of users on a 3D globe."
                        imgSrc={mentorPic}
                    />
                </div>

                <div className="projects-container">
                    <Project
                        title="Flixnet Movie Picker"
                        description="Flixnet was my first hackathon project. My 2 software engineer teammates and I had 24 hours to ideate and come up with a project using a third party API. This was what we came up with!"
                        imgSrc={flixPic}
                    />

                    <Project
                        title="This or That"
                        description="My second hackathon project with a similar concept as the last, saw us create a platform where people can have fun debating fun or controversial topics either for or against a declaration statement."
                        imgSrc={thisPic}
                    />
                </div>

            </aside>

        </main>
    )
}

export default Homepage;
