import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ss/ss35.json";

class SS35 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: "def1"
        }
    }
    setLang(val) {
        this.setState({ lng: val });
    }
    render() {
        const lesson = {
            "student": "Svetlana",
            "number": 35,
            "slug": "ss"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <div className="pijne hidden">
                    <button onClick={() => { this.setLang('def1') }} >`</button>
                    <button onClick={() => { this.setLang('def2') }} >,</button>
                </div>
                <Mathilda words={words} lang={this.state.lng} lesnum={lesson.number} />
            </div>
        );
    }
}

export default SS35;