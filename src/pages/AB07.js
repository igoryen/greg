import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";

class AB07 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Alena",
            "number": 7,
            "slug": "ab"
        };
        const words = [
            {
                "cefr": "",
                "def1": "итак",
                "ipa": "soʊ",
                "spell": "so"
            },
            {
                "cefr": "",
                "def1": "как",
                "ipa": "haʊ",
                "spell": "how"
            },
            {
                "cefr": "",
                "def1": "стар",
                "ipa": "oʊld",
                "spell": "old"
            },
            {
                "cefr": "",
                "def1": "там",
                "ipa": "ðɛr",
                "spell": "there"
            },
            {
                "cefr": "",
                "def1": "чей",
                "ipa": "huz",
                "spell": "whose"
            },
            {
                "cefr": "",
                "def1": "из, от",
                "ipa": "frʌm",
                "spell": "from"
            },
            {
                "cefr": "",
                "def1": "конечно",
                "ipa": "ʃʊr",
                "spell": "sure"
            },
            {
                "cefr": "",
                "def1": "мамин",
                "ipa": "mɑmz",
                "spell": "mom's"
            },
            {
                "cefr": "",
                "def1": "папин",
                "ipa": "dædz",
                "spell": "dad's"
            },
            {
                "cefr": "",
                "def1": "коровий",
                "ipa": "kaʊz",
                "spell": "cow's"
            },
            {
                "cefr": "",
                "def1": "о, про",
                "ipa": "əˈbaʊt",
                "spell": "about"
            },
            {
                "cefr": "",
                "def1": "владеть",
                "ipa": "tu oʊn",
                "spell": "to own"
            },
            {
                "cefr": "",
                "def1": "старший",
                "ipa": "ˈoʊldər",
                "spell": "older"
            },
            {
                "cefr": "",
                "def1": "занятие",
                "ipa": "ə klæs",
                "spell": "a class"
            },
            {
                "cefr": "",
                "def1": "отцов",
                "ipa": "ˈfɑðərz",
                "spell": "father's"
            },
            {
                "cefr": "",
                "def1": "достаточно",
                "ipa": "ɪˈnʌf",
                "spell": "enough"
            },
            {
                "cefr": "",
                "def1": "ещё два",
                "ipa": "tu mɔr",
                "spell": "two more"
            },
            {
                "cefr": "",
                "def1": "однажды",
                "ipa": "wʌn deɪ",
                "spell": "one day"
            },
            {
                "cefr": "",
                "def1": "род, вид",
                "ipa": "ə kaɪnd",
                "spell": "a kind"
            },
            {
                "cefr": "",
                "def1": "материн",
                "ipa": "ˈmʌðərz",
                "spell": "mother's"
            },
            {
                "cefr": "",
                "def1": "я надеюсь",
                "ipa": "aɪ hoʊp",
                "spell": "I hope"
            },
            {
                "cefr": "",
                "def1": "братов",
                "ipa": "ˈbrʌðərz",
                "spell": "brother's"
            },
            {
                "cefr": "",
                "def1": "дочкин",
                "ipa": "ˈdɔtərz",
                "spell": "daughter's"
            },
            {
                "cefr": "",
                "def1": "милый, приятный",
                "ipa": "naɪs",
                "spell": "nice"
            },
            {
                "cefr": "",
                "def1": "сестрин",
                "ipa": "ˈsɪstərz",
                "spell": "sister's"
            },
            {
                "cefr": "",
                "def1": "кошкин, кошачий",
                "ipa": "kæts",
                "spell": "cat's"
            },
            {
                "cefr": "",
                "def1": "мужнин",
                "ipa": "ˈhʌzbəndz",
                "spell": "husband's"
            },
            {
                "cefr": "",
                "def1": "работа по дому",
                "ipa": "ʧɔrz",
                "spell": "chores"
            },
            {
                "cefr": "",
                "def1": "владелец",
                "ipa": "ən ˈoʊnər",
                "spell": "an owner"
            },
            {
                "cefr": "",
                "def1": "красивый",
                "ipa": "ˈbjutəfəl",
                "spell": "beautiful"
            },
            {
                "cefr": "",
                "def1": "наистарейший",
                "ipa": "ˈoʊldəst",
                "spell": "oldest"
            },
            {
                "cefr": "",
                "def1": "вон там",
                "ipa": "ˈoʊvər ðɛr",
                "spell": "over there"
            },
            {
                "cefr": "",
                "def1": "обладание",
                "ipa": "pəˈzɛʃən",
                "spell": "possession"
            },
            {
                "cefr": "",
                "def1": "пёсин, собачий",
                "ipa": "ə dɔɡz",
                "spell": "a dog's"
            },
            {
                "cefr": "",
                "def1": "вот здесь",
                "ipa": "ˈoʊvər hir",
                "spell": "over here"
            },
            {
                "cefr": "",
                "def1": "выражать",
                "ipa": "tu ɪkˈsprɛs",
                "spell": "to express"
            },
            {
                "cefr": "",
                "def1": "карточка, открытка",
                "ipa": "ə kɑrd",
                "spell": "a card"
            },
            {
                "cefr": "",
                "def1": "Я - Надежда.",
                "ipa": "aɪm hoʊp.",
                "spell": "I’m Hope."
            },
            {
                "cefr": "",
                "def1": "беспокойный, суетливый",
                "ipa": "ˈbɪzi",
                "spell": "busy"
            },
            {
                "cefr": "",
                "def1": "никакой спешки",
                "ipa": "noʊ ˈhɜri",
                "spell": "no hurry"
            },
            {
                "cefr": "",
                "def1": "на фото",
                "ipa": "ɪn ðə ˈfoʊˌtoʊ",
                "spell": "in the photo"
            },
            {
                "cefr": "",
                "def1": "работа по дому",
                "ipa": "ˈhaʊˌswɜrk",
                "spell": "housework"
            },
            {
                "cefr": "",
                "def1": "тесть",
                "ipa": "ə ˈfɑðər-ɪn-lɔ",
                "spell": "a father-in-law"
            },
            {
                "cefr": "",
                "def1": "некровные родственники",
                "ipa": "ɪnˈlɔz",
                "spell": "in-laws"
            },
            {
                "cefr": "",
                "def1": "молодой человек",
                "ipa": "ə ˈbɔɪˌfrɛnd",
                "spell": "a boyfriend"
            },
            {
                "cefr": "",
                "def1": "любимая девушка",
                "ipa": "ə ˈɡɜrlˌfrɛnd",
                "spell": "a girlfriend"
            },
            {
                "cefr": "",
                "def1": "свояченица",
                "ipa": "ə ˈsɪstər-ɪn-lɔ",
                "spell": "a sister-in-law"
            },
            {
                "cefr": "",
                "def1": "мир и тишина",
                "ipa": "pis ænd ˈkwaɪət",
                "spell": "peace and quiet"
            },
            {
                "cefr": "",
                "def1": "тихое утро",
                "ipa": "ə ˈkwaɪət ˈmɔrnɪŋ",
                "spell": "a quiet morning"
            },
            {
                "cefr": "",
                "def1": "член семьи",
                "ipa": "ə ˈfæməli ˈmɛmbər",
                "spell": "a family member"
            },
            {
                "cefr": "",
                "def1": "домашняя работа (учебная)",
                "ipa": "hoʊm wɜrk",
                "spell": "home work"
            },
            {
                "cefr": "",
                "def1": "что насчёт ...?",
                "ipa": "wɑt əˈbaʊt ...?",
                "spell": "what about ...?"
            },
            {
                "cefr": "",
                "def1": "мало по малу",
                "ipa": "ˈlɪtəl baɪ ˈlɪtəl",
                "spell": "little by little"
            },
            {
                "cefr": "",
                "def1": "мыть посуду",
                "ipa": "tu wɑʃ ðə ˈdɪʃəz",
                "spell": "to wash the dishes"
            },
            {
                "cefr": "",
                "def1": "из-за дождя",
                "ipa": "bɪˈkɔz ʌv ðə reɪn",
                "spell": "because of the rain"
            },
            {
                "cefr": "",
                "def1": "алёнин компьютер",
                "ipa": "ɑˈljɔnəz kəmˈpjutər",
                "spell": "Alyona's computer"
            },
            {
                "cefr": "",
                "def1": "паспорт (моей) сестры",
                "ipa": "maɪ ˈsɪstərz ˈpæˌspɔrt",
                "spell": "my sister’s passport"
            },
            {
                "cefr": "",
                "def1": "соединённые штаты Америки",
                "ipa": "ðə juˈnaɪtɪd steɪts ʌv əˈmɛrəkə",
                "spell": "the united states of america"
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

export default AB07;