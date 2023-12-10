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

import "./Skills.scss";
import Skill from '../Skill/Skill';

const Skills = () => {
    return (
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
                <Skill altText="APIs" title="REST APIs" />
                <Skill logoSrc={logoJira} altText="Jira" />
                <Skill logoSrc={logoMonday} altText="Monday" />
            </div>
        </section>
    )
}

export default Skills
