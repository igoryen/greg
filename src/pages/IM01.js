import "../styles/fc.scss";
import React from "react";

class IM01 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const words = [
            {
                "def1": "улучшать",
                "cefr": "",
                "ipa": "ɪmˈpruv",
                "spell": "improve"
            },
            {
                "def1": "грамматика",
                "cefr": "",
                "ipa": "ˈɡræmər",
                "spell": "grammar"
            },
            {
                "def1": "должность",
                "cefr": "",
                "ipa": "ʤɑb ˈtaɪtəl",
                "spell": "job title"
            },
            {
                "def1": "недвижимость",
                "cefr": "",
                "ipa": "riəl ɪˈsteɪt",
                "spell": "real estate"
            },
            {
                "def1": "сотрудничать",
                "cefr": "",
                "ipa": "kəˈlæbəˌreɪt",
                "spell": "collaborate"
            },
            {
                "def1": "словарный запас",
                "cefr": "",
                "ipa": "voʊˈkæbjəˌlɛri",
                "spell": "vocabulary"
            },
            {
                "def1": "чтобы не потерять деньги",
                "cefr": "",
                "ipa": "soʊ æz nɑt tu luz ˈmʌni",
                "spell": "so as not to lose money"
            },
            {
                "def1": "Я довожу сделки до завершения.",
                "cefr": "",
                "ipa": "aɪ brɪŋ dilz tu kəmˈpliʃən.",
                "spell": "I bring deals to completion."
            },
            {
                "def1": "Я обеспечиваю подписание контрактов.",
                "cefr": "",
                "ipa": "aɪ brɪŋ ɪn saɪnd ˈkɑnˌtrækts.",
                "spell": "I bring in signed contracts."
            },
            {
                "def1": "Я слежу за тем, чтобы сделки были завершены.",
                "cefr": "",
                "ipa": "aɪ meɪk ʃʊr dilz ɡɛt dʌn.",
                "spell": "I make sure deals get done."
            },
            {
                "def1": "Я помогаю закрывать сделки с клиентами.",
                "cefr": "",
                "ipa": "aɪ hɛlp kloʊs dilz wɪð ˈkʌstəmərz.",
                "spell": "I help close deals with customers."
            },
            {
                "def1": "Я подвожу клиентов к подписанию контрактов.",
                "cefr": "",
                "ipa": "aɪ ɡɛt ˈkʌstəmərz tu saɪn ˈkɑnˌtrækts.",
                "spell": "I get customers to sign contracts."
            },
            {
                "def1": "Я довожу клиентов до подписания контрактов.",
                "cefr": "",
                "ipa": "aɪ brɪŋ ˈkʌstəmərz tu saɪn ˈkɑnˌtrækts.",
                "spell": "I bring customers to sign contracts."
            },
            {
                "def1": "Я провожу клиентов через процесс подписания контракта.",
                "cefr": "",
                "ipa": "aɪ brɪŋ ˈkʌstəmərz θru ðə ˈkɑnˌtrækt ˈprɑˌsɛs.",
                "spell": "I bring customers through the contract process."
            },
            {
                "def1": "Я помогаю клиентам подписывать контракты и заключать сделки.",
                "cefr": "",
                "ipa": "aɪ hɛlp ˈkʌstəmərz saɪn ˈkɑnˌtrækts ænd kəmˈplit dilz.",
                "spell": "I help customers sign contracts and complete deals."
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
                <h1>Ivan Maslov :: Lesson 1</h1>
                <section className="words">
                    {wordsFinal}
                </section>
            </div>
        );
    }
}

export default IM01;