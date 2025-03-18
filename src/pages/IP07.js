import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";

class IP07 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Ihor",
            "number": 7,
            "slug": "ip"
        };
        const words = [
            {
                "cefr": "",
                "def1": "але",
                "ipa": "bʌt",
                "spell": "but"
            },
            {
                "cefr": "",
                "def1": "наш",
                "ipa": "ˈaʊər",
                "spell": "our"
            },
            {
                "cefr": "",
                "def1": "курс",
                "ipa": "kɔrs",
                "spell": "course"
            },
            {
                "cefr": "",
                "def1": "Пан",
                "ipa": "ˈmɪstər.",
                "spell": "Mr."
            },
            {
                "cefr": "",
                "def1": "година",
                "ipa": "ˈaʊər",
                "spell": "hour"
            },
            {
                "cefr": "",
                "def1": "Греція",
                "ipa": "ɡris",
                "spell": "Greece"
            },
            {
                "cefr": "",
                "def1": "мати",
                "ipa": "tu hæv",
                "spell": "to have"
            },
            {
                "cefr": "",
                "def1": "кімната",
                "ipa": "ə rum",
                "spell": "a room"
            },
            {
                "cefr": "",
                "def1": "прокляття",
                "ipa": "kɜrs",
                "spell": "curse"
            },
            {
                "cefr": "",
                "def1": "Франція",
                "ipa": "fræns",
                "spell": "France"
            },
            {
                "cefr": "",
                "def1": "безкоштовно",
                "ipa": "fri",
                "spell": "free"
            },
            {
                "cefr": "",
                "def1": "Май! Майте!",
                "ipa": "hæv!",
                "spell": "have!"
            },
            {
                "cefr": "",
                "def1": "Бразилія",
                "ipa": "brəˈzɪl",
                "spell": "Brazil"
            },
            {
                "cefr": "",
                "def1": "письмовий стіл",
                "ipa": "dɛsk",
                "spell": "desk"
            },
            {
                "cefr": "",
                "def1": "звичайно",
                "ipa": "ʌv kɔrs",
                "spell": "of course"
            },
            {
                "cefr": "",
                "def1": "ми тут",
                "ipa": "wir hir.",
                "spell": "We’re here."
            },
            {
                "cefr": "",
                "def1": "хто це?",
                "ipa": "huz ðæt?",
                "spell": "who’s that?"
            },
            {
                "cefr": "",
                "def1": "іди сюди!",
                "ipa": "kʌm hir!",
                "spell": "come here!"
            },
            {
                "cefr": "",
                "def1": "підручник",
                "ipa": "ˈkɔrsbʊk",
                "spell": "coursebook"
            },
            {
                "cefr": "",
                "def1": "Міс (незаміжня жінка)",
                "ipa": "mɪs",
                "spell": "Miss"
            },
            {
                "cefr": "",
                "def1": "Ласкаво просимо",
                "ipa": "ˈwɛlkəm",
                "spell": "welcome"
            },
            {
                "cefr": "",
                "def1": "представити",
                "ipa": "ˌɪntrəˈdus",
                "spell": "introduce"
            },
            {
                "cefr": "",
                "def1": "Пані (заміжня жінка)",
                "ipa": "ˈmɪsɪz.",
                "spell": "Mrs."
            },
            {
                "cefr": "",
                "def1": "один із цих",
                "ipa": "wʌn ʌv ðiz",
                "spell": "one of these"
            },
            {
                "cefr": "",
                "def1": "один з тих",
                "ipa": "wʌn ʌv ðoʊz",
                "spell": "one of those"
            },
            {
                "cefr": "",
                "def1": "Пані (заміжня чи незаміжня жінка)",
                "ipa": "mɪz.",
                "spell": "Ms."
            },
            {
                "cefr": "",
                "def1": "Ми тут, пані",
                "ipa": "wir hir, mɪz.",
                "spell": "We’re here, Ms."
            },
            {
                "cefr": "",
                "def1": "Будь ласка! Нема за що!",
                "ipa": "jʊr ˈwɛlkəm",
                "spell": "you’re welcome"
            },
            {
                "cefr": "",
                "def1": "звідки це?",
                "ipa": "wɛr ɪz ɪt frʌm?",
                "spell": "where is it from?"
            },
            {
                "cefr": "",
                "def1": "звідки ми?",
                "ipa": "wɛr ɑr wi frʌm?",
                "spell": "where are we from?"
            },
            {
                "cefr": "",
                "def1": "ти звідки",
                "ipa": "wɛr ɑr ju frʌm?",
                "spell": "where are you from?"
            },
            {
                "cefr": "",
                "def1": "звідки він?",
                "ipa": "wɛr ɪz hi frʌm?",
                "spell": "where is he from?"
            },
            {
                "cefr": "",
                "def1": "Це моя дівчина!",
                "ipa": "ðæts maɪ ɡɜrl!",
                "spell": "That’s my girl!"
            },
            {
                "cefr": "",
                "def1": "Це мій хлопчик!",
                "ipa": "ðæts maɪ bɔɪ!",
                "spell": "That’s my boy!"
            },
            {
                "cefr": "",
                "def1": "звідки вона?",
                "ipa": "wɛr ɪz ʃi frʌm?",
                "spell": "where is she from?"
            },
            {
                "cefr": "",
                "def1": "Пригощайся яблуком!",
                "ipa": "hæv ən ˈæpəl!",
                "spell": "have an apple!"
            },
            {
                "cefr": "",
                "def1": "Це мої сини.",
                "ipa": "ðiz ɑr maɪ sʌnz.",
                "spell": "These are my sons."
            },
            {
                "cefr": "",
                "def1": "Пригощайся бананом!",
                "ipa": "hæv ə bəˈnænə!",
                "spell": "have a banana!"
            },
            {
                "cefr": "",
                "def1": "звідки вони?",
                "ipa": "wɛr ɑr ðeɪ frʌm?",
                "spell": "where are they from?"
            },
            {
                "cefr": "",
                "def1": "Це мій батько.",
                "ipa": "ðɪs ɪz maɪ ˈfɑðər.",
                "spell": "This is my father."
            },
            {
                "cefr": "",
                "def1": "ось наш клас",
                "ipa": "hɪrz ˈaʊər ˈklæsˌrum",
                "spell": "here’s our classroom"
            },
            {
                "cefr": "",
                "def1": "Пригощайся бутербродом!",
                "ipa": "hæv ə ˈsændwɪʧ!",
                "spell": "have a sandwich!"
            },
            {
                "cefr": "",
                "def1": "Це мої діти.",
                "ipa": "ðiz ɑr maɪ ˈʧɪldrən.",
                "spell": "These are my children."
            },
            {
                "cefr": "",
                "def1": "Це мої брати.",
                "ipa": "ðiz ɑr maɪ ˈbrʌðərz.",
                "spell": "These are my brothers."
            },
            {
                "cefr": "",
                "def1": "Це мої дочки.",
                "ipa": "ðiz ɑr maɪ ˈdɔtərz.",
                "spell": "These are my daughters."
            },
            {
                "cefr": "",
                "def1": "Це мої батьки.",
                "ipa": "ðiz ɑr maɪ ˈpɛrənts.",
                "spell": "These are my parents."
            },
            {
                "cefr": "",
                "def1": "Це мої сестри.",
                "ipa": "ðiz ɑr maɪ ˈsɪstərz.",
                "spell": "These are my sisters."
            },
            {
                "cefr": "",
                "def1": "Це мої мама і тато.",
                "ipa": "ðiz ɑr maɪ ˈmʌðər ænd ˈfɑðər.",
                "spell": "These are my mother and father."
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

export default IP07;