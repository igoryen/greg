function Derek({ derek, slug }) {
    const lessons = [];
    for (let [i, lesson] of derek.entries()) {
        i++;
        lessons.push(
            <p key={i}>
                <a href={`/${slug}${lesson.number}`} rel="noopener noreferrer">Lesson {lesson.number}</a><span>{lesson.date}</span>
            </p>
        );
    }
    return (
        <section className="tom">
            {lessons}
        </section>
    );
}

export default Derek;