import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ml/ml41.json";

class ML41 extends React.Component {

    render() {
        const lesson = {
            "student": "Maria",
            "number": 41,
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

export default ML41;