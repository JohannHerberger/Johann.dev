import "../../styles/home.css"
import mann from "../../images/61d24b3d-4b3d-4592-a887-9b90c4c8925c_w960_r1.778_fpx36_fpy50.jpg"
import arrow from "../../images/arrow-down.png"
import html from "../../images/html5.png"
import css from "../../images/css.png"
import ts from "../../images/icons8-typescript-96.png"
import react from "../../images/icons8-react-80.png"
import java from "../../images/icons8-javascript-96.png"
import { Link } from "react-scroll"


export function Home (){

    return (
        <div className="home">
            <div className="home-cont">
                <img className="home-img" src={mann}/>
                <div className="home-text">
                    <h3 className="home-text1">Hallo, mein Name ist</h3>
                    <h1 className="home-text2">Johann Herberger</h1>
                    <h3 className="home-text1">und ich bin</h3> 
                    <h1 className="home-text2">Frontend Developer.</h1>
                </div>
                <div className="home-cont2">
                    <Link to="über" smooth={true} offset={0} duration={500}>
                        <button className="home-but">
                            mehr
                            <img src={arrow} className="arrow-icon" />
                        </button>
                    </Link>
                    <div className="home-icon-cont">
                        <img className="dev-icon" src={html} />
                        <img className="dev-icon" src={css} />
                        <img className="dev-icon" src={java} />
                        <img className="dev-icon" src={ts} />
                        <img className="dev-icon" src={react} />
                    </div>
                </div>
            </div>
        </div>
    )
}