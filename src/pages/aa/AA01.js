import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/aa/aa01.json";

class AA01 extends React.Component {

    render() {
        const lesson = {
            "student": "Aibek",
            "number": 1,
            "slug": "aa"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default AA01;