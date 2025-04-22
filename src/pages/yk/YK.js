import "../../styles/fc.scss";
import React from "react";
import Derek from "../../components/Derek";
import lines from "../../data/yk/yk.json";

class YK extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Yana</h1>
                <Derek derek={lines} slug="yk" />
            </div>
        );
    }
}

export default YK;