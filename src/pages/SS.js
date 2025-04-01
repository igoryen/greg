import "../styles/fc.scss";
import React from "react";
import Derek from "../components/Derek";
import lines from "../data/ss.json";

class SS extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Svetlana</h1>
                <Derek derek={lines} slug="ss" />
            </div>
        );
    }
}

export default SS;