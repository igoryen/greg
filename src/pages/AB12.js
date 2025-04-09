import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";
import Word from "../components/Word";
import words from "../data/ab/ab12.json";

class AB12 extends React.Component {

    render() {
        const lesson = {
            "student": "Alyona",
            "number": 12,
            "slug": "ab"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Word words={words} />
            </div>
        );
    }
}

export default AB12;