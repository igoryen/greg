import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/sb/sb22.json";

class SB22 extends React.Component {

    render() {

        const lesson = {
            "student": "Svetlana",
            "number": 22,
            "slug": "sb"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default SB22;