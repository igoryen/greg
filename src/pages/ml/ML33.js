import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ml/ml33.json";

class ML33 extends React.Component {

    render() {
        const lesson = {
            "student": "Maria",
            "number": 33,
            "slug": "ml"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default ML33;