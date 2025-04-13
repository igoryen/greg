import "../../styles/fc.scss";
import React from "react";

import Leon from "../../components/Leon";

class MS06 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Mykola",
            "number": 9,
            "slug": "ms"
        };
        const words = [
            {
                "cefr": "",
                "def1": "чей",
                "ipa": "huz",
                "spell": "whose"
            },
            {
                "cefr": "",
                "def1": "вид",
                "ipa": "ə vju",
                "spell": "a view"
            },
            {
                "cefr": "",
                "def1": "видимый",
                "ipa": "sin",
                "spell": "seen"
            },
            {
                "cefr": "",
                "def1": "лежать",
                "ipa": "tu laɪ",
                "spell": "to lie"
            },
            {
                "cefr": "",
                "def1": "рогатый",
                "ipa": "hɔrnd",
                "spell": "horned"
            },
            {
                "cefr": "",
                "def1": "флейта",
                "ipa": "ə flut",
                "spell": "a flute"
            },
            {
                "cefr": "",
                "def1": "бородатый",
                "ipa": "ˈbɪrdəd",
                "spell": "bearded"
            },
            {
                "cefr": "",
                "def1": "в то время как",
                "ipa": "waɪl",
                "spell": "while"
            },
            {
                "cefr": "",
                "def1": "место, точка",
                "ipa": "ə spɑt",
                "spell": "a spot"
            },
            {
                "cefr": "",
                "def1": "лето",
                "ipa": "ɪts ˈsʌmər",
                "spell": "it’s summer"
            },
            {
                "cefr": "",
                "def1": "весна",
                "ipa": "ɪts sprɪŋ",
                "spell": "it's spring"
            },
            {
                "cefr": "",
                "def1": "зима",
                "ipa": "ɪts ˈwɪntər",
                "spell": "it's winter"
            },
            {
                "cefr": "",
                "def1": "парами",
                "ipa": "ɪn ˈkʌpəlz",
                "spell": "in couples"
            },
            {
                "cefr": "",
                "def1": "большеглазый",
                "ipa": "bɪɡ-aɪd",
                "spell": "big-eyed"
            },
            {
                "cefr": "",
                "def1": "длинноухий",
                "ipa": "lɔŋ-ɪrd",
                "spell": "long-eared"
            },
            {
                "cefr": "",
                "def1": "на поводке",
                "ipa": "ɑn ə liʃ",
                "spell": "on a leash"
            },
            {
                "cefr": "",
                "def1": "справа",
                "ipa": "tu ðə raɪt",
                "spell": "to the right"
            },
            {
                "cefr": "",
                "def1": "большеносый",
                "ipa": "bɪɡ-noʊzd",
                "spell": "big-nosed"
            },
            {
                "cefr": "",
                "def1": "всё утро",
                "ipa": "ɔl ˈmɔrnɪŋ",
                "spell": "all morning"
            },
            {
                "cefr": "",
                "def1": "передо мной",
                "ipa": "bɪˈfɔr mi",
                "spell": "before me"
            },
            {
                "cefr": "",
                "def1": "болтать, общаться",
                "ipa": "tu ʧæt",
                "spell": "to chat"
            },
            {
                "cefr": "",
                "def1": "дирижёр",
                "ipa": "ə kənˈdʌktər",
                "spell": "a conductor"
            },
            {
                "cefr": "",
                "def1": "исполнять",
                "ipa": "tu pərˈfɔrm",
                "spell": "to perform"
            },
            {
                "cefr": "",
                "def1": "прогуливаться",
                "ipa": "tu stroʊl",
                "spell": "to stroll"
            },
            {
                "cefr": "",
                "def1": "большеголовый",
                "ipa": "bɪɡ-ˈhɛdɪd",
                "spell": "big-headed"
            },
            {
                "cefr": "",
                "def1": "идёт дождь",
                "ipa": "ɪts ˈreɪnɪŋ",
                "spell": "it's raining"
            },
            {
                "cefr": "",
                "def1": "подпевать",
                "ipa": "tu sɪŋ əˈlɔŋ",
                "spell": "to sing along"
            },
            {
                "cefr": "",
                "def1": "руководить мной",
                "ipa": "tu lid mi",
                "spell": "to lead me"
            },
            {
                "cefr": "",
                "def1": "рядом со мной",
                "ipa": "nɛkst tu mi",
                "spell": "next to me"
            },
            {
                "cefr": "",
                "def1": "дать в долг мне",
                "ipa": "tu lɛnd mi",
                "spell": "to lend me"
            },
            {
                "cefr": "",
                "def1": "разворачиваться",
                "ipa": "tu ənˈfoʊld",
                "spell": "to unfold"
            },
            {
                "cefr": "",
                "def1": "рядом с прудом",
                "ipa": "nɪr ə pɑnd",
                "spell": "near a pond"
            },
            {
                "cefr": "",
                "def1": "кресло-каляска",
                "ipa": "ə ˈwilˌʧɛr",
                "spell": "a wheelchair"
            },
            {
                "cefr": "",
                "def1": "подыгрывать",
                "ipa": "tu pleɪ əˈlɔŋ",
                "spell": "to play along"
            },
            {
                "cefr": "",
                "def1": "небольшое кафе",
                "ipa": "ə smɔl kəˈfeɪ",
                "spell": "a small café"
            },
            {
                "cefr": "",
                "def1": "по нотам",
                "ipa": "frʌm ʃit ˈmjuzɪk",
                "spell": "from sheet music"
            },
            {
                "cefr": "",
                "def1": "тёплая погода",
                "ipa": "ə wɔrm ˈwɛðər",
                "spell": "a warm weather"
            },
            {
                "cefr": "",
                "def1": "уже некоторое время",
                "ipa": "fɔr ə waɪl",
                "spell": "for a while"
            },
            {
                "cefr": "",
                "def1": "подтанцовывать",
                "ipa": "tu dæns əˈlɔŋ",
                "spell": "to dance along"
            },
            {
                "cefr": "",
                "def1": "в реальном времени",
                "ipa": "ɪn riəl taɪm",
                "spell": "in real time"
            },
            {
                "cefr": "",
                "def1": "вид на парк",
                "ipa": "ə vju ʌv ə pɑrk",
                "spell": "a view of a park"
            },
            {
                "cefr": "",
                "def1": "записать на мой счёт",
                "ipa": "tu ʧɑrʤ mi",
                "spell": "to charge me"
            },
            {
                "cefr": "",
                "def1": "направляться к",
                "ipa": "tu hɛd təˈwɔrd",
                "spell": "to head toward"
            },
            {
                "cefr": "",
                "def1": "стойка кафе",
                "ipa": "ə kəˈfeɪ ˈkaʊntər",
                "spell": "a café counter"
            },
            {
                "cefr": "",
                "def1": "написать мне сообщение",
                "ipa": "tu tɛkst mi",
                "spell": "to text me"
            },
            {
                "cefr": "",
                "def1": "оживлённая сцена",
                "ipa": "ə ˈlaɪvli sin",
                "spell": "a lively scene"
            },
            {
                "cefr": "",
                "def1": "некоторые сидят",
                "ipa": "sʌm ɑr ˈsɪtɪŋ",
                "spell": "some are sitting"
            },
            {
                "cefr": "",
                "def1": "полный жизни",
                "ipa": "ˈbʌzɪŋ wɪð laɪf",
                "spell": "buzzing with life"
            },
            {
                "cefr": "",
                "def1": "предлагать закуски",
                "ipa": "tu sɜrv snæks",
                "spell": "to serve snacks"
            },
            {
                "cefr": "",
                "def1": "небольшими группами",
                "ipa": "ɪn smɔl ɡrups",
                "spell": "in small groups"
            },
            {
                "cefr": "",
                "def1": "пожилой певец",
                "ipa": "ən ˈɛldərli ˈsɪŋər",
                "spell": "an elderly singer"
            },
            {
                "cefr": "",
                "def1": "стоять в одиночестве",
                "ipa": "tu stænd əˈloʊn",
                "spell": "to stand alone"
            },
            {
                "cefr": "",
                "def1": "наполненный людьми",
                "ipa": "fɪld wɪð ˈpipəl",
                "spell": "filled with people"
            },
            {
                "cefr": "",
                "def1": "наблюдать за собакой",
                "ipa": "tu ˈwɑʧ ə dɔɡ",
                "spell": "to watch a dog"
            },
            {
                "cefr": "",
                "def1": "брать в долг у меня",
                "ipa": "tu ˈbɑˌroʊ frʌm mi",
                "spell": "to borrow from me"
            },
            {
                "cefr": "",
                "def1": "наслаждаюсь угощением",
                "ipa": "aɪ ɛnˈʤɔɪ maɪ trit",
                "spell": "I enjoy my treat"
            },
            {
                "cefr": "",
                "def1": "группа посетителей",
                "ipa": "ə ɡrup ʌv ˈvɪzətərz",
                "spell": "a group of visitors"
            },
            {
                "cefr": "",
                "def1": "я оделся легко",
                "ipa": "aɪ hæv drɛst ˈlaɪtli",
                "spell": "I have dressed lightly"
            },
            {
                "cefr": "",
                "def1": "поблизости, неподалёку",
                "ipa": "kloʊs baɪ, ˈnɪrˈbaɪ",
                "spell": "close by, nearby"
            },
            {
                "cefr": "",
                "def1": "освежающий фонтан",
                "ipa": "ə rɪˈfrɛʃɪŋ ˈfaʊntən",
                "spell": "a refreshing fountain"
            },
            {
                "cefr": "",
                "def1": "утка с утятами",
                "ipa": "ə dʌk ænd hɜr ˈdʌklɪŋz",
                "spell": "a duck and her ducklings"
            },
            {
                "cefr": "",
                "def1": "облокотиться на стену",
                "ipa": "tu lin əˈɡɛnst ə wɔl",
                "spell": "to lean against a wall"
            },
            {
                "cefr": "",
                "def1": "насладиться моим выходным",
                "ipa": "tu ɛnˈʤɔɪ maɪ deɪ ɔf",
                "spell": "to enjoy my day off"
            },
            {
                "cefr": "",
                "def1": "расположиться за столиком",
                "ipa": "tu ˈsɛtəl æt ə ˈteɪbəl",
                "spell": "to settle at a table"
            },
            {
                "cefr": "",
                "def1": "плавать среди кувшинок",
                "ipa": "tu swɪm əˈmʌŋ ˈlɪli pædz",
                "spell": "to swim among lily pads"
            },
            {
                "cefr": "",
                "def1": "пожилой бородатый мужчина",
                "ipa": "ən ˈɛldərli ˈbɪrdəd mæn",
                "spell": "an elderly bearded man"
            },
            {
                "cefr": "",
                "def1": "на фоне реки",
                "ipa": "wɪð ə ˈrɪvər ɪn ðə ˈbækˌɡraʊnd",
                "spell": "with a river in the background"
            },
            {
                "cefr": "",
                "def1": "с ребёнком в каляске",
                "ipa": "wɪð ə ˈbeɪbi ɪn ə ˈstroʊlər",
                "spell": "with a baby in a stroller"
            },
            {
                "cefr": "",
                "def1": "на фоне гор",
                "ipa": "wɪð ˈmaʊntənz ɪn ðə ˈbækˌɡraʊnd",
                "spell": "with mountains in the background"
            },
            {
                "cefr": "",
                "def1": "на фоне леса",
                "ipa": "wɪð ə ˈfɔrəst ɪn ðə ˈbækˌɡraʊnd",
                "spell": "with a forest in the background"
            },
            {
                "cefr": "",
                "def1": "с высоты примерно 5 метров",
                "ipa": "frʌm əˈbaʊt faɪv ˈmitərz ʌp",
                "spell": "from about five meters up"
            },
            {
                "cefr": "",
                "def1": "на фоне фонтана",
                "ipa": "wɪð ðə ˈfaʊntən ɪn ðə ˈbækˌɡraʊnd",
                "spell": "with the fountain in the background"
            },
            {
                "cefr": "",
                "def1": "денег не бывает слишком много",
                "ipa": "ðɛrz noʊ sʌʧ θɪŋ æz tu mʌʧ ˈmʌni",
                "spell": "there's no such thing as too much money"
            }
        ];

        const sentences = [
            {
                "num": "",
                "sentence": "Before me lies a beautiful view of a park, seen from about 5 meters up."
            },
            {
                "num": "",
                "sentence": "It’s a lively scene, filled with people who have come to enjoy their day off."
            },
            {
                "num": "",
                "sentence": "Some are sitting or standing alone, while others are chatting in couples or small groups."
            },
            {
                "num": "",
                "sentence": "It’s summer, so everyone has dressed lightly for the warm weather."
            },
            {
                "num": "",
                "sentence": "The spot is near a pond where a duck and her ducklings have been swimming among lily pads all morning."
            },
            {
                "num": "",
                "sentence": "Close by, a refreshing fountain is running, and a small café has been serving snacks like sausage sandwiches and juice."
            },
            {
                "num": "",
                "sentence": "A group of visitors has settled at a table between the café and the pond, enjoying their treats."
            },
            {
                "num": "",
                "sentence": "Nearby, a young man’s dog is sitting on a leash, watching another dog whose owner is leaning against the café counter, texting someone."
            },
            {
                "num": "",
                "sentence": "In the center, an elderly bearded man has been reading a newspaper on a bench for a while."
            },
            {
                "num": "",
                "sentence": "Next to him, a couple is taking a selfie with the fountain in the background."
            },
            {
                "num": "",
                "sentence": "To the right, a young family is strolling with their baby in a stroller, heading toward a group of elderly singers who are performing from sheet music."
            },
            {
                "num": "",
                "sentence": "A conductor has been leading them, while a man in a wheelchair is playing along on a flute."
            },
            {
                "num": "",
                "sentence": "The park is buzzing with life, a perfect summer day unfolding in real time."
            }
        ];

        const wordsFinal = [];
        const story = [];

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

        for (let [i, sentence] of sentences.entries()) {
            i++;
            story.push(<p key={i}>{sentence.sentence}</p>);
        }


        return (
            <div>
                <Leon lesson={lesson} />
                <section className="words">
                    {wordsFinal}
                </section>

                <section className="song">
                    {story}
                </section>
            </div>
        );
    }
}

export default MS06;