import flixPic from '../../assets/images/Flixnet desktop.jpg';
import mentorPic from '../../assets/images/mentor-me-desktop-2.png';
import AWSPic from '../../assets/images/aws-hackathon-1.png';
import thisPic from '../../assets/images/this-or-that-1.png';
import winnerMedal from '../../assets/icons/winner-medal.svg';

import './Projects.scss';
import Project from '../../components/Project/Project';

const Projects = () => {
	return (
		<aside className="projects">
			<h2 className="projects__header">Projects</h2>

			<div className="projects-container">
				<Project
					title={
						<>
							AWS Hackathon <img src={winnerMedal} alt="1st Place Winner" className="projects-container__svg-image" />
						</>
					}
					description={
						<ul className='projects__description'>
							<li>
								24 hours to redesign the AWS Data Exchange Marketplace interface.
								4 teams assigned to the task.
							</li>
							<li>
								Worked in a team w/ 2 Software Engineers, 2 UX Designers, & 1 Data Scientist.
							</li>
							<li>
								Implemented AI-powered "Suggested Datasets" search results.
							</li>
							<li>
								AI-powered search was decisive in winning the competition.
							</li>
							<p className='projects__stack'>
								<strong>
									React, Axios, SASS, REST API, Open AI GPT-4
								</strong>
							</p>
						</ul>
					}
					imgSrc={AWSPic}
					github1={{ link: 'https://github.com/malyesh/aws-hackathon', label: 'GitHub Repo' }}
					github2={{ link: '', label: '' }}
					liveLink={'https://awshackathon.johnny5ive.com/'}
				/>

				<Project
					title="Mentor Me"
					description={
						<ul className='projects__description'>
							<li>
								A fullstack web-application for connecting learners with experienced mentors in a variety of topics. The mission is to reduce the barrier to entry for learning new things, and eliminate the arduous initial research needed to begin a new hobby or career.
							</li>
							<li>
								Utilizes Three.js for rendering interactions and user locations on a 3D globe.
							</li>
							<li>
								GeoApify API converts user addresses to latitude & longitude for rendering on the globe.
							</li>
							<li>
								Distict dashboard interface for mentors and mentees.
							</li>
							<p className='projects__stack'>
								<strong>Future features:</strong> Video conferencing API, Chat API, Stripe Payment Gateway, Calendar scheduling for video meetings, cirriculum builder with cirriculum history, grading, React Native port, group mentorships.
							</p>
							<p className='projects__stack'>
								<strong>
									React, Node, MySQL, Three.js, Express, Axios, SASS, REST API, JWT User Authentication
								</strong>
							</p>
						</ul>
					}
					imgSrc={mentorPic}
					github1={{ link: 'https://github.com/jon-slva/mentor-me-client', label: 'Client' }}
					github2={{ link: 'https://github.com/jon-slva/mentor-me-server', label: 'Server' }}
				/>
			</div>

			<div className="projects-container">
				<Project
					title="Flixnet Movie Picker"
					description={
						<ul className='projects__description'>
							<li>
								Helps users find movies to watch based on their mood & how much time they have. Death to endless watch queues!
							</li>
							<li>
								Utilizes a third-party API for movie posters and data.
							</li>
							<p className='projects__stack'>
								<strong>Future features:</strong> Shortlist movies, random pick, streaming platform availability for each film, TV Shows, voting with friends.
							</p>
							<p className='projects__stack'>
								<strong>
									React, Axios, SASS, REST API
								</strong>
							</p>
						</ul>
					}
					imgSrc={flixPic}
					github1={{ link: 'https://github.com/jon-slva/flixnet', label: 'GitHub Repo' }}
					github2={{ link: '', label: '' }}
					liveLink={'https://flixnet.johnny5ive.com/'}
				/>

				<Project
					title="This or That"
					description={
						<ul className='projects__description'>
							<li>
								A simple fullstack CRUD web-app where users can debate fun and/or controversial topics.
							</li>
							<li>
								Utilizes a built-from-scratch RESTful API for data storage.
							</li>
							<li>
								This project was a team effort with 2 fellow developers.
							</li>
							<p className='projects__stack'>
								<strong>
									React, Node, Express, Axios, SASS, REST API
								</strong>
							</p>
						</ul>
					}
					imgSrc={thisPic}
					github1={{ link: 'https://github.com/GabrielCorderoDeveloper/this-or-that', label: 'Client' }}
					github2={{ link: 'https://github.com/jon-slva/this-or-that-server', label: 'Server' }}
				/>
			</div>
		</aside>
	)
}

export default Projects
