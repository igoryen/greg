import { useEffect, useState } from "react";
import clsx from "clsx";
import "../styles/mathilda.scss";

function Mathilda({ words, lang = 'def1', lesnum }) {
    useEffect(() => {
        // code to run after render goes here
        window.$(".word").flip({ speed: 200 });
    });

    const [spellingToggle, setSpellingToggle] = useState(false);
    const spellingToggleChange = () => {
        setSpellingToggle(!spellingToggle);
    }

    const IpaClassNames = clsx('ipa', {
        'spell_off': !spellingToggle
    });

    let sectionClasses = `"words mathilda palette${typeof lesnum !== 'undefined' ? lesnum.toString().at(-1) : "1"}"`;

    let language = lang.slice(-1) === "1" ? "" : "Ukrainian";

    // src: https://stackoverflow.com/a/2450976/2938344
    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }

    shuffle(words);

    const wordsFinal = [];

    for (let [i, word] of words.entries()) {
        i++;
        wordsFinal.push(
            <div className="word" key={i}>
                <div className="front part part1">
                    <p>{i}</p>
                    <div className="rus">{word[lang]}</div>
                    <div className="cefr">{word.cefr}</div>
                </div>
                <div className="back part part2">
                    <div className={IpaClassNames}>{word.ipa}</div>
                    {spellingToggle && <div className="spell">{word.spell}</div>}
                </div>
            </div>
        );
    }

    return (
        <section className={sectionClasses}>
            <pre>{language}</pre>
            <div className="spelling_switch">
                <button onClick={spellingToggleChange} className={spellingToggle ? "spelling on" : "spelling off"}>SPELLING</button>
                <div className={spellingToggle ? "spelling on" : "spelling off"}>{spellingToggle ? "ON" : "OFF"}</div>
            </div>

            <div className="words">
                {wordsFinal}
            </div>
        </section>
    );
}

export default Mathilda;