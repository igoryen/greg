import { useState } from "react";

const ipaToCyrillicMap = {
    "p": "п",
    "b": "б",
    "f": "ф",
    "v": "в",
    "k": "к",
    "ɡ": "г",
    "s": "с",
    "z": "з",
    "l": "л",
    "m": "м",
    "j": "й",
    "ʃ": "щ",
    "ʒ": "ж",
    "t": "т",
    "d": "д",
    "n": "н",
    "i": "и",
    "u": "у",
    "r": "р",
    "ʧ": "ч",
    "ʤ": "дж",
    "ɛ": "э"
};

export default function IpaToCyrillicForm() {
    const [inputText, setInputText] = useState("");
    const [outputLines, setOutputLines] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const lines = inputText.split(/\r?\n/);
        const transformed = lines.map(line =>
            line
                .split("")
                .map(char => ipaToCyrillicMap[char] ?? char)
                .join("")
        );
        setOutputLines(transformed);
    };

    const handleClear = () => {
        setInputText("");
        setOutputLines([]);
    };

    const handleCopy = () => {
        const textToCopy = outputLines.join("\n");
        navigator.clipboard.writeText(textToCopy);
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
                <br />
                <button type="submit">Submit</button>
                <button type="button" onClick={handleClear} style={{ marginLeft: '8px' }}>Clear</button>
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
