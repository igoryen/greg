import "../styles/uenba.scss";
import React from "react";
import Paloma from "../components/Paloma";
import items from "../data/uenba_ash.json";

class Uenba extends React.Component {
    // page for phonetic drilling

    constructor(props) {
        super(props);
        this.state = {
            lng: "lang1",
            targetSound: "æ",
        }
    }

    render() {
        return (
            <div className="uenba">
                <h3>Anglofor</h3>
                <h1>Drilling the sound /<span className="vowel_uenba">{this.state.targetSound}</span>/</h1>

                <div className="batke">
                    <button onClick={() => this.setState({ lng: 'lang1' })}>
                        Language 1
                    </button>

                    <button onClick={() => this.setState({ lng: 'lang2' })}>
                        Language 2
                    </button>
                </div>
                <Paloma bag={items} sound={this.state.targetSound} lang={this.state.lng} />
            </div>
        );
    }
}

export default Uenba;