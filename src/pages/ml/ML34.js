import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ml/ml34.json";

class ML34 extends React.Component {

    render() {
        const lesson = {
            "student": "Maria",
            "number": 34,
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

export default ML34;