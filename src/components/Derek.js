function Derek({ derek, slug }) {
    const lessons = [];
    for (let [i, lesson] of derek.entries()) {
        i++;
        if (lesson.done > 0) {
            let lesnum = lesson.number < 10 ? "0" + lesson.number : lesson.number;
            lessons.push(
                <p key={i}>
                    <a href={`/${slug}${lesnum}`} rel="noopener noreferrer">Lesson {lesson.number}</a><span>{lesson.date}</span>
                </p>
            );
        }
    }
    return (
        <section className="tom">
            {lessons}
        </section>
    );
}

export default Derek;