import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/ik/ik19.json";
import Mathilda from "../../components/Mathilda";

class IP19 extends React.Component {

    render() {
        const lesson = {
            "student": "Ivan",
            "number": 19,
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

export default IP19;