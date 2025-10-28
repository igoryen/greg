import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../styles/components/torveki.scss";

const Torveki = () => {
    // const [color, setColor] = useState("#f8f8ff");

    useEffect(() => {
        document.body.classList.add("_torveki");
        return () => {
            document.body.classList.remove("_torveki");
        };
    }, []);

    const handleDragStart = (e) => e.preventDefault();

    const quotes = [
        {
            text: "Я бесконечно благодарен моему репетитору английского! Он настоящий профессионал, который умеет объяснить даже самые сложные темы простыми словами и всегда находит индивидуальный подход. Занятия проходят в дружеской и мотивирующей атмосфере, что делает обучение не только познавательным, но и по-настоящему приятным. Я вижу реальный прогресс в своём английском, чувствую уверенность в общении и вдохновляюсь на дальнейшее изучение. Это преподаватель, которого я могу смело рекомендовать всем, кто действительно хочет повысить свой уровень языка!",
            link: "https://www.instagram.com/p/ChBgTm7NY47/",
            name: "Igor P.",
            image: "/images/rvw/ip.jpg",
        },
        {
            text: "Я изучаю английский с Игорем два раза в неделю вот уже полгода, и первые реальные результаты заметила уже после нескольких занятий. Его уроки всегда интересные, динамичные и продуманные, что поддерживает мою мотивацию и желание развиваться. -- У Игоря действительно есть талант объяснять сложные грамматические и морфологические концепции чётко и логично, так что необходимость в скучной зубрёжке отпадает. Хотя мы и следуем некоторым темам по учебнику, он всегда находит время для личных целей обучения и поощряет свободное общение на английском. -- На его уроках активно практикуются все ключевые языковые навыки — произношение, грамматика, аудирование, чтение, разговорная речь и даже этимология слов. Отдельно хочу отметить, что Игорь создаёт персональные карточки после каждого занятия, что позволяет легко повторять новую лексику в любое время и в любом месте. -- Я очень благодарна Игорю за профессионализм, глубокие лингвистические знания и dedication. Я настоятельно рекомендую его всем, кто хочет эффективно и с удовольствием улучшить свой английский.",
            link: "https://www.instagram.com/p/CamdxHrOy_6/",
            name: "Svetlana B.",
            image: "/images/rvw/sb.jpg",
        },
        {
            text: "Занятия с этим преподавателем проходят легко и увлекательно, материал объясняется очень доступно. Индивидуальный подход помогает быстрее достигать целей и видеть реальный прогресс. Особенно ценю акцент на разговорной практике и преодолении языкового барьера. Используются современные материалы, что делает обучение разнообразным и эффективным. Я очень довольна результатами и могу с уверенностью рекомендовать этого педагога.",
            link: "https://www.instagram.com/_mariyka_r/",
            name: "Alyona B.",
            image: "/images/rvw/ab.jpg",
        },
        {
            text: "Hello everyone! I want to highly recommend this specialist! I really liked his individual approach – he’s very attentive to details and takes the student’s opinion into account. So, to anyone who hasn’t used his services yet – you’re welcome!",
            link: "https://www.instagram.com/olgamalafeeva/",
            name: "Svetlana S.",
            image: "/images/rvw/ss.jpg",
        },
        {
            text: "Твои уроки интересные, потому что мы, студенты, можем говорить о своём опыте и историях на английском. Не каждый преподаватель с этим справляется. Ты лучший преподаватель из всех!",
            link: "https://www.instagram.com/p/B3vUojsD4K1/",
            name: "Maria L.",
            image: "/images/rvw/ml.jpg",
        },

    ];

    const itemsQuotes = quotes.map((quote, index) => (
        <div
            key={index}
            onDragStart={handleDragStart}
            role="presentation"
            className="alice-carousel"
        >
            <div className="testimonial__element">
                <blockquote>{quote.text}</blockquote>
                <div className="testimonial__author">
                    {/* <div className="testimonial__author_name">
                        <a href={quote.link} target="_blank" rel="noreferrer">
                            {quote.name}
                        </a>
                    </div> */}
                    <div className="testimonial__author_photo">
                        <img
                            src={quote.image}
                            alt={quote.name}
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/150/cccccc/666666?text=Student+Photo';
                            }}
                        />
                    </div>

                </div>
            </div>
        </div>
    ));

    const responsivity = {
        0: { items: 1 },
        1024: { items: 3 },
    };

    return (
        <section id="torveki" className="page__section testimonial__group">
            <h2>What My Students Say</h2>

            <div className="my-carousel">
                <AliceCarousel
                    mouseTracking
                    items={itemsQuotes}
                    autoPlay
                    infinite
                    autoPlayInterval={2000}
                    responsive={responsivity}
                    disableButtonsControls={false}
                    paddingLeft={50}
                    paddingRight={50}
                />
            </div>
        </section>
    );
};

export default Torveki;
