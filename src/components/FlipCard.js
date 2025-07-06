import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import "../../src/styles/FlipCard.scss";

const FlipCard = ({ index, propA, propB, propC, spellingToggle }) => {
    const [flipped, setFlipped] = useState(false);

    const IpaClassNames = clsx('ipa', {
        'spell_off': !spellingToggle
    });

    return (
        <div className="perspective" onClick={() => setFlipped(!flipped)}>
            <motion.div
                className={`card_ ${flipped ? "flipped" : ""}`}
                animate={{ rotateY: flipped ? 180 : 0 }}
            >
                <div className="face front">
                    <p>{index + 1}</p>
                    <div className="propA">{propA}</div>
                </div>
                <div className="face back">
                    <div className={IpaClassNames}>{propB}</div>
                    {spellingToggle && <div className="spell">{propC}</div>}
                </div>
            </motion.div>
        </div>
    );
}

export default FlipCard;