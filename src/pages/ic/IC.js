import "../../styles/fc.scss";
import React from "react";
import Derek from "../../components/Derek";
import lines from "../../data/ic/ic.json";

class IC extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Irina</h1>
                <Derek derek={lines} slug="ic" />
            </div>
        );
    }
}

export default IC;