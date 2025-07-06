import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/dk/dk01.json";
import Mathilda from "../../components/Mathilda";

class DK01 extends React.Component {

    render() {
        const lesson = {
            "student": "Dimitry",
            "number": 1,
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

export default DK01;