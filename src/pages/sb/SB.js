import "../../styles/fc.scss";
import React from "react";
import Derek from "../../components/Derek";
import lines from "../../data/sb/sb.json";

class SB extends React.Component {

    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Svetlana</h1>
                <Derek derek={lines} slug="sb" />
            </div>
        );
    }
}

export default SB;