import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";

class IP06 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Ihor",
            "number": 6,
            "slug": "ip"
        };
        const words = [
            {
                "cefr": "",
                "def1": "там",
                "ipa": "ðɛr",
                "spell": "there"
            },
            {
                "cefr": "",
                "def1": "монета",
                "ipa": "kɔɪn",
                "spell": "coin"
            },
            {
                "cefr": "",
                "def1": "площа",
                "ipa": "ə skwɛr",
                "spell": "a square"
            },
            {
                "cefr": "",
                "def1": "тезка",
                "ipa": "ˈneɪmˌseɪk",
                "spell": "namesake"
            },
            {
                "cefr": "",
                "def1": "фотографія",
                "ipa": "ˈpɪkʧər",
                "spell": "picture"
            },
            {
                "cefr": "",
                "def1": "ось там",
                "ipa": "ˈoʊvər ðɛr",
                "spell": "over there"
            },
            {
                "cefr": "",
                "def1": "їхня машина",
                "ipa": "ðɛr kɑr",
                "spell": "their car"
            },
            {
                "cefr": "",
                "def1": "англійською",
                "ipa": "ɪn ˈɪŋɡlɪʃ",
                "spell": "in English"
            },
            {
                "cefr": "",
                "def1": "європейський футбол",
                "ipa": "ˈsɑkər",
                "spell": "soccer"
            },
            {
                "cefr": "",
                "def1": "який годинник?",
                "ipa": "wɑt wɑʧ?",
                "spell": "what watch?"
            },
            {
                "cefr": "",
                "def1": "американський футбол",
                "ipa": "ˈfʊtˌbɔl",
                "spell": "football"
            },
            {
                "cefr": "",
                "def1": "це монети",
                "ipa": "ðiz ɑr kɔɪnz",
                "spell": "these are coins"
            },
            {
                "cefr": "",
                "def1": "доларова монета",
                "ipa": "ˈdɑlər kɔɪn",
                "spell": "dollar coin"
            },
            {
                "cefr": "",
                "def1": "це монети",
                "ipa": "ðoʊz ɑr kɔɪnz",
                "spell": "those are coins"
            },
            {
                "cefr": "",
                "def1": "вони водії",
                "ipa": "ðɛr ˈdraɪvərz",
                "spell": "they’re drivers"
            },
            {
                "cefr": "",
                "def1": "як ти?",
                "ipa": "haʊ hæv ju bɪn?",
                "spell": "how have you been?"
            },
            {
                "cefr": "",
                "def1": "як це англійською?",
                "ipa": "wɑt ɪz ɪt ɪn ˈɪŋɡlɪʃ?",
                "spell": "what is it in English?"
            },
            {
                "cefr": "",
                "def1": "що це? це монета.",
                "ipa": "wɑt ɪz ðæt? ðæt ɪz ə kɔɪn.",
                "spell": "what is that? that is a coin."
            },
            {
                "cefr": "",
                "def1": "що це? це монета.",
                "ipa": "wɑt ɪz ðɪs? ðɪs ɪz ə kɔɪn.",
                "spell": "what is this? this is a coin."
            },
            {
                "cefr": "",
                "def1": "що це? це монети.",
                "ipa": "wɑt ɑr ðiz? ðiz ɑr kɔɪnz.",
                "spell": "what are these? these are coins."
            },
            {
                "cefr": "",
                "def1": "що це? це монети.",
                "ipa": "wɑt ɑr ðoʊz? ðoʊz ɑr kɔɪnz.",
                "spell": "what are those? those are coins."
            },
            {
                "cefr": "",
                "def1": "Це Джеррі, а це Ед.",
                "ipa": "ðæt wʌnz ˈʤɛri, ænd ðæt wʌnz ɛd.",
                "spell": "That one’s Jerry, and that one’s Ed."
            },
            {
                "cefr": "",
                "def1": "так, це мій магазин",
                "ipa": "(1) jɛs. (2) jɛs, ɪt ɪz. (3) jɛs, ɪt ɪz maɪ stɔr.",
                "spell": "(1) yes. (2) yes, it is (3) yes, it is my store"
            }
        ];
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

export default IP06;