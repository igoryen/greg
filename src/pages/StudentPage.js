import "../styles/dmitry.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import lessons from "../data/lessonsList.json";
import Mathilda from "../components/Mathilda";

function StudentPage() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [randomWord, setRandomWord] = useState(null);
    const [randomLessonMeta, setRandomLessonMeta] = useState(null);

    // ✅ memoize so it's stable across renders
    const studentLessons = useMemo(() => lessons[slug] || [], [slug]);

    const handleClick = (fileNumber) => {
        navigate(`/student/${slug}/p/${fileNumber}`);
    };

    // temporary while old pages exist (250714)
    //===============================================
    function StudentLink({ slug }) {
        const validSlugs = [
            "aa", "ab", "ag", "as", "dk", "gk", "gp", "ic", "ik",
            "im", "ip", "is", "mg", "ml", "ms", "os", "ot",
            "sb", "ss", "st", "vk", "yk"
        ];

        if (!validSlugs.includes(slug)) return null;

        return <Link to={`/${slug}`}>Go to {slug.toUpperCase()}'s old page</Link>;
    }
    //===============================================

    // ✅ pick one random word from one random lesson
    useEffect(() => {
        const loadRandomWord = async () => {
            try {
                if (studentLessons.length === 0) return;

                const randomLesson = studentLessons[Math.floor(Math.random() * studentLessons.length)];
                const fileNumber = String(randomLesson.fileNumber).padStart(2, "0");
                const lesson = await import(`../data/${slug}/${slug}${fileNumber}.json`);

                if (!lesson.words || lesson.words.length === 0) return;

                const randomWord = lesson.words[Math.floor(Math.random() * lesson.words.length)];

                setRandomWord(randomWord);
                setRandomLessonMeta({
                    period: lesson.period || "lesson",
                    number: lesson.number,
                    date: lesson.date,
                    student: lesson.slug
                });
            } catch (err) {
                console.error("Failed to load random word:", err);
            }
        };

        loadRandomWord();
    }, [slug, studentLessons]);

    return (
        <div id="dmitry">
            <h1><StudentLink slug={`${slug}`} /></h1>
            <h1>{slug.toUpperCase()}'s vocabulary</h1>

            {/* ✅ Random word section */}
            {randomWord && (
                <div className="random-word-section">
                    <h2>🎲 Random Word</h2>
                    <Mathilda words={[randomWord]} lesnum={randomLessonMeta?.number} />
                    <p className="pickle">
                        From {randomLessonMeta?.student} {randomLessonMeta?.period} {randomLessonMeta?.number} (
                        {randomLessonMeta?.date})
                    </p>
                </div>
            )}

            <div className="howard">
                {studentLessons.map((lesson) => {
                    const periodLabel = (lesson.period || "lesson")
                        .charAt(0).toUpperCase() + (lesson.period || "lesson").slice(1);

                    const displayDate = lesson.period === "week" && lesson.date
                        ? new Date(lesson.date).getFullYear()
                        : lesson.date;

                    return (
                        <button
                            key={lesson.fileNumber}
                            onClick={() => handleClick(String(lesson.fileNumber).padStart(2, "0"))}
                        >
                            <div className="session">{periodLabel}</div>
                            <div className="number">{lesson.number}</div> {/* from JSON */}
                            <div className="date">{displayDate}</div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default StudentPage;
