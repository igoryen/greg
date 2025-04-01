import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";
import Mathilda from "../components/Mathilda";
import words from "../data/ab14.json";

class AB14 extends React.Component {

    render() {
        const lesson = {
            "student": "Alyona",
            "number": 14,
            "slug": "ab"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />

            </div>
        );
    }
}

export default AB14;