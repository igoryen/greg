import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/yk/yk03.json";

class YK03 extends React.Component {

    render() {
        const lesson = {
            "student": "Yana",
            "number": 3,
            "slug": "yk"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default YK03;