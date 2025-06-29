import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ab/ab42.json";

class AB42 extends React.Component {

    render() {
        const lesson = {
            "student": "Alyona",
            "number": 42,
            "slug": "ab"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default AB42;