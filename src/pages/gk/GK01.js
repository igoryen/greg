import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/gk/gk01.json";

class GK01 extends React.Component {

    render() {
        const lesson = {
            "student": "Tanyas",
            "number": 1,
            "slug": "gk"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default GK01;