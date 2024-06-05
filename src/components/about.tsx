import "../styles/about.css"
import github from "../images/images.jpg"
import meta from "../images/meta-teaser-1.jpg"

export function Über (){
    return (
        <div className="contact" id="kontakt">
            <section className="contact-text">
                <header>
                    <h1 className="contact-head">Über mich</h1>
                </header>
                <div className="contact-main">
                    Maksndoiaojda sdjaisjdiajsoi dajsid jasoijhd asihdoiahsoid haois doihas idhaoish doiahs diha osidh aois diohaiosd hioahsoijdhoia siohd ioahsoidh aishdihaishdi sihdishdis shdis dihsdi shd isd ishhidh sh dh shd as dhaoishdoihasi dhiahs oidhaios hdia is dh da hsdoiahsoidh aishd ihais hdoiahs diah sihd iais hd ahisd oihaios hdoiahs iodh aish diahsid hais dhioahs diahs idh aiosh dioahs dioahs oidh ai hsihiodhoiahjs idhais diha ihi ihhsi dih aihh s d as dhaioshdioahsid ahisd haiosh doiahs diha isdh aoisdhoiahsdiahds oiah sdihja isd ia shdiasdhsidhis
                </div>
            </section>
            <aside className="contact-links">
                <button className="contact-button">
                    <img src={meta} className="contact-img"/>
                    <div className="contact-desc">
                        Meta Zertifikat
                    </div>
                </button>
                <button className="contact-button">
                    <img src={github} className="contact-img"/>
                    <div className="contact-desc">
                        Github link
                    </div>
                </button>
            </aside>
        </div>
    )
}