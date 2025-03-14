import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";

class AB06 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Alena",
            "number": 6,
            "slug": "ab"
        };
        const words = [
            {
                "cefr": "",
                "def1": "их",
                "ipa": "ðɛr",
                "spell": "their"
            },
            {
                "cefr": "",
                "def1": "там",
                "ipa": "ðɛr",
                "spell": "there"
            },
            {
                "cefr": "",
                "def1": "ключ",
                "ipa": "ə ki",
                "spell": "a key"
            },
            {
                "cefr": "",
                "def1": "лапа",
                "ipa": "ə pɔ",
                "spell": "a paw"
            },
            {
                "cefr": "",
                "def1": "зоопарк",
                "ipa": "ə zu",
                "spell": "a zoo"
            },
            {
                "cefr": "",
                "def1": "хвост",
                "ipa": "ə teɪl",
                "spell": "a tail"
            },
            {
                "cefr": "",
                "def1": "вилять",
                "ipa": "tu wæɡ",
                "spell": "to wag"
            },
            {
                "cefr": "",
                "def1": "гнездо",
                "ipa": "ə nɛst",
                "spell": "a nest"
            },
            {
                "cefr": "",
                "def1": "они суть",
                "ipa": "ðɛr",
                "spell": "they're"
            },
            {
                "cefr": "",
                "def1": "звонить",
                "ipa": "tu rɪŋ",
                "spell": "to ring"
            },
            {
                "cefr": "",
                "def1": "миска, чашка",
                "ipa": "ə boʊl",
                "spell": "a bowl"
            },
            {
                "cefr": "",
                "def1": "я согласна",
                "ipa": "aɪ əˈɡri",
                "spell": "I agree"
            },
            {
                "cefr": "",
                "def1": "рюкзак",
                "ipa": "ə ˈbækˌpæk",
                "spell": "a backpack"
            },
            {
                "cefr": "",
                "def1": "велик; мотоцикл",
                "ipa": "ə baɪk",
                "spell": "a bike"
            },
            {
                "cefr": "",
                "def1": "письменный стол",
                "ipa": "ə dɛsk",
                "spell": "a desk"
            },
            {
                "cefr": "",
                "def1": "средний брат",
                "ipa": "ˈmɪdəl ˈbrʌðər",
                "spell": "middle brother"
            },
            {
                "cefr": "",
                "def1": "старший брат",
                "ipa": "ˈoʊldər ˈbrʌðər",
                "spell": "older brother"
            },
            {
                "cefr": "",
                "def1": "старшая сестра",
                "ipa": "ˈoʊldər ˈsɪstər",
                "spell": "older sister"
            },
            {
                "cefr": "",
                "def1": "младшая сестра",
                "ipa": "ˈjʌŋɡər ˈsɪstər",
                "spell": "younger sister"
            },
            {
                "cefr": "",
                "def1": "тетрадь; записная книжка",
                "ipa": "ə ˈnoʊtˌbʊk",
                "spell": "a notebook"
            },
            {
                "cefr": "",
                "def1": "самый младший брат",
                "ipa": "ðə ˈjʌŋɡəst ˈbrʌðər",
                "spell": "the youngest brother"
            },
            {
                "cefr": "",
                "def1": "собака виляет хвостом",
                "ipa": "ə dɔɡ wæɡz ɪts teɪl",
                "spell": "a dog wags its tail"
            },
            {
                "cefr": "",
                "def1": "чем короче, тем лучше",
                "ipa": "ðə ˈʃɔrtər ðə ˈbɛtər",
                "spell": "the shorter the better"
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

export default AB06;