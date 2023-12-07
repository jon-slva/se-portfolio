import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {

    return (
        <header className="header">
            <nav className="header-nav">
                <ul>
                    <li className="header-nav__items"><Link to="/">Home</Link></li>
                    <li className="header-nav__items"><Link to="/projects">Projects</Link></li>
                    <li className="header-nav__items"><Link to="/resume">Resume</Link></li>
                    <li className="header-nav__items"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
