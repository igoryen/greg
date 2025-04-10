import "../../styles/fc.scss";
import React from "react";
import Derek from "../../components/Derek";
import lines from "../../data/gk/gk.json";

class GK extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Tanyas</h1>
                <Derek derek={lines} slug="gk" />
            </div>
        );
    }
}

export default GK;