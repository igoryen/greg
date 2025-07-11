import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/mg/mg04.json";

class MG04 extends React.Component {

    render() {
        const lesson = {
            "student": "Michael",
            "number": 4,
            "slug": "mg"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default MG04;