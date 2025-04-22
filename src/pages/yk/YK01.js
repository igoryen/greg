import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/yk/yk01.json";

class YK01 extends React.Component {

    render() {
        const lesson = {
            "student": "Yana",
            "number": 1,
            "slug": "yk"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default YK01;