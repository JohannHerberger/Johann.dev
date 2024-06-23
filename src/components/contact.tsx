import "../styles/contact.css"
import { Link } from "react-scroll"
import "aos/dist/aos.css"
import emailjs from "@emailjs/browser"
import { useRef, useEffect, useState } from "react"

function Kontakt (){

    const emailRef = useRef<HTMLInputElement>("");
    const messageRef = useRef<HTMLInputElement>("");
    const [loading, setLoading] = useState(false);

    useEffect(() => emailjs.init("jx4j5NMKeO7tMU1DT"), []);

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const serviceId = "service_anee7go";
        const templateId = "template_fjlr1xi";
        try {
          setLoading(true);
          await emailjs.send(serviceId, templateId, {
           message: messageRef.current.value,
            email: emailRef.current.value
          });
          alert("email successfully sent check inbox");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
    };


    return (
        <div className="contact" id="kontakt" data-aos="fade-up">
            <header>
                <h1 className="contact-heading">Kontaktieren sie mich</h1>
            </header>
            <section>
                <form className="form" onSubmit={handleSubmit} data-aos="fade-up" >
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input1" ref={emailRef} type="email" name="email" placeholder="Ihre email..." />
                    <label className="form-label" htmlFor="message">Nachricht</label>
                    <textarea className="form-input2" placeholder="Ihre Nachricht..." ref={messageRef} name="message"></textarea>
                    <div style={{display:"flex", alignItems:"center", marginTop:"20px"}}>
                        <button className="form-button" disabled={loading} type="submit">
                            Abschicken
                        </button>
                        <Link to="footer" smooth={true} offset={0} duration={500}>
                            <div className="contact-phone">
                                Telefonnummer?
                            </div>
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Kontakt