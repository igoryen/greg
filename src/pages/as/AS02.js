import "../../styles/fc.scss";
import React from "react";
import Leon from "../../components/Leon";
import Mathilda from "../../components/Mathilda";
import words from "../../data/as/as02.json";

class AS02 extends React.Component {
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
            "student": "Andrey",
            "number": 2,
            "slug": "as"
        };

        return (
            <div>
                <Leon lesson={lesson} />
                <div className="pijne hidden">
                    <button onClick={() => { this.setLang('def1') }} >`</button>
                    <button onClick={() => { this.setLang('def2') }} >,</button>
                </div>
                <Mathilda words={words} lesnum={lesson.number} lang={this.state.lng} />
            </div>
        );
    }
}

export default AS02;