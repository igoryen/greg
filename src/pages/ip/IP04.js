import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";

class IP04 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Ihor",
            "number": 4,
            "slug": "ip"
        };
        const words = [
            {
                "cefr": "",
                "def1": "для",
                "ipa": "fɔr",
                "spell": "for"
            },
            {
                "cefr": "",
                "def1": "що",
                "ipa": "wɑt",
                "spell": "what"
            },
            {
                "cefr": "",
                "def1": "чашка",
                "ipa": "kʌp",
                "spell": "cup"
            },
            {
                "cefr": "",
                "def1": "діти",
                "ipa": "kɪdz",
                "spell": "kids"
            },
            {
                "cefr": "",
                "def1": "дуже",
                "ipa": "ˈvɛri",
                "spell": "very"
            },
            {
                "cefr": "",
                "def1": "читати",
                "ipa": "rid",
                "spell": "read"
            },
            {
                "cefr": "",
                "def1": "білий",
                "ipa": "waɪt",
                "spell": "white"
            },
            {
                "cefr": "",
                "def1": "вони",
                "ipa": "ðɛr",
                "spell": "they’re"
            },
            {
                "cefr": "",
                "def1": "робота",
                "ipa": "wɜrk",
                "spell": "work"
            },
            {
                "cefr": "",
                "def1": "вибач",
                "ipa": "ˈsɑri",
                "spell": "sorry"
            },
            {
                "cefr": "",
                "def1": "писати",
                "ipa": "raɪt",
                "spell": "write"
            },
            {
                "cefr": "",
                "def1": "важкий",
                "ipa": "ˈhɛvi",
                "spell": "heavy"
            },
            {
                "cefr": "",
                "def1": "дитина",
                "ipa": "ʧaɪld",
                "spell": "child"
            },
            {
                "cefr": "",
                "def1": "урок",
                "ipa": "ˈlɛsən",
                "spell": "lesson"
            },
            {
                "cefr": "",
                "def1": "тихий",
                "ipa": "ˈkwaɪət",
                "spell": "quiet"
            },
            {
                "cefr": "",
                "def1": "справді",
                "ipa": "ˈrɪli",
                "spell": "really"
            },
            {
                "cefr": "",
                "def1": "слухати",
                "ipa": "ˈlɪsən",
                "spell": "listen"
            },
            {
                "cefr": "",
                "def1": "діти",
                "ipa": "ˈʧɪldrən",
                "spell": "children"
            },
            {
                "cefr": "",
                "def1": "так / настільки",
                "ipa": "soʊ",
                "spell": "so"
            },
            {
                "cefr": "",
                "def1": "той / та / те",
                "ipa": "ðæt",
                "spell": "that"
            },
            {
                "cefr": "",
                "def1": "дім / будинок",
                "ipa": "hoʊm",
                "spell": "home"
            },
            {
                "cefr": "",
                "def1": "шоумен",
                "ipa": "ʃoʊ mæn",
                "spell": "show man"
            },
            {
                "cefr": "",
                "def1": "обережний",
                "ipa": "ˈkɛrfəl",
                "spell": "careful"
            },
            {
                "cefr": "",
                "def1": "бібліотека",
                "ipa": "ˈlaɪˌbrɛri",
                "spell": "library"
            },
            {
                "cefr": "",
                "def1": "вибачте",
                "ipa": "ɪkˈskjuz mi",
                "spell": "excuse me"
            },
            {
                "cefr": "",
                "def1": "вони великі",
                "ipa": "ðɛr bɪɡ",
                "spell": "they’re big"
            },
            {
                "cefr": "",
                "def1": "будь тихо!",
                "ipa": "bi ˈkwaɪət!",
                "spell": "be quiet!"
            },
            {
                "cefr": "",
                "def1": "хто є",
                "ipa": "huz = hu ɪz",
                "spell": "who’s = who is"
            },
            {
                "cefr": "",
                "def1": "оцей / оця / оце",
                "ipa": "ðɪs wʌn",
                "spell": "this one"
            },
            {
                "cefr": "",
                "def1": "розмова",
                "ipa": "ˌkɑnvərˈseɪʃən",
                "spell": "conversation"
            },
            {
                "cefr": "",
                "def1": "що є",
                "ipa": "wʌts = wɑt ɪz",
                "spell": "what’s = what is"
            },
            {
                "cefr": "",
                "def1": "домашнє завдання",
                "ipa": "ˈhoʊmˌwɜrk",
                "spell": "homework"
            },
            {
                "cefr": "",
                "def1": "вони є",
                "ipa": "ðeɪ ɑr = ðɛr",
                "spell": "they are = they’re"
            },
            {
                "cefr": "",
                "def1": "дуже дякую",
                "ipa": "θæŋk ju ˈvɛri mʌʧ",
                "spell": "thank you very much"
            },
            {
                "cefr": "",
                "def1": "велике дякую!",
                "ipa": "θæŋk ju soʊ mʌʧ!",
                "spell": "thank you so much!"
            },
            {
                "cefr": "",
                "def1": "що в коробці?",
                "ipa": "wɑt ɪz ɪn ðə bɑks?",
                "spell": "what is in the box?"
            },
            {
                "cefr": "",
                "def1": "вони не такі великі",
                "ipa": "ðeɪ ɑr nɑt soʊ bɪɡ",
                "spell": "they are not so big"
            },
            {
                "cefr": "",
                "def1": "вони для мого уроку англійської",
                "ipa": "ðɛr fɔr maɪ ˈɪŋɡlɪʃ klæs",
                "spell": "they’re for my English class"
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

export default IP04;