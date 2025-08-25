import { useParams, Link } from "react-router-dom";
// import Leon from "../components/Leon";
import Mathilda from "../components/Mathilda";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

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
                    date: lesson.date,
                    period: lesson.period || "lesson"  // fallback if missing
                });
                setWords(lesson.words);
            } catch (err) {
                console.error("Lesson file not found", err);
            }
        };
        loadLesson();
    }, [slug, number]);

    if (!lessonData) return <div>Loading lesson...</div>;

    // Capitalize the period ("Lesson" or "Week")
    const periodLabel = lessonData.period.charAt(0).toUpperCase() + lessonData.period.slice(1);

    // Meta title & description for previews
    const metaTitle = `${lessonData.student} - ${periodLabel} ${lessonData.number}`;

    // 🔽 Show only year if period === "week"
    const displayDate = lessonData.period === "week" && lessonData.date
        ? new Date(lessonData.date).getFullYear()
        : lessonData.date;

    return (
        <div className="pelli">
            <Helmet>
                <title>{metaTitle}</title>
            </Helmet>
            <div className="linus">
                <Link to={`/student/${slug}`}>{lessonData.student}</Link>
            </div>
            <h2>{periodLabel} {lessonData.number}: {displayDate}</h2>
            {/* <Leon lesson={lessonData} /> */}
            <Mathilda words={words} lesnum={lessonData.number} />
        </div>
    );
}

export default LessonPage;
