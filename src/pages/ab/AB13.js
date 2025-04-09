import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Word from "../../components/Word";
import words from "../../data/ab/ab13.json";
import sentences from "../../data/ab/ab13s.json";
import Jufra from "../../components/Jufra";

class AB13 extends React.Component {

    render() {
        const lesson = {
            "student": "Alyona",
            "number": 13,
            "slug": "ab"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Word words={words} />
                <Jufra jufra={sentences} />
            </div>
        );
    }
}

export default AB13;