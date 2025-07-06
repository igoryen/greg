// pages/FlipCardPage.jsx

import React from "react";
import Leon from "../components/Leon";
import "../../src/styles/pelli.scss";
import words from "../data/ml/ml50.json";
import Mathilda from "./Mathilda";

class FlipCardPage extends React.Component {

    render() {

        const lesson = {
            "student": "Ivan",
            "number": 16,
            "slug": "ik"
        };

        return (
            <div className="pelli">
                <Leon lesson={lesson} />


                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default FlipCardPage;
