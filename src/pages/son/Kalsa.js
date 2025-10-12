import React from 'react';
import "../../styles/son/kalsa.scss";
import poemData from "../../data/kalsa.json";

const Kalsa = () => {


    // Define which words AND word parts you want to highlight manually
    const highlightedWords = {
        // Full words
        "Chaos": "word-highlight",
        "Dearest": "word-emphasis",
        "creature": "word-accent",
        "Creation": "word-special",
        "Studying": "word-highlight",
        "English": "word-emphasis",
        "pronunciation": "word-accent",
        "teach": "word-special",
        "verse": "word-highlight",
        "Sounds": "word-emphasis",
        "corpse": "word-accent",
        "corps": "word-special",
        "horse": "word-highlight",
        "worse": "word-emphasis",
        "keep": "word-accent",
        "Susy": "word-special",
        "busy": "word-highlight",

        // IPA full words
        // "ˈkeɪɑs": "word-highlight",
        // "ˈdɪrəst": "word-emphasis",
        "ˈkriʧər": "word-accent",
        "kriˈeɪʃən": "word-special",
        "ˈstʌdiɪŋ": "word-highlight",
        "ˈɪŋɡlɪʃ": "word-emphasis",
        "prəˌnʌnsiˈeɪʃən": "word-accent",

        // Russian full words
        // "ˈкэйɑс": "word-highlight",
        // "ˈдɪрəст": "word-emphasis",
        "ˈкричəр": "word-accent",
        "криˈэйшəн": "word-special",

        // WORD PARTS - syllables, prefixes, suffixes, etc.
        // English word parts
        // "tion": "word-suffix", // pronunciation, creation, etc.
        // "ing": "word-suffix",  // studying, keeping, etc.
        // "ea": "word-vowel",    // teach, creature, etc.
        // "ou": "word-vowel",    // sounds, etc.
        // "or": "word-vowel",    // horse, corps, etc.

        // IPA word parts - phonetic elements
        "ˈ": "word-stress",    // primary stress marker
        "ˌ": "word-secondary", // secondary stress marker
        "ə": "word-schwa",     // schwa sound
        "ɪ": "word-vowel",     // short i sound
        "æ": "word-vowel",
        "ɑ": "word-vowel",
        "ɜ": "word-vowel",
        "ʊ": "word-vowel",
        "ʌ": "word-vowel",
        "ɝ": "word-vowel",
        "ɔ": "word-vowel",
        //"ʧ": "word-consonant", // ch sound
        //"ʃ": "word-consonant", // sh sound
        "θ": "word-consonant", // th sound
        "ð": "word-consonant", // th sound
        "ŋ": "word-consonant",

        // Russian word parts - using different class names to avoid duplicates
        // "й": "word-consonant-ru", // y sound
        // "ч": "word-consonant-ru", // ch sound
        // "ш": "word-consonant-ru", // sh sound
        "h": "word-consonant-ru",
        "w": "word-consonant-ru", // sh sound
        "ɪŋ": "word-suffix",
    };

    const wrapSelectedWords = (text) => {
        // First, split into words to handle punctuation properly
        const words = text.split(' ');

        return words.map((word, wordIndex) => {
            // Check if the entire word should be highlighted
            const cleanWord = word.replace(/[.,;!?]/g, '');
            const wholeWordClass = highlightedWords[cleanWord];

            if (wholeWordClass) {
                return (
                    <span
                        key={wordIndex}
                        className={wholeWordClass}
                        title={`Highlighted word: ${cleanWord}`}
                    >
                        {word}
                        {wordIndex < words.length - 1 ? ' ' : ''}
                    </span>
                );
            }

            // If not a whole word, check for parts within the word
            const parts = [];
            let currentText = word;

            // Sort highlight keys by length (longer first) to match longer patterns first
            const highlightKeys = Object.keys(highlightedWords)
                .filter(key => key.length > 1) // Only multi-character patterns for word parts
                .sort((a, b) => b.length - a.length);

            while (currentText.length > 0) {
                let matched = false;

                // Try to match multi-character patterns first
                for (const pattern of highlightKeys) {
                    if (currentText.startsWith(pattern)) {
                        parts.push({
                            text: pattern,
                            className: highlightedWords[pattern],
                            isHighlighted: true
                        });
                        currentText = currentText.slice(pattern.length);
                        matched = true;
                        break;
                    }
                }

                if (!matched) {
                    // Try single character patterns
                    const firstChar = currentText[0];
                    const singleCharClass = highlightedWords[firstChar];

                    if (singleCharClass) {
                        parts.push({
                            text: firstChar,
                            className: singleCharClass,
                            isHighlighted: true
                        });
                    } else {
                        parts.push({
                            text: firstChar,
                            className: null,
                            isHighlighted: false
                        });
                    }
                    currentText = currentText.slice(1);
                }
            }

            if (parts.some(part => part.isHighlighted)) {
                // Some parts are highlighted, render with spans
                return (
                    <span key={wordIndex}>
                        {parts.map((part, partIndex) =>
                            part.isHighlighted ? (
                                <span
                                    key={partIndex}
                                    className={part.className}
                                    title={`Highlighted: ${part.text}`}
                                >
                                    {part.text}
                                </span>
                            ) : (
                                part.text
                            )
                        )}
                        {wordIndex < words.length - 1 ? ' ' : ''}
                    </span>
                );
            }

            // No highlights, return plain word
            return (
                <React.Fragment key={wordIndex}>
                    {word}
                    {wordIndex < words.length - 1 ? ' ' : ''}
                </React.Fragment>
            );
        });
    };

    return (
        <div id="kalsa" className="poem-container">
            <h1>The Chaos - English Pronunciation Poem</h1>

            {poemData.map((line, index) => (
                <div key={index} className="poem-line">

                    <div className="line-section">
                        {/* <span className="label">Russian:</span> */}
                        <span className="rus-text">
                            {wrapSelectedWords(line.rus)}
                        </span>
                    </div>

                    <div className="line-section">
                        {/* <span className="label">Original:</span> */}
                        <span className="spell-text">
                            {wrapSelectedWords(line.spell)}
                        </span>
                    </div>

                    <div className="line-section">
                        {/* <span className="label">IPA:</span> */}
                        <span className="ipa-text">
                            {wrapSelectedWords(line.ipa)}
                        </span>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Kalsa;