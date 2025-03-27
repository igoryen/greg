function Paloma({ paloma, sound }) {

    const bucket = [];
    for (let [i, sentence] of paloma.entries()) {
        i++;

        let index = sentence.ipa_uenba.indexOf(sound);
        let firstPart = sentence.ipa_uenba.substr(0, index);
        let _sound = sentence.ipa_uenba.charAt(index);
        let lastPart = sentence.ipa_uenba.substr(index + 1);

        bucket.push(
            <div className="word_uenba" key={i}>
                <div className="jim">
                    <div className="rus_uenba"> {sentence.rus_uenba} </div>
                    <div className="cefr_uenba"> {sentence.cefr_uenba} </div>
                </div>
                <div className="tim">
                    <div className="ipa_uenba">{firstPart}<span className="vowel_uenba">{_sound}</span>{lastPart}</div>
                    <div className="spell_uenba"> {sentence.spell_uenba} </div>
                </div>
            </div>
        );
    }
    return (
        <section className="xxx">
            {bucket}
        </section>
    );
}

export default Paloma;