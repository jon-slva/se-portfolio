import logoGithub from '../../assets/images/skills/github.svg';
import "./Project.scss";

const Project = ({ title, description, imgSrc, github1, github2, liveLink }) => {

	return (
		<article className='project'>
			<h3 className="project__title">{title}</h3>
			{liveLink ? (
				<a href={liveLink} target="_blank" className="live-link">
					<img src={imgSrc} alt={title} className="project__img" />
				</a>
			) : (
				<img src={imgSrc} alt={title} className="project__img" />
			)}
			<div className='project__links'>
				{github1.link ? <a href={github1.link} target="_blank" className="project__link">
					<img className="project__link--github-logo" src={logoGithub} alt="" />
					<p className="project__link--github-label">
						{github1.label}
					</p>
				</a> : null}
				{github2.link ? <a href={github2.link} target="_blank" className="project__link">
					<img className="project__link--github-logo" src={logoGithub} alt="" />
					<p className="project__link--github-label">
						{github2.label}
					</p>
				</a> : null}
			</div>
			{description}
		</article>
	)
}

export default Project
