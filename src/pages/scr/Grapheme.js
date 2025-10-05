import "../../styles/scr/grapheme.scss";
import graphemeData from "../../data/graphemes.json"

const Grapheme = (prop) => {
    // Helper function to highlight grapheme in example text
    const highlightGrapheme = (example, grapheme) => {
        // Escape special characters in grapheme for regex
        const escapedGrapheme = grapheme.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escapedGrapheme})`, 'gi');

        // Split the example by the grapheme and wrap matches in <b>
        const parts = example.split(regex);

        return parts.map((part, index) =>
            part.toLowerCase() === grapheme.toLowerCase()
                ? <b key={index}>{part}</b>
                : part
        );
    };

    return (
        <section id="grapheme">
            <h1>Squiggles (graphemes)</h1>
            <ol>
                {graphemeData.graphemes.map((pattern, index) => (
                    <li key={index}>
                        <div className="cox">
                            <div className="opr">
                                <div className="cell xyz">{pattern.grapheme}</div>
                                <div className="cell abc">{pattern.pronunciation}</div>
                            </div>
                            <div className="cell fgh">
                                {pattern.examples.map((example, exampleIndex) => (
                                    <p key={exampleIndex}>
                                        {highlightGrapheme(example, pattern.grapheme)}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
};

export default Grapheme;