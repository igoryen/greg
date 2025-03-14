import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";

class SS08 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const lesson = {
            "student": "Svetlana",
            "number": 8,
            "slug": "ss"
        };
        const words = [
            {
                "cefr": "",
                "def1": "скучать",
                "ipa": "tə mɪs",
                "spell": "to miss"
            },
            {
                "cefr": "",
                "def1": "упоминать",
                "ipa": "tə ˈmɛnʃən",
                "spell": "to mention"
            },
            {
                "cefr": "",
                "def1": "кстати",
                "ipa": "baɪ ðə weɪ",
                "spell": "by the way"
            },
            {
                "cefr": "",
                "def1": "относительно",
                "ipa": "ˈrɛlətɪv",
                "spell": "relative"
            },
            {
                "cefr": "",
                "def1": "я туп",
                "ipa": "aɪ əm ˈstupɪd",
                "spell": "I am stupid"
            },
            {
                "cefr": "",
                "def1": "ты глуп",
                "ipa": "jʊ ər ˈsɪli",
                "spell": "you are silly"
            },
            {
                "cefr": "",
                "def1": "я безумен",
                "ipa": "aɪ əm ˈkreɪzi",
                "spell": "I am crazy"
            },
            {
                "cefr": "",
                "def1": "не тормози",
                "ipa": "doʊnt bi sloʊ",
                "spell": "don’t be slow"
            },
            {
                "cefr": "",
                "def1": "я (всегда) торможу",
                "ipa": "aɪ əm sloʊ",
                "spell": "I am slow"
            },
            {
                "cefr": "",
                "def1": "я (сейчас) торможу",
                "ipa": "aɪ əm ˈbiɪŋ sloʊ",
                "spell": "I am being slow"
            },
            {
                "cefr": "",
                "def1": "указание на время",
                "ipa": "ˈrɛfərəns tə taɪm",
                "spell": "reference to time"
            },
            {
                "cefr": "",
                "def1": "я (сейчас) туплю",
                "ipa": "aɪ əm ˈbiɪŋ ˈstupɪd",
                "spell": "I am being stupid"
            },
            {
                "cefr": "",
                "def1": "ты (всегда) ведёшь себя глупо",
                "ipa": "jʊ ækt ˈsɪli",
                "spell": "you act silly"
            },
            {
                "cefr": "",
                "def1": "ты (сейчас) тормозишь",
                "ipa": "jʊ ər ˈbiɪŋ sloʊ",
                "spell": "you are being slow"
            },
            {
                "cefr": "",
                "def1": "как вы (всё это время)?",
                "ipa": "haʊ həv jʊ bɪn?",
                "spell": "how have you been?"
            },
            {
                "cefr": "",
                "def1": "я (сейчас) безумствую",
                "ipa": "aɪ əm ˈbiɪŋ ˈkreɪzi",
                "spell": "I am being crazy"
            },
            {
                "cefr": "",
                "def1": "я в порядке (всё это время)",
                "ipa": "aɪ həv bɪn ɡʊd",
                "spell": "I have been good"
            },
            {
                "cefr": "",
                "def1": "я жду автобус",
                "ipa": "aɪ əm ˈweɪtɪŋ fər ə bʌs",
                "spell": "I am waiting for a bus"
            },
            {
                "cefr": "",
                "def1": "ты (сейчас) глупишь/дурачишься",
                "ipa": "jʊ ər ˈbiɪŋ ˈsɪli",
                "spell": "you are being silly"
            },
            {
                "cefr": "",
                "def1": "я сегодня весь день торможу",
                "ipa": "aɪv bɪn sloʊ ɔl deɪ təˈdeɪ",
                "spell": "I’ve been slow all day today"
            },
            {
                "cefr": "",
                "def1": "ты (сейчас) ведёшь себя очень глупо",
                "ipa": "jʊ ər ˈæktɪŋ ˈvɛri ˈsɪli",
                "spell": "you are acting very silly"
            },
            {
                "cefr": "",
                "def1": "у меня уроки 3 раза в неделю",
                "ipa": "aɪ həv ˈklæsəz θri taɪmz ə wik",
                "spell": "I have classes three times a week"
            },
            {
                "cefr": "",
                "def1": "я сижу тут уже 3 часа",
                "ipa": "aɪ həv bɪn ˈsɪtɪŋ hir fər θri ˈaʊərz",
                "spell": "I have been sitting here for three hours"
            },
            {
                "cefr": "",
                "def1": "я жду автобус уже полчаса",
                "ipa": "aɪ həv bɪn ˈweɪtɪŋ fər ə bʌs fər hæf ən ˈaʊər",
                "spell": "I have been waiting for a bus for half an hour"
            },
            {
                "cefr": "",
                "def1": "мы изучаем английский уже 50 минут",
                "ipa": "wi həv bɪn ˈstʌdiɪŋ ˈɪŋɡlɪʃ fər ˈfɪfti ˈmɪnəts",
                "spell": "we have been studying English for fifty minutes"
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

export default SS08;