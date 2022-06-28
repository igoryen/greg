import "../styles/layout.scss";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="spaceship">

            <section className="navigation">
                <nav>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <div className="underline"></div>
                        </li>
                        <li>
                            <Link to="/tim">Tim</Link>
                            <div className="underline"></div>
                        </li>
                        <li>
                            <Link to="/leo">Leo</Link>
                            <div className="underline"></div>
                        </li>
                        <li>
                            <Link to="/sam">Sam</Link>
                            <div className="underline"></div>
                        </li>


                    </ul>
                </nav>
            </section>


            <section className="spacesuit">
                <header className="head">
                    <div>Nobody's perfect, we're all a work in progress</div>
                </header>
                <div className="torso">
                    <Outlet />
                </div>
                <footer className="feet">Thank you for your interest!</footer>
            </section>
        </div>
    )
};

export default Layout;