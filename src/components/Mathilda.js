import { useState } from "react";
import FlipCard from "./FlipCard";
import "../../src/styles/FlipCardComponent.scss";

const FlipCardComponent = ({ words, lang = 'def1', lesnum }) => {

    const [spellingToggle, setSpellingToggle] = useState(false);
    const spellingToggleChange = () => {
        setSpellingToggle(!spellingToggle);
    }

    let sectionClasses = `words2 mathilda palette${typeof lesnum !== 'undefined' ? lesnum.toString().at(-1) : "1"}`;

    return (

        <section className={sectionClasses}>
            <div className="spelling_switch">
                <button onClick={spellingToggleChange} className={spellingToggle ? "spelling on" : "spelling off"}>SPELLING</button>
                <div className={spellingToggle ? "spelling on" : "spelling off"}>{spellingToggle ? "ON" : "OFF"}</div>
            </div>

            <div className="patty">
                {words.map((word, index) => (
                    <FlipCard
                        key={index}
                        index={index}
                        propA={word.def1}
                        propB={word.ipa}
                        propC={word.spell}
                        spellingToggle={spellingToggle}
                    />
                ))}
            </div>
        </section>
    );
};

export default FlipCardComponent;