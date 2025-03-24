import { useEffect } from "react";

function Word({ words }) {
    useEffect(() => {
        // code to run after render goes here
        window.$(".word").flip({ speed: 200 });
    });

    const wordsFinal = [];

    for (let [i, word] of words.entries()) {
        i++;
        wordsFinal.push(
            <div className="word" key={i}>
                <div className="front part part1">
                    <p>{i}</p>
                    <div className="rus">{word.def1}</div>
                    <div className="cefr">{word.cefr}</div>
                </div>
                <div className="back part part2">
                    <div className="ipa">{word.ipa}</div>
                    <div className="spell">{word.spell}</div>
                </div>
            </div>
        );
    }
    return (
        <section className="words">
            {wordsFinal}
        </section>
    );
}

export default Word;