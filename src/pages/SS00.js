import "../styles/fc.scss";
import React from "react";

class SS00 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const words = [
            {
                "mean": "или",
                "cefr": "",
                "ipa": "ɔr",
                "spell": "or"
            },
            {
                "mean": "заяц",
                "cefr": "",
                "ipa": "hɛr",
                "spell": "hare"
            },
            {
                "mean": "сюда",
                "cefr": "",
                "ipa": "hir",
                "spell": "here"
            },
            {
                "mean": "где",
                "cefr": "",
                "ipa": "wɛr",
                "spell": "where"
            },
            {
                "mean": "гусь",
                "cefr": "",
                "ipa": "ɡus",
                "spell": "goose"
            },
            {
                "mean": "гуси",
                "cefr": "",
                "ipa": "ɡis",
                "spell": "geese"
            },
            {
                "mean": "когда",
                "cefr": "",
                "ipa": "wɛn",
                "spell": "when"
            },
            {
                "mean": "скунс",
                "cefr": "",
                "ipa": "skʌŋk",
                "spell": "skunk"
            },
            {
                "mean": "третий",
                "cefr": "",
                "ipa": "θɜrd",
                "spell": "third"
            },
            {
                "mean": "лес",
                "cefr": "",
                "ipa": "ˈfɔrəst",
                "spell": "forest"
            },
            {
                "mean": "бобёр",
                "cefr": "",
                "ipa": "ˈbivər",
                "spell": "beaver"
            },
            {
                "mean": "кролик",
                "cefr": "",
                "ipa": "ˈræbət",
                "spell": "rabbit"
            },
            {
                "mean": "скучный",
                "cefr": "",
                "ipa": "ˈbɔrɪŋ",
                "spell": "boring"
            },
            {
                "mean": "пеший поход",
                "cefr": "",
                "ipa": "haɪk",
                "spell": "hike"
            },
            {
                "mean": "грузчик",
                "cefr": "",
                "ipa": "ˈloʊdər",
                "spell": "loader"
            },
            {
                "mean": "точно",
                "cefr": "",
                "ipa": "ɪɡˈzæktli",
                "spell": "exactly"
            },
            {
                "mean": "автобусом",
                "cefr": "",
                "ipa": "baɪ bʌs",
                "spell": "by bus"
            },
            {
                "mean": "улучшать",
                "cefr": "",
                "ipa": "ɪmˈpruv",
                "spell": "improve"
            },
            {
                "mean": "я уволилась",
                "cefr": "",
                "ipa": "aɪ kwɪt",
                "spell": "I quit"
            },
            {
                "mean": "2010",
                "cefr": "",
                "ipa": "ˈtwɛnti tɛn",
                "spell": "twenty ten"
            },
            {
                "mean": "на автомобиле",
                "cefr": "",
                "ipa": "baɪ kɑr",
                "spell": "by car"
            },
            {
                "mean": "(вот) так",
                "cefr": "",
                "ipa": "laɪk ðɪs",
                "spell": "like this"
            },
            {
                "mean": "водопад",
                "cefr": "",
                "ipa": "ˈwɔtərˌfɔl",
                "spell": "waterfall"
            },
            {
                "mean": "как высоко?",
                "cefr": "",
                "ipa": "haʊ haɪ?",
                "spell": "how high?"
            },
            {
                "mean": "на воле",
                "cefr": "",
                "ipa": "ɪn ðə waɪld",
                "spell": "in the wild"
            },
            {
                "mean": "в этом году",
                "cefr": "",
                "ipa": "ðɪs jɪrz",
                "spell": "this years"
            },
            {
                "mean": "работодатель",
                "cefr": "",
                "ipa": "ɛmˈplɔɪər",
                "spell": "employer"
            },
            {
                "mean": "на самом деле",
                "cefr": "",
                "ipa": "ˈækʧuəli",
                "spell": "actually"
            },
            {
                "mean": "это ветер",
                "cefr": "",
                "ipa": "ɪts ə wɪnd",
                "spell": "it’s a wind"
            },
            {
                "mean": "не соглашаться",
                "cefr": "",
                "ipa": "dɪsəˈɡri",
                "spell": "disagree"
            },
            {
                "mean": "2018",
                "cefr": "",
                "ipa": "ˈtwɛnti eɪˈtin",
                "spell": "twenty eighteen"
            },
            {
                "mean": "говорить хорошо",
                "cefr": "",
                "ipa": "spik wɛl",
                "spell": "speak well"
            },
            {
                "mean": "в моём возрасте",
                "cefr": "",
                "ipa": "æt maɪ eɪʤ",
                "spell": "at my age"
            },
            {
                "mean": "заботиться о",
                "cefr": "",
                "ipa": "teɪk kɛr ʌv",
                "spell": "take care of"
            },
            {
                "mean": "чем ..., тем ...",
                "cefr": "",
                "ipa": "ði … ði …",
                "spell": "the … the …"
            },
            {
                "mean": "когда вы были",
                "cefr": "",
                "ipa": "wɛn ju wɜr",
                "spell": "when you were"
            },
            {
                "mean": "имеется ли ...?",
                "cefr": "",
                "ipa": "ɪz ðɛr … ?",
                "spell": "is there … ?"
            },
            {
                "mean": "с одной стороны",
                "cefr": "",
                "ipa": "ɑn wʌn hænd",
                "spell": "on one hand"
            },
            {
                "mean": "знаменитый парк",
                "cefr": "",
                "ipa": "ˈfeɪməs pɑrk",
                "spell": "famous park"
            },
            {
                "mean": "горная вершина",
                "cefr": "",
                "ipa": "ˈmaʊntən tɑp",
                "spell": "mountain top"
            },
            {
                "mean": "в течение 2 лет",
                "cefr": "",
                "ipa": "fɔr tu jɪrz",
                "spell": "for two years"
            },
            {
                "mean": "поискать в интернете",
                "cefr": "",
                "ipa": "lʊk ɪt ʌp",
                "spell": "look it up"
            },
            {
                "mean": "да, очень!",
                "cefr": "",
                "ipa": "jɛs, ˈvɛri mʌʧ!",
                "spell": "Yes, very much!"
            },
            {
                "mean": "в центре (города)",
                "cefr": "",
                "ipa": "ɪn ˈdaʊnˈtaʊn",
                "spell": "in downtown"
            },
            {
                "mean": "в особенности",
                "cefr": "",
                "ipa": "ɪn pərˈtɪkjələr",
                "spell": "in particular"
            },
            {
                "mean": "тележка для поддонов",
                "cefr": "",
                "ipa": "ˈpælət ʤæk",
                "spell": "pallet jack"
            },
            {
                "mean": "вверх на гору",
                "cefr": "",
                "ipa": "ʌp ðə ˈmaʊntən",
                "spell": "up the mountain"
            },
            {
                "mean": "ни ... ни ...",
                "cefr": "",
                "ipa": "ˈniðər … nɔr …",
                "spell": "neither … nor …"
            },
            {
                "mean": "реконструкция",
                "cefr": "",
                "ipa": "ˌrikənˈstrʌkʃən",
                "spell": "reconstruction"
            },
            {
                "mean": "меня разбудили",
                "cefr": "",
                "ipa": "ðeɪ woʊk mi ʌp",
                "spell": "they woke me up"
            },
            {
                "mean": "вниз с горы",
                "cefr": "",
                "ipa": "daʊn ðə ˈmaʊntən",
                "spell": "down the mountain"
            },
            {
                "mean": "они вас уволили",
                "cefr": "",
                "ipa": "ðeɪ lɛt ju ɡoʊ",
                "spell": "they let you go"
            },
            {
                "mean": "метро нет",
                "cefr": "",
                "ipa": "ðɛr ɪz noʊ ˈsʌˌbweɪ",
                "spell": "there is no subway"
            },
            {
                "mean": "сколько остановок",
                "cefr": "",
                "ipa": "haʊ ˈmɛni stɑps",
                "spell": "how many stops"
            },
            {
                "mean": "либо ... либо",
                "cefr": "",
                "ipa": "ˈiðər ... ɔr ...",
                "spell": "either ... or ..."
            },
            {
                "mean": "какой сейчас год?",
                "cefr": "",
                "ipa": "wɑt jɪr ɪz ɪt?",
                "spell": "What year is it?"
            },
            {
                "mean": "X раз за урок",
                "cefr": "",
                "ipa": "ɛks taɪmz pɜr klæs",
                "spell": "X times per class"
            },
            {
                "mean": "с другой стороны",
                "cefr": "",
                "ipa": "ɑn ði ˈʌðər hænd",
                "spell": "on the other hand"
            },
            {
                "mean": "он начинает дуть",
                "cefr": "",
                "ipa": "ɪt stɑrts tu bloʊ",
                "spell": "it starts to blow"
            },
            {
                "mean": "Шинуки",
                "cefr": "",
                "ipa": "ʃɪˈnʊk wɪndz, ʃɪˈnʊks",
                "spell": "Chinook winds, Chinooks"
            },
            {
                "mean": "вы видели оленей?",
                "cefr": "",
                "ipa": "hæv ju sin dɪr?",
                "spell": "have you seen deer?"
            },
            {
                "mean": "иностранные языки",
                "cefr": "",
                "ipa": "ˈfɔrən ˈlæŋɡwəʤəz",
                "spell": "foreign languages"
            },
            {
                "mean": "одни говорят мне",
                "cefr": "",
                "ipa": "sʌm ˈpipəl tɛl mi",
                "spell": "some people tell me"
            },
            {
                "mean": "мы найдём способ",
                "cefr": "",
                "ipa": "wi wɪl faɪnd ə weɪ",
                "spell": "we will find a way"
            },
            {
                "mean": "на расстоянии 4 часов",
                "cefr": "",
                "ipa": "fɔr ˈaʊərz əˈweɪ",
                "spell": "four hours away"
            },
            {
                "mean": "я никогда не слышал",
                "cefr": "",
                "ipa": "aɪ hæv ˈnɛvər hɜrd",
                "spell": "I have never heard"
            },
            {
                "mean": "самое страшное животное",
                "cefr": "",
                "ipa": "ˈskɛriəst ˈænəməl",
                "spell": "scariest animal"
            },
            {
                "mean": "я знаю каково это",
                "cefr": "",
                "ipa": "aɪ noʊ wɑt ɪts laɪk",
                "spell": "I know what it’s like"
            },
            {
                "mean": "я делал это сам",
                "cefr": "",
                "ipa": "aɪ hæv dʌn ɪt ˌmaɪˈsɛlf",
                "spell": "I have done it myself"
            },
            {
                "mean": "20 минут пешком",
                "cefr": "",
                "ipa": "ˈtwɛnti ˈmɪnəts ɑn fʊt",
                "spell": "twenty minutes on foot"
            },
            {
                "mean": "покупать, купила, купленный",
                "cefr": "",
                "ipa": "baɪ, bɑt, bɑt",
                "spell": "buy, bought, bought"
            },
            {
                "mean": "я так много слышу о",
                "cefr": "",
                "ipa": "aɪ hir soʊ mʌʧ əˈbaʊt",
                "spell": "I hear so much about"
            },
            {
                "mean": "я никогда не был там",
                "cefr": "",
                "ipa": "aɪ hæv ˈnɛvər bɪn ðɛr",
                "spell": "I have never been there"
            },
            {
                "mean": "увидеть медведя на воле",
                "cefr": "",
                "ipa": "si ə bɛr ɪn ðə waɪld",
                "spell": "see a bear in the wild"
            },
            {
                "mean": "потора года назад",
                "cefr": "",
                "ipa": "wʌn ænd ə hæf jɪrz əˈɡoʊ",
                "spell": "one and a half years ago"
            },
            {
                "mean": "либо в 5, либо в 7",
                "cefr": "",
                "ipa": "ˈiðər æt faɪv ɔr æt ˈsɛvən",
                "spell": "either at five or at seven"
            },
            {
                "mean": "как сказать \"магазин\"?",
                "cefr": "",
                "ipa": "haʊ du ju seɪ \"магазин\"?",
                "spell": "how do you say \"магазин\"?"
            },
            {
                "mean": "мне здесь очень нравится",
                "cefr": "",
                "ipa": "aɪ laɪk ɪt hir ˈvɛri mʌʧ",
                "spell": "I like it here very much"
            },
            {
                "mean": "чем больше ..., тем легче ...",
                "cefr": "",
                "ipa": "ðə mɔr … ði ˈiziər …",
                "spell": "the more … the easier …"
            },
            {
                "mean": "мы поехали туда на микроавтобусе",
                "cefr": "",
                "ipa": "wi wɛnt ðɛr ɪn ə væn",
                "spell": "we went there in a van"
            },
            {
                "mean": "пособие по безработице",
                "cefr": "",
                "ipa": "ɛmˈplɔɪmənt ɪnˈʃʊrəns (i-aɪ)",
                "spell": "employment insurance (EI)"
            },
            {
                "mean": "я не очень хорошо пишу",
                "cefr": "",
                "ipa": "maɪ ˈraɪtɪŋ ˈɪzənt ˈvɛri ɡʊd",
                "spell": "my writing isn’t very good"
            },
            {
                "mean": "больше всего бояться пауков",
                "cefr": "",
                "ipa": "bi moʊst əˈfreɪd ʌv ˈspaɪdərz",
                "spell": "be most afraid of spiders"
            },
            {
                "mean": "от 40 до 50 часов в неделю",
                "cefr": "",
                "ipa": "frʌm ˈfɔrti tu ˈfɪfti ˈaʊərz ə wik",
                "spell": "from forty to fifty hours a week"
            },
            {
                "mean": "-25 градусов по Цельсию",
                "cefr": "",
                "ipa": "ˈmaɪnəs ˈtwɛnti faɪv dɪˈɡriz ˈsɛlsiəs",
                "spell": "minus twenty five degrees Celsius"
            },
            {
                "mean": "вам приходилось поднимать тяжести?",
                "cefr": "",
                "ipa": "dɪd ju hæv tu lɪft ˈhɛvi θɪŋz?",
                "spell": "did you have to lift heavy things?"
            }
        ];
        const wordsFinal = [];

        for (let [i, word] of words.entries()) {
            i++;
            wordsFinal.push(
                <div className="word" key={i}>
                    <div className="front part part1">
                        <p>{i}</p>
                        <div className="rus">{word.mean}</div>
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
                <h1>Sveltana L0</h1>
                <section className="words">
                    {wordsFinal}
                </section>
            </div>
        );
    }
}

export default SS00;