import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/st/st05.json";

class ST05 extends React.Component {

    render() {
        const lesson = {
            "student": "Sana",
            "number": 5,
            "slug": "ts"
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

export default ST05;