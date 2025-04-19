import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ms/ms18.json";

class MS18 extends React.Component {

    render() {
        const lesson = {
            "student": "Mykola",
            "number": 18,
            "slug": "ms"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} />
            </div>
        );
    }
}

export default MS18;