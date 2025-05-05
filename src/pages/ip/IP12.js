import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/ip/ip12.json";
import Mathilda from "../../components/Mathilda";

class IP12 extends React.Component {

    render() {
        const lesson = {
            "student": "Ihor",
            "number": 12,
            "slug": "ip"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default IP12;