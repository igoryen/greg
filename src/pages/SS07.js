import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";

class SS07 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const lesson = {
            "student": "Svetlana",
            "number": 7,
            "slug": "ss"
        };
        const words = [
            {
                "cefr": "",
                "def1": "раз",
                "ipa": "taɪm",
                "spell": "time"
            },
            {
                "cefr": "",
                "def1": "цель",
                "ipa": "ˈtɑrɡət",
                "spell": "target"
            },
            {
                "cefr": "",
                "def1": "событие",
                "ipa": "ɪˈvɛnt",
                "spell": "event"
            },
            {
                "cefr": "",
                "def1": "тому назад",
                "ipa": "əˈɡoʊ",
                "spell": "ago"
            },
            {
                "cefr": "",
                "def1": "эффект",
                "ipa": "ɪˈfɛkt",
                "spell": "effect"
            },
            {
                "cefr": "",
                "def1": "озноб",
                "ipa": "ˈʃɪvərɪŋ",
                "spell": "shivering"
            },
            {
                "cefr": "",
                "def1": "5 раз",
                "ipa": "faɪv taɪmz",
                "spell": "five times"
            },
            {
                "cefr": "",
                "def1": "озноб, дрожь",
                "ipa": "ˈrɪɡərz",
                "spell": "rigors"
            },
            {
                "cefr": "",
                "def1": "уточнить",
                "ipa": "ˈspɛsəˌfaɪ",
                "spell": "specify"
            },
            {
                "cefr": "",
                "def1": "буквально",
                "ipa": "ˈlɪtərəli",
                "spell": "literally"
            },
            {
                "cefr": "",
                "def1": "дрожь, колотун",
                "ipa": "ˈʃɪvərz",
                "spell": "shivers"
            },
            {
                "cefr": "",
                "def1": "лихорадочная дрожь",
                "ipa": "ʧɪlz",
                "spell": "chills"
            },
            {
                "cefr": "",
                "def1": "разнообразный",
                "ipa": "daɪˈvɜrs",
                "spell": "diverse"
            },
            {
                "cefr": "",
                "def1": "обойтись без",
                "ipa": "du wɪˈθaʊt",
                "spell": "do without"
            },
            {
                "cefr": "",
                "def1": "несколько раз",
                "ipa": "ə fju taɪmz",
                "spell": "a few times"
            },
            {
                "cefr": "",
                "def1": "лихорадочный озноб",
                "ipa": "ðə ʃeɪks",
                "spell": "the shakes"
            },
            {
                "cefr": "",
                "def1": "произношение",
                "ipa": "prəˌnʌnsiˈeɪʃən",
                "spell": "pronunciation"
            },
            {
                "cefr": "",
                "def1": "я могу обойтись без этого",
                "ipa": "aɪ kæn du wɪˈθaʊt ɪt",
                "spell": "I can do without it"
            },
            {
                "cefr": "",
                "def1": "у меня от этого гриппа была дрожь",
                "ipa": "ðæt flu ɡeɪv mi ðə ˈʃɪvərz",
                "spell": "that flu gave me the shivers"
            },
            {
                "cefr": "",
                "def1": "у меня температура и дрожь",
                "ipa": "aɪv ɡɑt ə ˈfivər ænd ðə ʧɪlz",
                "spell": "I’ve got a fever and the chills"
            },
            {
                "cefr": "",
                "def1": "вчера ночью у меня была температура и сильный озноб",
                "ipa": "aɪ hæd ə ˈfivər læst naɪt ænd ɡɑt ðə ʃeɪks riəl bæd",
                "spell": "I had a fever last night and got the shakes real bad"
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

export default SS07;