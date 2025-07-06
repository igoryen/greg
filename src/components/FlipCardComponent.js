// create
// a simple react Component, functional,
// it accepts a json object
// an array of objects 
// each objects has 3 properties
// propA, propB, propC
// uses a loop that creates cards that can flip on click
// each card has 2 sides
// each side displays 2 strings 
// face side displays card number, propA
// flip side displays propB, propC

// the flip effect uses 3D animation
// the speed of the flipping effect will be a variable set in configuration

import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../src/styles/FlipCard.scss";

const FlipCardComponent = ({ data }) => {
    return (
        <div className="patty">
            {data.map((item, index) => (
                <FlipCard
                    key={index}
                    index={index}
                    propA={item.def1}
                    propB={item.ipa}
                    propC={item.spell}
                />
            ))}
        </div>
    );
};

const FlipCard = ({ index, propA, propB, propC, flipDuration }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="perspective" onClick={() => setFlipped(!flipped)}>
            <motion.div
                className={`card_ ${flipped ? "flipped" : ""}`}
                animate={{ rotateY: flipped ? 180 : 0 }}
            >
                <div className="face front">
                    <div className="">Card {index + 1}</div>
                    <div>{propA}</div>
                </div>
                <div className="face back">
                    <div>{propB}</div>
                    <div>{propC}</div>
                </div>
            </motion.div>
        </div>
    );
};

export default FlipCardComponent;