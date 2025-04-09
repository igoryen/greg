import "../styles/fc.scss";
import React from "react";
import Derek from "../components/Derek";
import lines from "../data/ab/ab.json";

class AB extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Alena</h1>
                <Derek derek={lines} slug="ab" />
            </div>
        );
    }
}

export default AB;