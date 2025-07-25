import "../../../src/styles/pelli.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ik/ik01.json";

class IK01 extends React.Component {
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
            "student": "Ivan",
            "number": 1,
            "slug": "ik"
        };

        return (
            <div className="pelli">
                <div>
                    <Leon lesson={lesson} />

                    <div className="pijne hidden">
                        <button onClick={() => { this.setLang('def1') }} >`</button>
                        <button onClick={() => { this.setLang('def2') }} >,</button>
                    </div>

                    <Mathilda words={words} lang={this.state.lng} lesnum={lesson.number} />
                </div>
            </div>
        );
    }
}

export default IK01;