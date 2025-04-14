import "../../styles/fc.scss";
import React from "react";
import Derek from "../../components/Derek";
import lines from "../../data/vk/vk.json";

class VK extends React.Component {
    render() {
        return (
            <div>
                <h3>Anglofor</h3>
                <h1>Valeria</h1>
                <Derek derek={lines} slug="vk" />
            </div>
        );
    }
}

export default VK;