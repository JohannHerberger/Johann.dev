import "../styles/project.css"
import littleLemon from "../images/google-logo.jpeg"
import preview from "../images/icons8-live-50.png"
import "aos/dist/aos.css"
import AOS from "aos"
import { useEffect } from "react"

const Projekte = () => {

    return (
        <div className="project" id="projekt" data-aos="zoom-in-right">
            <header>
                <h1 className="project-heading">Meine Projekte</h1>
            </header>
            <div className="projects-wrapper" data-aos="flip-left">
                <div className="card">
                    <img src={littleLemon} className="project-img"/>
                    <div className="project-content">
                        <div className="project-desc">
                            Das erste große Projekt das ich gemacht habe, stell eine fiktive Website für ein Restaurant namens Little Lemon. Gebaut mit React und Typescript.
                        </div>
                        <div className="project-button-wrapper">
                            <button className="project-button1">{"<>"} Code</button>
                            <button className="project-button2">
                                <img src={preview} className="preview-icon" />
                                Preview
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={littleLemon} className="project-img"/>
                    <div className="project-content">
                        <div className="project-desc">
                            Das erste große Projekt das ich gemacht habe, stell eine fiktive Website für ein Restaurant namens Little Lemon. Gebaut mit React und Typescript.
                        </div>
                        <div className="project-button-wrapper">
                            <button className="project-button1">{"<>"} Code</button>
                            <button className="project-button2">
                                <img src={preview} className="preview-icon" />
                                Preview
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={littleLemon} className="project-img"/>
                    <div className="project-content">
                        <div className="project-desc">
                            Das erste große Projekt das ich gemacht habe, stell eine fiktive Website für ein Restaurant namens Little Lemon. Gebaut mit React und Typescript.
                        </div>
                        <div className="project-button-wrapper">
                            <button className="project-button1">{"<>"} Code</button>
                            <button className="project-button2">
                                <img src={preview} className="preview-icon" />
                                Preview
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projekte;
