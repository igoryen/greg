import "../styles/fc.scss";
import React from "react";

class VK05 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const words = [
            {
                "cefr": "",
                "def1": "выть",
                "ipa": "haʊl",
                "spell": "howl"
            },
            {
                "cefr": "",
                "def1": "дыра",
                "ipa": "hoʊl",
                "spell": "hole"
            },
            {
                "cefr": "",
                "def1": "клуб",
                "ipa": "klʌb",
                "spell": "club"
            },
            {
                "cefr": "",
                "def1": "шрам",
                "ipa": "skɑr",
                "spell": "scar"
            },
            {
                "cefr": "",
                "def1": "лизать",
                "ipa": "lɪk",
                "spell": "lick"
            },
            {
                "cefr": "",
                "def1": "ворота",
                "ipa": "ɡeɪt",
                "spell": "gate"
            },
            {
                "cefr": "",
                "def1": "метла",
                "ipa": "brum",
                "spell": "broom"
            },
            {
                "cefr": "",
                "def1": "шерсть",
                "ipa": "koʊt",
                "spell": "coat"
            },
            {
                "cefr": "",
                "def1": "онемелый",
                "ipa": "nʌm",
                "spell": "numb"
            },
            {
                "cefr": "",
                "def1": "острый",
                "ipa": "ʃɑrp",
                "spell": "sharp"
            },
            {
                "cefr": "",
                "def1": "поезд",
                "ipa": "treɪn",
                "spell": "train"
            },
            {
                "cefr": "",
                "def1": "сапоги",
                "ipa": "buts",
                "spell": "boots"
            },
            {
                "cefr": "",
                "def1": "бег трусцой",
                "ipa": "ʤɑɡ",
                "spell": "jog"
            },
            {
                "cefr": "",
                "def1": "робкий",
                "ipa": "ˈtɪmɪd",
                "spell": "timid"
            },
            {
                "cefr": "",
                "def1": "пёс",
                "ipa": "meɪl dɔɡ",
                "spell": "male dog"
            },
            {
                "cefr": "",
                "def1": "пушистый",
                "ipa": "ˈflʌfi",
                "spell": "fluffy"
            },
            {
                "cefr": "",
                "def1": "племянник",
                "ipa": "ˈnɛfju",
                "spell": "nephew"
            },
            {
                "cefr": "",
                "def1": "напомнить",
                "ipa": "riˈmaɪnd",
                "spell": "remind"
            },
            {
                "cefr": "",
                "def1": "восхищаться",
                "ipa": "ædˈmaɪr",
                "spell": "admire"
            },
            {
                "cefr": "",
                "def1": "воровать, красть",
                "ipa": "stil",
                "spell": "steal"
            },
            {
                "cefr": "",
                "def1": "отношение",
                "ipa": "ˈætəˌtud",
                "spell": "attitude"
            },
            {
                "cefr": "",
                "def1": "остроконечный",
                "ipa": "ˈpɔɪnti",
                "spell": "pointy"
            },
            {
                "cefr": "",
                "def1": "кошка",
                "ipa": "ˈfiˌmeɪl kæt",
                "spell": "female cat"
            },
            {
                "cefr": "",
                "def1": "пухлый, полный",
                "ipa": "ˈplʌmpi",
                "spell": "plumpy"
            },
            {
                "cefr": "",
                "def1": "послушание",
                "ipa": "oʊˈbidiəns",
                "spell": "obedience"
            },
            {
                "cefr": "",
                "def1": "держать собак",
                "ipa": "kip dɑɡz",
                "spell": "keep dogs"
            },
            {
                "cefr": "",
                "def1": "зато",
                "ipa": "ɑn ði ˈʌpˈsaɪd",
                "spell": "on the upside"
            },
            {
                "cefr": "",
                "def1": "перехитрить его",
                "ipa": "trɪk ɪt",
                "spell": "trick it"
            },
            {
                "cefr": "",
                "def1": "вдохновляющий",
                "ipa": "ɪnˈspaɪrɪŋ",
                "spell": "inspiring"
            },
            {
                "cefr": "",
                "def1": "создавать шум",
                "ipa": "meɪk nɔɪz",
                "spell": "make noise"
            },
            {
                "cefr": "",
                "def1": "разбудить меня",
                "ipa": "weɪk mi ʌp",
                "spell": "wake me up"
            },
            {
                "cefr": "",
                "def1": "лаять громко",
                "ipa": "bɑrk ˈlaʊdli",
                "spell": "bark loudly"
            },
            {
                "cefr": "",
                "def1": "сделать дырку",
                "ipa": "meɪk ə hoʊl",
                "spell": "make a hole"
            },
            {
                "cefr": "",
                "def1": "быть аллергиком",
                "ipa": "bi əˈlɜrʤɪk",
                "spell": "be allergic"
            },
            {
                "cefr": "",
                "def1": "прелестно! очаровательно!",
                "ipa": "ˈlʌvli!",
                "spell": "lovely!"
            },
            {
                "cefr": "",
                "def1": "соединённый с",
                "ipa": "kəˈnɛktɪd wɪð",
                "spell": "connected with"
            },
            {
                "cefr": "",
                "def1": "вот так запросто",
                "ipa": "ʤʌst laɪk ðæt",
                "spell": "just like that"
            },
            {
                "cefr": "",
                "def1": "повиноваться закону",
                "ipa": "oʊˈbeɪ ðə lɔ",
                "spell": "obey the law"
            },
            {
                "cefr": "",
                "def1": "прежде всего",
                "ipa": "ɪn ðə fɜrst pleɪs",
                "spell": "in the first place"
            },
            {
                "cefr": "",
                "def1": "обмениваться вещами",
                "ipa": "ɪksˈʧeɪnʤ θɪŋz",
                "spell": "exchange things"
            },
            {
                "cefr": "",
                "def1": "чувствовать себя в безопасности",
                "ipa": "fil seɪf",
                "spell": "feel safe"
            },
            {
                "cefr": "",
                "def1": "любитель собак, собачник",
                "ipa": "ə dɔɡ ˈpɜrsən",
                "spell": "a dog person"
            },
            {
                "cefr": "",
                "def1": "не ради безопасности",
                "ipa": "nɑt fɔr ˈseɪfti",
                "spell": "not for safety"
            },
            {
                "cefr": "",
                "def1": "мнемонический приём",
                "ipa": "nɪˈmɑnɪk dɪˈvaɪs",
                "spell": "mnemonic device"
            },
            {
                "cefr": "",
                "def1": "наш ум ленив",
                "ipa": "ˈaʊər breɪn ɪz ˈleɪzi",
                "spell": "our brain is lazy"
            },
            {
                "cefr": "",
                "def1": "слушаться свою мать",
                "ipa": "oʊˈbeɪ maɪ ˈmʌðər",
                "spell": "obey my mother"
            },
            {
                "cefr": "",
                "def1": "память на анекдоты",
                "ipa": "ˈmɛməri fɔr ʤoʊks",
                "spell": "memory for jokes"
            },
            {
                "cefr": "",
                "def1": "лучше, чем ничего",
                "ipa": "ˈbɛtər ðæn ˈnʌθɪŋ",
                "spell": "better than nothing"
            },
            {
                "cefr": "",
                "def1": "они все слушаются её",
                "ipa": "ðeɪ ɔl oʊˈbeɪ hɜr",
                "spell": "they all obey her"
            },
            {
                "cefr": "",
                "def1": "восстановительный послеобеденный сон",
                "ipa": "ˈpaʊər næp",
                "spell": "power nap"
            },
            {
                "cefr": "",
                "def1": "увеличить громкость",
                "ipa": "tɜrn ʌp ðə ˈvɑljum",
                "spell": "turn up the volume"
            },
            {
                "cefr": "",
                "def1": "собаки лают и воют",
                "ipa": "dɑɡz bɑrk ænd haʊl.",
                "spell": "dogs bark and howl."
            },
            {
                "cefr": "",
                "def1": "она верховодит ими",
                "ipa": "ʃi ˈbɔsɪz ˈoʊvər ðɛm",
                "spell": "she bosses over them"
            },
            {
                "cefr": "",
                "def1": "накручивать себя; перегружать мыслями голову",
                "ipa": "ˌoʊvərˈθɪŋk",
                "spell": "overthink"
            },
            {
                "cefr": "",
                "def1": "это может свести тебя с ума",
                "ipa": "ɪt kæn draɪv ju ˈkreɪzi",
                "spell": "it can drive you crazy"
            },
            {
                "cefr": "",
                "def1": "смотреть на вещи оптимистически",
                "ipa": "lʊk ɑn ðə braɪt saɪd",
                "spell": "look on the bright side"
            },
            {
                "cefr": "",
                "def1": "и они могут начать драться",
                "ipa": "ænd ðeɪ kʊd stɑrt ˈfaɪtɪŋ",
                "spell": "and they could start fighting"
            },
            {
                "cefr": "",
                "def1": "смотреть на жизнь бодро",
                "ipa": "lʊk ɑn ðə braɪt saɪd ʌv laɪf",
                "spell": "look on the bright side of life"
            },
            {
                "cefr": "",
                "def1": "один может наступить на лапу другого",
                "ipa": "wʌn kʊd stɛp ɑn ði ˈʌðərz pɔ",
                "spell": "one could step on the other’s paw"
            },
            {
                "cefr": "",
                "def1": "всегда смотреть на жизнь бодро",
                "ipa": "ˈɔlˌweɪz lʊk ɑn ðə braɪt saɪd ʌv laɪf.",
                "spell": "always look on the bright side of life."
            },
            {
                "cefr": "",
                "def1": "так чтобы они не слышали шум на улице",
                "ipa": "soʊ ðæt ðeɪ kænt hir ðə ˈnɔɪzɪz ˈaʊtˈsaɪd",
                "spell": "so that they can’t hear the noises outside"
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
                <h1>Valeria :: Lesson 5</h1>
                <section className="words">
                    {wordsFinal}
                </section>
            </div>
        );
    }
}

export default VK05;