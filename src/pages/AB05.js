import "../styles/fc.scss";
import React from "react";

class AB05 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const words = [
            {
                "cefr": "",
                "def1": "я",
                "ipa": "aɪ",
                "spell": "I"
            },
            {
                "cefr": "",
                "def1": "в",
                "ipa": "æt",
                "spell": "at"
            },
            {
                "cefr": "",
                "def1": "мы",
                "ipa": "wi",
                "spell": "we"
            },
            {
                "cefr": "",
                "def1": "он",
                "ipa": "hi",
                "spell": "he"
            },
            {
                "cefr": "",
                "def1": "и",
                "ipa": "ænd",
                "spell": "and"
            },
            {
                "cefr": "",
                "def1": "оно",
                "ipa": "ɪt",
                "spell": "it"
            },
            {
                "cefr": "",
                "def1": "к, в",
                "ipa": "tu",
                "spell": "to"
            },
            {
                "cefr": "",
                "def1": "не",
                "ipa": "nɑt",
                "spell": "not"
            },
            {
                "cefr": "",
                "def1": "она",
                "ipa": "ʃi",
                "spell": "she"
            },
            {
                "cefr": "",
                "def1": "с",
                "ipa": "wɪð",
                "spell": "with"
            },
            {
                "cefr": "",
                "def1": "для",
                "ipa": "fɔr",
                "spell": "for"
            },
            {
                "cefr": "",
                "def1": "то",
                "ipa": "ðæt",
                "spell": "that"
            },
            {
                "cefr": "",
                "def1": "уйти",
                "ipa": "ɡoʊ",
                "spell": "go"
            },
            {
                "cefr": "",
                "def1": "мочь",
                "ipa": "kæn",
                "spell": "can"
            },
            {
                "cefr": "",
                "def1": "они",
                "ipa": "ðeɪ",
                "spell": "they"
            },
            {
                "cefr": "",
                "def1": "видеть",
                "ipa": "si",
                "spell": "see"
            },
            {
                "cefr": "",
                "def1": "дал",
                "ipa": "ɡeɪv",
                "spell": "gave"
            },
            {
                "cefr": "",
                "def1": "наш",
                "ipa": "ˈaʊər",
                "spell": "our"
            },
            {
                "cefr": "",
                "def1": "здесь",
                "ipa": "hir",
                "spell": "here"
            },
            {
                "cefr": "",
                "def1": "давать",
                "ipa": "ɡɪv",
                "spell": "give"
            },
            {
                "cefr": "",
                "def1": "мой, моё",
                "ipa": "maɪ",
                "spell": "my"
            },
            {
                "cefr": "",
                "def1": "прийти",
                "ipa": "kʌm",
                "spell": "come"
            },
            {
                "cefr": "",
                "def1": "из, от",
                "ipa": "frʌm",
                "spell": "from"
            },
            {
                "cefr": "",
                "def1": "прочь",
                "ipa": "əˈweɪ",
                "spell": "away"
            },
            {
                "cefr": "",
                "def1": "работа",
                "ipa": "wɜrk",
                "spell": "work"
            },
            {
                "cefr": "",
                "def1": "слышать",
                "ipa": "hir",
                "spell": "hear"
            },
            {
                "cefr": "",
                "def1": "спросить",
                "ipa": "æsk",
                "spell": "ask"
            },
            {
                "cefr": "",
                "def1": "был, была",
                "ipa": "wʌz",
                "spell": "was"
            },
            {
                "cefr": "",
                "def1": "говорить",
                "ipa": "tɔk",
                "spell": "talk"
            },
            {
                "cefr": "",
                "def1": "их(ний)",
                "ipa": "ðɛr",
                "spell": "their"
            },
            {
                "cefr": "",
                "def1": "поймать",
                "ipa": "kæʧ",
                "spell": "catch"
            },
            {
                "cefr": "",
                "def1": "слышал",
                "ipa": "hɜrd",
                "spell": "heard"
            },
            {
                "cefr": "",
                "def1": "смотреть",
                "ipa": "lʊk",
                "spell": "look"
            },
            {
                "cefr": "",
                "def1": "(кем? чем?)",
                "ipa": "baɪ",
                "spell": "by"
            },
            {
                "cefr": "",
                "def1": "его (чьё?)",
                "ipa": "hɪz",
                "spell": "his"
            },
            {
                "cefr": "",
                "def1": "его (чьё?)",
                "ipa": "ɪts",
                "spell": "its"
            },
            {
                "cefr": "",
                "def1": "её, ей, ею",
                "ipa": "hɜr",
                "spell": "her"
            },
            {
                "cefr": "",
                "def1": "сделанный",
                "ipa": "dʌn",
                "spell": "done"
            },
            {
                "cefr": "",
                "def1": "ваш, твой",
                "ipa": "jʊər",
                "spell": "your"
            },
            {
                "cefr": "",
                "def1": "данный",
                "ipa": "ˈɡɪvən",
                "spell": "given"
            },
            {
                "cefr": "",
                "def1": "о, про",
                "ipa": "əˈbaʊt",
                "spell": "about"
            },
            {
                "cefr": "",
                "def1": "рассказать",
                "ipa": "tɛl",
                "spell": "tell"
            },
            {
                "cefr": "",
                "def1": "его, ему, им",
                "ipa": "hɪm",
                "spell": "him"
            },
            {
                "cefr": "",
                "def1": "им, ими, их",
                "ipa": "ðɛm",
                "spell": "them"
            },
            {
                "cefr": "",
                "def1": "маленький",
                "ipa": "smɔl",
                "spell": "small"
            },
            {
                "cefr": "",
                "def1": "нас, нам, нами",
                "ipa": "ʌs",
                "spell": "us"
            },
            {
                "cefr": "",
                "def1": "есть, находится",
                "ipa": "ɪz",
                "spell": "is"
            },
            {
                "cefr": "",
                "def1": "меня, мной, мне",
                "ipa": "mi",
                "spell": "me"
            },
            {
                "cefr": "",
                "def1": "слушать",
                "ipa": "ˈlɪsən",
                "spell": "listen"
            },
            {
                "cefr": "",
                "def1": "короче",
                "ipa": "ˈʃɔrtər",
                "spell": "shorter"
            },
            {
                "cefr": "",
                "def1": "зарплата",
                "ipa": "ˈsæləri",
                "spell": "salary"
            },
            {
                "cefr": "",
                "def1": "свобода",
                "ipa": "ˈfridəm",
                "spell": "freedom"
            },
            {
                "cefr": "",
                "def1": "следовать",
                "ipa": "ˈfɑloʊ",
                "spell": "follow"
            },
            {
                "cefr": "",
                "def1": "это, этот, эта",
                "ipa": "ðɪs",
                "spell": "this"
            },
            {
                "cefr": "",
                "def1": "язык (анат.)",
                "ipa": "tʌŋ",
                "spell": "tongue"
            },
            {
                "cefr": "",
                "def1": "скажи нам",
                "ipa": "tɛl ʌs",
                "spell": "tell us"
            },
            {
                "cefr": "",
                "def1": "покупка",
                "ipa": "ˈpɜrʧəs",
                "spell": "purchase"
            },
            {
                "cefr": "",
                "def1": "на работе",
                "ipa": "æt wɜrk",
                "spell": "at work"
            },
            {
                "cefr": "",
                "def1": "на работу",
                "ipa": "tu wɜrk",
                "spell": "to work"
            },
            {
                "cefr": "",
                "def1": "работа, должность",
                "ipa": "ʤɑb",
                "spell": "job"
            },
            {
                "cefr": "",
                "def1": "иди сюда",
                "ipa": "kʌm hir",
                "spell": "come here"
            },
            {
                "cefr": "",
                "def1": "уйди!",
                "ipa": "ɡɛt əˈweɪ!",
                "spell": "get away!"
            },
            {
                "cefr": "",
                "def1": "сильнее",
                "ipa": "ˈstrɔŋɡər",
                "spell": "stronger"
            },
            {
                "cefr": "",
                "def1": "вижу её",
                "ipa": "aɪ si hɜr",
                "spell": "I see her"
            },
            {
                "cefr": "",
                "def1": "полиция",
                "ipa": "ðə pəˈlis",
                "spell": "the police"
            },
            {
                "cefr": "",
                "def1": "ты, тебя, тебе, тобой",
                "ipa": "ju",
                "spell": "you"
            },
            {
                "cefr": "",
                "def1": "что-угодно",
                "ipa": "ˈɛniˌθɪŋ",
                "spell": "anything"
            },
            {
                "cefr": "",
                "def1": "слышу его",
                "ipa": "aɪ hir ɪt",
                "spell": "I hear it"
            },
            {
                "cefr": "",
                "def1": "я тебя вижу",
                "ipa": "aɪ si ju",
                "spell": "I see you"
            },
            {
                "cefr": "",
                "def1": "буду, будем, будешь...",
                "ipa": "wɪl",
                "spell": "will"
            },
            {
                "cefr": "",
                "def1": "слышу это",
                "ipa": "aɪ hir ðæt",
                "spell": "I hear that"
            },
            {
                "cefr": "",
                "def1": "могу говорить",
                "ipa": "aɪ kæn tɔk",
                "spell": "I can talk"
            },
            {
                "cefr": "",
                "def1": "я вас услышала",
                "ipa": "aɪ hir ju",
                "spell": "I hear you"
            },
            {
                "cefr": "",
                "def1": "я спрашиваю тебя",
                "ipa": "aɪ æsk ju",
                "spell": "I ask you"
            },
            {
                "cefr": "",
                "def1": "следуй(те) за мной",
                "ipa": "ˈfɑloʊ mi",
                "spell": "follow me"
            },
            {
                "cefr": "",
                "def1": "(по)говори со мной",
                "ipa": "tɔk tu mi",
                "spell": "talk to me"
            },
            {
                "cefr": "",
                "def1": "иди(те) со мной",
                "ipa": "kʌm wɪð mi",
                "spell": "come with me"
            },
            {
                "cefr": "",
                "def1": "дай мне деньги",
                "ipa": "ɡɪv mi ˈmʌni",
                "spell": "give me money"
            },
            {
                "cefr": "",
                "def1": "дать ей звездюлей",
                "ipa": "kɪk hɜr bʌt",
                "spell": "kick her butt"
            },
            {
                "cefr": "",
                "def1": "даю ей деньги",
                "ipa": "aɪ ɡɪv hɜr ˈmʌni",
                "spell": "I give her money"
            },
            {
                "cefr": "",
                "def1": "видишь ли ты меня?",
                "ipa": "kæn ju si mi?",
                "spell": "can you see me?"
            },
            {
                "cefr": "",
                "def1": "полиция видит нас",
                "ipa": "ðə pəˈlis si ʌs",
                "spell": "the police see us"
            },
            {
                "cefr": "",
                "def1": "это не для меня",
                "ipa": "ðɪs ɪz nɑt fɔr mi",
                "spell": "this is not for me"
            },
            {
                "cefr": "",
                "def1": "даю деньги ей",
                "ipa": "aɪ ɡɪv ˈmʌni tu hɜr",
                "spell": "I give money to her"
            },
            {
                "cefr": "",
                "def1": "полиция видит их",
                "ipa": "ðə pəˈlis si ðɛm",
                "spell": "the police see them"
            },
            {
                "cefr": "",
                "def1": "иди прочь от меня!",
                "ipa": "ɡoʊ əˈweɪ frʌm mi!",
                "spell": "go away from me!"
            },
            {
                "cefr": "",
                "def1": "я последую за тобой",
                "ipa": "aɪ wɪl ˈfɑloʊ ju",
                "spell": "I will follow you"
            },
            {
                "cefr": "",
                "def1": "нас не догонят",
                "ipa": "ðeɪ wɪl nɑt kæʧ ʌs",
                "spell": "they will not catch us"
            },
            {
                "cefr": "",
                "def1": "я услышала сестру",
                "ipa": "aɪ hɜrd maɪ ˈsɪstər",
                "spell": "I heard  my sister"
            },
            {
                "cefr": "",
                "def1": "ему дали зарплату",
                "ipa": "ðeɪ ɡeɪv hɪm ə ˈsæləri",
                "spell": "they gave him a salary"
            },
            {
                "cefr": "",
                "def1": "работа была сделана нами",
                "ipa": "ðə wɜrk wʌz dʌn baɪ ʌs",
                "spell": "the work was done by us"
            },
            {
                "cefr": "",
                "def1": "дайте нам денег",
                "ipa": "ɡɪv ʌs ˈmʌni, ɡɪv ˈmʌni tu ʌs",
                "spell": "give us money, give money to us"
            },
            {
                "cefr": "",
                "def1": "эта работа была сделана им",
                "ipa": "ðɪs wɜrk wʌz dʌn baɪ hɪm",
                "spell": "this work was done by him"
            },
            {
                "cefr": "",
                "def1": "не расскажу вам ничего",
                "ipa": "aɪ wɪl nɑt tɛl ju ˈɛniˌθɪŋ",
                "spell": "I will not tell you anything"
            },
            {
                "cefr": "",
                "def1": "расскажи мне про покупки",
                "ipa": "tɛl mi əˈbaʊt jʊər ˈpɜrʧəsəz",
                "spell": "tell me about your purchases"
            },
            {
                "cefr": "",
                "def1": "зарплата данная ему была маленькой",
                "ipa": "ðə ˈsæləri ˈɡɪvən tu hɪm wʌz smɔl",
                "spell": "the salary given to him was small"
            },
            {
                "cefr": "",
                "def1": "я даю тебе деньги, а ты работаешь на меня",
                "ipa": "aɪ ɡɪv ju ˈmʌni, ænd ju wɜrk fɔr mi",
                "spell": "I give you money, and you work for me"
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
                <h1>Alena :: Lesson 5</h1>
                <section className="words">
                    {wordsFinal}
                </section>
            </div>
        );
    }
}

export default AB05;