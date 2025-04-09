import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ss/ss19.json";

class SS19 extends React.Component {

    render() {
        const lesson = {
            "student": "Svetlana",
            "number": 19,
            "slug": "ss"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default SS19;