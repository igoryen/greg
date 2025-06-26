import "../../styles/son/alfabeta.scss";

const letterData = [
    { letter: 'A', ipa1: 'a:', ipa2: 'eɪ', group: 'ay' },
    { letter: 'B', ipa1: 'be', ipa2: 'bi', group: 'ee' },
    { letter: 'C', ipa1: 'se', ipa2: 'si', group: 'ee' },
    { letter: 'D', ipa1: 'de', ipa2: 'di', group: 'ee' },
    { letter: 'E', ipa1: 'e', ipa2: 'i', group: 'ee' },
    { letter: 'F', ipa1: 'ɛf', ipa2: 'ɛf' },
    { letter: 'G', ipa1: 'ge', ipa2: 'dʒi', group: 'ee' },
    { letter: 'H', ipa1: 'a:ʃ', ipa2: 'eɪtʃ', group: 'ay' },
    { letter: 'I', ipa1: 'i', ipa2: 'aɪ', group: 'igh' },
    { letter: 'J', ipa1: 'ja:', ipa2: 'dʒeɪ', group: 'ay' },
    { letter: 'K', ipa1: 'ka', ipa2: 'keɪ', group: 'ay' },
    { letter: 'L', ipa1: 'ɛl', ipa2: 'ɛl', },
    { letter: 'M', ipa1: 'ɛm', ipa2: 'ɛm', },
    { letter: 'N', ipa1: 'ɛn', ipa2: 'ɛn', },
    { letter: 'O', ipa1: 'o', ipa2: 'oʊ', group: 'ou' },
    { letter: 'P', ipa1: 'pe', ipa2: 'pi', group: 'ee' },
    { letter: 'Q', ipa1: 'ku', ipa2: 'kju', },
    { letter: 'R', ipa1: 'ɛr', ipa2: 'ɑr', },
    { letter: 'S', ipa1: 'ɛs', ipa2: 'ɛs', },
    { letter: 'T', ipa1: 'te', ipa2: 'ti', group: 'ee' },
    { letter: 'U', ipa1: 'u', ipa2: 'ju', },
    { letter: 'V', ipa1: 've', ipa2: 'vi', group: 'ee' },
    { letter: 'W', ipa1: 'duble u', ipa2: 'ˈdʌbəl ju' },
    { letter: 'X', ipa1: 'iks', ipa2: 'ɛks', },
    { letter: 'Y', ipa1: 'wi:', ipa2: 'waɪ', group: 'igh' },
    { letter: 'Z', ipa1: 'ze', ipa2: 'zi', group: 'ee' }
];

const Alfabeta = (props) => {
    return (
        <section className="alfabeta">
            {letterData.map(({ letter, ipa1, ipa2, group }) => (
                <div
                    key={letter}
                    className={`gutierrez${group ? ` ${group}` : ''}`}
                >
                    <div className="polly hood">{ipa1}</div>
                    <div className="lidia">{letter}</div>
                    <div className="polly toby">{ipa2}</div>
                </div>
            ))}
        </section>
    );
};

export default Alfabeta;