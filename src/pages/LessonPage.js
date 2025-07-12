import { useParams, Link } from "react-router-dom";
// import Leon from "../components/Leon";
import Mathilda from "../components/Mathilda";
import { useEffect, useState } from "react";

function LessonPage() {
    const { slug, number } = useParams();
    const [lessonData, setLessonData] = useState(null);
    const [words, setWords] = useState([]);

    useEffect(() => {
        const loadLesson = async () => {
            try {
                const lesson = await import(`../data/${slug}/${slug}${number.padStart(2, '0')}.json`);
                setLessonData({
                    student: lesson.student,
                    slug: lesson.slug,
                    number: lesson.number,
                    date: lesson.date
                });
                setWords(lesson.words);
            } catch (err) {
                console.error("Lesson file not found", err);
            }
        };
        loadLesson();
    }, [slug, number]);

    if (!lessonData) return <div>Loading lesson...</div>;

    return (
        <div className="pelli">
            <div className="linus"><Link to={`/student/${slug}`}>{lessonData.student}</Link></div>
            <h2>Lesson {lessonData.number}: {lessonData.date}</h2>
            {/* <Leon lesson={lessonData} /> */}
            <Mathilda words={words} lesnum={lessonData.number} />
        </div>
    );
}

export default LessonPage;