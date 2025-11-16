import "../../styles/Layout/layoutMain.scss";
import { Outlet } from "react-router-dom";
import React from "react";
import MainNav from "./components/MainNav";


class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {
        // document.body.classList.add('layout');
    }

    componentWillUnmount() {
        // document.body.classList.remove('layout');
        console.log("UNMOUNT", this.props);
    }


    render() {
        return (
            <div className="spaceship">

                <MainNav />




                <section className="spacesuit">
                    <div className="beltaloda">
                        <a className="" href="/" >
                            <div className="emj">🏠</div>
                            <div className="label">home</div>
                        </a>
                        <a className="" href="/about" >
                            <div className="emj">ℹ️</div>
                            <div className="label">about</div>
                        </a>
                        <a className="" href="/contact" >
                            <div className="emj">📡</div>
                            <div className="label">contact</div>
                        </a>
                        <a className="" href="/sidju" >
                            <div className="emj">⛵</div>
                            <div className="label">navi</div>
                        </a>
                    </div>

                    <header className="head">
                        <div>ˈæŋgloʊˌfor</div>
                    </header>
                    <div className="torso">
                        <Outlet />
                    </div>
                    <footer className="feet">ˈæŋgloʊˌfor</footer>
                </section>
            </div>
        )
    }

};

// const Layout = () => {
//     componentDidMount(){
//         alert('test javascript inside jsx');
//     };
//     return (
//         <div className="spaceship">

//             <section className="navigation">
//                 <nav>

//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                             <div className="underline"></div>
//                         </li>
//                         <li>
//                             <Link to="/tim">Tim</Link>
//                             <div className="underline"></div>
//                         </li>
//                         <li>
//                             <Link to="/leo">Leo</Link>
//                             <div className="underline"></div>
//                         </li>
//                         <li>
//                             <Link to="/sam">Sam</Link>
//                             <div className="underline"></div>
//                         </li>


//                     </ul>
//                 </nav>
//             </section>


//             <section className="spacesuit">
//                 <header className="head">
//                     <div>Nobody's perfect, we're all a work in progress</div>
//                 </header>
//                 <div className="torso">
//                     <Outlet />
//                 </div>
//                 <footer className="feet">Thank you for your interest!</footer>
//             </section>
//         </div>
//     )
// };

export default Layout;