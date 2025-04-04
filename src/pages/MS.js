import "../styles/fc.scss";
import React from "react";
import Derek from "../components/Derek";
import lines from "../data/ms.json";

class MS extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Mykola Stepan</h1>
                <Derek derek={lines} slug="ms" />
            </div>
        );
    }
}

export default MS;