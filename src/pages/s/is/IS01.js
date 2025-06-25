import "../../../styles/fc.scss";
import React from "react";
import Leon from "../../../components/Leon";
import Mathilda from "../../../components/Mathilda";
import words from "../../../data/s/is/is01.json";

class IS01 extends React.Component {

    render() {
        const lesson = {
            "student": "Inna",
            "number": 1,
            "slug": "is"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default IS01;