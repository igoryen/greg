import "../styles/fc.scss";
import React from "react";

class AB04 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const words = [
            {
                "cefr": "",
                "def1": "вверх",
                "ipa": "ʌp",
                "spell": "up"
            },
            {
                "cefr": "",
                "def1": "кот",
                "ipa": "kæt",
                "spell": "cat"
            },
            {
                "cefr": "",
                "def1": "сын",
                "ipa": "sʌn",
                "spell": "son"
            },
            {
                "cefr": "",
                "def1": "из",
                "ipa": "frʌm",
                "spell": "from"
            },
            {
                "cefr": "",
                "def1": "сумка",
                "ipa": "bæɡ",
                "spell": "bag"
            },
            {
                "cefr": "",
                "def1": "там",
                "ipa": "ðɛr",
                "spell": "there"
            },
            {
                "cefr": "",
                "def1": "здесь",
                "ipa": "hir",
                "spell": "here"
            },
            {
                "cefr": "",
                "def1": "мужчина",
                "ipa": "mæn",
                "spell": "man"
            },
            {
                "cefr": "",
                "def1": "то, тот",
                "ipa": "ðæt",
                "spell": "that"
            },
            {
                "cefr": "",
                "def1": "мать",
                "ipa": "ˈmʌðər",
                "spell": "mother"
            },
            {
                "cefr": "",
                "def1": "брат",
                "ipa": "ˈbrʌðər",
                "spell": "brother"
            },
            {
                "cefr": "",
                "def1": "дома",
                "ipa": "æt hoʊm",
                "spell": "at home"
            },
            {
                "cefr": "",
                "def1": "женщина",
                "ipa": "ˈwʊmən",
                "spell": "woman"
            },
            {
                "cefr": "",
                "def1": "муж",
                "ipa": "ˈhʌzbənd",
                "spell": "husband"
            },
            {
                "cefr": "",
                "def1": "семья",
                "ipa": "ˈfæməli",
                "spell": "family"
            },
            {
                "cefr": "",
                "def1": "спасибо",
                "ipa": "θæŋks",
                "spell": "thanks"
            },
            {
                "cefr": "",
                "def1": "я, мой",
                "ipa": "aɪ, maɪ",
                "spell": "I, my"
            },
            {
                "cefr": "",
                "def1": "дети",
                "ipa": "ˈʧɪldrən",
                "spell": "children"
            },
            {
                "cefr": "",
                "def1": "он, его",
                "ipa": "hi, hɪz",
                "spell": "he, his"
            },
            {
                "cefr": "",
                "def1": "родитель",
                "ipa": "ˈpɛrənt",
                "spell": "parent"
            },
            {
                "cefr": "",
                "def1": "она, её",
                "ipa": "ʃi, hɜr",
                "spell": "she, her"
            },
            {
                "cefr": "",
                "def1": "оно, его",
                "ipa": "ɪt, ɪts",
                "spell": "it, its"
            },
            {
                "cefr": "",
                "def1": "её работа",
                "ipa": "hɜr ʤɑb",
                "spell": "her job"
            },
            {
                "cefr": "",
                "def1": "моя работа",
                "ipa": "maɪ ʤɑb",
                "spell": "my job"
            },
            {
                "cefr": "",
                "def1": "на работе",
                "ipa": "æt wɜrk",
                "spell": "at work"
            },
            {
                "cefr": "",
                "def1": "его работа",
                "ipa": "hɪz ʤɑb",
                "spell": "his job"
            },
            {
                "cefr": "",
                "def1": "мы, наше",
                "ipa": "wi, ˈaʊər",
                "spell": "we, our"
            },
            {
                "cefr": "",
                "def1": "воксресенье",
                "ipa": "ˈsʌnˌdeɪ",
                "spell": "Sunday"
            },
            {
                "cefr": "",
                "def1": "вы (разг.)",
                "ipa": "ju ɡaɪz",
                "spell": "you guys"
            },
            {
                "cefr": "",
                "def1": "вы, ваше",
                "ipa": "ju, jʊər",
                "spell": "you, your"
            },
            {
                "cefr": "",
                "def1": "их работа",
                "ipa": "ðɛr ʤɑb",
                "spell": "their job"
            },
            {
                "cefr": "",
                "def1": "ты, твой",
                "ipa": "ju, jʊər",
                "spell": "you, your"
            },
            {
                "cefr": "",
                "def1": "они, их",
                "ipa": "ðeɪ, ðɛr",
                "spell": "they, their"
            },
            {
                "cefr": "",
                "def1": "ваша работа",
                "ipa": "jʊər ʤɑb",
                "spell": "your job"
            },
            {
                "cefr": "",
                "def1": "вон там",
                "ipa": "ˈoʊvər ðɛr",
                "spell": "over there"
            },
            {
                "cefr": "",
                "def1": "компьютер",
                "ipa": "kəmˈpjutər",
                "spell": "computer"
            },
            {
                "cefr": "",
                "def1": "наша работа",
                "ipa": "ˈaʊər ʤɑb",
                "spell": "our job"
            },
            {
                "cefr": "",
                "def1": "твоя работа",
                "ipa": "jʊər ʤɑb",
                "spell": "your job"
            },
            {
                "cefr": "",
                "def1": "вот здесь",
                "ipa": "ˈoʊvər hir",
                "spell": "over here"
            },
            {
                "cefr": "",
                "def1": "добро пожаловать",
                "ipa": "ˈwɛlkəm",
                "spell": "welcome"
            },
            {
                "cefr": "",
                "def1": "его функция",
                "ipa": "ɪts ˈfʌŋkʃən",
                "spell": "its function"
            },
            {
                "cefr": "",
                "def1": "дом родителей",
                "ipa": "ˈpɛrənts haʊs",
                "spell": "parents’ house"
            },
            {
                "cefr": "",
                "def1": "я здесь",
                "ipa": "aɪ æm hir, aɪm hir",
                "spell": "I am here, I'm here"
            },
            {
                "cefr": "",
                "def1": "это кошка Бена",
                "ipa": "ðɪs ɪz bɛnz kæt",
                "spell": "this is Ben’s cat"
            },
            {
                "cefr": "",
                "def1": "он здесь",
                "ipa": "hi ɪz hir, hiz hir",
                "spell": "he is here, he's here"
            },
            {
                "cefr": "",
                "def1": "оно здесь",
                "ipa": "ɪt ɪz hir, ɪts hir",
                "spell": "it is here, it's here"
            },
            {
                "cefr": "",
                "def1": "это машина Джека",
                "ipa": "ðɪs ɪz ʤæks kɑr",
                "spell": "this is Jack’s car"
            },
            {
                "cefr": "",
                "def1": "она здесь",
                "ipa": "ʃi ɪz hir, ʃiz hir",
                "spell": "she is here, she's here"
            },
            {
                "cefr": "",
                "def1": "вы здесь",
                "ipa": "ju ɑr hir, jʊr hir",
                "spell": "you are here, you’re here"
            },
            {
                "cefr": "",
                "def1": "лицо, присматривающее за детьми",
                "ipa": "ˈbeɪbiˌsɪtər",
                "spell": "babysitter"
            },
            {
                "cefr": "",
                "def1": "эти машины Джека",
                "ipa": "ðiz ɑr ʤæks kɑrz",
                "spell": "these are jack’s cars"
            },
            {
                "cefr": "",
                "def1": "как у вас дела?",
                "ipa": "haʊ ɑr ju ɡaɪz ˈduɪŋ?",
                "spell": "how are you guys doing?"
            },
            {
                "cefr": "",
                "def1": "Мария - сестра Карлоса",
                "ipa": "məˈriə ɪz ˈkɑrloʊsɪz ˈsɪstər",
                "spell": "Maria is Carlos’s sister"
            },
            {
                "cefr": "",
                "def1": "мою сестру зовут Мария",
                "ipa": "maɪ ˈsɪstərz neɪm ɪz məˈriə",
                "spell": "my sister’s name is Maria"
            },
            {
                "cefr": "",
                "def1": "у вас был хороший уикенд?",
                "ipa": "dɪd ju ɡaɪz hæv ə ɡʊd ˈwiˌkɛnd?",
                "spell": "did you guys have a good weekend?"
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
                <h1>Alena :: Lesson 4</h1>
                <section className="words">
                    {wordsFinal}
                </section>
            </div>
        );
    }
}

export default AB04;