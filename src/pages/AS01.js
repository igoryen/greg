import "../styles/fc.scss";
import React from "react";
import Leon from "../components/Leon";
import Word from "../components/Word";
import words from "../data/as01.json";

class IP10 extends React.Component {
    componentDidMount() {
        window.$(".word").flip({ speed: 200 });
    }
    render() {
        const lesson = {
            "student": "Alex",
            "number": 1,
            "slug": "as"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Word words={words} />
            </div>
        );
    }
}

export default IP10;