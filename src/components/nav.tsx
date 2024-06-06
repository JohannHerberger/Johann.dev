import { Link } from "react-scroll"
import "../styles/nav.css"


export function Nav():any {
    return (
        <nav className="nav">
            <div className="nav-logo">
                johann.dev
            </div>
            <ul className="nav-cont">
                <li>
                    <Link to="home" smooth={true} offset={0} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="über" smooth={true} offset={0} duration={500}>Über</Link>
                </li>
                <li>
                    <Link to="projekt" smooth={true} offset={0} duration={500}>Projekte</Link>
                </li>
                <li>
                    <Link to="kontakt" smooth={true} offset={0} duration={500}>Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
}