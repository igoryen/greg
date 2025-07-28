import { useState } from "react";

// Russian cluster substitutions
const clustersRussian = {

    "ʃju": "щъю",
    "ʃi": "щи", "ʃæ": "щæ", "ʃɑ": "шɑ", "ʃɪ": "щɪ", "ʃɛ": "щɛ", "ʃʌ": "шʌ", "ʃʊ": "щʊ",
    "ʃe": "шэ", "ʃo": "шо", "ʃu": "щу", "ʃa": "ща", "ʃɜ": "щɜ", "ʃə": "шə",

    "'ju": "ъˈю", "ˌju": "ъˌю", "pju": "пъю", "tju": "тъю", "kju": "къю",
    "fju": "фъю", "sju": "съю",
    "hju": "hъю", "bju": "бъю",
    "dju": "дъю", "ɡju": "гъю", "vju": "въю", "zju": "зъю", "mju": "мъю",
    "nju": "нъю", "rju": "ръю", "lju": "лъю", "eɪ": "эй", "ju": "ю",
    "aɪ": "ай", "ɔr": "ор", "ɔɪ": "ой", "aʊ": "ау", "oʊ": "оу"
};

// Ukrainian cluster substitutions
const clustersUkrainian = {
    "'ju": "ьˈю", "ˌju": "ьˌю", "pju": "п’ю", "tju": "т’ю", "kju": "к’ю",
    "fju": "ф’ю", "sju": "с’ю", "ʃju": "ш’ю", "hju": "х’ю", "bju": "б’ю",
    "dju": "д’ю", "ɡju": "ґ’ю", "vju": "в’ю", "zju": "з’ю", "mju": "м’ю",
    "nju": "н’ю", "rju": "р’ю", "lju": "л’ю", "eɪ": "ей", "ju": "ю",
    "aɪ": "ай", "ɔr": "ор", "ɔɪ": "ой", "aʊ": "ау", "oʊ": "оу"
};

// Russian single-character replacements
const ipaToCyrillicRussian = {
    "p": "п", "b": "б", "f": "ф", "v": "в", "k": "к", "ɡ": "г",
    "s": "с", "z": "з", "l": "л", "m": "м", "j": "й", "ʃ": "ш",
    "ʒ": "ж", "t": "т", "d": "д", "n": "н", "i": "и", "u": "у",
    "r": "р", "ʧ": "ч", "ʤ": "дж", "ɛ": "э"
};

// Ukrainian single-character replacements
const ipaToCyrillicUkrainian = {
    "p": "п", "b": "б", "f": "ф", "v": "в", "k": "к", "ɡ": "ґ",
    "s": "с", "z": "з", "l": "л", "m": "м", "j": "й", "ʃ": "ш",
    "ʒ": "ж", "t": "т", "d": "д", "n": "н", "i": "і", "ɪ": "и", "u": "у",
    "r": "р", "ʧ": "ч", "ʤ": "дж", "ɛ": "е"
};

export default function IpaToCyrillicForm() {
    const [inputText, setInputText] = useState("");
    const [outputLines, setOutputLines] = useState([]);
    const [mode, setMode] = useState("russian");

    const getSubstitutionMap = () => {
        return mode === "russian" ? ipaToCyrillicRussian : ipaToCyrillicUkrainian;
    };

    const getClustersMap = () => {
        return mode === "russian" ? clustersRussian : clustersUkrainian;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const map = getSubstitutionMap();
        const clusters = getClustersMap();

        const lines = inputText.split(/\r?\n/);
        const transformed = lines.map(line => {
            // Apply cluster substitutions first
            let modified = line;
            for (const [key, value] of Object.entries(clusters)) {
                modified = modified.replaceAll(key, value);
            }

            // Apply single-character substitutions
            return modified
                .split("")
                .map(char => map[char] ?? char)
                .join("");
        });

        setOutputLines(transformed);
    };

    const handleClear = () => {
        setInputText("");
        setOutputLines([]);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(outputLines.join("\n"));
    };

    return (
        <div>
            <h1>IPA to Cyrillic Converter</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Enter IPA transcription list here..."
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    rows={8}
                    style={{ width: '100%' }}
                ></textarea>

                <div style={{ margin: '8px 0' }}>
                    <label>
                        Mode:
                        <select
                            value={mode}
                            onChange={(e) => setMode(e.target.value)}
                            style={{ marginLeft: '8px' }}
                        >
                            <option value="russian">Russian</option>
                            <option value="ukrainian">Ukrainian</option>
                        </select>
                    </label>
                </div>

                <button type="submit">Submit</button>
                <button type="button" onClick={handleClear} style={{ marginLeft: '8px' }}>
                    Clear
                </button>
            </form>

            {outputLines.length > 0 && (
                <div>
                    <h2>Converted Output:</h2>
                    <textarea
                        readOnly
                        value={outputLines.join("\n")}
                        rows={outputLines.length || 4}
                        style={{ width: '100%', maxHeight: '20em' }}
                    ></textarea>
                    <br />
                    <button type="button" onClick={handleCopy}>Copy Output</button>
                </div>
            )}
        </div>
    );
}
