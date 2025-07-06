import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/gp/gp11.json";

class GP11 extends React.Component {

    render() {
        const lesson = {
            "student": "Galja",
            "number": 11,
            "slug": "gp"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default GP11;