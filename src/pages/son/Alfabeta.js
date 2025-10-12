import "../../styles/son/alfabeta.scss";

const letterData = [
    { letter: 'A', ipa1: 'a:', ipa2: 'eɪ', group: 'ay', spell: 'Alfa' },
    { letter: 'B', ipa1: 'be', ipa2: 'bi', group: 'ee', spell: 'Bravo' },
    { letter: 'C', ipa1: 'se', ipa2: 'si', group: 'ee', spell: 'Charlie' },
    { letter: 'D', ipa1: 'de', ipa2: 'di', group: 'ee', spell: 'Delta' },
    { letter: 'E', ipa1: 'e', ipa2: 'i', group: 'ee', spell: 'Echo' },
    { letter: 'F', ipa1: 'ɛf', ipa2: 'ɛf', spell: 'Foxtrot' },
    { letter: 'G', ipa1: 'ge', ipa2: 'dʒi', group: 'ee', spell: 'Golf' },
    { letter: 'H', ipa1: 'a:ʃ', ipa2: 'eɪtʃ', group: 'ay', spell: 'Hotel' },
    { letter: 'I', ipa1: 'i', ipa2: 'aɪ', group: 'igh', spell: 'India' },
    { letter: 'J', ipa1: 'ja:', ipa2: 'dʒeɪ', group: 'ay', spell: 'Juliett' },
    { letter: 'K', ipa1: 'ka', ipa2: 'keɪ', group: 'ay', spell: 'Kilo' },
    { letter: 'L', ipa1: 'ɛl', ipa2: 'ɛl', spell: 'Lima' },
    { letter: 'M', ipa1: 'ɛm', ipa2: 'ɛm', spell: 'Mike' },
    { letter: 'N', ipa1: 'ɛn', ipa2: 'ɛn', spell: 'November' },
    { letter: 'O', ipa1: 'o', ipa2: 'oʊ', group: 'ou', spell: 'Oscar' },
    { letter: 'P', ipa1: 'pe', ipa2: 'pi', group: 'ee', spell: 'Papa' },
    { letter: 'Q', ipa1: 'ku', ipa2: 'kju', spell: 'Quebec' },
    { letter: 'R', ipa1: 'ɛr', ipa2: 'ɑr', spell: 'Romeo' },
    { letter: 'S', ipa1: 'ɛs', ipa2: 'ɛs', spell: 'Sierra' },
    { letter: 'T', ipa1: 'te', ipa2: 'ti', group: 'ee', spell: 'Tango' },
    { letter: 'U', ipa1: 'u', ipa2: 'ju', spell: 'Uniform' },
    { letter: 'V', ipa1: 've', ipa2: 'vi', group: 'ee', spell: 'Victor' },
    { letter: 'W', ipa1: 'duble u', ipa2: 'ˈdʌbəl ju', spell: 'Whiskey' },
    { letter: 'X', ipa1: 'iks', ipa2: 'ɛks', spell: 'X-ray' },
    { letter: 'Y', ipa1: 'wi:', ipa2: 'waɪ', group: 'igh', spell: 'Yankee' },
    { letter: 'Z', ipa1: 'ze', ipa2: 'zi', group: 'ee', spell: 'Zulu' }
];

const Alfabeta = (props) => {
    return (
        <section id="alfabeta">
            {letterData.map(({ letter, ipa1, ipa2, group, spell }) => (
                <div
                    key={letter}
                    className={`gutierrez${group ? ` ${group}` : ''}`}
                >
                    <div className="lidia">{letter}</div>
                    <div className="rob">{spell}</div>
                    <div className="group">
                        <div className="polly hood">{ipa1}</div>
                        <div className="polly toby">{ipa2}</div>
                    </div>

                </div>
            ))}
        </section>
    );
};

export default Alfabeta;