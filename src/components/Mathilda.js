import { useEffect } from "react";

function Mathilda({ words }) {
    useEffect(() => {
        // code to run after render goes here
        window.$(".word").flip({ speed: 200 });
    });

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

export default Mathilda;