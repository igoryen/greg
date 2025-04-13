import "../../styles/fc.scss";
import React from "react";
import Derek from "../../components/Derek";
import lines from "../../data/ag/ag.json";

class AG extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Artyom</h1>
                <Derek derek={lines} slug="ag" />
            </div>
        );
    }
}

export default AG;