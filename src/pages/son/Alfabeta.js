import "../../styles/son/alfabeta.scss";

const letterData = [
    { letter: 'A', ipa1: 'a:', ipa2: 'eɪ' },
    { letter: 'B', ipa1: 'be', ipa2: 'bi' },
    { letter: 'C', ipa1: 'se', ipa2: 'si' },
    { letter: 'D', ipa1: 'de', ipa2: 'di' },
    { letter: 'E', ipa1: 'e', ipa2: 'i' },
    { letter: 'F', ipa1: 'ɛf', ipa2: 'ɛf' },
    { letter: 'G', ipa1: 'ge', ipa2: 'dʒi' },
    { letter: 'H', ipa1: 'a:ʃ', ipa2: 'eɪtʃ' },
    { letter: 'I', ipa1: 'i', ipa2: 'aɪ' },
    { letter: 'J', ipa1: 'ja:', ipa2: 'dʒeɪ' },
    { letter: 'K', ipa1: 'ka', ipa2: 'keɪ' },
    { letter: 'L', ipa1: 'ɛl', ipa2: 'ɛl' },
    { letter: 'M', ipa1: 'ɛm', ipa2: 'ɛm' },
    { letter: 'N', ipa1: 'ɛn', ipa2: 'ɛn' },
    { letter: 'O', ipa1: 'o', ipa2: 'oʊ' },
    { letter: 'P', ipa1: 'pe', ipa2: 'pi' },
    { letter: 'Q', ipa1: 'ku', ipa2: 'kju' },
    { letter: 'R', ipa1: 'ɛr', ipa2: 'ɑr' },
    { letter: 'S', ipa1: 'ɛs', ipa2: 'ɛs' },
    { letter: 'T', ipa1: 'te', ipa2: 'ti' },
    { letter: 'U', ipa1: 'u', ipa2: 'ju' },
    { letter: 'V', ipa1: 've', ipa2: 'vi' },
    { letter: 'W', ipa1: 'duble u', ipa2: 'ˈdʌbəl ju' },
    { letter: 'X', ipa1: 'iks', ipa2: 'ɛks' },
    { letter: 'Y', ipa1: 'wi:', ipa2: 'waɪ' },
    { letter: 'Z', ipa1: 'ze', ipa2: 'zi' }
];


const Alfabeta = (props) => {
    return (
        <section className="alfabeta">
            {letterData.map(({ letter, ipa1, ipa2 }) => (
                <div key={letter} className="gutierrez">
                    <div className="polly hood">{ipa1}</div>
                    <div className="lidia">{letter}</div>
                    <div className="polly toby">{ipa2}</div>
                </div>
            ))}
        </section>
    )

};

export default Alfabeta;