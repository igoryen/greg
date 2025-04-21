import "../../styles/fc.scss";
import React from "react";
import Derek from "../../components/Derek";
import lines from "../../data/os/os.json";

class OS extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Alex</h1>
                <Derek derek={lines} slug="os" />
            </div>
        );
    }
}

export default OS;