import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/ip/ip11.json";
import Mathilda from "../../components/Mathilda";

class IP11 extends React.Component {

    render() {
        const lesson = {
            "student": "Ihor",
            "number": 11,
            "slug": "ip"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default IP11;