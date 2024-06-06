import "../styles/footer.css"

export function Footer (){
    return(
        <footer className="footer">
            <div className="footer-line"></div>
            <div className="footer-cont">
                <div className="footer-logo">
                    johann.dev
                </div>
                <div className="footer-nav">
                    <h2 className="footer-nav-heading">Navigation</h2>
                    <ul className="footer-nav-text">
                        <li>Home</li>
                        <li>Über</li>
                        <li>Projekte</li>
                        <li>Kontakt</li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h2 className="footer-cont-heading">Kontakt</h2>
                    <div className="footer-cont-text">
                        +49 177 6921941
                    </div>
                    <div className="footer-cont-text">
                        j.herberger50@gmail.com
                    </div>
                </div>
            </div>
        </footer>
    )
}