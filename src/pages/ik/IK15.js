import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/ik/ik15.json";
import Mathilda from "../../components/Mathilda";

class IP15 extends React.Component {

    render() {
        const lesson = {
            "student": "Ivan",
            "number": 15,
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

export default IP15;