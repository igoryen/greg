import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/ip/ip27.json";
import Mathilda from "../../components/Mathilda";

class IP27 extends React.Component {

    render() {
        const lesson = {
            "student": "Ihor",
            "number": 27,
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

export default IP27;