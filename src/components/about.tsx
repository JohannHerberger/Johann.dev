import "../styles/about.css"
import certificatSmall from "../images/22F34CFC-AFDD-4984-BDC4-1B79B0E561A2_1_201_a.jpeg"
import certficateBig from "../images/Bildschirmfoto 2024-06-11 um 03.22.08.png"
import { useEffect, useState } from "react"
import "aos/dist/aos.css"
import { Link } from "react-scroll"

export function Über (){
    const [git, setGit] = useState(false)
    const [meta, setMeta] = useState(false)
    const [img, setImg] = useState(false)

    function reset (){
        setTimeout(()=>{setMeta(false)}, 2000 )
        setTimeout(()=>{setGit(false)}, 2000 )
    }


    return (
        <section id="über" onClick={reset} className="about" data-aos="zoom-in">
            <header>
                    <h1 className="about-heading">Über mich</h1>
            </header>
            <div className="about-cont">
                <a href={certficateBig} target="_blank" className={img ? "certificat-active" : "certificat-passiv"}>
                    <img id="certificate" onClick={()=> setImg(true)} src={certificatSmall} className={meta ? "meta-img-active" : "meta-img"} />
                </a>
                <div className="about-info">
                    "Langweilig" dachte ich mir, als ich Informatik mit 14 Jahren in der Schule hatte. 
                    Rund 3 Jahre später hat sich dieser Eindruck stark verändert. Auf der Suche nach einem Beruf 
                    bei dem ich selbständig arbeiten kann und für den ich kein komplettes Studium absolvieren muss, 
                    bin ich auf das Thema Informatik bzw. Frontend Development zurückgekommen. 
                    Schließlich begann ich damit, Frontend Development mithilfe verschiedenster Tutorials 
                    zu lernen und es begann mir auf einmal Spaß zu bringen.
                    <p></p>
                    Mitlerweile bin ich 18 Jahre alt, mein Abitur ist fast fertig und ich kann stolz sagen,
                    dass ich ein gutes Verständnis von HTML, CSS, Github 
                    <a target="_blank" href="https://github.com/JohannHerberger" className="about-links" onClick={()=> setGit(true)}>
                         (zum Rrofil)
                    </a>
                    , JavaScript, Typescript und React,
                    sowie Wissen über die Grundlagen von UX/UI Design habe.
                    Durch meine absolvierten Kurse
                    <Link to="certificate" className="about-links" onClick={()=> setMeta(true)}>
                        (siehe Zertifikat)
                    </Link>
                    , in Kombination mit viel praktischem Coden konnte ich viel lernen, sodass ich mich bereit dafür fühle, 
                    den ersten Job auszuüben. Außerdem arbeite ich aktuell daran, mir das Backend Development beizubringen 
                    und kann auch hier schon Grundverständnisse im Bereich MySQL und Python vorweisen.
                </div>
            </div>
        </section>
    )
}