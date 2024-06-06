import "../styles/about.css"
import github from "../images/images.jpg"
import meta from "../images/meta-teaser-1.jpg"

export function Über (){
    return (
        <div className="about" id="über">
            <div className="about-cont1">
                <div className="about-text">
                    <header>
                        <h1 className="about-heading">Über mich</h1>
                    </header>
                    <div className="about-info">
                     Maksndoiaojda sdjaisjdiajsoi dajsid jasoijhd asihdoiahsoid haois doihas idhaoish doiahs diha osidh aois diohaiosd hioahsoijdhoia siohd ioahsoidh aishdihaishdi sihdishdis shdis dihsdi shd isd ishhidh sh dh shd as dhaoishdoihasi dhiahs oidhaios hdia is dh da hsdoiahsoidh aishd ihais hdoiahs diah sihd iais hd ahisd oihaios hdoiahs iodh aish diahsid hais dhioahs diahs idh aiosh dioahs dioahs oidh ai hsihiodhoiahjs 
                    </div>
                </div>
                <img src={meta} className="meta-img" />
            </div>
            <div className="about-cont2">
                <img src={github} className="git-img" />
                <div className="about-info">
                    Maksndoiaojda sdjaisjdiajsoi dajsid jasoijhd asihdoiahsoid haois doihas idhaoish doiahs diha osidh aois diohaiosd hioahsoijdhoia siohd ioahsoidh aishdihaishdi sihdishdis shdis dihsdi shd isd ishhidh sh dh shd as dhaoishdoihasi dhiahs oidhaios hdia is dh da 
                </div>
            </div>
        </div>
    )
}