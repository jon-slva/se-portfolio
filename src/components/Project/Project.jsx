import logoGithub from '../../assets/images/skills/github.svg';
import "./Project.scss";

const Project = ({ title, description, imgSrc, github1, github2 }) => {

    return (
        <article className='project'>
            <h3 className="project__title">{title}</h3>
            <img src={imgSrc} alt={title} className="project__img" />
            <div className='project__links'>
                {github1 ? <a href={github1.link} className="project__link">
                    <img className="project__link--github-logo" src={logoGithub} alt="" />
                    <p>
                        {github1.label}
                    </p>
                </a> : null}
                {github2 ? <a href={github2.link} className="project__link">
                    <img className="project__link--github-logo" src={logoGithub} alt="" />
                    <p>
                        {github2.label}
                    </p>
                </a> : null}
            </div>
            {description}
        </article>
    )
}

export default Project
