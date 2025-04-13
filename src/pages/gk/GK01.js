import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/gk/gk01.json";

class GK01 extends React.Component {
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
            "student": "Tanyas",
            "number": 1,
            "slug": "gk"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <div className="pijne">
                    <button onClick={() => { this.setLang('def1') }} >
                        Language 1
                    </button>

                    <button onClick={() => { this.setLang('def2') }} >
                        Language 2
                    </button>
                </div>
                <Mathilda words={words} lang={this.state.lng} />
            </div>
        );
    }
}

export default GK01;