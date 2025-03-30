import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";
import Mathilda from "../components/Mathilda";
import words from "../data/ms12.json";
import sentences from "../data/ms11s.json";
import Jufra from "../components/Jufra";

class MS11 extends React.Component {

    render() {
        const lesson = {
            "student": "Mykola",
            "number": 12,
            "slug": "ms"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />
                <Jufra jufra={sentences} />
            </div>
        );
    }
}

export default MS11;