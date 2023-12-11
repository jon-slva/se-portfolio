import flixPic from '../../assets/images/Flixnet desktop.png';
import mentorPic from '../../assets/images/mentor-me-desktop-2.png';
import AWSPic from '../../assets/images/aws-hackathon-1.png';
import thisPic from '../../assets/images/this-or-that-1.png';

import './Projects.scss';
import Project from '../../components/Project/Project';

const Projects = () => {
    return (
        <aside className="projects">
            <h2 className="projects__header">Projects</h2>

            <div className="projects-container">
                <Project
                    title="AWS Hackathon (won)"
                    description="4 teams were tasked with redesigning the interface of the AWS Data Exchange Marketplace. On our team were 2 Software Engineers (myself and my teammate), 2 UX designers, and 1 Data Scientist. According to feedback about the project, My implementation of an AI powered Suggested Datasets section was the deciding factor in our winning the project."
                    imgSrc={AWSPic}
                />

                <Project
                    title="Mentor Me"
                    description="Mentor Me is is my bootcamp capstone project. I am passionte about many things, and learning is at the center of that passion. So I made this platform to connect people who want to learn, with experienced people who want to fill the role of a mentor. It utilizes Three.js to render interactions and locations of users on a 3D globe."
                    imgSrc={mentorPic}
                />
            </div>

            <div className="projects-container">
                <Project
                    title="Flixnet Movie Picker"
                    description="Flixnet was my first hackathon project. My 2 software engineer teammates and I had 24 hours to ideate and come up with a project using a third party API. This was what we came up with!"
                    imgSrc={flixPic}
                />

                <Project
                    title="This or That"
                    description="My second hackathon project with a similar concept as the last, saw us create a platform where people can have fun debating fun or controversial topics either for or against a declaration statement."
                    imgSrc={thisPic}
                />
            </div>
        </aside>
    )
}

export default Projects
