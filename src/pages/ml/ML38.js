import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ml/ml38.json";

class ML38 extends React.Component {

    render() {
        const lesson = {
            "student": "Maria",
            "number": 38,
            "slug": "ml"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default ML38;