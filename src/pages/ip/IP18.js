import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Word from "../../components/Word";
import words from "../../data/ip/ip18.json";

class IP18 extends React.Component {

    render() {
        const lesson = {
            "student": "Ihor",
            "number": 18,
            "slug": "ip"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Word words={words} />
            </div>
        );
    }
}

export default IP18;