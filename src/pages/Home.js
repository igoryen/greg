import "../styles/Home/homeMain.scss";
// import TestimonialCarousel from "../components/TestimonialCarousel";
import Torveki from "../components/Torveki";


const HomePage = () => {


    return (
        <section className="main" id="home2">
            <div className="hello">



                <div className="aaa">
                    <div className="kim">

                        <h1><i>Ang</i><i>lo</i><i>for</i></h1>
                        <div className="jimmy">
                            <div className="matt">
                                <div className="line1">English Lessons from Toronto</div>
                                <div className="line2">For all levels – Life, Work & Everything Between</div>
                            </div>
                        </div>

                        <div>
                            <Torveki />
                        </div>

                        {/* <section className="testimonials-section">
                            <TestimonialCarousel />
                        </section> */}

                        <div className="mike">
                            <div>📞 🇨🇦: <a href="tel:+16477036200" className=""> (647) 703-6200</a></div>
                            <div>Instagram: <a href="https://www.instagram.com/anglofor" target="_blank" rel="noreferrer">anglofor</a></div>
                            <div>Telegram: <a href="https://t.me/anglofor" target="_blank" rel="noreferrer">t.me/anglofor</a></div>
                            <div>Facebook: <a href="https://www.facebook.com/profile.php?id=61569937586448" target="_blank" rel="noreferrer">anglofor</a></div>
                            <div>Email: <a href="mailto:anglofor2@gmail.com" target="_blank" rel="noreferrer">anglofor2@gmail.com</a></div>
                        </div>

                    </div>


                </div>
            </div>


            <div className="pages">
                <a className="" href="/sidju" >⛵</a>
            </div>
        </section >
    );
}

export default HomePage;