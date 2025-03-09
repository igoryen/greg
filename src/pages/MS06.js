import "../styles/fc.scss";
import React from "react";

class MS06 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const words = [
            {
                "cefr": "",
                "def1": "носить (об одежде)",
                "ipa": "wɛr",
                "spell": "wear"
            },
            {
                "cefr": "",
                "def1": "изношенный",
                "ipa": "wɔrn aʊt",
                "spell": "worn out"
            },
            {
                "cefr": "",
                "def1": "цементировать",
                "ipa": "səˈmɛnt",
                "spell": "cement"
            },
            {
                "cefr": "",
                "def1": "судя по",
                "ipa": "ˈʤʌʤɪŋ baɪ",
                "spell": "judging by"
            },
            {
                "cefr": "",
                "def1": "злоупотреблять",
                "ipa": "ˌoʊvərˈjuz",
                "spell": "overuse"
            },
            {
                "cefr": "",
                "def1": "автовокзал",
                "ipa": "bʌs ˈsteɪʃən",
                "spell": "bus station"
            },
            {
                "cefr": "",
                "def1": "в эти минуты",
                "ipa": "æz wi spik",
                "spell": "as we speak"
            },
            {
                "cefr": "",
                "def1": "буровой шпиндель",
                "ipa": "draɪv rɑd",
                "spell": "drive rod"
            },
            {
                "cefr": "",
                "def1": "вилочный погрузчик",
                "ipa": "fɔrk lɪft",
                "spell": "fork lift"
            },
            {
                "cefr": "",
                "def1": "скорее всего",
                "ipa": "moʊst ˈlaɪkli",
                "spell": "most likely"
            },
            {
                "cefr": "",
                "def1": "головка двигателя",
                "ipa": "ˈɛnʤən hɛd",
                "spell": "engine head"
            },
            {
                "cefr": "",
                "def1": "и тому подобное",
                "ipa": "wɑt hæv ju",
                "spell": "what have you"
            },
            {
                "cefr": "",
                "def1": "бросаться в глаза",
                "ipa": "straɪk ði aɪ",
                "spell": "strike the eye"
            },
            {
                "cefr": "",
                "def1": "много деятельности",
                "ipa": "ə lɑt ʌv ˈækʃən",
                "spell": "a lot of action"
            },
            {
                "cefr": "",
                "def1": "железнодорожная станция",
                "ipa": "treɪn ˈsteɪʃən",
                "spell": "train station"
            },
            {
                "cefr": "",
                "def1": "так хорошо, как можешь",
                "ipa": "æz wɛl æz ju kæn",
                "spell": "as well as you can"
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
                <h3>Anglofor</h3>
                <h1>Mykola :: Lesson 6</h1>
                <section className="words">
                    {wordsFinal}
                </section>

                <section className="song">
                    <p>This appears to be a Spanish-speaking country. In fact, it’s definitely a Spanish-speaking country, judging by the schedules on the walls and the store signs.</p>

                    <p>In the foreground, a couple is embracing. One of them might be leaving, but it’s unclear who. They could be married, though I don’t see a wedding ring on his finger. What’s clear is that they love each other deeply, and saying goodbye is very hard for them.</p>

                    <p>In the background, something else interesting is happening. A uniformed officer has asked a passenger to open their suitcase. She must have spotted something suspicious on the X-ray. Now, she’s going through the traveler’s belongings, searching for any prohibited items.</p>

                    <p>On the left side of the image, there’s a sad scene. A little girl is tugging at a woman’s skirt—most likely her mother. She looks worried and upset, perhaps afraid of getting lost in the crowd or distressed because she forgot her favorite toy. The open suitcase near her mother’s feet suggests the latter.</p>
                </section>
            </div>
        );
    }
}

export default MS06;