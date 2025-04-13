import "../styles/fc.scss";
import React from "react";
import Derek from "../components/Derek";
import lines from "../data/im.json";

class IM extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Ivan</h1>
                <Derek derek={lines} slug="im" />
            </div>
        );
    }
}

export default IM;