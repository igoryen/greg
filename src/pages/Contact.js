import "../../src/styles/contact.scss"
import { Helmet } from "react-helmet-async";

const Contact = (prop) => {


    return (
        <section id="contact">

            <Helmet>
                <title>Contact Anglofor - English Tutoring</title>
                <meta name="description" content="Get in touch with Anglofor for professional English tutoring services. Contact via phone, Instagram, Telegram, Facebook, or email." />

                {/* Open Graph (Facebook, LinkedIn, WhatsApp, etc.) */}
                <meta property="og:title" content="Contact Anglofor - English Tutoring" />
                <meta property="og:description" content="Get in touch with Anglofor for professional English tutoring services. Contact via phone, Instagram, Telegram, Facebook, or email." />
                <meta property="og:url" content="https://anglofor.com/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://anglofor.com/images/preview-image-1200x630.jpeg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Anglofor" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Anglofor - English Tutoring" />
                <meta name="twitter:description" content="Get in touch with Anglofor for professional English tutoring services." />
                <meta name="twitter:image" content="https://anglofor.com/images/preview-image-1200x630.jpeg" />
                <meta name="twitter:site" content="@anglofor" />

                {/* Additional important tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://anglofor.com/contact" />
            </Helmet>

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