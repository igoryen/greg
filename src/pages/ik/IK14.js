import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/ik/ik14.json";
import Mathilda from "../../components/Mathilda";

class IP14 extends React.Component {

    render() {
        const lesson = {
            "student": "Ivan",
            "number": 14,
            "slug": "ik"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default IP14;