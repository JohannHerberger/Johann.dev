import "../styles/about.css"
import github from "../images/github(1).png"
import certificat from "../images/22F34CFC-AFDD-4984-BDC4-1B79B0E561A2_1_201_a.jpeg"
import { useState } from "react"

export function Über (){
    const [git, setGit] = useState(false)
    const [meta, setMeta] = useState(false)

    function reset (){
        setTimeout(()=>{setMeta(false)}, 2000 )
        setTimeout(()=>{setGit(false)}, 2000 )
    }

    return (
        <div onClick={reset} className="about" id="über">
            <div className="about-cont1">
                <div className="about-text">
                    <header>
                        <h1 className="about-heading">Über mich</h1>
                    </header>
                    <div className="about-info1">
                     "Langweilig" dachte ich mir, als ich Informatik mit 14 Jahren in der Schule hatte. 
                     Rund 3 Jahre später hat sich dieser Eindruck stark verändert. Auf der Suche nach einem Beruf 
                     bei dem ich selbständig arbeiten kann und für den ich kein komplettes Studium absolvieren muss, 
                     bin ich auf das Thema Informatik bzw. Frontend Development zurückgekommen. 
                     Schließlich begann ich damit, Frontend Development mithilfe verschiedenster Tutorials 
                     zu lernen und es begann mir auf einmal Spaß zu bringen.
                     <img src={certificat} className={meta ? "meta-img-active" : "meta-img"} />
                    </div>
                </div>
            </div>
            <div className="about-cont2">
                <a href="https://github.com/JohannHerberger">
                    <img src={github} className={git ? "git-img-active" : "git-img"} />
                </a>
                <div className="about-info">
                    Mittlerweile bin ich 18 Jahre alt, mein Abitur ist fast fertig und ich kann stolz sagen,
                    dass ich ein gutes Verständnis von HTML, CSS, Github 
                    <a className="about-links" onClick={()=> setGit(true)}>
                         (zum Rrofil)
                    </a>
                    , JavaScript, Typescript und React,
                    sowie Wissen über die Grundlagen von UX/UI Design habe.
                    Durch meine absolvierten Kurse
                    <a className="about-links" onClick={()=> setMeta(true)}>
                        (siehe Zertifikat)
                    </a>
                    , in Kombination mit viel praktischem Coden konnte ich viel lernen, sodass ich mich bereit dafür fühle, 
                    den ersten Job auszuüben. Außerdem arbeite ich aktuell daran, mir das Backend Development beizubringen 
                    und kann auch hier schon Grundverständnisse im Bereich MySQL und Python vorweisen.
                </div>
            </div>
        </div>
    )
}