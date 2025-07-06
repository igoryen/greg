import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ab/ab14.json";

class AB14 extends React.Component {

    render() {
        const lesson = {
            "student": "Alyona",
            "number": 14,
            "slug": "ab"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} />

            </div>
        );
    }
}

export default AB14;