import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/ab/ab08.json";

class AB08 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Alena",
            "number": 8,
            "slug": "ab"
        };

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
            <div>
                <Leon lesson={lesson} />
                <section className="words">

                    {wordsFinal}
                </section>
                <section>
                    <p>* - понятно, хоть и <b>не совсем</b> правильно грамматически</p>
                </section>
            </div>
        );
    }
}

export default AB08;