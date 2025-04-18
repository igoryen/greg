import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Word from "../../components/Word";
import words from "../../data/im/im12.json";

class IM12 extends React.Component {

    render() {

        const lesson = {
            "student": "Ivan",
            "number": 12,
            "slug": "im"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Word words={words} />
            </div>
        );
    }
}

export default IM12;