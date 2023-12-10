import "./Project.scss";

const Project = ({ title, description, imgSrc }) => {

    return (
        <article className='project'>
            <h3 className="project__title">{title}</h3>
            <img src={imgSrc} alt={title} className="project__img" />
            <p className="project__description">{description}</p>
        </article>
    )
}

export default Project
