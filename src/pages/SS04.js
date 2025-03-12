import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";

class SS04 extends React.Component {
    componentDidMount() {
        // window.$(".multiple-skils").select2();
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Svetlana",
            "number": 4,
            "slug": "ss"
        };
        return (
            <div>
                <Leon lesson={lesson} />

                <section className="words">


                    <div className="word">
                        <div className="front part part1">
                            <p> 1 </p>
                            <div className="rus"> болеть </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> hɜrt </div>
                            <div className="spell"> hurt </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 2 </p>
                            <div className="rus"> жулик </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> krʊk </div>
                            <div className="spell"> crook </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 3 </p>
                            <div className="rus"> случай </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> keɪs </div>
                            <div className="spell"> case </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 4 </p>
                            <div className="rus"> трубка </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> tub </div>
                            <div className="spell"> tube </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 5 </p>
                            <div className="rus"> почка </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ˈkɪdni </div>
                            <div className="spell"> kidney </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 6 </p>
                            <div className="rus"> глубокий </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> dip </div>
                            <div className="spell"> deep </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 7 </p>
                            <div className="rus"> мерзкий </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ˈnæsti </div>
                            <div className="spell"> nasty </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 8 </p>
                            <div className="rus"> хотя </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ˌɔlˈðoʊ </div>
                            <div className="spell"> although </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 9 </p>
                            <div className="rus"> мелкий </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ˈʃæloʊ </div>
                            <div className="spell"> shallow </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 10 </p>
                            <div className="rus"> не могу </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ˈkænɑt </div>
                            <div className="spell"> cannot </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 11 </p>
                            <div className="rus"> шершавый </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> rʌf </div>
                            <div className="spell"> rough </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 12 </p>
                            <div className="rus"> их, ихний </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ðɛr </div>
                            <div className="spell"> their </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 13 </p>
                            <div className="rus"> выживать </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> sərˈvaɪv </div>
                            <div className="spell"> survive </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 14 </p>
                            <div className="rus"> рассматривать </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> vju </div>
                            <div className="spell"> view </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 15 </p>
                            <div className="rus"> плитка, кафель </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> taɪl </div>
                            <div className="spell"> tile </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 16 </p>
                            <div className="rus"> население </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ˌpɑpjəˈleɪʃən </div>
                            <div className="spell"> population </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 17 </p>
                            <div className="rus"> красть, воровать </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> stil </div>
                            <div className="spell"> steal </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 18 </p>
                            <div className="rus"> заботиться о </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> kɛr əˈbaʊt </div>
                            <div className="spell"> care about </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 19 </p>
                            <div className="rus"> пол(года) </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> hæf ə (jɪr) </div>
                            <div className="spell"> half a (year) </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 20 </p>
                            <div className="rus"> определённо! </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ˈdɛfənətli! </div>
                            <div className="spell"> definitely! </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 21 </p>
                            <div className="rus"> дорожка (в бассейне) </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> leɪn </div>
                            <div className="spell"> lane </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 22 </p>
                            <div className="rus"> почему-то </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> fɔr sʌm ˈrizən </div>
                            <div className="spell"> for some reason </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 23 </p>
                            <div className="rus"> заложенный нос </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ˈstʌfi noʊz </div>
                            <div className="spell"> stuffy nose </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 24 </p>
                            <div className="rus"> ультразвук, УЗИ </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ˌʌltrəˈsaʊnd </div>
                            <div className="spell"> ultrasound </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 25 </p>
                            <div className="rus"> насколько глубоко? </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> haʊ dip? </div>
                            <div className="spell"> how deep? </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 26 </p>
                            <div className="rus"> я не слышал </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> aɪ hæv nɑt hɜrd </div>
                            <div className="spell"> I have not heard </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 27 </p>
                            <div className="rus"> мы раньше ходили </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> wi juzd tu ɡoʊ </div>
                            <div className="spell"> we used to go </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 28 </p>
                            <div className="rus"> он пишет посты </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> hi raɪts poʊsts </div>
                            <div className="spell"> he writes posts </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 29 </p>
                            <div className="rus"> группа поддержки </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> səˈpɔrt ɡrups </div>
                            <div className="spell"> support groups </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 30 </p>
                            <div className="rus"> пойти к врачу </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ɡoʊ tu si ə ˈdɑktər </div>
                            <div className="spell"> go to see a doctor </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 31 </p>
                            <div className="rus"> несколько месяцев назад </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> mʌnθs əˈɡoʊ </div>
                            <div className="spell"> months ago </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 32 </p>
                            <div className="rus"> я говорю по-русски </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> aɪ spik ˈrʌʃən </div>
                            <div className="spell"> I speak Russian </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 33 </p>
                            <div className="rus"> наждак, наждачная бумага </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> sænd ˈpeɪpər </div>
                            <div className="spell"> sand paper </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 34 </p>
                            <div className="rus"> непросто, трудно, тяжело </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ɪts tʌf </div>
                            <div className="spell"> it's tough </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 35 </p>
                            <div className="rus"> повторять пройденный материал </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ˌriˈvju </div>
                            <div className="spell"> review </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 36 </p>
                            <div className="rus"> щитовидка, щитовидная железа </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ˈθaɪrɔɪd </div>
                            <div className="spell"> thyroid </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 37 </p>
                            <div className="rus"> болит на девятку </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ɪt hɜrts laɪk ə naɪn </div>
                            <div className="spell"> it hurts like a nine </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 38 </p>
                            <div className="rus"> когда живёшь один </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> wɛn ju lɪv əˈloʊn </div>
                            <div className="spell"> when you live alone </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 39 </p>
                            <div className="rus"> они ничего не говорят </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ðeɪ seɪ ˈnʌθɪŋ </div>
                            <div className="spell"> they say nothing </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 40 </p>
                            <div className="rus"> у меня насморк (разг.) </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> aɪ hæv ðə ˈsnɪfəlz </div>
                            <div className="spell"> I have the sniffles </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 41 </p>
                            <div className="rus"> тебя заставляют ждать </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ðeɪ meɪk ju weɪt </div>
                            <div className="spell"> they make you wait </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 42 </p>
                            <div className="rus"> он ждал пока я уйду </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> hi ˈweɪtɪd fɔr mi tu liv </div>
                            <div className="spell"> he waited for me to leave </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 43 </p>
                            <div className="rus"> не попала к врачу </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> aɪ ˈnɛvər ɡɑt tu si ðə ˈdɑktər </div>
                            <div className="spell"> I never got to see the doctor </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 44 </p>
                            <div className="rus"> у меня сильно болит колено </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> maɪ ni hɜrts ˈvɛri mʌʧ </div>
                            <div className="spell"> my knee hurts very much </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 45 </p>
                            <div className="rus"> мы должны держаться вместе </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> wi ʃʊd stɪk təˈɡɛðər </div>
                            <div className="spell"> we should stick together </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 46 </p>
                            <div className="rus"> всё зависит от человека </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ɪt ɔl dɪˈpɛndz ɑn ðə ˈpɜrsən </div>
                            <div className="spell"> it all depends on the person </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 47 </p>
                            <div className="rus"> отвечать за, нести ответственность за </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> bi riˈspɑnsəbəl fɔr </div>
                            <div className="spell"> be responsible for </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 48 </p>
                            <div className="rus"> назначить мне УЗИ </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> tu bʊk / ˈskɛʤʊl ən ˌʌltrəˈsaʊnd fɔr mi </div>
                            <div className="spell"> to book / schedule an ultrasound for me </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 49 </p>
                            <div className="rus"> я привыкла говорить по-русски </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> aɪ æm juzd tu ˈspikɪŋ ˈrʌʃən </div>
                            <div className="spell"> I am used to speaking Russian </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 50 </p>
                            <div className="rus"> мне сделают укол в колено </div>
                            <div className="cefr"> B2 (Ox3K) </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ðeɪ wɪl ɡɪv mi ə ʃɑt ɪn maɪ ni </div>
                            <div className="spell"> they will give me a shot in my knee </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 51 </p>
                            <div className="rus"> сколько тебе нужно было ждать? </div>
                            <div className="cefr"> </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> haʊ lɔŋ dɪd ju hæv tu weɪt? </div>
                            <div className="spell"> how long did you have to wait? </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 52 </p>
                            <div className="rus"> всё зависит от результатов анализов крови </div>
                            <div className="cefr"> </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ɪt dɪˈpɛndz ɑn ðə blʌd tɛst rɪˈzʌlts </div>
                            <div className="spell"> it depends on the blood test results </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 53 </p>
                            <div className="rus"> у меня доброкачественная опухоль на почке </div>
                            <div className="cefr"> </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> aɪ hæv ə bɪˈnaɪn ˈswɛlɪŋ ɑn maɪ ˈkɪdni </div>
                            <div className="spell"> I have a benign swelling on my kidney </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 54 </p>
                            <div className="rus"> насколько болит по шкале от 1 до 10? </div>
                            <div className="cefr"> </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> haʊ mʌʧ dʌz ɪt hɜrt ɑn ə skeɪl frʌm wʌn tu tɛn? </div>
                            <div className="spell"> How much does it hurt on a scale from one to ten? </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 55 </p>
                            <div className="rus"> сколько раз ты уже была у этого врача? </div>
                            <div className="cefr"> </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> haʊ ˈmɛni taɪmz hæv ju sin ðɪs ˈdɑktər ɔlˈrɛdi? </div>
                            <div className="spell"> how many times have you seen this doctor already? </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 56 </p>
                            <div className="rus"> у нас бы давно уже прооперировали </div>
                            <div className="cefr"> </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ɪn maɪ hoʊm ˈkʌntri, ðeɪ wʊd hæv dʌn ˈsɜrʤəri ə lɔŋ taɪm əˈɡoʊ </div>
                            <div className="spell"> in my home country, they would have done surgery a long time ago </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 57 </p>
                            <div className="rus"> наш семейный врач тоже не принимает новых пациентов </div>
                            <div className="cefr"> </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ˈaʊər ˈfæməli ˈdɑktər ˈdʌzənt teɪk nu ˈpeɪʃənts ˈiðər </div>
                            <div className="spell"> our family doctor doesn’t take new patients either </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 58 </p>
                            <div className="rus"> эту опухоль нашли когда проверяли мою поджелудочную железу </div>
                            <div className="cefr"> </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ðeɪ faʊnd ðɪs ˈswɛlɪŋ waɪl ˈʧɛkɪŋ maɪ ˈpænkriəs </div>
                            <div className="spell"> they found this swelling while checking my pancreas </div>
                        </div>
                    </div>
                    <div className="word">
                        <div className="front part part1">
                            <p> 59 </p>
                            <div className="rus"> с опухолью на почке можно жить всю жизнь и быть в порядке </div>
                            <div className="cefr"> </div>
                        </div>
                        <div className="back part part2">
                            <div className="ipa"> ju kæn hæv ðə lʌmp ɑn jʊər ˈkɪdni jʊər hoʊl laɪf ænd stɪl bi faɪn </div>
                            <div className="spell"> you can have the lump on your kidney your whole life and still be fine </div>
                        </div>
                    </div>




                </section>


            </div>
        );
    }


}



export default SS04;