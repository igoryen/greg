import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/vk/vk06.json";

class VK06 extends React.Component {

    render() {
        const lesson = {
            "student": "Valeria",
            "number": 6,
            "slug": "vk"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default VK06;