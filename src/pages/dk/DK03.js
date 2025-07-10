import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/dk/dk03.json";
import Mathilda from "../../components/Mathilda";

class DK03 extends React.Component {

    render() {
        const lesson = {
            "student": "Dimitry",
            "number": 3,
            "slug": "dk"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default DK03;