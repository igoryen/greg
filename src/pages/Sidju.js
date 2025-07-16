import { useNavigate } from "react-router-dom";
import "../styles/sidju.scss";

const Sidju = () => {
    const navigate = useNavigate();

    const pages = [
        { label: "Alfabeta", path: "/alfabeta", desc: "the names of the letters" },
        { label: "Cnicro", path: "/cnicro", desc: "\"be\" in present simple" },
        { label: "Jimte", path: "/jimte", desc: "random word wrapper" },
        { label: "Kooi", path: "/kooi", desc: "imperative" },
        { label: "Prenu", path: "/prenu", desc: "possessive pronouns" },
        { label: "Rimni", path: "/rimni", desc: "IPA symbols" },
        { label: "Ruo", path: "/ruo", desc: "IPA to Cyrillic converter" },
        { label: "Uenba", path: "/uenba", desc: "sound drilling" },
        { label: "Voksa", path: "/voksa", desc: "Insta" },
        { label: "Zunsna", path: "/zunsna", desc: "phoneme <s>" },
    ];

    return (
        <div className="sidju">
            {pages.map((page, idx) => (
                <div className="pippy">
                    <button key={idx} onClick={() => navigate(page.path)}>
                        {page.label}
                    </button>
                    <div className="ribbet">{page.desc}</div>
                </div>
            ))}
        </div>
    );
};

export default Sidju;
