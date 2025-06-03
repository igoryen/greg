import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import words from "../../data/ip/ip33.json";
import Mathilda from "../../components/Mathilda";

class IP33 extends React.Component {
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
            "student": "Ihor",
            "number": 33,
            "slug": "ip"
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

export default IP33;