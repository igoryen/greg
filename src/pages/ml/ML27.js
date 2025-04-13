import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";

class ML27 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Maria",
            "number": 27,
            "slug": "ml"
        };
        const words = [
            {
                "cefr": "",
                "def1": "порез",
                "ipa": "ə kʌt",
                "spell": "a cut"
            },
            {
                "cefr": "",
                "def1": "сыпь",
                "ipa": "ə ræʃ",
                "spell": "a rash"
            },
            {
                "cefr": "",
                "def1": "ожог",
                "ipa": "ə bɜrn",
                "spell": "a burn"
            },
            {
                "cefr": "",
                "def1": "кашель",
                "ipa": "ə kɑf",
                "spell": "a cough"
            },
            {
                "cefr": "",
                "def1": "тереть",
                "ipa": "tu rʌb",
                "spell": "to rub"
            },
            {
                "cefr": "",
                "def1": "мазь",
                "ipa": "ˈɔɪntmənt",
                "spell": "ointment"
            },
            {
                "cefr": "",
                "def1": "наклонить",
                "ipa": "tu tɪp",
                "spell": "to tip"
            },
            {
                "cefr": "",
                "def1": "толчок",
                "ipa": "ə θrʌst",
                "spell": "a thrust"
            },
            {
                "cefr": "",
                "def1": "понос",
                "ipa": "ˌdaɪəˈriə",
                "spell": "diarrhea"
            },
            {
                "cefr": "",
                "def1": "рвать",
                "ipa": "tu ˈvɑmət",
                "spell": "to vomit"
            },
            {
                "cefr": "",
                "def1": "симптом",
                "ipa": "ˈsɪmptəm",
                "spell": "symptom"
            },
            {
                "cefr": "",
                "def1": "защемить",
                "ipa": "tu pɪnʧ",
                "spell": "to pinch"
            },
            {
                "cefr": "",
                "def1": "лодыжка",
                "ipa": "ən ˈæŋkəl",
                "spell": "an ankle"
            },
            {
                "cefr": "",
                "def1": "медицина",
                "ipa": "ˈmɛdəsən",
                "spell": "medicine"
            },
            {
                "cefr": "",
                "def1": "лечение",
                "ipa": "ˈtritmənt",
                "spell": "treatment"
            },
            {
                "cefr": "",
                "def1": "волдырь",
                "ipa": "ə ˈblɪstər",
                "spell": "a blister"
            },
            {
                "cefr": "",
                "def1": "опухоль",
                "ipa": "ə ˈswɛlɪŋ",
                "spell": "a swelling"
            },
            {
                "cefr": "",
                "def1": "глотать",
                "ipa": "tu ˈswɑloʊ",
                "spell": "to swallow"
            },
            {
                "cefr": "",
                "def1": "кровотечение",
                "ipa": "ˈblidɪŋ",
                "spell": "bleeding"
            },
            {
                "cefr": "",
                "def1": "тепловатый",
                "ipa": "ˈluˈkwɔrm",
                "spell": "lukewarm"
            },
            {
                "cefr": "",
                "def1": "жирный, маслянистый",
                "ipa": "ˈɔɪli",
                "spell": "oily"
            },
            {
                "cefr": "",
                "def1": "обнажённый",
                "ipa": "ənˈkʌvərd",
                "spell": "uncovered"
            },
            {
                "cefr": "",
                "def1": "обнажить",
                "ipa": "tu ənˈkʌvər",
                "spell": "to uncover"
            },
            {
                "cefr": "",
                "def1": "ушная боль",
                "ipa": "ən ˈiɹeɪk",
                "spell": "an earache"
            },
            {
                "cefr": "",
                "def1": "поток крови",
                "ipa": "blʌd floʊ",
                "spell": "blood flow"
            },
            {
                "cefr": "",
                "def1": "солнечный ожог",
                "ipa": "ˈsʌnˌbɜrn",
                "spell": "sunburn"
            },
            {
                "cefr": "",
                "def1": "первая помощь",
                "ipa": "fɜrst eɪd",
                "spell": "first aid"
            },
            {
                "cefr": "",
                "def1": "сильный порез",
                "ipa": "ə bæd kʌt",
                "spell": "a bad cut"
            },
            {
                "cefr": "",
                "def1": "сознание",
                "ipa": "ˈkɑnʃəsnəs",
                "spell": "consciousness"
            },
            {
                "cefr": "",
                "def1": "влажная ткань",
                "ipa": "dæmp klɔθ",
                "spell": "damp cloth"
            },
            {
                "cefr": "",
                "def1": "зубная боль",
                "ipa": "ə ˈtuθˌeɪk",
                "spell": "a toothache"
            },
            {
                "cefr": "",
                "def1": "падать в обморок",
                "ipa": "tu feɪnt",
                "spell": "to faint"
            },
            {
                "cefr": "",
                "def1": "болеть, ныть, щемить",
                "ipa": "tu eɪk",
                "spell": "to ache"
            },
            {
                "cefr": "",
                "def1": "головная боль",
                "ipa": "ə ˈhɛˌdeɪk",
                "spell": "a headache"
            },
            {
                "cefr": "",
                "def1": "ледяная вода",
                "ipa": "aɪst ˈwɔtər",
                "spell": "iced water"
            },
            {
                "cefr": "",
                "def1": "глагольная форма",
                "ipa": "vɜrb fɔrm",
                "spell": "verb form"
            },
            {
                "cefr": "",
                "def1": "растянуть связки",
                "ipa": "tu spreɪn",
                "spell": "to sprain"
            },
            {
                "cefr": "",
                "def1": "терять тепло",
                "ipa": "tu luz hit",
                "spell": "to lose heat"
            },
            {
                "cefr": "",
                "def1": "незащищённая",
                "ipa": "ˌʌnprəˈtɛktɪd",
                "spell": "unprotected"
            },
            {
                "cefr": "",
                "def1": "сильно ударить",
                "ipa": "tu hɪt hɑrd",
                "spell": "to hit hard"
            },
            {
                "cefr": "",
                "def1": "антибиотический",
                "ipa": "ˌæntibiˈɑtɪk",
                "spell": "antibiotic"
            },
            {
                "cefr": "",
                "def1": "тяжёлый, сильный, суровый",
                "ipa": "səˈvɪr",
                "spell": "severe"
            },
            {
                "cefr": "",
                "def1": "ухудшить это",
                "ipa": "meɪk ɪt wɜrs",
                "spell": "make it worse"
            },
            {
                "cefr": "",
                "def1": "грипповать",
                "ipa": "tu hæv ðə flu",
                "spell": "to have the flu"
            },
            {
                "cefr": "",
                "def1": "заболевание, расстройство",
                "ipa": "ˈɪlnəs",
                "spell": "illness"
            },
            {
                "cefr": "",
                "def1": "проблематичный",
                "ipa": "ˌprɑbləˈmætɪk",
                "spell": "problematic"
            },
            {
                "cefr": "",
                "def1": "боль в животе",
                "ipa": "ə ˈstʌməkˌeɪk",
                "spell": "a stomachache"
            },
            {
                "cefr": "",
                "def1": "медицинский миф",
                "ipa": "ˈmɛdəkəl mɪθ",
                "spell": "medical myth"
            },
            {
                "cefr": "",
                "def1": "болеть (внезапно, сильно)",
                "ipa": "tu hɜrt",
                "spell": "to hurt"
            },
            {
                "cefr": "",
                "def1": "отогревать это",
                "ipa": "tu wɔrm ɪt ʌp",
                "spell": "to warm it up"
            },
            {
                "cefr": "",
                "def1": "заразиться",
                "ipa": "tu ɡɛt ɪnˈfɛktɪd",
                "spell": "to get infected"
            },
            {
                "cefr": "",
                "def1": "опасная ситуация",
                "ipa": "ən ɪˈmɜrʤənsi",
                "spell": "an emergency"
            },
            {
                "cefr": "",
                "def1": "очистить порез",
                "ipa": "tu klin ə kʌt",
                "spell": "to clean a cut"
            },
            {
                "cefr": "",
                "def1": "снимать одежду",
                "ipa": "riˈmuv kloʊðz",
                "spell": "remove clothes"
            },
            {
                "cefr": "",
                "def1": "травма, телесное повреждение",
                "ipa": "ˈɪnʤəri",
                "spell": "injury"
            },
            {
                "cefr": "",
                "def1": "чувствовать тошноту",
                "ipa": "tu fil sɪk",
                "spell": "to feel sick"
            },
            {
                "cefr": "",
                "def1": "ай! болит!",
                "ipa": "aʊʧ! ðæt hɜrts!",
                "spell": "ouch! that hurts!"
            },
            {
                "cefr": "",
                "def1": "медицинское слово",
                "ipa": "ˈmɛdəkəl wɜrd",
                "spell": "medical word"
            },
            {
                "cefr": "",
                "def1": "растение в кабинете",
                "ipa": "ˈɔfəs plænt",
                "spell": "office plant"
            },
            {
                "cefr": "",
                "def1": "киберхондрик",
                "ipa": "ˌsaɪbəɹˈkɑndɹiˌæk",
                "spell": "cyberchondriac"
            },
            {
                "cefr": "",
                "def1": "болезненный; чувствительный; больной",
                "ipa": "sɔr",
                "spell": "sore"
            },
            {
                "cefr": "",
                "def1": "врачебная фраза",
                "ipa": "ˈmɛdəkəl freɪz",
                "spell": "medical phrase"
            },
            {
                "cefr": "",
                "def1": "до пяти раз",
                "ipa": "ʌp tu faɪv taɪmz",
                "spell": "up to five times"
            },
            {
                "cefr": "",
                "def1": "кровотечение из носа",
                "ipa": "ə ˈnoʊzˌblid",
                "spell": "a nosebleed"
            },
            {
                "cefr": "",
                "def1": "водопроводная вода",
                "ipa": "ˈrʌnɪŋ ˈwɔtər",
                "spell": "running water"
            },
            {
                "cefr": "",
                "def1": "повязка, перевязочный материал",
                "ipa": "ˈbændɪʤ",
                "spell": "bandage"
            },
            {
                "cefr": "",
                "def1": "боль в спине или пояснице",
                "ipa": "ə ˈbæˌkeɪk",
                "spell": "a backache"
            },
            {
                "cefr": "",
                "def1": "некорректная помощь",
                "ipa": "ɪnkəˈrɛkt eɪd",
                "spell": "incorrect aid"
            },
            {
                "cefr": "",
                "def1": "поднять ногу",
                "ipa": "tu pʊt ðə lɛɡ ʌp",
                "spell": "to put the leg up"
            },
            {
                "cefr": "",
                "def1": "медицинский пакет со льдом",
                "ipa": "ən aɪs pæk",
                "spell": "an ice pack"
            },
            {
                "cefr": "",
                "def1": "повышенная температура",
                "ipa": "ə ˈtɛmprəʧər",
                "spell": "a temperature"
            },
            {
                "cefr": "",
                "def1": "защемить мне нос",
                "ipa": "tu pɪnʧ maɪ noʊz",
                "spell": "to pinch my nose"
            },
            {
                "cefr": "",
                "def1": "волдырь образуется",
                "ipa": "ə ˈblɪstər fɔrmz",
                "spell": "a blister forms"
            },
            {
                "cefr": "",
                "def1": "лечить травму",
                "ipa": "tu trit ən ˈɪnʤəri",
                "spell": "to treat an injury"
            },
            {
                "cefr": "",
                "def1": "нанести мазь",
                "ipa": "tu pʊt ɑn ˈɔɪntmənt",
                "spell": "to put on ointment"
            },
            {
                "cefr": "",
                "def1": "тяжёлое кровотечение",
                "ipa": "səˈvɪr ˈblidɪŋ",
                "spell": "severe bleeding"
            },
            {
                "cefr": "",
                "def1": "мотор глохнет",
                "ipa": "ən ˈɛnʤən ɡoʊz dɛd",
                "spell": "an engine goes dead"
            },
            {
                "cefr": "",
                "def1": "наклонить её вперёд",
                "ipa": "tɪp ɪt ˈfɔrwərdz",
                "spell": "tip it forwards"
            },
            {
                "cefr": "",
                "def1": "обнажённая рана",
                "ipa": "ən ənˈkʌvərd wund",
                "spell": "an uncovered wound"
            },
            {
                "cefr": "",
                "def1": "оказывать первую помощь",
                "ipa": "ɡɪv fɜrst eɪd",
                "spell": "give first aid"
            },
            {
                "cefr": "",
                "def1": "открытый для воздуха",
                "ipa": "ˈoʊpən tu ði ɛr",
                "spell": "open to the air"
            },
            {
                "cefr": "",
                "def1": "переохлаждение, гипотермия",
                "ipa": "ˌhaɪpəˈθɜrmiə",
                "spell": "hypothermia"
            },
            {
                "cefr": "",
                "def1": "воспалённое / больное горло",
                "ipa": "ə sɔr θroʊt",
                "spell": "a sore throat"
            },
            {
                "cefr": "",
                "def1": "чувствовать головокружение",
                "ipa": "tu fil ˈdɪzi",
                "spell": "to feel dizzy"
            },
            {
                "cefr": "",
                "def1": "увеличить риск",
                "ipa": "tu ɪnˈkris ðə rɪsk",
                "spell": "to increase the risk"
            },
            {
                "cefr": "",
                "def1": "незначитиельная травма",
                "ipa": "ə ˈmaɪnər ˈɪnʤəri",
                "spell": "a minor injury"
            },
            {
                "cefr": "",
                "def1": "абдоминальный толчок",
                "ipa": "æbˈdɑmənəl θrʌst",
                "spell": "abdominal thrust"
            },
            {
                "cefr": "",
                "def1": "вызвать дискуссию",
                "ipa": "tu spɑrk dɪˈskʌʃən",
                "spell": "to spark discussion"
            },
            {
                "cefr": "",
                "def1": "подчеркнуть что ...",
                "ipa": "tu strɛs ðæt ...",
                "spell": "to stress that ..."
            },
            {
                "cefr": "",
                "def1": "риск инфекции",
                "ipa": "ðə rɪsk ʌv ɪnˈfɛkʃən",
                "spell": "the risk of infection"
            },
            {
                "cefr": "",
                "def1": "получить первую помощь",
                "ipa": "rəˈsiv fɜrst eɪd",
                "spell": "receive first aid"
            },
            {
                "cefr": "",
                "def1": "потерять сознание",
                "ipa": "tu luz ˈkɑnʃəsnəs",
                "spell": "to lose consciousness"
            },
            {
                "cefr": "",
                "def1": "приём Геймлиха",
                "ipa": "ðə ˈhaɪmlɪk məˈnuvər",
                "spell": "the Heimlich maneuver"
            },
            {
                "cefr": "",
                "def1": "обидчивый пациент",
                "ipa": "ə ˈdɪfəkəlt ˈpeɪʃənt",
                "spell": "a difficult patient"
            },
            {
                "cefr": "",
                "def1": "облить ожог водой",
                "ipa": "rʌn ˈwɔtər ɑn ə bɜrn",
                "spell": "run water on a burn"
            },
            {
                "cefr": "",
                "def1": "сократить опухоль",
                "ipa": "tu rəˈdus ə ˈswɛlɪŋ",
                "spell": "to reduce a swelling"
            },
            {
                "cefr": "",
                "def1": "подсветить фразу",
                "ipa": "tu ˈhaɪˌlaɪt ə freɪz",
                "spell": "to highlight a phrase"
            },
            {
                "cefr": "",
                "def1": "опухать",
                "ipa": "tu swɛl, swɛld, ˈswoʊlən",
                "spell": "to swell, swelled, swollen"
            },
            {
                "cefr": "",
                "def1": "ходить в туалет",
                "ipa": "tu ɡoʊ tu ðə ˈbæˌθrum",
                "spell": "to go to the bathroom"
            },
            {
                "cefr": "",
                "def1": "нуждаться в первой помощи",
                "ipa": "tu nid fɜrst eɪd",
                "spell": "to need first aid"
            },
            {
                "cefr": "",
                "def1": "быть простуженным, простудиться",
                "ipa": "tu hæv ə koʊld",
                "spell": "to have a cold"
            },
            {
                "cefr": "",
                "def1": "иметь переохлаждение",
                "ipa": "tu hæv ˌhaɪpəˈθɜrmiə",
                "spell": "to have hypothermia"
            },
            {
                "cefr": "",
                "def1": "рана инфицируется",
                "ipa": "ə wund ɡɛts ɪnˈfɛktɪd",
                "spell": "a wound gets infected"
            },
            {
                "cefr": "",
                "def1": "ухудшить повреждение",
                "ipa": "meɪk ðə ˈdæməʤ wɜrs",
                "spell": "make the damage worse"
            },
            {
                "cefr": "",
                "def1": "антибиотическая мазь",
                "ipa": "ˌæntibiˈɑtɪk ˈɔɪntmənt",
                "spell": "antibiotic ointment"
            },
            {
                "cefr": "",
                "def1": "заставить меня сеть",
                "ipa": "tu ɡɛt mi tu sɪt daʊn",
                "spell": "to get me to sit down"
            },
            {
                "cefr": "",
                "def1": "наложить бинт / повязку",
                "ipa": "tu pʊt ɑn ə ˈbændɪʤ",
                "spell": "to put on a bandage"
            },
            {
                "cefr": "",
                "def1": "травма заживляется",
                "ipa": "ən ˈɪnʤəri ɡɛts ˈbɛtər",
                "spell": "an injury gets better"
            },
            {
                "cefr": "",
                "def1": "увеличить ток крови",
                "ipa": "tu ɪnˈkris blʌd floʊ",
                "spell": "to increase blood flow"
            },
            {
                "cefr": "",
                "def1": "лучшее, что можно сделать",
                "ipa": "ðə bɛst θɪŋ tu du",
                "spell": "the best thing to do"
            },
            {
                "cefr": "",
                "def1": "расширить знание",
                "ipa": "ɪkˈstɛnd jʊər ˈnɑləʤ ʌv",
                "spell": "extend your knowledge of"
            },
            {
                "cefr": "",
                "def1": "менее вероятно, что заживёт",
                "ipa": "lɛs ˈlaɪkli tu hil",
                "spell": "less likely to heal"
            },
            {
                "cefr": "",
                "def1": "эпидемия вспыхивает",
                "ipa": "ən ˌɛpəˈdɛmɪk breɪks aʊt",
                "spell": "an epidemic breaks out"
            },
            {
                "cefr": "",
                "def1": "оправиться от болезни",
                "ipa": "tu ɡɛt ˈoʊvər ən ˈɪlnəs",
                "spell": "to get over an illness"
            },
            {
                "cefr": "",
                "def1": "это может вызвать проблемы",
                "ipa": "ɪt kæn kɑz ˈprɑbləmz",
                "spell": "it can cause problems"
            },
            {
                "cefr": "",
                "def1": "растяжение связок голеностопного сустава",
                "ipa": "spreɪnd ˈæŋkəl",
                "spell": "sprained ankle"
            },
            {
                "cefr": "",
                "def1": "весёлый разговор",
                "ipa": "ˈlaɪtˌhɑrtɪd ˌkɑnvərˈseɪʃən",
                "spell": "light-hearted conversation"
            },
            {
                "cefr": "",
                "def1": "остановить кровотечение из носа",
                "ipa": "tu stɑp ə ˈnoʊzˌblid",
                "spell": "to stop a nosebleed"
            },
            {
                "cefr": "",
                "def1": "ипохондрия, угнетённое состояние, мнительность",
                "ipa": "ˌhaɪpəˈkɑndriə",
                "spell": "hypochondria"
            },
            {
                "cefr": "",
                "def1": "свалиться с болезнью",
                "ipa": "tu kʌm daʊn wɪð ən ˈɪlnəs",
                "spell": "to come down with an illness"
            },
            {
                "cefr": "",
                "def1": "мне кажется я сейчас",
                "ipa": "aɪ fil laɪk aɪm ˈɡoʊɪŋ tu ...",
                "spell": "I feel like I'm going to V"
            },
            {
                "cefr": "",
                "def1": "накрыть меня чем-то тёплым",
                "ipa": "ˈkʌvər mi ɪn ˈsʌmθɪŋ wɔrm",
                "spell": "cover me in something warm"
            },
            {
                "cefr": "",
                "def1": "обычное беспокойство о здоровье",
                "ipa": "ə ˈtɪpəkəl hɛlθ kənˈsɜrn",
                "spell": "a typical health concern"
            },
            {
                "cefr": "",
                "def1": "одержимо / маниакально выискивать",
                "ipa": "tu ɑbˈsɛsɪvli sɜrʧ fɔr",
                "spell": "to obsessively search for"
            },
            {
                "cefr": "",
                "def1": "нажать мне на живот внутрь",
                "ipa": "tu prɛs maɪ ˈstʌmək ˈɪnwərdz",
                "spell": "to press my stomach inwards"
            },
            {
                "cefr": "",
                "def1": "при необходимости неотложной медпомощи",
                "ipa": "ɪn ə ˈmɛdəkəl ɪˈmɜrʤənsi",
                "spell": "in a medical emergency"
            },
            {
                "cefr": "",
                "def1": "вследствие аллергической реакции",
                "ipa": "du tu ən əˈlɜrʤɪk riˈækʃən",
                "spell": "due to an allergic reaction"
            },
            {
                "cefr": "",
                "def1": "ввести в фокусирование на грамматике",
                "ipa": "lid ˈɪntu ðə ˈɡræmər ˈfoʊkəs",
                "spell": "lead into the grammar focus"
            },
            {
                "cefr": "",
                "def1": "из-за интерференции со стороны родного языка",
                "ipa": "bɪˈkɔz ʌv ɛl1 ˌɪntərˈfɪrəns",
                "spell": "because of L1 interference"
            },
            {
                "cefr": "",
                "def1": "закрепить грамматику и лексику",
                "ipa": "kənˈsɑlɪˌdeɪt ˈɡræmər ænd voʊˈkæbjəˌlɛri",
                "spell": "consolidate grammar and vocabulary"
            },
            {
                "cefr": "",
                "def1": "чувствовать, что всё кружится",
                "ipa": "tu fil laɪk ˈɛvriˌθɪŋ ɪz ˈspɪnɪŋ əˈraʊnd",
                "spell": "to feel like everything is spinning around"
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

export default ML27;