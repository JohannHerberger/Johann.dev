import { Link } from "react-scroll"
import "../styles/nav.css"
import { useState } from "react"
import hamburger from "../images/icons8-menü-50.png"
import cross from "../images/icons8-multiplizieren-50.png"
import { useEffect } from "react"
import AOS from "aos"


export function Nav() {
    const [nav, steNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [animation, setAnimation] = useState(false)

    /*Scroll animation*/
    useEffect(()=>{
        AOS.init({duration: 1700, disable:"mobile", once: true})
    },[])

    /* Functions for Box-shadow on scroll Navbar*/

    window.addEventListener("scroll", function (){
        if (this.window.scrollY > 100 ){
            setShadow(true)
        } else {
            setShadow(false)
        }
    })

    function navStyle (){
        if (nav === true && shadow === true){
            return "mobile-nav-active shadow"
        } else if (nav === false && shadow === false){
            return "mobile-nav"
        } else if (nav === true && shadow === false){
            return "mobile-nav-active"
        } else if (nav === false && shadow === true){
            return "mobile-nav shadow"
        }
    }

    /* Functions for mobile Nav*/

    function mobileNav (){
        steNav(true)
        document.body.style.overflow= "hidden"
    }

    function normalNav (){
        steNav(false)
        document.body.style.overflow= "auto"
    }

    return (
        <nav>
            <div className={shadow ? "nav shadow" : "nav"}>
                <div className="nav-logo">
                    johann.dev
                </div>
                <ul className="nav-cont">
                    <li>
                        <Link activeClass="active" spy={true} to="home" smooth={true} offset={0} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link activeClass="active" spy={true} to="über" smooth={true} offset={0} duration={500}>Über</Link>
                    </li>
                    <li>
                        <Link activeClass="active" spy={true} to="projekt" smooth={true} offset={0} duration={500}>Projekte</Link>
                    </li>
                    <li>
                        <Link activeClass="active" spy={true} to="kontakt" smooth={true} offset={0} duration={500}>Kontakt</Link>
                    </li>
                </ul>
            </div>
            <div className={navStyle()}>
                <div className="nav-logo">
                    johann.dev
                </div>
                <button onClick={()=> mobileNav()} className={nav ? "passiv" : "nav-icon-button"}>
                    <img src={hamburger} className="hamburger" />
                </button>
                <button onClick={()=> normalNav()} className={nav ? "nav-icon-button2" : "passiv"}>
                    <img className="cross" src={cross} />
                </button>
                <div className={nav ? "nav-background" : "nav-background-passiv"}>
                    <ul className={nav ? "mobile-nav-cont" : "mobile-nav-cont-passiv"}>
                        <li>
                            <Link onClick={()=> steNav(false)} to="home" smooth={true} offset={0} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link onClick={()=> steNav(false)} to="über" smooth={true} offset={0} duration={500}>Über</Link>
                        </li>
                        <li>
                            <Link onClick={()=> steNav(false)} to="projekt" smooth={true} offset={0} duration={500}>Projekte</Link>
                        </li>
                        <li>
                            <Link onClick={()=> steNav(false)} to="kontakt" smooth={true} offset={0} duration={500}>Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}