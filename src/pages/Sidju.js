import { useNavigate } from "react-router-dom";
import "../styles/sidju.scss";

const Sidju = () => {
    const navigate = useNavigate();

    const pages = [
        { label: "Alfabeta", path: "/alfabeta", desc: "the names of the letters" },
        { label: "Asti", path: "/asti", desc: "the existential THERE" },
        { label: "Clani", path: "/clani", desc: "vowels: long, short" },
        { label: "Cnici", path: "/cnici", desc: "order the words in a sentence (DND)" },
        { label: "Cnicro", path: "/cnicro", desc: "\"be\" in present simple" },
        { label: "Gadri", path: "/gadri", desc: "articles: ə/ən, ðə/ði" },
        { label: "Jimte", path: "/jimte", desc: "Message shredder" },
        { label: "Kooi", path: "/kooi", desc: "imperatives" },
        { label: "Linsi", path: "/linsi", desc: "bookmarks to web resources" },
        { label: "Prenu", path: "/prenu", desc: "possessive pronouns" },
        { label: "Rimni", path: "/rimni", desc: "IPA symbols" },
        { label: "Ruo", path: "/ruo", desc: "IPA to Cyrillic converter" },
        { label: "Smuni", path: "/smuni", desc: "Interlinear texts" },
        { label: "Uenba", path: "/uenba", desc: "sound drilling" },
        { label: "Voksa", path: "/voksa", desc: "Insta" },
        { label: "Zunsna", path: "/zunsna", desc: "phoneme <s>" },
    ];

    return (
        <div id="sidju">
            {pages.map((page, idx) => (
                <button className={page.label} key={idx} onClick={() => navigate(page.path)}>
                    <div className="polly"> {page.label}</div>
                    <div className="ribbet">{page.desc}</div>
                </button>
            ))}
        </div>
    );
};

export default Sidju;
