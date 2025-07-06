import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/gp/gp01.json";

class GP01 extends React.Component {

    render() {
        const lesson = {
            "student": "Galja",
            "number": 1,
            "slug": "gp"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default GP01;