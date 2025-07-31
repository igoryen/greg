import { useState } from "react";
import FlipCard from "./FlipCard";
import "../../src/styles/FlipCardComponent.scss";

const FlipCardComponent = ({ words, lang = 'def1', lesnum }) => {
    const [spellingToggle, setSpellingToggle] = useState(false);
    const spellingToggleChange = () => setSpellingToggle(!spellingToggle);

    const highlightIPA = (ipa) => {
        const charsToBold = ['h', 'w', 'æ', 'ð', 'ŋ', 'ɔ', 'ə', 'ʊ', 'ʌ', 'θ', 'ɑ', 'ɜ', 'ɪ', 'v'];
        // eslint-disable-next-line
        const regex = new RegExp(`(${charsToBold.map(c => c.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")).join('|')})`, 'g');
        return ipa.replace(regex, "<b>$1</b>");
    };

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
                        propB={highlightIPA(word.ipa)}
                        propC={word.spell}
                        spellingToggle={spellingToggle}
                        isHtml={true}  // Tell FlipCard it's HTML
                    />
                ))}
            </div>
        </section>
    );
};

export default FlipCardComponent;
