import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/ik/ik17.json";
import Mathilda from "../../components/Mathilda";

class IP17 extends React.Component {

    render() {
        const lesson = {
            "student": "Ivan",
            "number": 17,
            "slug": "ik"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default IP17;