import "../styles/Home/homeMain.scss";
// import TestimonialCarousel from "../components/TestimonialCarousel";
import Torveki from "../components/Torveki";
import SEOHelmet from "../components/SEOHelmet";


const HomePage = () => {


    return (
        <section className="main" id="home2">

            <SEOHelmet
                title="Anglofor - English Tutoring"
                description="Get in touch with Anglofor for professional English tutoring services. Contact via phone, Instagram, Telegram, Facebook, or email."
                url="https://anglofor.com/"
                image="https://anglofor.com/images/preview-image-1200x630.jpeg"
            />

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