import "../styles/fc.scss";
import React from "react";

class ML25 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const words = [
            {
                "cefr": "",
                "def1": "салон",
                "ipa": "səˈlɑn",
                "spell": "salon"
            },
            {
                "cefr": "",
                "def1": "дуб",
                "ipa": "oʊk-tri",
                "spell": "oak-tree"
            },
            {
                "cefr": "",
                "def1": "хотелки",
                "ipa": "ˈwɪʃɪz",
                "spell": "wishes"
            },
            {
                "cefr": "",
                "def1": "стоимость",
                "ipa": "ˈvælju",
                "spell": "value"
            },
            {
                "cefr": "",
                "def1": "зарплата",
                "ipa": "peɪ",
                "spell": "pay"
            },
            {
                "cefr": "",
                "def1": "социальный пакет",
                "ipa": "pɜrks",
                "spell": "perks"
            },
            {
                "cefr": "",
                "def1": "река Днестр",
                "ipa": "ˈdnistər",
                "spell": "Dniester"
            },
            {
                "cefr": "",
                "def1": "заранее",
                "ipa": "bɪˈfɔrˌhænd",
                "spell": "beforehand"
            },
            {
                "cefr": "",
                "def1": "дать совет",
                "ipa": "ɡɪv ə tɪp",
                "spell": "give a tip"
            },
            {
                "cefr": "",
                "def1": "устойчивый, стойкий",
                "ipa": "ˈstɛdi",
                "spell": "steady"
            },
            {
                "cefr": "",
                "def1": "ювелирные изделия",
                "ipa": "ˈʤuəlri",
                "spell": "jewelry"
            },
            {
                "cefr": "",
                "def1": "мэрия",
                "ipa": "ˈmeɪərz ˈɔfəs",
                "spell": "mayor's office"
            },
            {
                "cefr": "",
                "def1": "сутулиться; горбиться",
                "ipa": "slaʊʧ",
                "spell": "slouch"
            },
            {
                "cefr": "",
                "def1": "я вас понимаю",
                "ipa": "aɪ hir ju!",
                "spell": "I hear you!"
            },
            {
                "cefr": "",
                "def1": "телесный образ",
                "ipa": "ˈbɑdi ˈɪməʤ",
                "spell": "body image"
            },
            {
                "cefr": "",
                "def1": "тон, голос",
                "ipa": "toʊn ʌv vɔɪs",
                "spell": "tone of voice"
            },
            {
                "cefr": "",
                "def1": "язык тела",
                "ipa": "ˈbɑdi ˈlæŋɡwəʤ",
                "spell": "body language"
            },
            {
                "cefr": "",
                "def1": "поднять тему",
                "ipa": "reɪz ə ˈtɑpɪk",
                "spell": "raise a topic"
            },
            {
                "cefr": "",
                "def1": "упорный; настойчивый",
                "ipa": "pərˈsɪstənt",
                "spell": "persistent"
            },
            {
                "cefr": "",
                "def1": "придираться к мелочам",
                "ipa": "nɪt ˈpɪkɪŋ",
                "spell": "nit picking"
            },
            {
                "cefr": "",
                "def1": "проходить, происходить",
                "ipa": "teɪk pleɪs",
                "spell": "take place"
            },
            {
                "cefr": "",
                "def1": "глоссарий; толковый словарь",
                "ipa": "ˈɡlɔsəri",
                "spell": "glossary"
            },
            {
                "cefr": "",
                "def1": "одеваться слишком пышно",
                "ipa": "ˈoʊvərˌdrɛs",
                "spell": "overdress"
            },
            {
                "cefr": "",
                "def1": "открывать (a secret); раскрывать",
                "ipa": "rɪˈvil",
                "spell": "reveal"
            },
            {
                "cefr": "",
                "def1": "одеваться слишком просто",
                "ipa": "ˈʌndərˌdrɛs",
                "spell": "underdress"
            },
            {
                "cefr": "",
                "def1": "соцпакет",
                "ipa": "ðə ˈbɛnəfɪts, pɜrks",
                "spell": "the benefits, perks"
            },
            {
                "cefr": "",
                "def1": "доставить стоимость",
                "ipa": "dɪˈlɪvər ˈvælju",
                "spell": "deliver value"
            },
            {
                "cefr": "",
                "def1": "зарабатывать на жизнь",
                "ipa": "meɪk ə ˈlɪvɪŋ",
                "spell": "make a living"
            },
            {
                "cefr": "",
                "def1": "кандидат на должность",
                "ipa": "ʤɑb ˈkændədeɪt",
                "spell": "job candidate"
            },
            {
                "cefr": "",
                "def1": "количество часов",
                "ipa": "ˈnʌmbər ʌv ˈaʊərz",
                "spell": "number of hours"
            },
            {
                "cefr": "",
                "def1": "дорогой, элитный, престижный, шикарный",
                "ipa": "haɪ-ɛnd",
                "spell": "high-end"
            },
            {
                "cefr": "",
                "def1": "иметь помехи",
                "ipa": "tu hæv ˌɪntəˈrʌpʃənz",
                "spell": "to have interruptions"
            },
            {
                "cefr": "",
                "def1": "на 5 минут раньше",
                "ipa": "faɪv ˈmɪnəts ˈɜrli",
                "spell": "five minutes early"
            },
            {
                "cefr": "",
                "def1": "отсутствие уважения",
                "ipa": "ə læk ʌv rɪˈspɛkt",
                "spell": "a lack of respect"
            },
            {
                "cefr": "",
                "def1": "величина отпуска",
                "ipa": "əˈmaʊnt ʌv veɪˈkeɪʃən",
                "spell": "amount of vacation"
            },
            {
                "cefr": "",
                "def1": "как я должен одеться",
                "ipa": "haʊ ʃʊd aɪ drɛs?",
                "spell": "how should i dress?"
            },
            {
                "cefr": "",
                "def1": "есть охрана, охранники",
                "ipa": "ðɛr ɪz sɪˈkjʊrəti",
                "spell": "there is security"
            },
            {
                "cefr": "",
                "def1": "цапнуть чашку кофе",
                "ipa": "ɡræb ə kʌp ʌv ˈkɑfi",
                "spell": "grab a cup of coffee"
            },
            {
                "cefr": "",
                "def1": "электронное устройство",
                "ipa": "ɪˌlɛkˈtrɑnɪk dɪˈvaɪs",
                "spell": "electronic device"
            },
            {
                "cefr": "",
                "def1": "зайти на интервью",
                "ipa": "wɔk ˈɪntu ði ˈɪntərˌvju",
                "spell": "walk into the interview"
            },
            {
                "cefr": "",
                "def1": "одеться надлежащим образом",
                "ipa": "drɛs əˈproʊpriɪtli",
                "spell": "dress appropriately"
            },
            {
                "cefr": "",
                "def1": "баланс между работой и личной жизнью",
                "ipa": "wɜrk-laɪf ˈbæləns",
                "spell": "work-life balance"
            },
            {
                "cefr": "",
                "def1": "явиться на собеседование",
                "ipa": "ʃoʊ ʌp æt ən ˈɪntərˌvju",
                "spell": "show up at an interview"
            },
            {
                "cefr": "",
                "def1": "наблюдать за входной дверью",
                "ipa": "steɪk aʊt ðə frʌnt dɔr",
                "spell": "stake out the front door"
            },
            {
                "cefr": "",
                "def1": "согласовать что-то с кем-то",
                "ipa": "rʌn ˈsʌmθɪŋ baɪ ˈsʌmˌbɑdi",
                "spell": "run something by somebody"
            },
            {
                "cefr": "",
                "def1": "поставить детей на ноги",
                "ipa": "ɡɪv maɪ kɪdz ə stɑrt ɪn laɪf",
                "spell": "give my kids a start in life"
            },
            {
                "cefr": "",
                "def1": "справиться должным образом",
                "ipa": "ˈhændəl ˈsʌmθɪŋ ɪn ðə raɪt weɪ",
                "spell": "handle something in the right way"
            },
            {
                "cefr": "",
                "def1": "интернет-кафе, компьютерный клуб",
                "ipa": "ˈɪntərˌnɛt kəˈfeɪ, ˈsaɪbər kəˈfeɪ",
                "spell": "internet cafe, cyber cafe"
            },
            {
                "cefr": "",
                "def1": "уничтожить шансы сделать что-то",
                "ipa": "ɪˈlɪməˌneɪt ðə ˈʧænsəz ʌv ˈduɪŋ ˈsʌmθɪŋ",
                "spell": "eliminate the chances of doing something"
            },
            {
                "cefr": "",
                "def1": "есть несколько способов сделать одно и то же",
                "ipa": "ðɛr ɪz mɔr ðæn wʌn weɪ tu skɪn ə kæt",
                "spell": "there is more than one way to skin a cat"
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
                <h1>Maria :: Lesson 25</h1>
                <section className="words">
                    {wordsFinal}
                </section>
            </div>
        );
    }
}

export default ML25;