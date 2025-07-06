import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/sb/sb05.json";

class SB05 extends React.Component {

    render() {

        const lesson = {
            "student": "Svetlana",
            "number": 5,
            "slug": "sb"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default SB05;