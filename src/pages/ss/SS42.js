import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ss/ss42.json";

class SS42 extends React.Component {

    render() {
        const lesson = {
            "student": "Svetlana",
            "number": 42,
            "slug": "ss"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default SS42;