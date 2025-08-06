import React from "react";
import "../styles/InterlinearText.scss";

const InterlinearText = ({ data }) => {
    return (
        <div className="interlinear-paragraph">
            {data.map((sentence, idx) => (
                <div className="sentence_" key={idx}>
                    {sentence.map((word, i) => (
                        <div className="word_" key={i}>
                            <div className="rus_">{word.rus}</div>
                            <div className="eng_">{word.eng}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default InterlinearText;
