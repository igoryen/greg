import "../styles/voksa.scss";
import React from "react";
import cuxna from "../data/p250322.json";

class Voksa extends React.Component {
    componentDidMount() {
        window.$(".relpi").flip({ speed: 200 });
    }

    render() {

        const cuxnaFinal = [];

        for (let [i, relpi] of cuxna.entries()) {
            i++;
            let drudi_a = relpi.drudi.substring(0, relpi.drudi.length - 1);
            let drudi_b = relpi.drudi.slice(-1);

            let betfu_a = relpi.betfu.substring(0, relpi.betfu.length - 1);
            let betfu_b = relpi.betfu.slice(-1);

            cuxnaFinal.push(
                <div className="relpi" key={i}>
                    <div className="front part part1">
                        <div className="raktu">{relpi.raktu}</div>
                        <div className="p2">
                            <div className="pair left">
                                <div className="ipa">{drudi_a}<em>{drudi_b}</em></div>
                            </div>
                            <div className="br"></div>
                            <div className="pair right">
                                <div className=" ipa">{betfu_a}<em>{betfu_b}</em></div>
                            </div>
                        </div>
                    </div>
                    <div className="back part part2">
                        <div className="pair left">
                            <div className="spell">{relpi.zulna}</div>
                            <div className="rus">{relpi.clira}</div>
                        </div>
                        <div className="br"></div>
                        <div className="pair right">
                            <div className="spell">{relpi.pritu}</div>
                            <div className="rus">{relpi.lastu}</div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="voksa">
                <section className="cuxna">
                    {cuxnaFinal}
                </section>
            </div>
        );
    }
}

export default Voksa;
