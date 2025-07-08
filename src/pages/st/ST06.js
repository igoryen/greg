import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/st/st06.json";

class ST06 extends React.Component {

    render() {
        const lesson = {
            "student": "Sana",
            "number": 6,
            "slug": "st"
        };

        return (
            <div className="pelli">
                <div>
                    <Leon lesson={lesson} />
                    <Mathilda words={words} lesnum={lesson.number} />
                </div>
            </div>
        );
    }
}

export default ST06;