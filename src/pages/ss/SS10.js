import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/ss/ss10.json";

class SS10 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const lesson = {
            "student": "Svetlana",
            "number": 10,
            "slug": "ss"
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
            </div>
        );
    }
}

export default SS10;