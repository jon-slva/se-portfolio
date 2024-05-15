import headshot1 from '../../assets/images/me.jpg';

import logoGithub from '../../assets/images/skills/github.svg';

import "./Homepage.scss";
import { Link } from 'react-router-dom';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';

const Homepage = () => {

	return (
		<>
			<section className="hero" >
				<div className="hero__container">
					<div className="hero__breakpoint-wrap">
						<div className='hero__desktop-title-wrap'>
							<h1 className="hero__title">Jonathan&nbsp;Silva</h1>
							<h2 className="hero__subtitle">Software Engineer</h2>
							{/* <h2 className="hero__subtitle">Fullstack Developer</h2> */}
						</div>

						<img className="hero__headshot" src={headshot1} alt="" />
					</div>

					<div className="hero__container-text">
						<div className='hero__tablet-title-wrap'>
							<h1 className="hero__title">Jonathan Silva</h1>
							<h2 className="hero__subtitle">Software Engineer</h2>
							{/* <h2 className="hero__subtitle">Fullstack Developer</h2> */}
						</div>
						<p className="hero__bio">
							Hey! I'm a <b>Software Engineer</b> based in New York. I love learning and trying new things. I'm a multi-instrumentalist, former 3D CAD Designer, Production Manager, Jewelry Desiger, PC tinkerer, and tech gadget hoarder.
							Boop.
						</p>
						<Link to="https://github.com/jon-slva" target="_blank" className="hero__github-link">
							<h3 className="hero__github">Check out my github <img className="hero__github-logo" src={logoGithub} alt="" /></h3>
						</Link>
					</div>
				</div>
			</section>

			<main>
				<Skills />
				<Projects />
			</main>

			<footer className="footer">
				<div className="footer__info">
					<p className="footer__name">Jonathan Silva</p>
					<p className="footer__phone">1(631) 327-4452</p>
					<a href="mailto:jonathan.silva167@gmail.com" className="footer__email">jonathan.silva167@gmail.com</a>
				</div>
			</footer>
		</>
	)
}

export default Homepage;
