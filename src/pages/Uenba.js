import "../styles/uenba.scss";
import React from "react";
import Paloma from "../components/Paloma";
import items from "../data/uenba_ash.json";

class Uenba extends React.Component {
    // page for phonetic drilling
    render() {
        let theSound = "æ";
        return (
            <div className="uenba">
                <h3>Anglofor</h3>
                <h1>Drilling the sound /<span className="vowel_uenba">{theSound}</span>/</h1>

                <Paloma paloma={items} sound={theSound} />
            </div>
        );
    }
}

export default Uenba;