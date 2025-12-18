import "../../src/styles/linsi.scss"
import ExternalLink
    from "../components/ExternalLink";
const Linsi = (prop) => {

    const externalLinks = [
        { name: "deepseek", url: "https://chat.deepseek.com/" },
        { name: "toPhonetics", url: "https://tophonetics.com/" },
        { name: "Anglofor: Ruo", url: "https://anglofor.com/ruo" },
        { name: "CSV to JSON", url: "https://www.convertcsv.com/csv-to-json.htm" },
        { name: "JSON to TSV", url: "https://jsonformatter.org/json-to-tsv" },
        { name: "Emojipedia", url: "https://emojipedia.org/" },
        { name: "Random.org", url: "https://www.random.org/lists/" },
        { name: "Wiktionary", url: "https://en.wiktionary.org/" },
        { name: "Multitran", url: "https://www.multitran.com/m.exe?l1=1&l2=2" },
        { name: "Longman", url: "https://www.ldoceonline.com/" },
        { name: "TurboScribe, video downloader", url: "https://turboscribe.ai/downloader/youtube/video" },
        { name: "Советские учебники", url: "https://sovetskie-uchebniki.ru/" },
        { name: "Cambridge Dictionary", url: "https://dictionary.cambridge.org/" },
        { name: "Lojban dictionary", url: "https://la-lojban.github.io/sutysisku/lojban/index.html" },
        { name: "Comparative sentence (wiki)", url: "https://en.wikipedia.org/wiki/Comparative_sentence" },

    ];

    function renderExternalLinks() {
        return [...externalLinks]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ name, url }) => (
                <ExternalLink key={url} url={url}>
                    {name}
                </ExternalLink>
            ));
    }


    return (
        <section id="linsi">

            <div className="lundy">
                {renderExternalLinks()}
            </div>

            {/* <h1>ABC</h1>
            <div className="mesherakov">
                <ExternalLink url="https://chat.deepseek.com/">deepseek</ExternalLink>
                <ExternalLink url="https://tophonetics.com/">toPhonetics</ExternalLink>
                <ExternalLink url="https://anglofor.com/ruo">Anglofor: Ruo</ExternalLink>
                <ExternalLink url="https://www.convertcsv.com/csv-to-json.htm">CSV to JSON</ExternalLink>
                <ExternalLink url="https://jsonformatter.org/json-to-tsv">JSON to TSV</ExternalLink>
            </div>
            <h1>Text</h1>
            <div className="mesherakov">
                <ExternalLink url="https://emojipedia.org/">Emojipedia</ExternalLink>
                <ExternalLink url="https://www.random.org/lists/">Random.org</ExternalLink>
            </div>
            <h1>Dictionaries</h1>
            <div className="mesherakov">
                <ExternalLink url="https://en.wiktionary.org/">Wiktionary</ExternalLink>
                <ExternalLink url="https://www.multitran.com/m.exe?l1=1&l2=2">Multitran</ExternalLink>
                <ExternalLink url="https://www.ldoceonline.com/">Longman</ExternalLink>
            </div>
            <h1>Media</h1>
            <div className="mesherakov">
                <ExternalLink url="https://turboscribe.ai/downloader/youtube/video">TurboScribe</ExternalLink>
            </div> */}
        </section>
    );
};
export default Linsi;