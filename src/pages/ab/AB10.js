import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Word from "../../components/Word";
import words from "../../data/ab/ab10.json";

class IP10 extends React.Component {

    render() {
        const lesson = {
            "student": "Alyona",
            "number": 10,
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

export default IP10;