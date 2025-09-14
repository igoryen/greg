import "../styles/dmitry.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import lessons from "../data/lessonsList.json";

function StudentPage() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const studentLessons = lessons[slug] || [];

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

    return (
        <div className="dmitry">
            <h1><StudentLink slug={`${slug}`} /></h1>
            <h1>{slug.toUpperCase()}'s vocabulary</h1>

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
                            onClick={() => handleClick(String(lesson.fileNumber).padStart(2, '0'))}
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

