import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ot/ot02.json";

class OT02 extends React.Component {

    render() {
        const lesson = {
            "student": "Olena",
            "number": 2,
            "slug": "ot"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default OT02;