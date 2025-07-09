import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ml/ml69.json";

class ML69 extends React.Component {

    render() {
        const lesson = {
            "student": "Maria",
            "number": 69,
            "slug": "ml"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default ML69;