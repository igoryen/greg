import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";
import Mathilda from "../components/Mathilda";
import words from "../data/ab/ab15.json";

class AB15 extends React.Component {

    render() {
        const lesson = {
            "student": "Alyona",
            "number": 15,
            "slug": "ab"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} showSpell={false} />

            </div>
        );
    }
}

export default AB15;