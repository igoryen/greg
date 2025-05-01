import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/gk/gk05.json";

class GK05 extends React.Component {
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
            "student": "GK",
            "number": 5,
            "slug": "gk"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <div className="pijne">
                    <button onClick={() => { this.setLang('def1') }} >
                        Rus (1)
                    </button>

                    <button onClick={() => { this.setLang('def2') }} >
                        Ukr (2)
                    </button>
                </div>
                <Mathilda words={words} lang={this.state.lng} />
            </div>
        );
    }
}

export default GK05;