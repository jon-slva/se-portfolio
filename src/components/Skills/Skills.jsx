import logoJS from '../../assets/images/skills/javascript.svg';
import logoReact from '../../assets/images/skills/react.svg';
import logoNextJS from '../../assets/images/skills/Nextjs.svg';
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
import logoReactNative from '../../assets/images/skills/react-native.svg';
import logoCapacitor from '../../assets/images/skills/capacitorjs.svg';
import logoFigma from '../../assets/images/skills/figma.svg';
import logoTypeScript from '../../assets/images/skills/typescript.svg';
import logoTailwind from '../../assets/images/skills/tailwind.svg';
// import logoPython from '../../assets/images/skills/python.svg';

import "./Skills.scss";
import Skill from '../Skill/Skill';

const Skills = () => {
    return (
        <section className="skills">
            <h2 className="skills__header">Skills</h2>

            <div className="skills__container">
                <Skill logoSrc={logoJS} altText="JavaScript" title="Javascript" />
                <Skill logoSrc={logoTypeScript} altText="TypeScript" title="TypeScript" />
                <Skill logoSrc={logoReact} altText="React" title="React" />
                <Skill logoSrc={logoReactNative} altText="React Native" title="React Native" />
                <Skill logoSrc={logoNextJS} altText="Next.js" />
                <Skill logoSrc={logoCapacitor} altText="Capacitor" />
                <Skill logoSrc={logoHTML} altText="HTML" title="HTML" />
                <Skill logoSrc={logoCSS} altText="CSS" title="CSS" />
                <Skill logoSrc={logoSass} altText="Sass" />
                <Skill logoSrc={logoTailwind} altText="Tailwind" />
                <Skill logoSrc={logoThree} altText="Three.js" />
                <Skill logoSrc={logoNode} altText="Node" />
                <Skill logoSrc={logoMysql} altText="MySQL" />
                <Skill logoSrc={logoExpress} altText="Express" />
                <Skill logoSrc={logoAxios} altText="Axios" />
                <Skill logoSrc={logoFigma} altText="Figma" />
                <Skill logoSrc={logoGit} altText="Git" />
                <Skill altText="Auth" title="User Authentication" />
                <Skill altText="APIs" title="REST APIs" />
                <Skill logoSrc={logoJira} altText="Jira" />
                <Skill logoSrc={logoMonday} altText="Monday" />
                {/* <Skill logoSrc={logoPython} altText="Python" /> */}
            </div>
        </section>
    )
}

export default Skills
