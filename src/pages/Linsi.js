import "../../src/styles/linsi.scss"
import ExternalLink
    from "../components/ExternalLink";
const Linsi = (prop) => {


    return (
        <section id="linsi">
            <ExternalLink url="https://chat.deepseek.com/">deepseek</ExternalLink><br></br>
            <ExternalLink url="https://tophonetics.com/">toPhonetics</ExternalLink><br></br>
            <ExternalLink url="https://anglofor.com/ruo">Anglofor: Ruo</ExternalLink><br></br>
            <ExternalLink url="https://www.convertcsv.com/csv-to-json.htm">CSV to JSON</ExternalLink><br></br>
            <ExternalLink url="https://jsonformatter.org/json-to-tsv">JSON to TSV</ExternalLink><br></br>

        </section>
    );
};
export default Linsi;