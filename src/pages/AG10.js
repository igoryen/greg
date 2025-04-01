import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";
import Mathilda from "../components/Mathilda";
import words from "../data/ag10.json";

class AG10 extends React.Component {

    render() {
        const lesson = {
            "student": "Artyom",
            "number": 10,
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

export default AG10;