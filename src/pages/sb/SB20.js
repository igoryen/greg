import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/sb/sb20.json";

class SB20 extends React.Component {

    render() {

        const lesson = {
            "student": "Svetlana",
            "number": 20,
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

export default SB20;