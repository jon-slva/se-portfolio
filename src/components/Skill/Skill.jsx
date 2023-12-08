import "./Skill.scss";

const Skill = ({ logoSrc, altText, title }) => {
    return (
        <article className='skills__container--logo-wrap'>
            {logoSrc ? <img className="skills__container--logo" src={logoSrc} alt={altText} /> : null}
            {title ? <p className="skills__container--logo-title">{title}</p> : null}
        </article>
    );
}

export default Skill
