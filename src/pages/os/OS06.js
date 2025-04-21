import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/os/os06.json";

class OS06 extends React.Component {

    render() {
        const lesson = {
            "student": "Alex",
            "number": 6,
            "slug": "os"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default OS06;