import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/sb/sb21.json";

class SB21 extends React.Component {

    render() {

        const lesson = {
            "student": "Svetlana",
            "number": 21,
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

export default SB21;