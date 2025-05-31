import "../../styles/fc.scss";
import React from "react";
import Derek from "../../components/Derek";
import lines from "../../data/st/st.json";

class ST extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Sana</h1>
                <Derek derek={lines} slug="st" />
            </div>
        );
    }
}

export default ST;