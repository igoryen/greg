// pages/FlipCardPage.jsx

import React from "react";
import FlipCardComponent from "./FlipCardComponent";
import data from "../data/ik/ik16.json";
import "../../src/styles/FlipCardPage.scss";

const FlipCardPage = () => {

    return (
        <div className="flip-card-page">
            <h1 className="title">Flip Card Demo</h1>
            <FlipCardComponent data={data} />
        </div>
    );
};

export default FlipCardPage;
