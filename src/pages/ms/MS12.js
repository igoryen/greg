import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ms/ms12.json";
import sentences from "../../data/ms/ms11s.json";
import Jufra from "../../components/Jufra";

class MS12 extends React.Component {

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

export default MS12;