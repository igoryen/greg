import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";

class SS05 extends React.Component {
    componentDidMount() {
        // window.$(".multiple-skils").select2();
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Svetlana",
            "number": 1,
            "slug": "ss"
        };
        return (
            <div>
                <Leon lesson={lesson} />
                <section class="words">


                    <div class="word">
                        <div class="front part part1">
                            <p> 1 </p>
                            <div class="rus"> переключиться на </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> swɪʧ tu </div>
                            <div class="spell"> switch to </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 2 </p>
                            <div class="rus"> молодец </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ɡʊd fɔr ju! </div>
                            <div class="spell"> good for you! </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 3 </p>
                            <div class="rus"> я не учила никакие слова </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> aɪ ˈdɪdənt lɜrn ˈɛni wɜrdz </div>
                            <div class="spell"> I didn’t learn any words </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 4 </p>
                            <div class="rus"> все слова </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ɔl ðə wɜrdz </div>
                            <div class="spell"> all the words </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 5 </p>
                            <div class="rus"> опыт </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ɪkˈspɪriəns </div>
                            <div class="spell"> experience </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 6 </p>
                            <div class="rus"> чем вы занимаетесь теперь? </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> wɑt du ju du naʊ? </div>
                            <div class="spell"> what do you do now? </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 7 </p>
                            <div class="rus"> сериал </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ˈtiˈvi ʃoʊ </div>
                            <div class="spell"> TV show </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 8 </p>
                            <div class="rus"> у меня 3 часа идут уроки </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> aɪ hæv ˈlɛsənz fɔr θri ˈaʊərz </div>
                            <div class="spell"> I have lessons for three hours </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 9 </p>
                            <div class="rus"> в течение трёх часов</div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> fɔr θri ˈaʊərz </div>
                            <div class="spell"> for three hours </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 10 </p>
                            <div class="rus"> раз в неделю </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> wʌns ə wik </div>
                            <div class="spell"> once a week </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 11 </p>
                            <div class="rus"> два раза в день </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> tu taɪmz ə deɪ </div>
                            <div class="spell"> two times a day </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 12 </p>
                            <div class="rus"> три раза в год </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> θri taɪmz ə jɪr </div>
                            <div class="spell"> three times a year </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 13 </p>
                            <div class="rus"> детективы (фильмы) </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> dɪˈtɛktɪv ˈmuviz </div>
                            <div class="spell"> detective movies </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 14 </p>
                            <div class="rus"> смотреть кино </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> wɑʧ ˈmuviz </div>
                            <div class="spell"> watch movies </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 15 </p>
                            <div class="rus"> от 5 до 6 часов в день </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> faɪv tu sɪks ˈaʊərz ə deɪ </div>
                            <div class="spell"> five to six hours a day </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 16 </p>
                            <div class="rus"> ложиться спать </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ɡoʊ tu bɛd </div>
                            <div class="spell"> go to bed </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 17 </p>
                            <div class="rus"> в четыре утра </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> æt fɔr eɪ.ɛm. </div>
                            <div class="spell"> at four a.m. </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 18 </p>
                            <div class="rus"> функция </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ˈfʌŋkʃən </div>
                            <div class="spell"> function </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 19 </p>
                            <div class="rus"> сменить карьеру </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ʧeɪnʤ maɪ kəˈrɪr </div>
                            <div class="spell"> change my career </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 20 </p>
                            <div class="rus"> я поменялась с А на Б </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> aɪ ʧeɪnʤd frʌm ə tu bi </div>
                            <div class="spell"> I changed from A to B </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 21 </p>
                            <div class="rus"> я занималась отгрузкой в течение года </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> aɪ dɪd ˈʃɪpɪŋ fɔr ə jɪr </div>
                            <div class="spell"> I did shipping for a year </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 22 </p>
                            <div class="rus"> потом я перешла на паковку </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ðɛn aɪ swɪʧt tu ˈpɪkɪŋ </div>
                            <div class="spell"> then I switched to picking </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 23 </p>
                            <div class="rus"> я должна была просыпаться в 4:30 утра </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> aɪ hæd tu weɪk ʌp æt fɔr-ˈθɜrdi eɪ.ɛm. </div>
                            <div class="spell"> I had to wake up at four-thirty a.m. </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 24 </p>
                            <div class="rus"> полтора часа </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ən ˈaʊər ænd ə hæf </div>
                            <div class="spell"> an hour and a half </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 25 </p>
                            <div class="rus"> полтора часа </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> wʌn ænd ə hæf ˈaʊərz </div>
                            <div class="spell"> one and a half hours </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 26 </p>
                            <div class="rus"> ещё два часа </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> tu mɔr ˈaʊərz </div>
                            <div class="spell"> two more hours </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 27 </p>
                            <div class="rus"> всё вместе </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ɔl təˈɡɛðər </div>
                            <div class="spell"> all together </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 28 </p>
                            <div class="rus"> у меня ушло от полутора до двух часов чтобы добраться до работы </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ɪt tʊk mi frʌm wʌn ænd ə hæf ˈaʊərz tu tu ˈaʊərz tu ɡɛt tu wɜrk. </div>
                            <div class="spell"> it took me from one and a half hours to two hours to get to work. </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 29 </p>
                            <div class="rus"> не было темно на улице </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ɪt wʌz nɑt dɑrk ˈaʊtˈsaɪd. </div>
                            <div class="spell"> it was not dark outside. </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 30 </p>
                            <div class="rus"> сколько времени было, когда вы проснулись? </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> wɑt taɪm wʌz ɪt wɛn ju woʊk ʌp? </div>
                            <div class="spell"> what time was it when you woke up? </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 31 </p>
                            <div class="rus"> когда я проснулась было темно на улице </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> wɛn aɪ woʊk ʌp ɪt wʌz dɑrk ˈaʊtˈsaɪd. </div>
                            <div class="spell"> when I woke up it was dark outside. </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 32 </p>
                            <div class="rus"> когда я пошла на улицу было не темно </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> wɛn aɪ wɛnt ˈaʊtˈsaɪd ɪt wʌz nɑt dɑrk. </div>
                            <div class="spell"> When I went outside it was not dark. </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 33 </p>
                            <div class="rus"> добраться до работы </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ɡɛt tu wɜrk </div>
                            <div class="spell"> get to work </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 34 </p>
                            <div class="rus"> как вы добрались до работы? </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> haʊ dɪd ju ɡɛt tu wɜrk? </div>
                            <div class="spell"> how did you get to work? </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 35 </p>
                            <div class="rus"> добраться до дома </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ɡɛt hoʊm </div>
                            <div class="spell"> get home </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 36 </p>
                            <div class="rus"> добраться до Канады </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ɡɛt tu ˈkænədə </div>
                            <div class="spell"> get to Canada </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 37 </p>
                            <div class="rus"> самолётом </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> baɪ pleɪn </div>
                            <div class="spell"> by plane </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 38 </p>
                            <div class="rus"> добраться куда-то поездом </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ɡɛt ˈsʌmˌwɛr baɪ treɪn </div>
                            <div class="spell"> get somewhere by train </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 39 </p>
                            <div class="rus"> на велосипеде </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> baɪ ˈbaɪsɪkəl </div>
                            <div class="spell"> by bicycle </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 40 </p>
                            <div class="rus"> по морю </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> baɪ si </div>
                            <div class="spell"> by sea </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 41 </p>
                            <div class="rus"> по воздуху </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> baɪ ɛr </div>
                            <div class="spell"> by air </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 42 </p>
                            <div class="rus"> откуда вы приехали в Канаду? </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> wɛr dɪd ju kʌm tu ˈkænədə frʌm? </div>
                            <div class="spell"> where did you come to Canada from? </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 43 </p>
                            <div class="rus"> Мы приехали из А в Б </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> wi keɪm tu eɪ frʌm bi. </div>
                            <div class="spell"> We came to A from B. </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 44 </p>
                            <div class="rus"> я отправилась из Х </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> aɪ ˈstɑrtɪd frʌm ɛks </div>
                            <div class="spell"> I started from X </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 45 </p>
                            <div class="rus"> потом я поехала в Y </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ðɛn aɪ wɛnt tu waɪ </div>
                            <div class="spell"> then I went to Y </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 46 </p>
                            <div class="rus"> потом поехала в Z </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ðɛn aɪ wɛnt tu zi </div>
                            <div class="spell"> then I went to Z </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 47 </p>
                            <div class="rus"> в магазине </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> æt ə stɔr </div>
                            <div class="spell"> at a store </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 48 </p>
                            <div class="rus"> работать мерчендайзером </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> wɜrk æz ə ˈmɜrʧənˌdaɪzər </div>
                            <div class="spell"> work as a merchandiser </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 49 </p>
                            <div class="rus"> это маленький магазин </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ðæt ɪz ə smɔl stɔr. </div>
                            <div class="spell"> that is a small store. </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 50 </p>
                            <div class="rus"> она работает там уже несколько лет </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ʃi hæz bɪn ˈwɜrkɪŋ ðɛr fɔr ˈsɛvrəl jɪrz naʊ </div>
                            <div class="spell"> she has been working there for several years now </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 51 </p>
                            <div class="rus"> работать кем-то </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> wɜrk æz ə __ </div>
                            <div class="spell"> works as a __</div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 52 </p>
                            <div class="rus"> работать в торговле (розничной) </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> wɜrk ɪn ˈriˌteɪl </div>
                            <div class="spell"> work in retail </div>
                        </div>
                    </div>
                    <div class="word">
                        <div class="front part part1">
                            <p> 53 </p>
                            <div class="rus"> работник торговли </div>
                            <div class="cefr"> </div>
                        </div>
                        <div class="back part part2">
                            <div class="ipa"> ˈriˌteɪl ˈwɜrkər </div>
                            <div class="spell"> retail worker </div>
                        </div>
                    </div>


                </section>

            </div>
        );
    }


}



export default SS05;