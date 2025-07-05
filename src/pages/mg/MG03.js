import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/mg/mg03.json";

class MG03 extends React.Component {

    render() {
        const lesson = {
            "student": "Michael",
            "number": 3,
            "slug": "mg"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default MG03;