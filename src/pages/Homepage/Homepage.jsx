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

import "./Homepage.scss";

const Homepage = () => {

    return (
        <main>
            <section className="hero" >
                <div className="hero__container">
                    <div className="hero__container-text">
                        <h1 className="hero__title">Jonathan Silva</h1>
                        <h2 className="hero__subtitle">Software Engineer</h2>
                        <h2 className="hero__subtitle">Fullstack Developer</h2>
                    </div>

                    <img className="hero__headshot" src={headshot1} alt="" />
                </div>
            </section>

            <section className="skills">
                <h2 className="skills__header">Skills</h2>

                <div className="skills__container">
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoJS} alt="Javascript" />
                        <p className="skills__container--logo-title">Javascript</p>
                    </article>
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoReact} alt="React" />
                        <p className="skills__container--logo-title">React</p>
                    </article>
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoHTML} alt="HTML" />
                        {/* <p className="skills__container--logo-title">HTML</p> */}
                    </article>
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoCSS} alt="CSS" />
                        {/* <p className="skills__container--logo-title">HTML</p> */}
                    </article>
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoSass} alt="Sass" />
                        {/* <p className="skills__container--logo-title">Sass</p> */}
                    </article>
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoThree} alt="Three.js" />
                        {/* <p className="skills__container--logo-title">Three.js</p> */}
                    </article>
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoNode} alt="Node" />
                        {/* <p className="skills__container--logo-title">Node.js</p> */}
                    </article>
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoMysql} alt="MySQL" />
                        {/* <p className="skills__container--logo-title">MySQL</p> */}
                    </article>
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoAxios} alt="Axios" />
                        {/* <p className="skills__container--logo-title">Axios</p> */}
                    </article>
                    <article className='skills__container--logo-wrap'>
                        {/* <img className="skills__container--logo" src={logoJira} alt="Jira" /> */}
                        <p className="skills__container--logo-title">REST&nbsp;APIs</p>
                    </article>
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoExpress} alt="Jira" />
                        {/* <p className="skills__container--logo-title">Express</p> */}
                    </article>
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoGit} alt="Git" />
                        {/* <p className="skills__container--logo-title">Git</p> */}
                    </article>
                    <article className='skills__container--logo-wrap'>
                        {/* <img className="skills__container--logo" src={logoGit} alt="Agile" /> */}
                        <p className="skills__container--logo-title">Agile Methodology</p>
                    </article>
                    <article className='skills__container--logo-wrap'>
                        {/* <img className="skills__container--logo" src={logoGit} alt="Agile" /> */}
                        <p className="skills__container--logo-title">Authentication</p>
                    </article>
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoJira} alt="Jira" />
                        {/* <p className="skills__container--logo-title">Jira</p> */}
                    </article>
                    <article className='skills__container--logo-wrap'>
                        <img className="skills__container--logo" src={logoMonday} alt="Monday" />
                    </article>
                </div>
            </section>

            <aside className="projects">
                <h2 className="projects__header">Projects</h2>

                <article className='project'>
                    <h3 className="project__title">AWS Hackathon (won)</h3>
                    <img src="" alt="" className="project__img" />
                    <p className="project__description">4 teams were tasked with redesigning the interface of the AWS Data Exchange Marketplace. On our team were 2 <b>Software Engineers</b> (myself and my teammate), 2 <b>UX designers</b>, and 1 <b>Data Scientist</b>. According to feedback about the project, My implementation of an AI powered Suggested Datasets section was the deciding factor in our winning the project. </p>
                </article>

            </aside>

            <aside className="github">
                <h2 className="github__header">My Github</h2>

            </aside>
        </main>
    )
}

export default Homepage;
