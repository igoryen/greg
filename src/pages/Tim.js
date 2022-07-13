import '../styles/tim/timMain.scss';
import React from "react";
import logoWhite from "../images/tim/logo-white.png";
import logoGreen2x from "../images/tim/logo-green-2x.png";
import nat1large from "../images/tim/nat-1-large.jpg";
import nat2large from "../images/tim/nat-2-large.jpg";
import nat3large from "../images/tim/nat-3-large.jpg";
import nat8 from "../images/tim/nat-8.jpg";
import nat9 from "../images/tim/nat-9.jpg";
import videoMp4 from "../images/tim/video.mp4";
import videoWebm from "../images/tim/video.webm";
import "../styles/tim/linea/icon-font/styles.css";

class Tim extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {

        document.body.classList.add('tim');
        // Changing the state after 2 sec
        // from the time when the component
        // is rendered
        // setTimeout(() => {
        //     this.setState({
        //         color: 'white'
        //     });
        // }, 2000);
    }

    componentWillUnmount() {
        document.body.classList.remove('tim');

        console.log("UNMOUNT", this.props);
    }

    render() {
        return (
            <section className="main" id="tim">
                <div className="crawl-text-box">
                    <div className='crawl-text'>a study in advanced css</div>
                </div>
                <div className="aaab">
                    <div className="navigation">
                        <input
                            type="checkbox"
                            className="navigation__checkbox"
                            id="navi-toggle"
                        />
                        <label htmlFor="navi-toggle" className="navigation__button">
                            <span className="navigation__icon">&nbsp;</span>
                        </label>
                        <div className="navigation__background">&nbsp;</div>
                        <nav className="navigation__nav">
                            <ul className="navigation__list">
                                <li className="navigation__item">
                                    <a href="/#" className="navigation__link"
                                    ><span>01</span>About Natours</a
                                    >
                                </li>
                                <li className="navigation__item">
                                    <a href="/#" className="navigation__link"
                                    ><span>02</span>Your benefits</a
                                    >
                                </li>
                                <li className="navigation__item">
                                    <a href="/#" className="navigation__link"
                                    ><span>03</span>Popular tours</a
                                    >
                                </li>
                                <li className="navigation__item">
                                    <a href="/#" className="navigation__link"
                                    ><span>04</span>Stories</a
                                    >
                                </li>
                                <li className="navigation__item">
                                    <a href="/#" className="navigation__link"
                                    ><span>05</span>Book now</a
                                    >
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <header className="tim header">
                        <div className="header__logo-box">
                            <img src={logoWhite}
                                alt="logo"
                                className="header__logo"
                            />
                        </div>

                        <div className="header__text-box">
                            <h1 className="heading-primary">
                                <span className="heading-primary--main">Outdoors</span>
                                <span className="heading-primary--sub"
                                >is where life happens</span
                                >
                            </h1>
                            <a href="#section-tours" className="btn btn--white btn--sliding">
                                Discover our tours
                            </a>
                        </div>
                    </header>

                    <main>
                        <section className="section-about">
                            <div className="u-center-text u-margin-bottom-big">
                                <h2 className="heading-secondary">
                                    Exciting tours for adventurous people
                                </h2>
                            </div>

                            <div className="row">
                                <div className="col-50prc">
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        You're going to fall in love with nature
                                    </h3>
                                    <p className="paragraph">
                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Neque ducimus commodi quis a expedita
                                        deleniti.
                                    </p>

                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        Live adventures like you never have before
                                    </h3>
                                    <p className="paragraph">
                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                    </p>

                                    <a href="/#" className="btn-text">Learn more &rarr;</a>
                                </div>
                                <div className="col-50prc">
                                    <div className="composition">
                                        <img
                                            src={nat1large}
                                            alt="Illustration 1"
                                            className="composition__photo composition__photo--p1"
                                        /><img
                                            src={nat2large}
                                            alt="Illustration 2"
                                            className="composition__photo composition__photo--p2"
                                        /><img
                                            src={nat3large}
                                            alt="Illustration 3"
                                            className="composition__photo composition__photo--p3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-features">
                            <div className="row">
                                <div className="col-25prc">
                                    <div className="feature-box">
                                        <i className="feature-box__icon icon-basic-world"></i>
                                        <h3 className="heading-tertiary">Explore the world</h3>
                                        <p className="feature-box__text">
                                            Lorem, ipsum dolor sit amet consectetur
                                            adipisicing elit.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-25prc">
                                    <div className="feature-box">
                                        <i className="feature-box__icon icon-basic-compass"></i>
                                        <h3 className="heading-tertiary">Meet nature</h3>
                                        <p className="feature-box__text">
                                            Lorem, ipsum dolor sit amet consectetur
                                            adipisicing elit.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-25prc">
                                    <div className="feature-box">
                                        <i className="feature-box__icon icon-basic-map"></i>
                                        <h3 className="heading-tertiary">Find your way</h3>
                                        <p className="feature-box__text">
                                            Lorem, ipsum dolor sit amet consectetur
                                            adipisicing elit.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-25prc">
                                    <div className="feature-box">
                                        <i className="feature-box__icon icon-basic-heart"></i>
                                        <h3 className="heading-tertiary">
                                            Live a healthier life
                                        </h3>
                                        <p className="feature-box__text">
                                            Lorem, ipsum dolor sit amet consectetur
                                            adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-tours" id="section-tours">
                            <div className="u-center-text u-margin-bottom-big">
                                <h2 className="heading-secondary">Most popular tours</h2>
                            </div>
                            <div className="row">
                                <div className="col-33prc">
                                    <div className="card">
                                        <div className="card__side card__side--front">
                                            <div className="card__picture card__picture--1">
                                                &nbsp;
                                            </div>
                                            <h4 className="card__heading">
                                                <span
                                                    className="card__heading-span card__heading-span--1"
                                                >The sea explorer</span
                                                >
                                            </h4>
                                            <div className="card__details">
                                                <ul>
                                                    <li>3 day tours</li>
                                                    <li>Up to 30 people</li>
                                                    <li>2 tour guides</li>
                                                    <li>Sleep in cozy hotels</li>
                                                    <li>Difficulty: easy</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className="card__side card__side--back card__side--back-1"
                                        >
                                            <div className="card__cta">
                                                <div className="card__price-box">
                                                    <p className="card__price-only">Only</p>
                                                    <p className="card__price-value">$100</p>
                                                </div>
                                                <a href="#modal" className="btn btn--white"
                                                >Book now!</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-33prc">
                                    <div className="card">
                                        <div className="card__side card__side--front">
                                            <div className="card__picture card__picture--2">
                                                &nbsp;
                                            </div>
                                            <h4 className="card__heading">
                                                <span
                                                    className="card__heading-span card__heading-span--2"
                                                >The forest hiker</span
                                                >
                                            </h4>
                                            <div className="card__details">
                                                <ul>
                                                    <li>7 day tours</li>
                                                    <li>Up to 40 people</li>
                                                    <li>6 tour guides</li>
                                                    <li>Sleep in provided tents</li>
                                                    <li>Difficulty: medium</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className="card__side card__side--back card__side--back-2"
                                        >
                                            <div className="card__cta">
                                                <div className="card__price-box">
                                                    <p className="card__price-only">Only</p>
                                                    <p className="card__price-value">$500</p>
                                                </div>
                                                <a href="#modal" className="btn btn--white"
                                                >Book now!</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-33prc">
                                    <div className="card">
                                        <div className="card__side card__side--front">
                                            <div className="card__picture card__picture--3">
                                                &nbsp;
                                            </div>
                                            <h4 className="card__heading">
                                                <span
                                                    className="card__heading-span card__heading-span--3"
                                                >The snow adventurer</span
                                                >
                                            </h4>
                                            <div className="card__details">
                                                <ul>
                                                    <li>5 day tours</li>
                                                    <li>Up to 15 people</li>
                                                    <li>3 tour guides</li>
                                                    <li>Sleep in provided tents</li>
                                                    <li>Difficulty: hard</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className="card__side card__side--back card__side--back-3"
                                        >
                                            <div className="card__cta">
                                                <div className="card__price-box">
                                                    <p className="card__price-only">Only</p>
                                                    <p className="card__price-value">$900</p>
                                                </div>
                                                <a href="#modal" className="btn btn--white"
                                                >Book now!</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="u-center-text u-margin-top-huge">
                                <a href="/#" className="btn btn--green">Discover all tours</a>
                            </div>
                        </section>

                        <section className="section-stories">
                            <div className="bg-video">
                                <video className="bg-video__content" autoPlay muted loop>
                                    <source src={videoMp4} type="video/mp4" />
                                    <source src={videoWebm} type="video/webm" />
                                    Your browser is not supported.
                                </video>
                            </div>

                            <div className="u-center-text u-margin-bottom-big">
                                <h2 className="heading-secondary">
                                    We make people genuinely happy
                                </h2>
                            </div>

                            <div className="row">
                                <div className="story">
                                    <figure className="story__shape">
                                        <img
                                            src={nat8}
                                            alt="Person on a tour"
                                            className="story__img"
                                        />
                                        <figcaption className="story__caption">
                                            Mary Smith
                                        </figcaption>
                                    </figure>
                                    <div className="story__text">
                                        <h3 className="heading-tertiary u-margin-bottom-small">
                                            I had the best thing with my family
                                        </h3>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur
                                            adipisicing elit. Veritatis quod rerum labore
                                            quae nostrum maxime aperiam recusandae nesciunt
                                            aliquam laboriosam natus dolorum alias, ad
                                            commodi sed provident repellendus eum quasi?
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="story">
                                    <figure className="story__shape">
                                        <img
                                            src={nat9}
                                            alt="Person on a tour"
                                            className="story__img"
                                        />
                                        <figcaption className="story__caption">
                                            Jack Wilson
                                        </figcaption>
                                    </figure>
                                    <div className="story__text">
                                        <h3 className="heading-tertiary u-margin-bottom-small">
                                            Wow! My life is completely different now.
                                        </h3>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur
                                            adipisicing elit. Veritatis quod rerum labore
                                            quae nostrum maxime aperiam recusandae nesciunt
                                            aliquam laboriosam natus dolorum alias, ad
                                            commodi sed provident repellendus eum quasi?
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="u-center-text u-margin-top-huge">
                                <a href="/#" className="btn-text">Read all stories &rarr;</a>
                            </div>
                        </section>

                        <section className="section-book">
                            <div className="row">
                                <div className="book">
                                    <div className="book__form">
                                        <form action="#" className="form">
                                            <div className="u-margin-bottom-medium">
                                                <h2 className="heading-secondary">
                                                    Start booking now
                                                </h2>
                                            </div>

                                            <div className="form__group">
                                                <input
                                                    type="text"
                                                    className="form__input"
                                                    placeholder="Full Name"
                                                    id="name"
                                                    required
                                                />
                                                <label htmlFor="name" className="form__label"
                                                >Full Name</label
                                                >
                                            </div>

                                            <div className="form__group">
                                                <input
                                                    type="email"
                                                    className="form__input"
                                                    placeholder="Email address"
                                                    id="email"
                                                    required
                                                />
                                                <label htmlFor="email" className="form__label"
                                                >Email address</label
                                                >
                                            </div>

                                            <div className="form__group u-margin-bottom-medium">
                                                <div className="form__radio-group">
                                                    <input
                                                        type="radio"
                                                        className="form__radio-input"
                                                        id="small"
                                                        name="size"
                                                    />
                                                    <label
                                                        htmlFor="small"
                                                        className="form__radio-label"
                                                    >
                                                        <span
                                                            className="form__radio-button"
                                                        ></span>
                                                        Small tour group
                                                    </label>
                                                </div>
                                                <div className="form__radio-group">
                                                    <input
                                                        type="radio"
                                                        className="form__radio-input"
                                                        id="large"
                                                        name="size"
                                                    />
                                                    <label
                                                        htmlFor="large"
                                                        className="form__radio-label"
                                                    >
                                                        <span
                                                            className="form__radio-button"
                                                        ></span>
                                                        Large tour group
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="form__group">
                                                <button className="btn btn--green">
                                                    Next step &rarr;
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    <footer className="tim footer">
                        <div className="footer__logo-box">
                            <img
                                src={logoGreen2x}
                                alt="Full logo"
                                className="footer__logo"
                            />
                        </div>
                        <div className="row">
                            <div className="col-50prc">
                                <div className="footer__navigation">
                                    <ul className="footer__list">
                                        <li className="footer__item">
                                            <a href="/#" className="footer__link">Company</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="/#" className="footer__link">Contact us</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="/#" className="footer__link">Careers</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="/#" className="footer__link"
                                            >Privacy policy</a
                                            >
                                        </li>
                                        <li className="footer__item">
                                            <a href="/#" className="footer__link">Terms</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-50prc">
                                <p className="footer__copyright">
                                    Built by <a href="/#" className="footer__link">IGORYEN</a>. Originally
                                    built and designed by <a href="/#" className="footer__link">JONAS SCHMEDTMANN</a> for
                                    his online course <a href="/#" className="footer__link">ADVANCED CSS AND SASS</a>. Copyright &copy; by Jonas Schmedtmann.
                                </p>
                            </div>
                        </div>
                    </footer>

                    <div className="modal" id="modal">
                        <div className="modal__content">
                            <div className="modal__left">
                                <img
                                    src="../../public/images/tim/nat-8.jpg"
                                    alt="Tour illustration"
                                    className="modal__img"
                                />
                                <img
                                    src="../../public/images/tim/nat-9.jpg"
                                    alt="Tour illustration"
                                    className="modal__img"
                                />
                            </div>
                            <div className="modal__right">
                                <a href="#section-tours" className="modal__close">&times;</a>
                                <h2 className="heading-secondary u-margin-bottom-small">
                                    Start booking now
                                </h2>
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Important &ndash;Please read these terms before booking
                                </h3>
                                <p className="modal__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eius nemo fugit voluptates ex error, labore
                                    reprehenderit cum perspiciatis ipsa iste illum nisi
                                    officiis possimus obcaecati velit quae mollitia tempora
                                    deserunt!
                                </p>
                                <a href="/#" className="btn btn--green">Book now</a>
                            </div>
                        </div>
                    </div>

                    {/* <section className="grid-test">
            <div className="row">
                <div className="col-50prc">50%</div>
                <div className="col-50prc">50%</div>
            </div>

            <div className="row">
                <div className="col-33prc">33%</div>
                <div className="col-33prc">33%</div>
                <div className="col-33prc">33%</div>
            </div>

            <div className="row">
                <div className="col-33prc">33%</div>
                <div className="col-66prc">66%</div>
            </div>

            <div className="row">
                <div className="col-25prc">25%</div>
                <div className="col-25prc">25%</div>
                <div className="col-25prc">25%</div>
                <div className="col-25prc">25%</div>
            </div>

            <div className="row">
                <div className="col-25prc">25%</div>
                <div className="col-50prc">50%</div>
                <div className="col-25prc">25%</div>
            </div>

            <div className="row">
                <div className="col-25prc">25%</div>
                <div className="col-75prc">75%</div>
            </div>
    </section> */}
                </div>
            </section>
        );
    };
}

export default Tim;