import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ag/ag08.json";

class AG08 extends React.Component {

    render() {
        const lesson = {
            "student": "Artyom",
            "number": 8,
            "slug": "ag"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default AG08;