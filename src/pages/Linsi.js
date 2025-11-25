import "../../src/styles/linsi.scss"
import ExternalLink
    from "../components/ExternalLink";
const Linsi = (prop) => {


    return (
        <section id="linsi">
            <h1>ABC</h1>
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
            </div>
        </section>
    );
};
export default Linsi;