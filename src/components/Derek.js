function Derek({ derek, slug }) {
    const lessons = [];
    for (let [i, lesson] of derek.entries()) {
        i++;
        if (lesson.done > 0) {
            let lesnum = lesson.number < 10 ? "0" + lesson.number : lesson.number;
            lessons.push(
                <div key={i}>
                    <a href={`/${slug}${lesnum}`} rel="noopener noreferrer">
                        <div className="session">Lesson</div>
                        <div className="number">{lesson.number}</div>
                        <div className="date">{lesson.date}</div>
                    </a>
                </div>
            );
        }
    }
    return (
        <section className="tom derek">
            {lessons}
        </section>
    );
}

export default Derek;