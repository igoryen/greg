import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";

class IP05 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Ihor",
            "number": 5,
            "slug": "ip"
        };
        const words = [
            {
                "cefr": "",
                "def1": "або",
                "ipa": "ɔr",
                "spell": "or"
            },
            {
                "cefr": "",
                "def1": "і; a",
                "ipa": "ænd",
                "spell": "and"
            },
            {
                "cefr": "",
                "def1": "хто?",
                "ipa": "hu?",
                "spell": "who?"
            },
            {
                "cefr": "",
                "def1": "ідея",
                "ipa": "aɪˈdiə",
                "spell": "idea"
            },
            {
                "cefr": "",
                "def1": "отримати",
                "ipa": "ɡɛt",
                "spell": "get"
            },
            {
                "cefr": "",
                "def1": "ikea",
                "ipa": "ˌaɪˈkiə",
                "spell": "ikea"
            },
            {
                "cefr": "",
                "def1": "знову",
                "ipa": "əˈɡɛn",
                "spell": "again"
            },
            {
                "cefr": "",
                "def1": "дозволити",
                "ipa": "lɛt",
                "spell": "let"
            },
            {
                "cefr": "",
                "def1": "А є Б",
                "ipa": "eɪ ɪz bi",
                "spell": "A is B"
            },
            {
                "cefr": "",
                "def1": "щось",
                "ipa": "ˈsʌmθɪŋ",
                "spell": "something"
            },
            {
                "cefr": "",
                "def1": "чекати",
                "ipa": "tu weɪt",
                "spell": "to wait"
            },
            {
                "cefr": "",
                "def1": "гібрид",
                "ipa": "ˈhaɪbrɪd",
                "spell": "hybrid"
            },
            {
                "cefr": "",
                "def1": "чи є А Б?",
                "ipa": "ɪz eɪ bi?",
                "spell": "is A B?"
            },
            {
                "cefr": "",
                "def1": "щасливий, радий",
                "ipa": "ˈhæpi",
                "spell": "happy"
            },
            {
                "cefr": "",
                "def1": "я радий",
                "ipa": "aɪ æm ˈhæpi",
                "spell": "i am happy"
            },
            {
                "cefr": "",
                "def1": "А не є Б",
                "ipa": "eɪ ɪz nɑt bi",
                "spell": "A is not B"
            },
            {
                "cefr": "",
                "def1": "я чоловік",
                "ipa": "aɪ æm ə mæn",
                "spell": "i am a man"
            },
            {
                "cefr": "",
                "def1": "я радий?",
                "ipa": "æm aɪ ˈhæpi?",
                "spell": "am i happy?"
            },
            {
                "cefr": "",
                "def1": "ви чоловіки",
                "ipa": "ju ɑr mɛn",
                "spell": "you are men"
            },
            {
                "cefr": "",
                "def1": "це ключі",
                "ipa": "ðiz ɑr kiz",
                "spell": "these are keys"
            },
            {
                "cefr": "",
                "def1": "він чоловік",
                "ipa": "hi ɪz ə mæn",
                "spell": "he is a man"
            },
            {
                "cefr": "",
                "def1": "я жінка",
                "ipa": "aɪ æm ə ˈwʊmən",
                "spell": "i am a woman"
            },
            {
                "cefr": "",
                "def1": "вона щаслива",
                "ipa": "ʃi ɪz ˈhæpi",
                "spell": "she is happy"
            },
            {
                "cefr": "",
                "def1": "він дитина",
                "ipa": "hi ɪz ə ʧaɪld",
                "spell": "he is a child"
            },
            {
                "cefr": "",
                "def1": "ти впевнений?",
                "ipa": "ɑr ju ʃʊr?",
                "spell": "are you sure?"
            },
            {
                "cefr": "",
                "def1": "вони жінки",
                "ipa": "ðeɪ ɑr ˈwɪmən",
                "spell": "they are women"
            },
            {
                "cefr": "",
                "def1": "ти дитина",
                "ipa": "ju ɑr ə ʧaɪld",
                "spell": "you are a child"
            },
            {
                "cefr": "",
                "def1": "чи вона рада?",
                "ipa": "ɪz ʃi ˈhæpi?",
                "spell": "is she happy?"
            },
            {
                "cefr": "",
                "def1": "вона жінка",
                "ipa": "ʃi ɪz ə ˈwʊmən",
                "spell": "she is a woman"
            },
            {
                "cefr": "",
                "def1": "це склянки",
                "ipa": "ðeɪ ɑr ˈɡlæsəz",
                "spell": "they are glasses"
            },
            {
                "cefr": "",
                "def1": "я не радий",
                "ipa": "aɪ æm nɑt ˈhæpi",
                "spell": "i am not happy"
            },
            {
                "cefr": "",
                "def1": "це годинник",
                "ipa": "ðɪs ɪz ə klɑk",
                "spell": "this is a clock"
            },
            {
                "cefr": "",
                "def1": "це не коробка",
                "ipa": "ɪt ɪz nɑt bɑks",
                "spell": "it is not box"
            },
            {
                "cefr": "",
                "def1": "це олівці",
                "ipa": "ðiz ɑr ˈpɛnsəlz",
                "spell": "these are pencils"
            },
            {
                "cefr": "",
                "def1": "давайте = let us",
                "ipa": "lɛts = lɛt ʌs",
                "spell": "let’s = let us"
            },
            {
                "cefr": "",
                "def1": "я не дитина",
                "ipa": "aɪ æm nɑt ə ʧaɪld",
                "spell": "i am not a child"
            },
            {
                "cefr": "",
                "def1": "чи вона жінка?",
                "ipa": "ɪz ʃi ə ˈwʊmən?",
                "spell": "is she a woman?"
            },
            {
                "cefr": "",
                "def1": "це картини",
                "ipa": "ðoʊz ɑr ˈpɪkʧərz",
                "spell": "those are pictures"
            },
            {
                "cefr": "",
                "def1": "це не сумки",
                "ipa": "ðoʊz ɑr nɑt bæɡz",
                "spell": "those are not bags"
            },
            {
                "cefr": "",
                "def1": "ти пам’ятаєш?",
                "ipa": "du ju rɪˈmɛmbər?",
                "spell": "do you remember?"
            },
            {
                "cefr": "",
                "def1": "вона не чоловік",
                "ipa": "ʃi ɪz nɑt ə mæn",
                "spell": "she is not a man"
            },
            {
                "cefr": "",
                "def1": "вона не щаслива",
                "ipa": "ʃi ɪz nɑt ˈhæpi",
                "spell": "she is not happy"
            },
            {
                "cefr": "",
                "def1": "це не чоловіки",
                "ipa": "ðoʊz ɑr nɑt mɛn",
                "spell": "those are not men"
            },
            {
                "cefr": "",
                "def1": "як тебе звати?",
                "ipa": "wʌts jʊər neɪm?",
                "spell": "what’s your name?"
            },
            {
                "cefr": "",
                "def1": "хто не радий?",
                "ipa": "hu ɪz nɑt ˈhæpi?",
                "spell": "who is not happy?"
            },
            {
                "cefr": "",
                "def1": "ми не діти",
                "ipa": "wi ɑr nɑt ˈʧɪldrən",
                "spell": "we are not children"
            },
            {
                "cefr": "",
                "def1": "ти не дівчина",
                "ipa": "ju ɑr nɑt ə ɡɜrl",
                "spell": "you are not a girl"
            },
            {
                "cefr": "",
                "def1": "це не моя чашка",
                "ipa": "ðɪs ɪz nɑt maɪ kʌp",
                "spell": "this is not my cup"
            },
            {
                "cefr": "",
                "def1": "це не олівці",
                "ipa": "ðiz ɑr nɑt ˈpɛnsəlz",
                "spell": "these are not pencils"
            },
            {
                "cefr": "",
                "def1": "це не годинники",
                "ipa": "ðoʊz ɑr nɑt klɑks",
                "spell": "those are not clocks"
            },
            {
                "cefr": "",
                "def1": "це не годинники",
                "ipa": "ðiz ɑr nɑt ˈwɑʧəz",
                "spell": "these are not watches"
            },
            {
                "cefr": "",
                "def1": "що в цій коробці?",
                "ipa": "wʌts ɪn ðɪs bɑks?",
                "spell": "what's in this box?"
            },
            {
                "cefr": "",
                "def1": "це не газети",
                "ipa": "ðiz ɑr nɑt ˈnuzˌpeɪpərz",
                "spell": "these are not newspapers"
            },
            {
                "cefr": "",
                "def1": "це не газети",
                "ipa": "ðoʊz ɑr nɑt ˈnuzˌpeɪpərz",
                "spell": "those are not newspapers"
            },
            {
                "cefr": "",
                "def1": "це візитна картка",
                "ipa": "ðæt ɪz ə ˈbɪznəs kɑrd",
                "spell": "that is a business card"
            },
            {
                "cefr": "",
                "def1": "що в цих склянках?",
                "ipa": "wʌts ɪn ðiz ˈɡlæsəz?",
                "spell": "what's in these glasses?"
            },
            {
                "cefr": "",
                "def1": "що на цій картинці?",
                "ipa": "wʌts ɪn ðɪs ˈpɪkʧər?",
                "spell": "what's in this picture?"
            },
            {
                "cefr": "",
                "def1": "це не кредитна картка",
                "ipa": "ðæt ɪz nɑt ə ˈkrɛdət kɑrd",
                "spell": "that is not a credit card"
            },
            {
                "cefr": "",
                "def1": "мій словник у цій сумці",
                "ipa": "maɪ ˈdɪkʃəˌnɛri ɪz ɪn ðɪs bæɡ",
                "spell": "my dictionary is in this bag"
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

export default IP05;