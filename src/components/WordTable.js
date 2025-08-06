import { useState } from "react";
import data from "../data/words.json";
import "../styles/wordtable.scss";

const WordTable = () => {
    const [rows, setRows] = useState(data);
    const [sortConfig, setSortConfig] = useState({});
    const [displayMode, setDisplayMode] = useState("ipa");
    const [showThe, setShowThe] = useState(Array(data.length).fill(false));
    const [showA, setShowA] = useState(Array(data.length).fill(false));


    const handleToggleDisplayMode = () => {
        setDisplayMode(prev => {
            if (prev === "ipa") return "sampa";
            if (prev === "sampa") return "uampa";
            return "ipa";
        });
    };

    const handleToggleThe = (index) => {
        const updated = [...showThe];
        updated[index] = !updated[index];
        setShowThe(updated);
    };

    const handleToggleA = (index) => {
        const updated = [...showA];
        updated[index] = !updated[index];
        setShowA(updated);
    };

    const handleSort = (key) => {
        const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
        const sorted = [...rows].sort((a, b) => {
            if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
            if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
            return 0;
        });
        setRows(sorted);
        setSortConfig({ key, direction });
    };

    return (
        <section id="wordTable">
            <button onClick={handleToggleDisplayMode} style={{ marginLeft: '0.5rem' }}>
                {displayMode === "ipa" ? "Show SAMPA" :
                    displayMode === "sampa" ? "Show UAMPA" : "Show IPA"}
            </button>

            <table>
                <thead>
                    <tr>
                        <th>
                            a/an <button onClick={() => handleSort("articleA")}>⇅</button>
                        </th>
                        <th>
                            the <button onClick={() => handleSort("articleThe")}>⇅</button>
                        </th>
                        <th>
                            Write <button onClick={() => handleSort("word")}>⇅</button>
                        </th>
                        <th>
                            Say
                            <button onClick={() => handleSort("ipa")}>⇅</button>

                        </th>
                        <th>
                            Emoji <button onClick={() => handleSort("emoji")}>⇅</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((item, idx) => (
                        <tr key={idx}>
                            <td className="indef clickable" onClick={() => handleToggleA(idx)} >
                                {showA[idx] ? item.articleA : "?"}
                            </td>

                            <td className="def clickable" onClick={() => handleToggleThe(idx)} >
                                {showThe[idx] ? item.articleThe : "?"}
                            </td>

                            <td className="write">
                                {item.word}
                            </td>

                            <td className="say">
                                {displayMode === "ipa" ? item.ipa :
                                    displayMode === "sampa" ? item.sampa : item.uampa}
                            </td>


                            <td className="emoji">{item.emoji}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default WordTable;
