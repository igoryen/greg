import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/ip/ip44.json";
import Mathilda from "../../components/Mathilda";

class IP44 extends React.Component {

    render() {
        const lesson = {
            "student": "Ihor",
            "number": 44,
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

export default IP44;