// pages/FlipCardPage.jsx

import React from "react";
import Leon from "../components/Leon";
import "../../src/styles/FlipCardPage.scss";
import words from "../data/ml/ml50.json";
import FlipCardComponent from "./FlipCardComponent";

class FlipCardPage extends React.Component {

    render() {

        const lesson = {
            "student": "Ivan",
            "number": 16,
            "slug": "ik"
        };

        return (
            <div className="flip-card-page">
                <Leon lesson={lesson} />


                <FlipCardComponent words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default FlipCardPage;
