import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ss/ss23.json";

class SS23 extends React.Component {

    render() {
        const lesson = {
            "student": "Svetlana",
            "number": 23,
            "slug": "ss"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default SS23;