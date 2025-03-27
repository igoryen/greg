import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";
import Word from "../components/Word";
import words from "../data/ml32.json";

class ML32 extends React.Component {

    render() {
        const lesson = {
            "student": "Maria",
            "number": 32,
            "slug": "ml"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Word words={words} />
            </div>
        );
    }
}

export default ML32;