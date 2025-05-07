import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ss/ss31.json";

class SS31 extends React.Component {

    render() {
        const lesson = {
            "student": "Svetlana",
            "number": 31,
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

export default SS31;