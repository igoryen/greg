function Paloma({ bag, sound, lang }) {

    const bucket = [];
    for (let [i, sentence] of bag.entries()) {
        i++;

        let index = sentence.ipa.indexOf(sound);
        let firstPart = sentence.ipa.substr(0, index);
        let _sound = sentence.ipa.charAt(index);
        let lastPart = sentence.ipa.substr(index + 1);

        bucket.push(
            <div className="word_uenba" key={i}>
                <div className="jim">
                    <div className="rus_uenba"> {sentence[lang]} </div>
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
            <pre>{lang}</pre>
            {bucket}
        </section>
    );
}

export default Paloma;