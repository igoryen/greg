import "../../../styles/fc.scss";
import React from "react";
import Derek from "../../../components/Derek";
import lines from "../../../data/s/mg/mg.json";

class MG extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Michael</h1>
                <Derek derek={lines} slug="mg" />
            </div>
        );
    }
}

export default MG;