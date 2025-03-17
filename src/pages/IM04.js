import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";

class IM04 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const lesson = {
            "student": "Ivan",
            "number": 4,
            "slug": "im"
        };
        const words = [
            {
                "cefr": "",
                "def1": "в",
                "ipa": "æt",
                "spell": "at"
            },
            {
                "cefr": "",
                "def1": "тайский",
                "ipa": "taɪ",
                "spell": "Thai"
            },
            {
                "cefr": "",
                "def1": "шрам",
                "ipa": "ə skɑr",
                "spell": "a scar"
            },
            {
                "cefr": "",
                "def1": "греческий",
                "ipa": "ɡrik",
                "spell": "Greek"
            },
            {
                "cefr": "",
                "def1": "оманский",
                "ipa": "oʊˈmɑni",
                "spell": "Omani"
            },
            {
                "cefr": "",
                "def1": "запятая",
                "ipa": "ə ˈkɑmə",
                "spell": "a comma"
            },
            {
                "cefr": "",
                "def1": "ирландский",
                "ipa": "ˈaɪrɪʃ",
                "spell": "Irish"
            },
            {
                "cefr": "",
                "def1": "точка",
                "ipa": "ə ˈpɪriəd",
                "spell": "a period"
            },
            {
                "cefr": "",
                "def1": "Ирландия",
                "ipa": "ˈaɪərlənd",
                "spell": "Ireland"
            },
            {
                "cefr": "",
                "def1": "Тайланд",
                "ipa": "ˈtaɪˌlænd",
                "spell": "Thailand"
            },
            {
                "cefr": "",
                "def1": "точка, пятнышко",
                "ipa": "ə dɑt",
                "spell": "a dot"
            },
            {
                "cefr": "",
                "def1": "итальянский",
                "ipa": "ɪˈtæljən",
                "spell": "Italian"
            },
            {
                "cefr": "",
                "def1": "перуанский",
                "ipa": "pəˈruviən",
                "spell": "Peruvian"
            },
            {
                "cefr": "",
                "def1": "португалия",
                "ipa": "ˈpɔrʧəɡəl",
                "spell": "Portugal"
            },
            {
                "cefr": "",
                "def1": "португальский",
                "ipa": "ˈpɔrʧəˌɡiz",
                "spell": "Portuguese"
            },
            {
                "cefr": "",
                "def1": "апостроф",
                "ipa": "ən əˈpɑstrəfi",
                "spell": "an apostrophe"
            },
            {
                "cefr": "",
                "def1": "аргентинский",
                "ipa": "ˌɑrʤənˈtɪniən",
                "spell": "Argentinian"
            },
            {
                "cefr": "",
                "def1": "сокращение",
                "ipa": "ə kənˈtrækʃən",
                "spell": "a contraction"
            },
            {
                "cefr": "",
                "def1": "поликлиника",
                "ipa": "ə hɛlθ ˈklɪnɪk",
                "spell": "a health clinic"
            },
            {
                "cefr": "",
                "def1": "и так далее",
                "ipa": "ˌɛtˈsɛtərə., ɛt ˈsɛtərə",
                "spell": "etc., et cetera"
            },
            {
                "cefr": "",
                "def1": "двойное отрицание",
                "ipa": "ə ˈdʌbəl ˈnɛɡətɪv",
                "spell": "a double negative"
            },
            {
                "cefr": "",
                "def1": "ничё не знаю",
                "ipa": "aɪ doʊnt noʊ ˈnʌθɪŋ",
                "spell": "I don’t know nothing"
            },
            {
                "cefr": "",
                "def1": "гражданин",
                "ipa": "ə ˈnæʃənəl, ə ˈsɪtəzən",
                "spell": "a national, a citizen"
            },
            {
                "cefr": "",
                "def1": "этническая, национальная принадлежность",
                "ipa": "ɛθˈnɪsɪti",
                "spell": "ethnicity"
            },
            {
                "cefr": "",
                "def1": "я ничего не знаю",
                "ipa": "aɪ doʊnt noʊ ˈɛniˌθɪŋ, aɪ noʊ ˈnʌθɪŋ",
                "spell": "I don’t know anything, I know nothing"
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

export default IM04;