import "../../styles/fc.scss";
import React from "react";
import Derek from "../../components/Derek";
import lines from "../../data/aa/aa.json";

class AA extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Aibek</h1>
                <Derek derek={lines} slug="aa" />
            </div>
        );
    }
}

export default AA;