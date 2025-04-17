import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Word from "../../components/Word";
import words from "../../data/ip/ip20.json";

class IP20 extends React.Component {

    render() {
        const lesson = {
            "student": "Ihor",
            "number": 20,
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

export default IP20;