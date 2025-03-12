import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";

class IP03 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Ihor",
            "number": 3,
            "slug": "ip"
        };

        const words = [
            {
                "cefr": "",
                "def1": "я є",
                "ipa": "aɪ æm",
                "spell": "I am"
            },
            {
                "cefr": "",
                "def1": "я на роботі",
                "ipa": "aɪ æm æt wɜrk",
                "spell": "I am at work"
            },
            {
                "cefr": "",
                "def1": "чоловіки",
                "ipa": "mɛn",
                "spell": "men"
            },
            {
                "cefr": "",
                "def1": "чоловік",
                "ipa": "ə mæn",
                "spell": "a man"
            },
            {
                "cefr": "",
                "def1": "це є / воно є",
                "ipa": "ɪt ɪz",
                "spell": "it is"
            },
            {
                "cefr": "",
                "def1": "у мене є діти",
                "ipa": "aɪ hæv kɪdz",
                "spell": "I have kids"
            },
            {
                "cefr": "",
                "def1": "ти є / ви є",
                "ipa": "ju ɑr",
                "spell": "you are"
            },
            {
                "cefr": "",
                "def1": "сумка",
                "ipa": "ə bæɡ",
                "spell": "a bag"
            },
            {
                "cefr": "",
                "def1": "спина",
                "ipa": "ə bæk",
                "spell": "a back"
            },
            {
                "cefr": "",
                "def1": "словник",
                "ipa": "ə ˈdɪkʃəˌnɛri",
                "spell": "a dictionary"
            },
            {
                "cefr": "",
                "def1": "погода",
                "ipa": "ˈwɛðər",
                "spell": "weather"
            },
            {
                "cefr": "",
                "def1": "повторіть",
                "ipa": "rɪˈpit",
                "spell": "repeat"
            },
            {
                "cefr": "",
                "def1": "олівець",
                "ipa": "ə ˈpɛnsəl",
                "spell": "a pencil"
            },
            {
                "cefr": "",
                "def1": "напишіть це, будь ласка",
                "ipa": "raɪt ɪt, pliz",
                "spell": "write it, please"
            },
            {
                "cefr": "",
                "def1": "на роботі",
                "ipa": "æt wɜrk",
                "spell": "at work"
            },
            {
                "cefr": "",
                "def1": "ми є",
                "ipa": "wi ɑr",
                "spell": "we are"
            },
            {
                "cefr": "",
                "def1": "кредитна картка",
                "ipa": "ə ˈkrɛdət kɑrd",
                "spell": "a credit card"
            },
            {
                "cefr": "",
                "def1": "жінки",
                "ipa": "ˈwɪmən",
                "spell": "women"
            },
            {
                "cefr": "",
                "def1": "жінка",
                "ipa": "ə ˈwʊmən",
                "spell": "a woman"
            },
            {
                "cefr": "",
                "def1": "де ти? / де ви?",
                "ipa": "wɛr ɑr ju?",
                "spell": "where are you?"
            },
            {
                "cefr": "",
                "def1": "наручний годинник",
                "ipa": "ə wɑʧ",
                "spell": "a watch"
            },
            {
                "cefr": "",
                "def1": "настінний / настільний годинник",
                "ipa": "ə klɑk",
                "spell": "a clock"
            },
            {
                "cefr": "",
                "def1": "газета",
                "ipa": "ə ˈnuzˌpeɪpər",
                "spell": "a newspaper"
            },
            {
                "cefr": "",
                "def1": "він є",
                "ipa": "hi ɪz",
                "spell": "he is"
            },
            {
                "cefr": "",
                "def1": "візитна картка",
                "ipa": "ə ˈbɪznəs kɑrd",
                "spell": "a business card"
            },
            {
                "cefr": "",
                "def1": "вони є",
                "ipa": "ðeɪ ɑr",
                "spell": "they are"
            },
            {
                "cefr": "",
                "def1": "вона є",
                "ipa": "ʃi ɪz",
                "spell": "she is"
            },
            {
                "cefr": "",
                "def1": "вона вдома",
                "ipa": "ʃi ɪz æt hoʊm",
                "spell": "she is at home"
            },
            {
                "cefr": "",
                "def1": "вдома",
                "ipa": "æt hoʊm",
                "spell": "at home"
            },
            {
                "cefr": "",
                "def1": "більше ніж один",
                "ipa": "mɔr ðæn wʌn",
                "spell": "more than one"
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

export default IP03;