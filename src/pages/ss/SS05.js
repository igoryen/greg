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
            "number": 5,
            "slug": "ss"
        };
        return (
            <div>
                <Leon lesson={lesson} />

                <section className="words">
                    <div class="word">	<div class="front part part1">	<p>	1	</p>	<div class="rus">	еда	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	fud	</div>	<div class="spell">	food	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	2	</p>	<div class="rus">	боль	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	peɪn	</div>	<div class="spell">	pain	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	3	</p>	<div class="rus">	тряпка	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ræɡ	</div>	<div class="spell">	rag	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	4	</p>	<div class="rus">	игла	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ˈnidəl	</div>	<div class="spell">	needle	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	5	</p>	<div class="rus">	жест	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ˈʤɛsʧər	</div>	<div class="spell">	gesture	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	6	</p>	<div class="rus">	никто	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ˈnoʊˌbɑˌdi	</div>	<div class="spell">	nobody	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	7	</p>	<div class="rus">	добрее	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ˈkaɪndər	</div>	<div class="spell">	kinder	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	8	</p>	<div class="rus">	пропустить	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	skɪp	</div>	<div class="spell">	skip	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	9	</p>	<div class="rus">	рыба, рыбы	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	fɪʃ	</div>	<div class="spell">	fish	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	10	</p>	<div class="rus">	кто-то	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ˈsʌmˌbɑdi	</div>	<div class="spell">	somebody	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	11	</p>	<div class="rus">	так, чтобы	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	soʊ ðæt	</div>	<div class="spell">	so that	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	12	</p>	<div class="rus">	существовать	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ɪɡˈzɪst	</div>	<div class="spell">	exist	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	13	</p>	<div class="rus">	болезненный	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ˈpeɪnfəl	</div>	<div class="spell">	painful	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	14	</p>	<div class="rus">	есть	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ðɛr ɪz / ɑr	</div>	<div class="spell">	there is / are	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	15	</p>	<div class="rus">	где ещё?	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	wɛr ɛls?	</div>	<div class="spell">	where else?	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	16	</p>	<div class="rus">	волосы, шевелюра	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	hɛr	</div>	<div class="spell">	hair	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	17	</p>	<div class="rus">	исчисляемое	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ˈkaʊntəbəl	</div>	<div class="spell">	countable	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	18	</p>	<div class="rus">	суеверие	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ˌsupərˈstɪʃən	</div>	<div class="spell">	superstition	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	19	</p>	<div class="rus">	в/на конце	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	æt ði ɛnd	</div>	<div class="spell">	at the end	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	20	</p>	<div class="rus">	время летит	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	taɪm flaɪz	</div>	<div class="spell">	time flies	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	21	</p>	<div class="rus">	считать, исчислять	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	kaʊnt	</div>	<div class="spell">	count	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	22	</p>	<div class="rus">	неисчисляемое	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ʌnˈkaʊntəbəl	</div>	<div class="spell">	uncountable	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	23	</p>	<div class="rus">	сильно болело	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ɪt hɜrt ə lɑt	</div>	<div class="spell">	it hurt a lot	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	24	</p>	<div class="rus">	нет, нету	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ðɛr ɪz / ɑr nɑt	</div>	<div class="spell">	there is / are not	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	25	</p>	<div class="rus">	я предпочёл бы	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	aɪ wʊd ˈræðər	</div>	<div class="spell">	I would rather	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	26	</p>	<div class="rus">	молока нет	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ðɛr ɪz noʊ mɪlk	</div>	<div class="spell">	there is no milk	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	27	</p>	<div class="rus">	хирургическая операция	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ˈsɜrʤəri	</div>	<div class="spell">	surgery	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	28	</p>	<div class="rus">	гор нет	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ðɛr ɑr noʊ ˈmaʊntənz	</div>	<div class="spell">	there are no mountains	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	29	</p>	<div class="rus">	нет молока	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ðɛr ˈɪzənt ˈɛni mɪlk	</div>	<div class="spell">	there isn’t any milk	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	30	</p>	<div class="rus">	более распространённый	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	mɔr ˈkɑmən	</div>	<div class="spell">	more common	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	31	</p>	<div class="rus">	никакой машины / автомобиля	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	noʊ kɑr	</div>	<div class="spell">	no car	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	32	</p>	<div class="rus">	я начала сомневаться	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	aɪ bɪˈɡæn tu daʊt	</div>	<div class="spell">	I began to doubt	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	33	</p>	<div class="rus">	записаться на приём	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	bʊk ən əˈpɔɪntmənt	</div>	<div class="spell">	book an appointment	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	34	</p>	<div class="rus">	он родился в США	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	hi wʌz bɔrn ɪn ðə ˈjuˈɛˈseɪ	</div>	<div class="spell">	he was born in the USA	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	35	</p>	<div class="rus">	Я не могла пойти в	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	aɪ kʊd nɑt ɡoʊ tu …	</div>	<div class="spell">	I could not go to …	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	36	</p>	<div class="rus">	это было очень больно	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ɪt wʌz ˈvɛri ˈpeɪnfəl	</div>	<div class="spell">	it was very painful	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	37	</p>	<div class="rus">	обезболивающее, болеутоляющее	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ˈpeɪnˌkɪlər	</div>	<div class="spell">	pain-killer	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	38	</p>	<div class="rus">	каждый раз когда мы ...	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ˈɛvəri taɪm wi ...	</div>	<div class="spell">	every time we ...	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	39	</p>	<div class="rus">	когда я была на работе	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	wɛn aɪ wʌz æt wɜrk	</div>	<div class="spell">	when I was at work	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	40	</p>	<div class="rus">	денег не хватает	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ðɛrz nɑt ɪˈnʌf ˈmʌni	</div>	<div class="spell">	there’s not enough money	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	41	</p>	<div class="rus">	денег недостаточно	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ðɛr ˈɪzənt ɪˈnʌf ˈmʌni	</div>	<div class="spell">	there isn’t enough money	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	42	</p>	<div class="rus">	я нахожусь там 3 часа	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	aɪ æm ðɛr fɔr θri ˈaʊərz	</div>	<div class="spell">	I am there for three hours	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	43	</p>	<div class="rus">	когда мне сделали укол	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	wɛn ðeɪ ɡeɪv mi ðə ʃɑt	</div>	<div class="spell">	when they gave me the shot	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	44	</p>	<div class="rus">	как чувствует себя Ваш сын?	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	haʊ dʌz jʊər sʌn fil?	</div>	<div class="spell">	how does your son feel?	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	45	</p>	<div class="rus">	хорошо видеть вас снова!	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ɪt ɪz ɡʊd tu si ju əˈɡɛn!	</div>	<div class="spell">	it is good to see you again!	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	46	</p>	<div class="rus">	за прилавком никого нет	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ðɛr ɪz ˈnoʊˌbɑˌdi æt ðə ˈkaʊntər	</div>	<div class="spell">	there is nobody at the counter	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	47	</p>	<div class="rus">	он живёт тут 20 лет	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	hi hæz lɪvd hir fɔr ˈtwɛnti jɪrz	</div>	<div class="spell">	he has lived here for twenty years	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	48	</p>	<div class="rus">	что-то, что имеет отношение к ...	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ˈsʌmθɪŋ tu du wɪð …	</div>	<div class="spell">	something to do with …	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	49	</p>	<div class="rus">	сколько людей дома?	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	haʊ ˈmɛni ˈpipəl ɑr ðɛr æt hoʊm?	</div>	<div class="spell">	how many people are there at home?	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	50	</p>	<div class="rus">	дома только мой муж и я	</div>	<div class="cefr">	B2 (Ox3K)	</div>	</div>	<div class="back part part2">	<div class="ipa">	ðɛr ɑr ˈoʊnli maɪ ˈhʌzbənd ænd mi ɪn ðə haʊs	</div>	<div class="spell">	there are only my husband and me in the house	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	51	</p>	<div class="rus">	обычно у нас в класса 7 человек	</div>	<div class="cefr">		</div>	</div>	<div class="back part part2">	<div class="ipa">	ðɛr ɑr ˈjuʒəwəli ˈsɛvən ˈpipəl ɪn ˈaʊər klæs	</div>	<div class="spell">	there are usually seven people in our class	</div>	</div>	</div>
                    <div class="word">	<div class="front part part1">	<p>	52	</p>	<div class="rus">	когда мы не понимаем, он использует жесты	</div>	<div class="cefr">		</div>	</div>	<div class="back part part2">	<div class="ipa">	wɛn wi du nɑt ˌʌndərˈstænd hi ˈjuzəz ˈʤɛsʧərz	</div>	<div class="spell">	when we do not understand he uses gestures	</div>	</div>	</div>
                </section>
            </div>
        );
    }


}



export default SS05;