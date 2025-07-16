import { useState } from "react";
import "../../src/styles/jimte.scss"


const RandomWordWrapper = () => {
    const [inputText, setInputText] = useState("");
    const [outputLines, setOutputLines] = useState([]);

    const handleTransform = () => {
        const lines = inputText.split(/\r?\n/);
        const shuffledLines = lines.map(line => {
            const words = line.split(/\s+/).filter(Boolean);
            return [...words].sort(() => Math.random() - 0.5);
        });
        setOutputLines(shuffledLines);
    };

    const handleClear = () => {
        setInputText("");
        setOutputLines([]);
    };

    return (
        <div className="jimte">
            <h1>Random Word Wrapper</h1>
            <textarea
                placeholder="Paste your text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={6}
                style={{ width: "100%" }}
            ></textarea>
            <br />
            <button onClick={handleTransform}>Transform</button>
            <button onClick={handleClear} style={{ marginLeft: "10px" }}>Clear</button>

            {outputLines.length > 0 && (
                <ol style={{ marginTop: "20px", marginLeft: "1em" }}>
                    {outputLines.map((line, idx) => (
                        <li key={idx} style={{ marginBottom: "12px" }}>
                            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                {line.map((word, wIdx) => (
                                    <div key={wIdx} className="red-border">{word}</div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default RandomWordWrapper;
