import React from "react";
import { Link } from "react-router-dom";

class MainNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {

        // document.body.classList.add('dan');
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
        // document.body.classList.remove('dan');

        console.log("UNMOUNT", this.props);
    }

    render() {
        return (
            <section className="spaceship-navigation">
                <nav>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <div className="underline"></div>
                        </li>
                        <li>
                            <Link to="/bob">Bob</Link>
                            <div className="underline"></div>
                        </li>
                        <li>
                            <Link to="/tim">Tim</Link>
                            <div className="underline"></div>
                        </li>
                        <li>
                            <Link to="/dan">Dan</Link>
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
        );
    }
}

export default MainNav;