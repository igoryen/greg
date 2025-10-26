import '../styles/components/TestimonialCarousel.scss'
import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Sample data - replace with your actual student testimonials
    const testimonials = [
        {
            id: 1,
            name: "Igor P.",
            course: "the US",
            text: "Я бесконечно благодарен моему репетитору английского! Он настоящий профессионал, который умеет объяснить даже самые сложные темы простыми словами и всегда находит индивидуальный подход. Занятия проходят в дружеской и мотивирующей атмосфере, что делает обучение не только познавательным, но и по-настоящему приятным. Я вижу реальный прогресс в своём английском, чувствую уверенность в общении и вдохновляюсь на дальнейшее изучение. Это преподаватель, которого я могу смело рекомендовать всем, кто действительно хочет повысить свой уровень языка!",
            image: "/images/rvw/ip.jpg",
            rating: 5
        },
        {
            id: 2,
            name: "Svetlana B.",
            course: "Germany",
            text: "Я изучаю английский с Игорем два раза в неделю вот уже полгода, и первые реальные результаты заметила уже после нескольких занятий. Его уроки всегда интересные, динамичные и продуманные, что поддерживает мою мотивацию и желание развиваться. -- У Игоря действительно есть талант объяснять сложные грамматические и морфологические концепции чётко и логично, так что необходимость в скучной зубрёжке отпадает. Хотя мы и следуем некоторым темам по учебнику, он всегда находит время для личных целей обучения и поощряет свободное общение на английском. -- На его уроках активно практикуются все ключевые языковые навыки — произношение, грамматика, аудирование, чтение, разговорная речь и даже этимология слов. Отдельно хочу отметить, что Игорь создаёт персональные карточки после каждого занятия, что позволяет легко повторять новую лексику в любое время и в любом месте. -- Я очень благодарна Игорю за профессионализм, глубокие лингвистические знания и dedication. Я настоятельно рекомендую его всем, кто хочет эффективно и с удовольствием улучшить свой английский.",
            image: "/images/rvw/sb.jpg",
            rating: 5
        },
        {
            id: 3,
            name: "Alyona B.",
            course: "the USA",
            text: "Занятия с этим преподавателем проходят легко и увлекательно, материал объясняется очень доступно. Индивидуальный подход помогает быстрее достигать целей и видеть реальный прогресс. Особенно ценю акцент на разговорной практике и преодолении языкового барьера. Используются современные материалы, что делает обучение разнообразным и эффективным. Я очень довольна результатами и могу с уверенностью рекомендовать этого педагога.",
            image: "/images/rvw/ab.jpg",
            rating: 5
        },
        {
            id: 4,
            name: "Svetlana S.",
            course: "Canada",
            text: "Hello everyone! I want to highly recommend this specialist! I really liked his individual approach – he’s very attentive to details and takes the student’s opinion into account. So, to anyone who hasn’t used his services yet – you’re welcome!",
            image: "/images/rvw/ss.jpg",
            rating: 5
        },
        {
            id: 5,
            name: "Maria L.",
            course: "Canada",
            text: "Твои уроки интересные, потому что мы, студенты, можем говорить о своём опыте и историях на английском. Не каждый преподаватель с этим справляется. Ты лучший преподаватель из всех!",
            image: "/images/rvw/ml.jpg",
            rating: 5
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]); // Only depend on these values

    return (
        <div id="testimonial-carousel">
            <div className="carousel-header">
                <h2>What My Students Say</h2>
                <button
                    className="auto-play-btn"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                >
                    {isAutoPlaying ? '⏸️' : '▶️'}
                </button>
            </div>

            <div className="carousel-container">
                <button className="carousel-btn prev-btn" onClick={prevSlide}>
                    ‹
                </button>

                <div className="carousel-slides">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <div className="testimonial-content">
                                <div className="student-image">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/150/cccccc/666666?text=Student+Photo';
                                        }}
                                    />
                                </div>
                                <div className="testimonial-text">
                                    <div className="rating">
                                        {'★'.repeat(testimonial.rating)}
                                    </div>
                                    <blockquote>"{testimonial.text}"</blockquote>
                                    <div className="student-info">
                                        <strong>{testimonial.name}</strong>
                                        <span>{testimonial.course}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-btn next-btn" onClick={nextSlide}>
                    ›
                </button>
            </div>

            {/* Slide indicators */}
            <div className="carousel-indicators">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;