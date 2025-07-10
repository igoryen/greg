import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/sb/sb24.json";

class SB24 extends React.Component {

    render() {

        const lesson = {
            "student": "Svetlana",
            "number": 24,
            "slug": "sb"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default SB24;