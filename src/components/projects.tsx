import "../styles/project.css"
import littleLemon from "../images/google-logo.jpeg"
import preview from "../images/icons8-live-50.png"

const Projekte = () => {
    return (
        <div className="project" id="projekt">
            <header>
                <h1 className="project-heading">Meine Projekte</h1>
            </header>
            <div className="project-wrapper">
                <div className="project-cont">
                    <img src={littleLemon} className="project-img"/>
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
                <div className="project-cont">
                    <img src={littleLemon} className="project-img"/>
                    <div className="project-desc">
                        Maksndoiaojda sdjaisjdiajsoi dajsid jasoijhd asihdoiahsoid haois doihas idhaoish doiahs diha osidh aois diohaiosd hioahsoijdhoia siohd 
                    </div>
                    <div className="project-button-wrapper">
                        <button className="project-button1">{"<>"} Code</button>
                        <button className="project-button2">
                            <img src={preview} className="preview-icon" />
                            Preview
                        </button>
                    </div>
                </div>
                <div className="project-cont">
                    <img src={littleLemon} className="project-img"/>
                    <div className="project-desc">
                        Maksndoiaojda sdjaisjdiajsoi dajsid jasoijhd asihdoiahsoid haois doihas idhaoish doiahs diha osidh aois diohaiosd hioahsoijdhoia siohd
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
    );
};

export default Projekte;
