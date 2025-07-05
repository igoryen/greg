import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ot/ot21.json";

class OT21 extends React.Component {

    render() {
        const lesson = {
            "student": "Olena",
            "number": 21,
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

export default OT21;