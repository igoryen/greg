import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";
import words from "../data/ms10.json";
import sentences from "../data/ms11s.json";

class MS06 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Mykola",
            "number": 11,
            "slug": "ms"
        };


        const wordsFinal = [];
        const story = [];

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

        for (let [i, sentence] of sentences.entries()) {
            i++;
            story.push(
                <div className="sentence" key={i}>
                    <span className="kanju">{i}</span>
                    <p className="glico">{sentence.glico}</p>
                    <p className="fanva">{sentence.fanva}</p>
                </div>
            );
        }


        return (
            <div>
                <Leon lesson={lesson} />
                <section className="words">
                    {wordsFinal}
                </section>

                <section className="song">
                    {story}
                </section>
            </div>
        );
    }
}

export default MS06;