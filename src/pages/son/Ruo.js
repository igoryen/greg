import { useState } from "react";
import "../../styles/ruo.scss";

const highlightIPA = (text) => {
    const charsToBold = ['h', 'w', 'æ', 'ð', 'ŋ', 'ɔ', 'ə', 'ʊ', 'ʌ', 'θ', 'ɑ', 'ɜ', 'ɪ', 'v'];
    const regex = new RegExp(`(${charsToBold.map(c => c.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")).join('|')})`, 'g');
    return text.replace(regex, "<b>$1</b>");
};

const clustersRussian = {
    "ʃju": "щъю", "ʃi": "щи", "ʃæ": "щæ", "ʃɑ": "шɑ", "ʃɪ": "щɪ", "ʃɛ": "щɛ", "ʃʌ": "шʌ", "ʃʊ": "щʊ",
    "ʃe": "шэ", "ʃo": "шо", "ʃu": "щу", "ʃɜ": "щɜ", "ʃə": "шə",
    "'ju": "ъˈю", "ˌju": "ъˌю", "pju": "пъю", "tju": "тъю", "kju": "къю",
    "fju": "фъю", "sju": "съю", "hju": "hъю", "bju": "бъю", "dju": "дъю",
    "ɡju": "гъю", "vju": "въю", "zju": "зъю", "mju": "мъю", "nju": "нъю",
    "rju": "ръю", "lju": "лъю", "eɪ": "эй", "ju": "ю", "aɪ": "ай",
    "ɔr": "ор", "ɔɪ": "ой", "aʊ": "ау", "oʊ": "оу",

    "ʃa": "ща", "йŋ": "ɪŋ"
};

const clustersUkrainian = {
    "'ju": "ьˈю", "ˌju": "ьˌю", "pju": "п’ю", "tju": "т’ю", "kju": "к’ю",
    "fju": "ф’ю", "sju": "с’ю", "ʃju": "ш’ю", "hju": "х’ю", "bju": "б’ю",
    "dju": "д’ю", "ɡju": "ґ’ю", "vju": "в’ю", "zju": "з’ю", "mju": "м’ю",
    "nju": "н’ю", "rju": "р’ю", "lju": "л’ю", "eɪ": "ей", "ju": "ю", "je": "є",
    "aɪ": "ай", "ɔr": "ор", "ɔɪ": "ой", "aʊ": "ау", "oʊ": "оу"
};

const ipaToCyrillicRussian = {
    "p": "п", "b": "б", "f": "ф", "v": "в", "k": "к", "ɡ": "г",
    "s": "с", "z": "з", "l": "л", "m": "м", "j": "й", "ʃ": "ш",
    "ʒ": "ж", "t": "т", "d": "д", "n": "н", "i": "и", "u": "у",
    "r": "р", "ɹ": "р", "ɚ": "əр", "ʧ": "ч", "ʤ": "дж", "ɛ": "э"
};

const ipaToCyrillicUkrainian = {
    "p": "п", "b": "б", "f": "ф", "k": "к", "ɡ": "ґ",
    "s": "с", "z": "з", "l": "л", "m": "м", "j": "й", "ʃ": "ш",
    "ʒ": "ж", "t": "т", "d": "д", "n": "н", "i": "і", "ɪ": "и", "u": "у",
    "r": "р", "ɹ": "р", "ɚ": "əр", "ʧ": "ч", "ʤ": "дж", "ɛ": "е"
};

export default function IpaToCyrillicForm() {
    const [inputText, setInputText] = useState("");
    const [plainOutput, setPlainOutput] = useState("");
    const [highlightedOutput, setHighlightedOutput] = useState("");
    const [mode, setMode] = useState("russian");

    const getSubstitutionMap = () =>
        mode === "russian" ? ipaToCyrillicRussian : ipaToCyrillicUkrainian;

    const getClustersMap = () =>
        mode === "russian" ? clustersRussian : clustersUkrainian;

    const handleSubmit = (e) => {
        e.preventDefault();
        const map = getSubstitutionMap();
        const clusters = getClustersMap();

        const lines = inputText.split(/\r?\n/);

        const plainTransformed = lines.map((line) => {
            let modified = line;
            for (const [key, value] of Object.entries(clusters)) {
                modified = modified.replaceAll(key, value);
            }
            return modified
                .split("")
                .map((char) => map[char] ?? char)
                .join("");
        });

        setPlainOutput(plainTransformed.join("\n"));

        const htmlTransformed = plainTransformed.map(line => highlightIPA(line));
        setHighlightedOutput(htmlTransformed.join("<br />"));
    };

    const handleClear = () => {
        setInputText("");
        setPlainOutput("");
        setHighlightedOutput("");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(plainOutput);
    };

    return (
        <div id="ruo">
            <h1>IPA to Cyrillic Converter</h1>

            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Enter IPA transcription list here..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    rows={6}
                    style={{ width: "100%" }}
                />

                <div style={{ margin: "8px 0" }}>
                    <label>
                        Mode:
                        <select
                            value={mode}
                            onChange={(e) => setMode(e.target.value)}
                            style={{ marginLeft: "8px" }}
                        >
                            <option value="russian">Russian</option>
                            <option value="ukrainian">Ukrainian</option>
                        </select>
                    </label>
                </div>

                <button type="submit">Submit</button>
                <button type="button" onClick={handleClear} style={{ marginLeft: "10px" }}>Clear</button>
            </form>

            {plainOutput && (
                <>
                    <h2>Plain Output (Copyable):</h2>
                    <textarea
                        value={plainOutput}
                        readOnly
                        rows={6}
                        style={{ width: "100%" }}
                    />
                    <button onClick={handleCopy}>Copy</button>
                </>
            )}

            {highlightedOutput && (
                <>
                    <h2>Highlighted Output:</h2>
                    <div
                        style={{
                            border: "1px solid #ccc",
                            padding: "1em",
                            marginTop: "1em",
                            whiteSpace: "pre-wrap",
                            lineHeight: "1.5",
                            fontSize: "1.2em"
                        }}
                        dangerouslySetInnerHTML={{ __html: highlightedOutput }}
                    />
                </>
            )}
        </div>
    );
}
