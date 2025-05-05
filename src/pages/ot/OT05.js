import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ot/ot05.json";

class OT05 extends React.Component {

    render() {
        const lesson = {
            "student": "Olena",
            "number": 5,
            "slug": "ot"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default OT05;