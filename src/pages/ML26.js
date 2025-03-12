import "../styles/fc.scss";
import React from "react";

class ML26 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {

        const words = [
            {
                "cefr": "",
                "def1": "досье",
                "ipa": "faɪl",
                "spell": "file"
            },
            {
                "cefr": "",
                "def1": "таять",
                "ipa": "mɛlt",
                "spell": "melt"
            },
            {
                "cefr": "",
                "def1": "гараж",
                "ipa": "ɡəˈrɑʒ",
                "spell": "garage"
            },
            {
                "cefr": "",
                "def1": "резюме (UK)",
                "ipa": "si-vi",
                "spell": "CV"
            },
            {
                "cefr": "",
                "def1": "сплетня",
                "ipa": "ˈɡɑsəp",
                "spell": "gossip"
            },
            {
                "cefr": "",
                "def1": "слегка",
                "ipa": "ˈslaɪtli",
                "spell": "slightly"
            },
            {
                "cefr": "",
                "def1": "отрывок",
                "ipa": "ˈɛkˌstrækt",
                "spell": "extract"
            },
            {
                "cefr": "",
                "def1": "пересказывать",
                "ipa": "riˈtɛl",
                "spell": "retell"
            },
            {
                "cefr": "",
                "def1": "давать ответ",
                "ipa": "rɪˈspɑnd",
                "spell": "respond"
            },
            {
                "cefr": "",
                "def1": "дать сдачи",
                "ipa": "faɪt bæk",
                "spell": "fight back"
            },
            {
                "cefr": "",
                "def1": "иерархия",
                "ipa": "ˈhaɪəˌrɑrki",
                "spell": "hierarchy"
            },
            {
                "cefr": "",
                "def1": "белая ложь",
                "ipa": "waɪt laɪz",
                "spell": "white lies"
            },
            {
                "cefr": "",
                "def1": "колебаться",
                "ipa": "ˈvæsəˌleɪt",
                "spell": "vacillate"
            },
            {
                "cefr": "",
                "def1": "определённо",
                "ipa": "ˈdɛfənətli",
                "spell": "definitely"
            },
            {
                "cefr": "",
                "def1": "подчёркивать",
                "ipa": "ˈɛmfəˌsaɪz",
                "spell": "emphasize"
            },
            {
                "cefr": "",
                "def1": "чуточку более",
                "ipa": "ə bɪt mɔr",
                "spell": "a bit more"
            },
            {
                "cefr": "",
                "def1": "не по сценарию",
                "ipa": "ənˈskrɪptɪd",
                "spell": "unscripted"
            },
            {
                "cefr": "",
                "def1": "оказаться, выясниться",
                "ipa": "tɜrn ʌp",
                "spell": "turn up"
            },
            {
                "cefr": "",
                "def1": "преувеличивть",
                "ipa": "ɪɡˈzæʤəˌreɪt",
                "spell": "exaggerate"
            },
            {
                "cefr": "",
                "def1": "завершать, закругляться",
                "ipa": "ræp ʌp",
                "spell": "wrap up"
            },
            {
                "cefr": "",
                "def1": "эмоциональный срыв",
                "ipa": "ˈmɛltˌdaʊn",
                "spell": "meltdown"
            },
            {
                "cefr": "",
                "def1": "затронутый, пострадавший",
                "ipa": "əˈfɛktɪd",
                "spell": "affected"
            },
            {
                "cefr": "",
                "def1": "эскалировать, усиливать",
                "ipa": "ˈɛskəˌleɪt",
                "spell": "escalate"
            },
            {
                "cefr": "",
                "def1": "делать ошибку",
                "ipa": "meɪk ə mɪsˈteɪk",
                "spell": "make a mistake"
            },
            {
                "cefr": "",
                "def1": "хорошо обучаемый",
                "ipa": "ə ɡʊd ˈlɜrnər",
                "spell": "a good learner"
            },
            {
                "cefr": "",
                "def1": "разряжать, ослаблять",
                "ipa": "di-ˈɛskəˌleɪt",
                "spell": "de-escalate"
            },
            {
                "cefr": "",
                "def1": "увеличить, раздуть",
                "ipa": "pæd θɪŋz aʊt",
                "spell": "pad things out"
            },
            {
                "cefr": "",
                "def1": "ни в коем случае",
                "ipa": "ˌæbsəˈlutli nɑt",
                "spell": "absolutely not"
            },
            {
                "cefr": "",
                "def1": "принять решение",
                "ipa": "meɪk ə dɪˈsɪʒən",
                "spell": "make a decision"
            },
            {
                "cefr": "",
                "def1": "генеральная уборка",
                "ipa": "sprɪŋ ˈklinɪŋ",
                "spell": "spring cleaning"
            },
            {
                "cefr": "",
                "def1": "автомастерская",
                "ipa": "məˈkænɪks ɡəˈrɑʒ",
                "spell": "mechanic's garage"
            },
            {
                "cefr": "",
                "def1": "сделать 3 колонки",
                "ipa": "meɪk θri ˈkɑləmz",
                "spell": "make three columns"
            },
            {
                "cefr": "",
                "def1": "внести предложение",
                "ipa": "meɪk ə səɡˈʤɛsʧən",
                "spell": "make a suggestion"
            },
            {
                "cefr": "",
                "def1": "обращаться за работой",
                "ipa": "əˈplaɪ fɔr ə ʤɑb",
                "spell": "apply for a job"
            },
            {
                "cefr": "",
                "def1": "на другом языке",
                "ipa": "ɪn əˈnʌðər ˈlæŋɡwəʤ",
                "spell": "in another language"
            },
            {
                "cefr": "",
                "def1": "сделать поиск в Гугле",
                "ipa": "du ə ˈɡuɡəl sɜrʧ",
                "spell": "do a Google search"
            },
            {
                "cefr": "",
                "def1": "элитный, претенциозный, напыщенный, высокомерный",
                "ipa": "pɑʃ",
                "spell": "posh"
            },
            {
                "cefr": "",
                "def1": "к концу недели",
                "ipa": "baɪ ði ɛnd ʌv ðə wik",
                "spell": "by the end of the week"
            },
            {
                "cefr": "",
                "def1": "сделать большое усилие",
                "ipa": "meɪk ə bɪɡ ˈɛfərt",
                "spell": "make a big effort"
            },
            {
                "cefr": "",
                "def1": "лично я думаю",
                "ipa": "aɪ θɪŋk ... ˈpɜrsənəli",
                "spell": "I think ... personally"
            },
            {
                "cefr": "",
                "def1": "пройти курс обучения",
                "ipa": "du ə ˈtreɪnɪŋ kɔrs",
                "spell": "do a training course"
            },
            {
                "cefr": "",
                "def1": "действительно сделать это",
                "ipa": "tu ˈækʧuəli du ɪt",
                "spell": "to actually do it"
            },
            {
                "cefr": "",
                "def1": "убедиться, что он выключен",
                "ipa": "meɪk ʃʊr ɪts ɔf",
                "spell": "make sure it's off"
            },
            {
                "cefr": "",
                "def1": "чувствовать себя неловко",
                "ipa": "fil ənˈkʌmfərtəbəl",
                "spell": "feel uncomfortable"
            },
            {
                "cefr": "",
                "def1": "колеблюсь между обоими",
                "ipa": "aɪ swɪŋ bɪˈtwin boʊθ",
                "spell": "I swing between both"
            },
            {
                "cefr": "",
                "def1": "неблагополучная семья",
                "ipa": "dɪˈsfʌŋkʃənəl ˈfæməli",
                "spell": "dysfunctional family"
            },
            {
                "cefr": "",
                "def1": "тебя улича́т, подловят",
                "ipa": "ju wɪl ɡɛt kɑt aʊt",
                "spell": "you will get caught out"
            },
            {
                "cefr": "",
                "def1": "как сказать! в зависимости от обстоятельств",
                "ipa": "ɪt dɪˈpɛndz",
                "spell": "it depends"
            },
            {
                "cefr": "",
                "def1": "я делаю отличную работу",
                "ipa": "aɪm ˈduɪŋ ə ɡreɪt ʤɑb",
                "spell": "I'm doing a great job"
            },
            {
                "cefr": "",
                "def1": "изрядно скучный человек",
                "ipa": "kwaɪt ə ˈbɔrɪŋ ˈpɜrsən",
                "spell": "quite a boring person"
            },
            {
                "cefr": "",
                "def1": "объявление в аэропорту",
                "ipa": "ən ˈɛrˌpɔrt əˈnaʊnsmənt",
                "spell": "an airport announcement"
            },
            {
                "cefr": "",
                "def1": "сделать более выразительным",
                "ipa": "meɪk ɪt mɔr ɛmˈfætɪk",
                "spell": "make it more emphatic"
            },
            {
                "cefr": "",
                "def1": "на всякий случай",
                "ipa": "ʤʌst tu bi ɑn ðə seɪf saɪd",
                "spell": "just to be on the safe side"
            },
            {
                "cefr": "",
                "def1": "не следует явно врать",
                "ipa": "ju ˈʃʊdənt ˌaʊtˈraɪt laɪ",
                "spell": "you shouldn't outright lie"
            },
            {
                "cefr": "",
                "def1": "я не против сделать это",
                "ipa": "aɪ æm ˈoʊpən tu ˈduɪŋ ðæt",
                "spell": "I am open to doing that"
            },
            {
                "cefr": "",
                "def1": "что ты за человек?",
                "ipa": "wɑt sɔrt ʌv ˈpɜrsən ɑr ju?",
                "spell": "what sort of person are you?"
            },
            {
                "cefr": "",
                "def1": "тебя попросят сделать это",
                "ipa": "ju wɪl bi æskt tu du ɪt",
                "spell": "you will be asked to do it"
            },
            {
                "cefr": "",
                "def1": "свободно говорить по-английски",
                "ipa": "tu spik ˈfluənt ˈɪŋɡlɪʃ",
                "spell": "to speak fluent English"
            },
            {
                "cefr": "",
                "def1": "это стоило мне много денег",
                "ipa": "ɪt kɑst mi ə lɑt ʌv ˈmʌni",
                "spell": "it cost me a lot of money"
            },
            {
                "cefr": "",
                "def1": "сделать несколько телефонных звонков",
                "ipa": "meɪk ə fju foʊn kɔlz",
                "spell": "make a few phone calls"
            },
            {
                "cefr": "",
                "def1": "сделать ещё рыночного исследования",
                "ipa": "du mɔr ˈmɑrkət riˈsɜrʧ",
                "spell": "do more market research"
            },
            {
                "cefr": "",
                "def1": "автосервис, авторемонтная мастерская, автомастерская",
                "ipa": "ˈɔtoʊ rɪˈpɛr ʃɑp",
                "spell": "auto repair shop"
            },
            {
                "cefr": "",
                "def1": "она такая... крупненькая",
                "ipa": "ʃiz ə ˈlɪtəl ɑn ðə lɑrʤ saɪd",
                "spell": "she’s a little on the large side"
            },
            {
                "cefr": "",
                "def1": "оно вернётся и причинит тебе ущерб",
                "ipa": "ɪt wɪl kʌm bæk tu hɜrt ju",
                "spell": "it will come back to hurt you"
            },
            {
                "cefr": "",
                "def1": "в случае если это необязательно",
                "ipa": "fɔr ði ˈɑpʃənəl saɪd ʌv θɪŋz",
                "spell": "for the optional side of things"
            },
            {
                "cefr": "",
                "def1": "необходимый навык для этой работы",
                "ipa": "ən ɪˈsɛnʃəl skɪl fɔr ðə ʤɑb",
                "spell": "an essential skill for the job"
            },
            {
                "cefr": "",
                "def1": "выставить себя в очень глупом свете",
                "ipa": "meɪk jərˈsɛlf lʊk ˈvɛri ˈsɪli",
                "spell": "make yourself look very silly"
            },
            {
                "cefr": "",
                "def1": "создать хорошее впечатление о себе",
                "ipa": "ɡɪv ə ɡʊd ɪmˈprɛʃən ʌv jərˈsɛlf",
                "spell": "give a good impression of yourself"
            },
            {
                "cefr": "",
                "def1": "меня трудоустроили, чтобы делать эту работу",
                "ipa": "ðeɪ ɛmˈplɔɪd mi tu du ðɪs ʤɑb",
                "spell": "they employed me to do this job"
            },
            {
                "cefr": "",
                "def1": "делать много зрительного контакта со мной",
                "ipa": "meɪk ə lɑt ʌv aɪ ˈkɑnˌtækt wɪð mi",
                "spell": "make a lot of eye contact with me"
            },
            {
                "cefr": "",
                "def1": "я считаю себя таким-то ...",
                "ipa": "aɪ kənˈsɪdər ˌmaɪˈsɛlf tu bi soʊ ænd soʊ ...",
                "spell": "I consider myself to be so and so ..."
            },
            {
                "cefr": "",
                "def1": "если об этом когда-нибудь зайдёт речь, или попадёшь в такую ситуацию",
                "ipa": "ɪf ðæt ˈɛvər kʌmz ʌp",
                "spell": "if that ever comes up"
            },
            {
                "cefr": "",
                "def1": "надёжный способ выбирать людей",
                "ipa": "ə rɪˈlaɪəbəl weɪ ʌv səˈlɛktɪŋ ˈpipəl fɔr ɪt",
                "spell": "a reliable way of selecting people for it"
            },
            {
                "cefr": "",
                "def1": "у меня очень средний уровень английского",
                "ipa": "aɪ kæn spik ə ˈvɛri ˈævərɪʤ əˈmaʊnt ʌv ˈɪŋɡlɪʃ",
                "spell": "I can speak a very average amount of English"
            },
            {
                "cefr": "",
                "def1": "оказаться потенциально в очень неловкой ситуации",
                "ipa": "bi ɪn ə pəˈtɛnʃəli ˈvɛri ˈɑkwərd ˌsɪʧuˈeɪʃən",
                "spell": "be in a potentially very awkward situation"
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
                <h1>Maria :: Lesson 26</h1>
                <section className="words">
                    {wordsFinal}
                </section>
            </div>
        );
    }
}

export default ML26;