import "../styles/dmitry.scss";
import { useParams, useNavigate } from "react-router-dom";
import lessons from "../data/lessonsList.json";

function StudentPage() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const studentLessons = lessons[slug] || [];

    const handleClick = (lessonNumber) => {
        navigate(`/student/${slug}/lesson/${lessonNumber}`);
    };

    return (
        <div className="dmitry">
            <h1>{slug.toUpperCase()}'s vocabulary</h1>

            <div className="howard">
                {studentLessons.map((lesson) => {
                    const weekday = new Date(lesson.date).toLocaleDateString("en-US", { weekday: "short" });
                    return (
                        <button
                            key={lesson.number}
                            onClick={() => handleClick(lesson.number)}
                        >
                            <div className="session">Lesson</div>
                            <div className="number">{lesson.number}</div>
                            <div className="date">{lesson.date} ({weekday})</div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default StudentPage;