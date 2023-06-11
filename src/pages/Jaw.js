import "../styles/jaw/jawMain.scss";
import data from "../json/jaw.json";
console.log(data[0].tone1char);

let grList = [];


data.map((item) => {
    console.log(item)
    grList.push(
        <div className="row">
            <div className="cell">
                <div className="part1">{item.tone1char}</div>
                <div className="part2">{item.tone1gr}</div>
            </div>

            <div className="cell">
                <div className="part1">{item.tone2char}</div>
                <div className="part2">{item.tone2gr}</div>
            </div>
            <div className="cell">
                <div className="part1">{item.tone3char}</div>
                <div className="part2">{item.tone3gr}</div>
            </div>

            <div className="cell">
                <div className="part1">{item.tone4char}</div>
                <div className="part2">{item.tone4gr}</div>
            </div>

            <div className="cell-4">
                <div>{item.bpmf}</div>
            </div>

        </div>
    )
});


const Jaw = () => {
    return (
        <section className="main" id="jaw">
            <div className="jaw01">
                <div>{grList}</div>
            </div>
        </section>
    );
};

export default Jaw;