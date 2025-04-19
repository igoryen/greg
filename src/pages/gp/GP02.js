import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/gp/gp02.json";

class GP02 extends React.Component {

    render() {
        const lesson = {
            "student": "Galja",
            "number": 2,
            "slug": "gp"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default GP02;