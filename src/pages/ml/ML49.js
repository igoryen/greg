import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/ml/ml49.json";

class ML49 extends React.Component {
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
            "student": "Maria",
            "number": 49,
            "slug": "ml"
        };

        return (
            <div>
                <Leon lesson={lesson} />

                <div className="pijne hidden">
                    <button onClick={() => { this.setLang('def1') }} >
                        (1)
                    </button>

                    <button onClick={() => { this.setLang('def2') }} >
                        (2)
                    </button>
                </div>

                <Mathilda words={words} lang={this.state.lng} lesnum={lesson.number} />
            </div>
        );
    }
}

export default ML49;