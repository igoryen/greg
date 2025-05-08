import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/as/as01.json";

class AS01 extends React.Component {

    render() {
        const lesson = {
            "student": "Andrey",
            "number": 1,
            "slug": "as"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <Mathilda words={words} lesnum={lesson.number} />
            </div>
        );
    }
}

export default AS01;