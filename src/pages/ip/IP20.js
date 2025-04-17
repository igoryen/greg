import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/ip/ip20.json";
import Mathilda from "../../components/Mathilda";

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
                <Mathilda words={words} />
            </div>
        );
    }
}

export default IP20;