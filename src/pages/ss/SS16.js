import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ss/ss16.json";

class SS16 extends React.Component {

    render() {
        const lesson = {
            "student": "Svetlana",
            "number": 16,
            "slug": "ss"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default SS16;