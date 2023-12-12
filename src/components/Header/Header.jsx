import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import "./Header.scss";

import resumePdf from '../../assets/Jonathan-Silva-Software-Engineer-Resume-2023.pdf';

const Header = () => {
    const [showResume, setShowResume] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const handleshowResume = (e) => {
        e.preventDefault();
        setShowResume(true)
    };

    const handleCloseResume = (e) => {
        setShowResume(false);
    };

    const handleContact = (e) => {
        e.preventDefault();
        setShowContact(true)
    }

    const handleCloseContact = (e) => {
        setShowContact(false);
    };

    return (
        <>
            <header className="header">
                <nav className="header-nav">
                    <ul>
                        <li className="header-nav__items"><Link to="/">Home</Link></li>
                        <li className="header-nav__items"><ScrollLink to="projects" smooth={true} duration={1000} offset={-40}>Projects</ScrollLink></li>
                        <li className="header-nav__items"><Link to="/resume" onClick={handleshowResume}>Resume</Link></li>
                        <li className="header-nav__items"><Link to="/contact" onClick={handleContact}>Contact</Link></li>
                    </ul>
                </nav>
            </header>
            {showResume && (
                <div className="modal">
                    <button className="modal__button" onClick={handleCloseResume}>Close</button>
                    <iframe className="modal__pdf" src={`${resumePdf}#zoom=55`} title="resume"></iframe>
                    <a href={resumePdf} className="modal__button" download>Download Resume</a>
                </div>
            )}
            {showContact && (
                <div className="modal">
                    <button className="modal__button" onClick={handleCloseContact}>Close</button>
                    <section className="modal__contact">
                        <h2 className="modal__contact--header">Email</h2>
                        <a className="modal__contact--anchor" href="mailto:jonathan.silva167@gmail.com" >
                            jonathan.silva167@gmail.com
                        </a>
                        <h2 className="modal__contact--header">Phone</h2>
                        <a href="tel:+16313274452" className="modal__contact--anchor">+1 (631) 327-4452</a>
                    </section>
                </div>
            )}
        </>
    )
}

export default Header
