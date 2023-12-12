import flixPic from '../../assets/images/Flixnet desktop.png';
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
                                Redesign of AWS Data Exchange Marketplace interface.
                                4 teams assigned to the task.
                            </li>
                            <li>
                                Your team: 2 Software Engineers, 2 UX Designers, 1 Data Scientist.
                            </li>
                            <li>
                                Implemented AI-powered Suggested Datasets section.
                            </li>
                            <li>
                                AI-powered search was decisive in winning the competition.
                            </li>
                        </ul>
                    }
                    imgSrc={AWSPic}
                    github1={{ link: 'https://github.com/malyesh/aws-hackathon', label: 'GitHub Repo' }}
                    github2={{ link: '', label: '' }}
                />

                <Project
                    title="Mentor Me"
                    description={
                        <ul className='projects__description'>
                            <li>
                                My bootcamp capstone project.
                            </li>
                            <li>
                                Your team: 2 Software Engineers, 2 UX Designers, 1 Data Scientist.
                            </li>
                            <li>
                                Platform created to connect learners with experienced mentors.
                            </li>
                            <li>
                                Utilizes Three.js for rendering interactions and user locations on a 3D globe.
                            </li>
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
                                First 24 hour hackathon project.
                            </li>
                            <li>
                                Worked with two software engineers.
                            </li>
                            <li>
                                Utilized a third-party API for ideation and implementation.
                            </li>
                        </ul>
                    }
                    imgSrc={flixPic}
                    github1={{ link: 'https://github.com/jon-slva/flixnet', label: 'GitHub Repo' }}
                    github2={{ link: '', label: '' }}
                />

                <Project
                    title="This or That"
                    description={
                        <ul className='projects__description'>
                            <li>
                                Second 24 hour hackathon project.
                            </li>
                            <li>
                                Developed a platform for fun and controversial topic debates.
                            </li>
                            <li>
                                Participants debate for or against declaration statements.
                            </li>
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
