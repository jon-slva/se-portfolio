import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import "./Header.scss";

import resumePdf from '../../assets/Jonathan-Silva-Software-Engineer-Resume-2023.pdf';

const Header = () => {
    // const [showResume, setShowResume] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const mobileBreakpoint = 768; // Mobile breakpoint
    const tabletBreakpoint = 1280; // Tablet breakpoint
    let zoomLevel = undefined;

    if (window.innerWidth <= mobileBreakpoint) {
        zoomLevel = 40;
    } else if (window.innerWidth <= tabletBreakpoint) {
        zoomLevel = 60;
    } else {
        zoomLevel = 80;
    }

    const handleResumeDownload = (e) => {
        e.preventDefault();

    };

    // const handleCloseResume = (e) => {
    //     e.preventDefault();
    //     setIsClosing(true);
    //     setTimeout(() => {
    //         setIsClosing(false);
    //         setShowResume(false);
    //     }, 500); // Adjust this to match the duration of your fade-out animation
    // };

    const handleContact = (e) => {
        e.preventDefault();
        setIsClosing(false);
        setShowContact(true)
    }

    const handleCloseContact = (e) => {
        e.preventDefault();
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setShowContact(false);
        }, 500);
    };


    return (
        <>
            <header className="header">
                <nav className="header-nav">
                    <ul>
                        <li className="header-nav__items"><ScrollLink to="projects" smooth={true} duration={1000} offset={-40}>Projects</ScrollLink></li>
                        <li className="header-nav__items"><a href={resumePdf} download>Resume</a></li>
                        <li className="header-nav__items"><a onClick={handleContact}>Contact</a></li>
                    </ul>
                </nav>
            </header>
            {showContact && (
                <div className={`modal ${isClosing ? 'closing' : ''}`}>
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
