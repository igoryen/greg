import "../../styles/fc.scss";
import React from "react";
import Derek from "../../components/Derek";
import lines from "../../data/ml/ml.json";

class ML extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Maria</h1>
                <Derek derek={lines} slug="ml" />
            </div>
        );
    }
}

export default ML;