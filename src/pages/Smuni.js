import React, { useState, useEffect } from "react";
import InterlinearText from "../components/InterlinearText";

const Smuni = () => {
    const [fileNames, setFileNames] = useState([]);
    const [currentData, setCurrentData] = useState(null);
    const [currentTitle, setCurrentTitle] = useState("");

    useEffect(() => {
        // Replace this with a hardcoded list OR an endpoint to get file list
        // Since frontend cannot list public folder content dynamically,
        // you need to hardcode or auto-generate this list at build time
        setFileNames(["text1.json", "text2.json", "text3.json"]);
        // setFileNames(["text1.json"]);

    }, []);

    const loadText = async (fileName) => {
        const response = await fetch(`/data/smuni/${fileName}`);
        const json = await response.json();
        setCurrentData(json);
        setCurrentTitle(fileName.replace(".json", ""));
    };

    return (
        <div style={{ padding: "2em" }}>
            <h2>Select a Text</h2>
            <div style={{ marginBottom: "1em" }}>
                {fileNames.map((file) => (
                    <button
                        key={file}
                        onClick={() => loadText(file)}
                        style={{ marginRight: "0.5em", marginBottom: "0.5em" }}
                    >
                        {file.replace(".json", "")}
                    </button>
                ))}
            </div>

            {currentData && (
                <>
                    <h3>{currentTitle}</h3>
                    <InterlinearText data={currentData} />
                </>
            )}
        </div>
    );
};

export default Smuni;
