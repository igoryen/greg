import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ab/ab17.json";

class AB17 extends React.Component {

    render() {
        const lesson = {
            "student": "Alyona",
            "number": 17,
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

export default AB17;