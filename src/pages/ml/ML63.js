import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ml/ml63.json";

class ML63 extends React.Component {

    render() {
        const lesson = {
            "student": "Maria",
            "number": 63,
            "slug": "ml"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default ML63;