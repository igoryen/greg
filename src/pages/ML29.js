import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";

class ML29 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Maria",
            "number": 29,
            "slug": "ml"
        };
        const words = [
            {
                "cefr": "",
                "def1": "оса",
                "ipa": "ə wɑsp",
                "spell": "a wasp"
            },
            {
                "cefr": "",
                "def1": "отрава",
                "ipa": "ˈpɔɪzən",
                "spell": "poison"
            },
            {
                "cefr": "",
                "def1": "кипеть",
                "ipa": "tu bɔɪl",
                "spell": "to boil"
            },
            {
                "cefr": "",
                "def1": "по закону",
                "ipa": "baɪ lɔ",
                "spell": "by law"
            },
            {
                "cefr": "",
                "def1": "улей",
                "ipa": "ə ˈbiˌhaɪv",
                "spell": "a beehive"
            },
            {
                "cefr": "",
                "def1": "пасека",
                "ipa": "ə bi fɑrm",
                "spell": "a bee farm"
            },
            {
                "cefr": "",
                "def1": "травить",
                "ipa": "tu ˈpɔɪzən",
                "spell": "to poison"
            },
            {
                "cefr": "",
                "def1": "отравление",
                "ipa": "ˈpɔɪzənɪŋ",
                "spell": "poisoning"
            },
            {
                "cefr": "",
                "def1": "напомнить",
                "ipa": "tu riˈmaɪnd",
                "spell": "to remind"
            },
            {
                "cefr": "",
                "def1": "вырубить",
                "ipa": "tu nɑk aʊt",
                "spell": "to knock out"
            },
            {
                "cefr": "",
                "def1": "пасечник",
                "ipa": "ə ˈbiˌkipər",
                "spell": "a beekeeper"
            },
            {
                "cefr": "",
                "def1": "сознание",
                "ipa": "ˈkɑnʃəsnəs",
                "spell": "consciousness"
            },
            {
                "cefr": "",
                "def1": "смерть мозга",
                "ipa": "breɪn dɛθ",
                "spell": "brain death"
            },
            {
                "cefr": "",
                "def1": "сопереживание",
                "ipa": "kəmˈpæʃən",
                "spell": "compassion"
            },
            {
                "cefr": "",
                "def1": "искуственный",
                "ipa": "ˌɑrtəˈfɪʃəl",
                "spell": "artificial"
            },
            {
                "cefr": "",
                "def1": "оса жалит",
                "ipa": "ə wɑsp stɪŋz",
                "spell": "a wasp stings"
            },
            {
                "cefr": "",
                "def1": "внутривенный",
                "ipa": "ˌɪntrəˈvinəs",
                "spell": "intravenous"
            },
            {
                "cefr": "",
                "def1": "крупный порез",
                "ipa": "ə ˈmeɪʤər kʌt",
                "spell": "a major cut"
            },
            {
                "cefr": "",
                "def1": "болеутоляющее",
                "ipa": "ə ˈpeɪnˌkɪlər",
                "spell": "a painkiller"
            },
            {
                "cefr": "",
                "def1": "меня обсыпало",
                "ipa": "aɪ hæv ə ræʃ",
                "spell": "I have a rash"
            },
            {
                "cefr": "",
                "def1": "находящийся в сознании",
                "ipa": "ˈkɑnʃəs",
                "spell": "conscious"
            },
            {
                "cefr": "",
                "def1": "кесарево сечение",
                "ipa": "ə si-ˈsɛkʃən",
                "spell": "a C-section"
            },
            {
                "cefr": "",
                "def1": "нанести крем",
                "ipa": "tu əˈplaɪ krim",
                "spell": "to apply cream"
            },
            {
                "cefr": "",
                "def1": "наложить швы",
                "ipa": "tu ɡɛt ˈstɪʧɪz",
                "spell": "to get stitches"
            },
            {
                "cefr": "",
                "def1": "упасть неудачно",
                "ipa": "tu fɔl ˈbædli",
                "spell": "to fall badly"
            },
            {
                "cefr": "",
                "def1": "хирургическая операция",
                "ipa": "ə ˈsɜrʤəri",
                "spell": "a surgery"
            },
            {
                "cefr": "",
                "def1": "заучить, запомнить",
                "ipa": "tu ˈmɛməˌraɪz",
                "spell": "to memorize"
            },
            {
                "cefr": "",
                "def1": "съесть бифштекс",
                "ipa": "tu it ə steɪk",
                "spell": "to eat a steak"
            },
            {
                "cefr": "",
                "def1": "домашняя медицина",
                "ipa": "hoʊm ˈmɛdəsən",
                "spell": "home medicine"
            },
            {
                "cefr": "",
                "def1": "полностью проваренный",
                "ipa": "ˈfʊli kʊkt",
                "spell": "fully cooked"
            },
            {
                "cefr": "",
                "def1": "сопереживать мне",
                "ipa": "tu fil fɔr mi",
                "spell": "to feel for me"
            },
            {
                "cefr": "",
                "def1": "по сути (дела), в сущности",
                "ipa": "ˈbeɪsɪkli",
                "spell": "basically"
            },
            {
                "cefr": "",
                "def1": "(по)давиться едой",
                "ipa": "tu ʧoʊk ɑn fud",
                "spell": "to choke on food"
            },
            {
                "cefr": "",
                "def1": "бинтовать, делать перевязку",
                "ipa": "tu ˈbændɪʤ",
                "spell": "to bandage"
            },
            {
                "cefr": "",
                "def1": "обедать, ужинать в ресторане",
                "ipa": "tu it aʊt",
                "spell": "to eat out"
            },
            {
                "cefr": "",
                "def1": "в бессознательном состоянии",
                "ipa": "ˌʌnˈkɑnʃəs",
                "spell": "unconscious"
            },
            {
                "cefr": "",
                "def1": "век живи (и) век учись",
                "ipa": "lɪv ænd lɜrn",
                "spell": "live and learn"
            },
            {
                "cefr": "",
                "def1": "получить травму",
                "ipa": "tu ɡɛt ən ˈɪnʤəri",
                "spell": "to get an injury"
            },
            {
                "cefr": "",
                "def1": "буквально, в прямом смысле слова",
                "ipa": "ˈlɪtərəli",
                "spell": "literally"
            },
            {
                "cefr": "",
                "def1": "быть без сознания",
                "ipa": "tu bi ˌʌnˈkɑnʃəs",
                "spell": "to be unconscious"
            },
            {
                "cefr": "",
                "def1": "конвейер(ная лента)",
                "ipa": "ə kənˈveɪər bɛlt",
                "spell": "a conveyor belt"
            },
            {
                "cefr": "",
                "def1": "бессознательное состояние",
                "ipa": "ˌʌnˈkɑnʃəsnɪs",
                "spell": "unconsciousness"
            },
            {
                "cefr": "",
                "def1": "народное, домашнее средство",
                "ipa": "ə hoʊm ˈrɛmədi",
                "spell": "a home remedy"
            },
            {
                "cefr": "",
                "def1": "защитный механизм",
                "ipa": "ə ˈkoʊpɪŋ ˈmɛkəˌnɪzəm",
                "spell": "a coping mechanism"
            },
            {
                "cefr": "",
                "def1": "сопереживать мне",
                "ipa": "tu ˈɛmpəˌθaɪz wɪð mi",
                "spell": "to empathize with me"
            },
            {
                "cefr": "",
                "def1": "застрять где-то",
                "ipa": "tu ɡɛt stʌk ˈsʌmˌwɛr",
                "spell": "to get stuck somewhere"
            },
            {
                "cefr": "",
                "def1": "лунатизм, сомнамбулизм, снохождение",
                "ipa": "ˈsliˌpwɔkɪŋ",
                "spell": "sleepwalking"
            },
            {
                "cefr": "",
                "def1": "чёрствый, лишённый чувств, бесчувственный",
                "ipa": "ənˈfilɪŋ",
                "spell": "unfeeling"
            },
            {
                "cefr": "",
                "def1": "заниматься игровыми видами спорта",
                "ipa": "tu pleɪ spɔrts",
                "spell": "to play sports"
            },
            {
                "cefr": "",
                "def1": "принимать антибиотики",
                "ipa": "tu teɪk ˌæntibaɪˈɑtɪks",
                "spell": "to take antibiotics"
            },
            {
                "cefr": "",
                "def1": "идти в поход в горы",
                "ipa": "tu haɪk ɪn ðə ˈmaʊntənz",
                "spell": "to hike in the mountains"
            },
            {
                "cefr": "",
                "def1": "отстраниться от",
                "ipa": "tu æbˈstrækt ˌwʌnˈsɛlf frʌm",
                "spell": "to abstract oneself from"
            },
            {
                "cefr": "",
                "def1": "врачебная ошибка; медицинская ошибка",
                "ipa": "ə ˈmɛdəkəl ˈɛrər",
                "spell": "a medical error"
            },
            {
                "cefr": "",
                "def1": "анестезист, врач-анестезиолог",
                "ipa": "ən ˌænəˌsθiziˈɑləʤəst",
                "spell": "an anesthesiologist"
            },
            {
                "cefr": "",
                "def1": "подвернуть / вывихнуть лодыжку",
                "ipa": "tu spreɪn hɪz ˈæŋkəl",
                "spell": "to sprain his ankle"
            },
            {
                "cefr": "",
                "def1": "получить пищевое отравление",
                "ipa": "tu hæv fud ˈpɔɪzənɪŋ",
                "spell": "to have food poisoning"
            },
            {
                "cefr": "",
                "def1": "очнуться, прийти в себя, прийти в сознание",
                "ipa": "tu kʌm əˈraʊnd",
                "spell": "to come around"
            },
            {
                "cefr": "",
                "def1": "мне трудно глотать",
                "ipa": "aɪ hæv ˈdɪfəkəlti ˈswɑloʊɪŋ",
                "spell": "I have difficulty swallowing"
            },
            {
                "cefr": "",
                "def1": "иметь аллергическую реакцию",
                "ipa": "tu hæv ən əˈlɜrʤɪk riˈækʃən",
                "spell": "to have an allergic reaction"
            },
            {
                "cefr": "",
                "def1": "у меня была сыпь по всему телу",
                "ipa": "aɪ hæd ə ræʃ ɔl ˈoʊvər maɪ ˈbɑdi",
                "spell": "I had a rash all over my body"
            },
            {
                "cefr": "",
                "def1": "иметь высокое/низкое кровяное давление",
                "ipa": "tu hæv haɪ/loʊ blʌd ˈprɛʃər",
                "spell": "to have high/low blood pressure"
            },
            {
                "cefr": "",
                "def1": "принять антигистаминовую таблетку",
                "ipa": "tu teɪk ən ˌæntiˈhɪstəmən ˈtæblət",
                "spell": "to take an antihistamine tablet"
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

export default ML29;