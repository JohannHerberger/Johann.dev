import "../styles/contact.css"
import { Link } from "react-scroll"
import "aos/dist/aos.css"
import AOS from "aos"
import { useEffect } from "react"

function Kontakt (){

    return (
        <div className="contact" id="kontakt" data-aos="fade-up">
            <header>
                <h1 className="contact-heading">Kontaktieren sie mich</h1>
            </header>
            <form className="form" data-aos="fade-up">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input1"  name="email" type="text" placeholder="1-25 Buchstaben" max={25}/>
                <label className="form-label" htmlFor="anliegen">Anliegen</label>
                <textarea className="form-input2" name="anliegen" placeholder="1 bis 150 Wörter..." />
                <div style={{display:"flex", alignItems:"center", marginTop:"20px"}}>
                    <button className="form-button" type="submit">Abschicken</button>
                    <Link to="footer" smooth={true} offset={0} duration={500}>
                        <div className="contact-phone">
                            Telefonnummer?
                        </div>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Kontakt