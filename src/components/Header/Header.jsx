import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import "./Header.scss";

const Header = () => {

    return (
        <header className="header">
            <nav className="header-nav">
                <ul>
                    <li className="header-nav__items"><Link to="/">Home</Link></li>
                    <li className="header-nav__items"><ScrollLink to="projects" smooth={true} duration={1000} offset={-40}>Projects</ScrollLink></li>
                    <li className="header-nav__items"><Link to="/resume">Resume</Link></li>
                    <li className="header-nav__items"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
