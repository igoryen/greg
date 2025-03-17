import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";

class SB01 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const lesson = {
            "student": "Svetlana B.",
            "number": 1,
            "slug": "sb"
        };
        const words = [
            {
                "cefr": "",
                "def1": "метис",
                "ipa": "meɪˈti, meɪˈtis",
                "spell": "metis"
            },
            {
                "cefr": "",
                "def1": "пустой",
                "ipa": "blæŋk",
                "spell": "blank"
            },
            {
                "cefr": "",
                "def1": "метис",
                "ipa": "mɛˈstizoʊ",
                "spell": "mestizo"
            },
            {
                "cefr": "",
                "def1": "всегда, вечно",
                "ipa": "ˈɛvər",
                "spell": "ever"
            },
            {
                "cefr": "",
                "def1": "метиска",
                "ipa": "mɛˈstizə",
                "spell": "mestiza"
            },
            {
                "cefr": "",
                "def1": "сплетня, -ни",
                "ipa": "ˈɡɑsəp",
                "spell": "gossip"
            },
            {
                "cefr": "",
                "def1": "нерождённый",
                "ipa": "ˈʌnˈbɔrn",
                "spell": "unborn"
            },
            {
                "cefr": "",
                "def1": "так никогда и не",
                "ipa": "ˈnɛvər",
                "spell": "never"
            },
            {
                "cefr": "",
                "def1": "довольно, весьма",
                "ipa": "ˈprɪti",
                "spell": "pretty"
            },
            {
                "cefr": "",
                "def1": "ужасать",
                "ipa": "tu ˈhɔrəˌfaɪ",
                "spell": "to horrify"
            },
            {
                "cefr": "",
                "def1": "что до меня",
                "ipa": "æz fɔr mi",
                "spell": "as for me"
            },
            {
                "cefr": "",
                "def1": "интрига",
                "ipa": "(ən) ɪnˈtriɡ",
                "spell": "(an) intrigue"
            },
            {
                "cefr": "",
                "def1": "голый холст",
                "ipa": "bɛr ˈkænvəs",
                "spell": "bare canvas"
            },
            {
                "cefr": "",
                "def1": "позади, сзади",
                "ipa": "æt ðə bæk",
                "spell": "at the back"
            },
            {
                "cefr": "",
                "def1": "клочок (холста, земли)",
                "ipa": "ˈpæʧ",
                "spell": "patch"
            },
            {
                "cefr": "",
                "def1": "некровные родственники",
                "ipa": "ɪnˈlɔz",
                "spell": "in-laws"
            },
            {
                "cefr": "",
                "def1": "по отцовской линии",
                "ipa": "pəˈtɜrnəl",
                "spell": "paternal"
            },
            {
                "cefr": "",
                "def1": "по материнской линии",
                "ipa": "məˈtɜrnəl",
                "spell": "maternal"
            },
            {
                "cefr": "",
                "def1": "хриплый голос",
                "ipa": "ə hɔrs vɔɪs",
                "spell": "a hoarse voice"
            },
            {
                "cefr": "",
                "def1": "поправиться",
                "ipa": "tu rɪˈkupəˌreɪt",
                "spell": "to recuperate"
            },
            {
                "cefr": "",
                "def1": "черты лица",
                "ipa": "ˈfeɪʃəl ˈfiʧərz",
                "spell": "facial features"
            },
            {
                "cefr": "",
                "def1": "внизу, у основания",
                "ipa": "æt ðə ˈbɑtəm",
                "spell": "at the bottom"
            },
            {
                "cefr": "",
                "def1": "распутник, женолюб",
                "ipa": "ə ˈwʊməˌnaɪzər",
                "spell": "a womanizer"
            },
            {
                "cefr": "",
                "def1": "двустворчатая дверь",
                "ipa": "ˈfoʊldɪŋ dɔrz",
                "spell": "folding doors"
            },
            {
                "cefr": "",
                "def1": "разлюбить",
                "ipa": "tu fɔl aʊt ʌv lʌv",
                "spell": "to fall out of love"
            },
            {
                "cefr": "",
                "def1": "вычёркивать, вымарывать",
                "ipa": "tu blæŋk aʊt",
                "spell": "to blank out"
            },
            {
                "cefr": "",
                "def1": "договорной брак",
                "ipa": "əˈreɪnʤd ˈmɛrɪʤ",
                "spell": "arranged marriage"
            },
            {
                "cefr": "",
                "def1": "аудиогид (устройство)",
                "ipa": "ən ˈɑdiˌoʊ ɡaɪd",
                "spell": "an audio guide"
            },
            {
                "cefr": "",
                "def1": "расставить людей",
                "ipa": "tu əˈreɪnʤ ˈpipəl",
                "spell": "to arrange people"
            },
            {
                "cefr": "",
                "def1": "что касается этого",
                "ipa": "æz kənˈsɜrnz ðɪs",
                "spell": "as concerns this"
            },
            {
                "cefr": "",
                "def1": "семейное, генеалогическое древо",
                "ipa": "ˈfæməli tri",
                "spell": "family tree"
            },
            {
                "cefr": "",
                "def1": "выпытать мнение",
                "ipa": "tu ɪˈlɪsɪt ən əˈpɪnjən",
                "spell": "to elicit an opinion"
            },
            {
                "cefr": "",
                "def1": "невыразительное, непроницаемое лицо",
                "ipa": "ə blæŋk feɪs",
                "spell": "a blank face"
            },
            {
                "cefr": "",
                "def1": "принудительный, вынужденный брак",
                "ipa": "fɔrst ˈmɛrɪʤ",
                "spell": "forced marriage"
            },
            {
                "cefr": "",
                "def1": "снисходительный, великодушный, благосклонный",
                "ipa": "fərˈɡɪvɪŋ",
                "spell": "forgiving"
            },
            {
                "cefr": "",
                "def1": "яркие, сочные, трепещущие цвета",
                "ipa": "ˈvaɪbrənt ˈkʌlərz",
                "spell": "vibrant colors"
            },
            {
                "cefr": "",
                "def1": "выражать символически",
                "ipa": "tu ɪkˈsprɛs sɪmˈbɑlɪkəli",
                "spell": "to express symbolically"
            },
            {
                "cefr": "",
                "def1": "когда дело касается, когда речь заходит о",
                "ipa": "wɛn ɪt kʌmz tu",
                "spell": "when it comes to"
            },
            {
                "cefr": "",
                "def1": "полиомиелит, детский паралич",
                "ipa": "ˌpoʊlioʊmaɪəˈlaɪtɪs, ˈpoʊliˌoʊ",
                "spell": "poliomyelitis, polio"
            },
            {
                "cefr": "",
                "def1": "усвоить информацию",
                "ipa": "tu əˈsɪməˌleɪt ði ˌɪnfərˈmeɪʃən",
                "spell": "to assimilate the information"
            },
            {
                "cefr": "",
                "def1": "слушать через наушники",
                "ipa": "tu ˈlɪsən ɑn ðə ˈhɛdˌfoʊnz tu",
                "spell": "to listen on the headphones to"
            },
            {
                "cefr": "",
                "def1": "чем ближе знаешь, тем меньше почитаешь",
                "ipa": "fəˌmɪlˈjɛrəti bridz kənˈtɛmpt",
                "spell": "familiarity breeds contempt"
            },
            {
                "cefr": "",
                "def1": "солидаризироваться с, разделять взгляды с",
                "ipa": "tu aɪˈdɛntəˌfaɪ wɪð ən əˈpɪnjən",
                "spell": "to identify with an opinion"
            },
            {
                "cefr": "",
                "def1": "люди, от которых я произошла",
                "ipa": "ðə ˈpipəl aɪ keɪm frʌm, ðə ˈpipəl frʌm hum aɪ hæv dɪˈsɛndɪd",
                "spell": "the people I came from, the people from whom I have descended"
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

export default SB01;