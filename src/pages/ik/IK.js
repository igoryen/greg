import "../../styles/fc.scss";
import React from "react";
import Derek from "../../components/Derek";
import lines from "../../data/ik/ik.json";

class IK extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Ivan</h1>
                <Derek derek={lines} slug="ik" />
            </div>
        );
    }
}

export default IK;