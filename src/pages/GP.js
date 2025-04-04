import "../styles/fc.scss";
import React from "react";
import Derek from "../components/Derek";
import lines from "../data/gp.json";

class GP extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Galja P</h1>
                <Derek derek={lines} slug="gp" />
            </div>
        );
    }
}

export default GP;