import "../styles/fc.scss";
import React from "react";

class SS06 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const words = [
            {
                "cefr": "",
                "def1": "сам",
                "ipa": "sɛlf",
                "spell": "self"
            },
            {
                "cefr": "",
                "def1": "курс",
                "ipa": "kɔrs",
                "spell": "course"
            },
            {
                "cefr": "",
                "def1": "хотя",
                "ipa": "ˌɔlˈðoʊ",
                "spell": "although"
            },
            {
                "cefr": "",
                "def1": "улучшать",
                "ipa": "ɪmˈpruv",
                "spell": "improve"
            },
            {
                "cefr": "",
                "def1": "настаивать",
                "ipa": "ɪnˈsɪst",
                "spell": "insist"
            },
            {
                "cefr": "",
                "def1": "наконец-то",
                "ipa": "ˈfaɪnəli",
                "spell": "finally"
            },
            {
                "cefr": "",
                "def1": "любопытный",
                "ipa": "ˈkjʊriəs",
                "spell": "curious"
            },
            {
                "cefr": "",
                "def1": "если только не",
                "ipa": "ənˈlɛs",
                "spell": "unless"
            },
            {
                "cefr": "",
                "def1": "притворяться",
                "ipa": "priˈtɛnd",
                "spell": "pretend"
            },
            {
                "cefr": "",
                "def1": "полностью",
                "ipa": "kəmˈplitli",
                "spell": "completely"
            },
            {
                "cefr": "",
                "def1": "представить себе",
                "ipa": "ɪˈmæʤən",
                "spell": "imagine"
            },
            {
                "cefr": "",
                "def1": "кому какое дело!",
                "ipa": "hu kɛrz!",
                "spell": "who cares!"
            },
            {
                "cefr": "",
                "def1": "уверенный в себе",
                "ipa": "ˈkɑnfədənt",
                "spell": "confident"
            },
            {
                "cefr": "",
                "def1": "общение",
                "ipa": "kəmˌjunəˈkeɪʃən",
                "spell": "communication"
            },
            {
                "cefr": "",
                "def1": "торговый представитель",
                "ipa": "seɪlz rɛp",
                "spell": "sales rep"
            },
            {
                "cefr": "",
                "def1": "уверенность в себе",
                "ipa": "ˈkɑnfədəns",
                "spell": "confidence"
            },
            {
                "cefr": "",
                "def1": "представитель",
                "ipa": "ˌrɛprəˈzɛntətɪv",
                "spell": "representative"
            },
            {
                "cefr": "",
                "def1": "чувствовать себя потрясённой",
                "ipa": "fil ʃɑkt",
                "spell": "feel shocked"
            },
            {
                "cefr": "",
                "def1": "проверка биографии",
                "ipa": "ˈbækˌɡraʊnd ʧɛk",
                "spell": "background check"
            },
            {
                "cefr": "",
                "def1": "держи это в тайне",
                "ipa": "kip ɪt ə ˈsikrət",
                "spell": "keep it a secret"
            },
            {
                "cefr": "",
                "def1": "избегай негатива",
                "ipa": "əˈvɔɪd ˌnɛɡəˈtɪvəti",
                "spell": "avoid negativity"
            },
            {
                "cefr": "",
                "def1": "всё, что мне нужно",
                "ipa": "ɔl (ðæt) aɪ nid",
                "spell": "all (that) I need"
            },
            {
                "cefr": "",
                "def1": "пережить шок",
                "ipa": "tu ɪkˈspɪriəns ə ʃɑk",
                "spell": "to experience a shock"
            },
            {
                "cefr": "",
                "def1": "выглядеть уверенной в себе",
                "ipa": "lʊk ˈkɑnfədənt",
                "spell": "look confident"
            },
            {
                "cefr": "",
                "def1": "нам не будет жалко",
                "ipa": "wi wɪl nɑt bi ˈsɑri",
                "spell": "we will not be sorry"
            },
            {
                "cefr": "",
                "def1": "привыкнуть к машине",
                "ipa": "tu ɡɛt juzd tu ə kɑr",
                "spell": "to get used to a car"
            },
            {
                "cefr": "",
                "def1": "они увидят это сами",
                "ipa": "ðeɪ wɪl si ðæt ðɛmˈsɛlvz",
                "spell": "they will see that themselves"
            },
            {
                "cefr": "",
                "def1": "его ещё не доставили",
                "ipa": "ðeɪ ˈhævənt dɪˈlɪvərd ɪt jɛt",
                "spell": "they haven’t delivered it yet"
            },
            {
                "cefr": "",
                "def1": "я работаю над своим английским",
                "ipa": "aɪ æm ˈwɜrkɪŋ ɑn maɪ ˈɪŋɡlɪʃ",
                "spell": "I am working on my English"
            },
            {
                "cefr": "",
                "def1": "никогда не рассказывай всего, что знаешь",
                "ipa": "ˈnɛvər tɛl ˈɛvriˌθɪŋ ju noʊ",
                "spell": "never tell everything you know"
            },
            {
                "cefr": "",
                "def1": "я забываю даже то, что я знаю",
                "ipa": "aɪ fərˈɡɛt ˈivɪn ðə θɪŋz (ðæt) aɪ noʊ",
                "spell": "I forget even the things (that) I know"
            },
            {
                "cefr": "",
                "def1": "я работаю над улучшением своего английского",
                "ipa": "aɪ æm ˈwɜrkɪŋ tu ɪmˈpruv maɪ ˈɪŋɡlɪʃ",
                "spell": "I am working to improve my English"
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
                <h1>Sveltana :: Lesson 6</h1>
                <section className="words">
                    {wordsFinal}
                </section>
            </div>
        );
    }
}

export default SS06;