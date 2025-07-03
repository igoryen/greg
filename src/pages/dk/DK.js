import "../../styles/fc.scss";
import React from "react";
import Derek from "../../components/Derek";
import lines from "../../data/dk/dk.json";

class DK extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Dimitry</h1>
                <Derek derek={lines} slug="dk" />
            </div>
        );
    }
}

export default DK;