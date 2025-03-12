function Leon({ lesson }) {
    return (
        <section>
            <h3>Anglofor</h3>
            <h1><a href={`/${lesson.slug}`} rel="noopener noreferrer" >{lesson.student}</a > :: Lesson {lesson.number}</h1>
        </section>
    );
}

export default Leon;