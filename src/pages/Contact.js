import "../../src/styles/contact.scss"
import SEOHelmet from "../components/SEOHelmet";

const Contact = (prop) => {


    return (
        <section id="contact">

            <SEOHelmet
                title="Contact Anglofor - English Tutoring"
                description="Get in touch with Anglofor for professional English tutoring services. Contact via phone, Instagram, Telegram, Facebook, or email."
                url="https://anglofor.com/contact"
                image="https://anglofor.com/images/preview-image-1200x630.jpeg"
            />

            <h1>Get in touch with me</h1>

            <div className="mike">
                <div>📞 🇨🇦: <a href="tel:+16477036200" className=""> (647) 703-6200</a></div>
                <div>Instagram: <a href="https://www.instagram.com/anglofor" target="_blank" rel="noreferrer">anglofor</a></div>
                <div>Telegram: <a href="https://t.me/anglofor" target="_blank" rel="noreferrer">t.me/anglofor</a></div>
                <div>Facebook: <a href="https://www.facebook.com/profile.php?id=61569937586448" target="_blank" rel="noreferrer">anglofor</a></div>
                <div>Email: <a href="mailto:anglofor2@gmail.com" target="_blank" rel="noreferrer">anglofor2@gmail.com</a></div>
            </div>
        </section>
    );
};

export default Contact;