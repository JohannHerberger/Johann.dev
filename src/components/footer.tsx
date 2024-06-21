import "../styles/footer.css"
import { Link } from "react-scroll"
import git from "../images/github(1).png"

export function Footer (){
    return(
        <footer id="footer" className="footer">
            <div className="footer-line"></div>
            <div className="footer-cont">
                <div className="footer-logo">
                    johann.dev
                </div>
                <div className="footer-nav">
                    <h2 className="footer-nav-heading">Navigation</h2>
                    <ul className="footer-nav-text">
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
                </div>
                <div className="footer-contact">
                    <h2 className="footer-cont-heading">Kontakt</h2>
                    <div className="footer-cont-text">
                        +49 177 6921941
                    </div>
                    <div className="footer-cont-text">
                        j.herberger50@gmail.com
                    </div>
                    <a target="_blank" href="https://github.com/JohannHerberger">
                        <img className="footer-icon" src={git}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}