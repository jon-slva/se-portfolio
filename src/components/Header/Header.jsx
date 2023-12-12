import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import "./Header.scss";

import resumePdf from '../../assets/Jonathan-Silva-Software-Engineer-Resume-2023.pdf';
const Header = () => {
    const [showResume, setShowResume] = useState(false);

    const handleshowResume = (e) => {
        e.preventDefault();
        setShowResume(true)
    };

    const handleCloseResume = (e) => {
        setShowResume(false);
    };

    return (
        <>
            <header className="header">
                <nav className="header-nav">
                    <ul>
                        <li className="header-nav__items"><Link to="/">Home</Link></li>
                        <li className="header-nav__items"><ScrollLink to="projects" smooth={true} duration={1000} offset={-40}>Projects</ScrollLink></li>
                        <li className="header-nav__items"><Link to="/resume" onClick={handleshowResume}>Resume</Link></li>
                        <li className="header-nav__items"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            {showResume && (
                <div className="resume-modal">
                    <button className="resume-modal__button" onClick={handleCloseResume}>X to close</button>
                    <iframe className="resume-modal__pdf" src={resumePdf} title="resume"></iframe>
                    <a href={resumePdf} download>Download Resume</a>
                </div>
            )}
        </>
    )
}

export default Header
