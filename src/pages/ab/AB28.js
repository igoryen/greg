import "../../../src/styles/pelli.scss"; import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ab/ab28.json";

class AB28 extends React.Component {

    render() {
        const lesson = {
            "student": "Alyona",
            "number": 28,
            "slug": "ab"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default AB28;